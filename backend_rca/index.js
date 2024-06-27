require('dotenv').config();
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require("path");
const fs = require("file-system");
const jwt = require("jsonwebtoken");
const port = process.env.PORT; 
const cookieParser = require("cookie-parser");
const Videos = require("./database_connection/models/schema/videos");
const ImageGallary = require("./database_connection/models/schema/imagegallary");
const Players = require("./database_connection/models/schema/players");
const News = require("./database_connection/models/schema/newandevents");
//accesing the database

const db = require("./database_connection/database");
const sending_email = require("./database_connection/models/schema/userprofile");
const User = require("./database_connection/models/schema/newmodel");
const { default: nodemon } = require("nodemon");

//now setting the middlewear

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(
  cors({
    origin: "https://royalcricketacademy.com/", // Change to your frontend origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Allow specified methods
    allowedHeaders: "Content-Type", // Allow specifided headers
  })
); 

app.get("/", (req, res) => {
  res.send("welcome to backend");
});

//sending the email to the user or to the main client

const nodemailer_send = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "utamsharma57@gmail.com",
    pass: "dbsq lvct gjep lowe",
  },
});

app.post("/api/send-email", async (req, res) => {
  try {
    const { email, firstname, message } = req.body;

    //saving the data to the mongodb

    const datasaved = new sending_email({
      email,
      firstname,
      message,
    });

    //saving the data to the database

    await datasaved.save();

    //now sending the email to the main client

    await nodemailer_send.sendMail({
      from: email, // Update with your sender email address
      to: "utamsharma57@gmail.com",
      subject: "New Registration Form Submitted",
      text: `A new registration form has been submitted:\n\n${JSON.stringify(
        req.body,
        null,
        2
      )}`,
    });
    res.status(200).json({ sucess: "message has sent sucessfully" });
  } catch (error) {
    console.log("error", error);
    res.status(500).send("Error");
  }
});

//getting the massage and fetching it the client in rect js

app.get("/message", async (req, res) => {
  try {
    const response = await sending_email.find();
    res.json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "failed to get news" });
  }
});

//deleting the massage

app.delete("/message/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const response = await sending_email.findByIdAndDelete(id);
    if (!response) {
      return res.status(404).json({ error: "Message not found" });
    }
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Message deletion failed" });
  }
});

//making the sign up methods
const uploadDirectory = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDirectory);
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

app.post("/api/users", upload.single("image"), async (req, res) => {
  try {
    const { firstName, lastName, email, phone, password, confirmPassword } =
      req.body;

    // Check if password matches confirmPassword
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user object
    const newUser = new User({
      firstName,
      lastName,
      email,
      phone,
      password,
      confirmPassword,

      image: {
        data: req.file ? fs.readFileSync(req.file.path) : null,
        contentType: req.file ? req.file.mimetype : null,
      },
    });

    const token = await newUser.generateAuthToken();
    console.log("the token part is : " + token);

    res.cookie("jwt", token, {
      expires: new Date(Date.now() + 600000),
      httpOnly: true,
    });

    //setting the token or storing the toekn in the localstorage for the authencation in the frontend in the react js
    // localStorage.setItem("token",token);

    console.log(`this is the token part ${req.cookies.jwt}`);

    await newUser.save();

    // Save user to database

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//making the login system in the backend node js

app.post("/user_login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate email and password input
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    // Find the user by email
    const user = await User.findOne({ email });

    // If user is not found or passwords don't match, return error
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Generate a JWT with user's id
    const token = jwt.sign(
      { userId: user.id },
      "thenameischanansharmaclassnepalsecondaryschoolthename", // Use environment variable for the secret
      { expiresIn: "1h" }
    );

    // Return success and token
    res.status(200).json({ message: "Success", token });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//sending the email to reset password
function isValidEmail(email) {
  // Implement your email validation logic here
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
const transporterrr = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "utamsharma57@gmail.com",
    pass: "dbsq lvct gjep lowe",
  },
});
app.post("/forgotpassword", (req, res) => {
  const { email } = req.body;

  // Validate email format
  if (!email || !isValidEmail(email)) {
    return res.status(400).send({ message: "Invalid email address" });
  }

  // Find user by email
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "Email not found" });
      }

      // Generate and store reset token securely
      const token = jwt.sign(
        { id: user._id },
        "thenameischanansharmaclassnepalsecondaryschoolthename",
        { expiresIn: "1d" }
      );

      // Construct reset password URL
      const resetPasswordURL = `http://royalcricketacademy.com/admin/Createpassword/${user._id}/${token}`;

      // Email options
      const mailOptions = {
        from: "utamsharma575757@gmail.com",
        to: email,
        subject: "Password Reset",
        text:
          `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n` +
          `Please click on the following link, or paste it into your browser to complete the process:\n\n` +
          resetPasswordURL +
          "\n\n" +
          `If you did not request this, please ignore this email and your password will remain unchanged.\n`,
      };

      // Send email
      transporterrr.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error(error);
          res.status(500).send("Failed to send email");
        } else {
          console.log("Email sent: " + info.response);
          res.status(200).send("Email sent successfully (if email exists)");
        }
      });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Internal server error");
    });
});

//making the forgot password

app.post("/NewPassword/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;

  try {
    // Verify the token
    const decoded = jwt.verify(
      token,
      "thenameischanansharmaclassnepalsecondaryschoolthename"
    );

    if (decoded.id !== id) {
      return res
        .status(400)
        .json({ message: "Token does not match the user ID" });
    }

    // Hash the new password
    const hash = await bcrypt.hash(password, 10);

    // Update the user's password
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { password: hash },
      { new: true }
    );

    if (updatedUser) {
      return res.status(200).json({ message: "Password updated successfully" });
    } else {
      return res.status(400).json({ message: "Error updating password" });
    }
  } catch (error) {
    console.error("Error updating password:", error);
    const errorMessage =
      error.name === "JsonWebTokenError"
        ? "Invalid or expired token"
        : "Failed to update password";
    return res.status(400).json({ message: errorMessage });
  }
});

//uploading the vidoes into the database and getting and deleting the videos with the api help
const storage_videos = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const uploading_videos = multer({ storage: storage_videos });

app.post("/uploading", uploading_videos.single("video"), async (req, res) => {
  try {
    const { title, description } = req.body;

    const videoUrl = req.file.path;
    const video = new Videos({
      title,
      description,
      videoUrl,
    });

    await video.save();
    res.status(201).json(video);
  } catch (error) {
    res.status(400).json({ message: "error sending the videos ", error });
  }
});

//gettng the vieos that are uploded at client server

app.get("/videos", async (req, res) => {
  try {
    const videos = await Videos.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(400).json({ message: "error getting the vidoes ", error });
  }
});

app.put("/videos_updating/:id", upload.single("video"), async (req, res) => {
  try {
    const { title, description } = req.body;
    let videoUrl = req.body.videoUrl;

    if (req.file) {
      videoUrl = req.file.path;
    }

    const video = await Videos.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        videoUrl,
      },
      { new: true }
    );

    res.json(video);
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

app.delete("/videos/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const video = await Videos.findByIdAndDelete(id);
    if (!video) return res.status(404).json({ message: "Video not found" });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: "Error deleting video", error });
  }
});

//making for the image gallary
//making for the image gallary
const storageImagegallary = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadImagegallary = multer({ storage: storageImagegallary });

// Routes
// Create operation: Upload a new image
app.post(
  "/Imagegallary",
  uploadImagegallary.fields([{ name: "image", maxCount: 1 }]),
  async (req, res) => {
    try {
      const { image } = req.files;
      if (!image) {
        return res.status(400).send("No image file uploaded");
      }

      const newImage = new ImageGallary({
        imageUrl: `/uploads/${image[0].filename}`,
      });

      const savedImage = await newImage.save();
      res.status(201).json(savedImage);
    } catch (error) {
      console.error("Error saving image:", error);
      res.status(500).send("Failed to save image");
    }
  }
);

// Read operation: Get all images
app.get("/Imagegallary", async (req, res) => {
  try {
    const images = await ImageGallary.find();
    res.json(images);
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).send("Failed to fetch images");
  }
});

// Delete operation: Delete an image by ID
app.delete("/Imagegallary/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const image = await ImageGallary.findById(id);
    if (!image) {
      return res.status(404).send("Image not found");
    }

    await ImageGallary.findByIdAndDelete(id);
    res.send("Image deleted successfully");
  } catch (error) {
    console.error("Error deleting image:", error);
    res.status(500).send("Failed to delete image");
  }
});

//upaditng the players details
const storageImagegallarydynamic = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadImagegallarydynamic = multer({
  storage: storageImagegallarydynamic,
});

app.post(
  "/api/players",
  uploadImagegallarydynamic.single("image"),
  async (req, res) => {
    const {
      names,
      role,
      game_played,
      catch_taken,
      total_awards,
      wickets_taken,
      run_score,
      best_figure,
      skills,
      rank,
      description,
    } = req.body;
    const imageUrl = req.file ? req.file.path : null;

    if (
      !names ||
      !role ||
      !game_played ||
      !catch_taken ||
      !total_awards ||
      !wickets_taken ||
      !run_score ||
      !best_figure ||
      !skills ||
      !description ||
      !imageUrl ||
      !rank
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    try {
      const newPlayer = new Players({
        names,
        role,
        game_played,
        catch_taken,
        total_awards,
        wickets_taken,
        run_score,
        best_figure,
        skills,
        rank,
        description,
        imageUrl,
      });

      const player = await newPlayer.save();
      res.status(201).json(player);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
);

// Get all players
app.get("/api/players", async (req, res) => {
  try {
    const players = await Players.find();
    res.json(players);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get player by ID
app.get("/api/players/:id", async (req, res) => {
  try {
    const player = await Players.findById(req.params.id);
    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }
    res.json(player);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a player
app.put("/api/players/:id", upload.single("image"), async (req, res) => {
  const {
    names,
    role,
    game_played,
    catch_taken,
    total_awards,
    wickets_taken,
    run_score,
    rank,
    best_figure,
    skills,
    description,
  } = req.body;
  const imageUrl = req.file ? req.file.path : null;

  try {
    let player = await Players.findById(req.params.id);
    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    player.names = names;
    player.role = role;
    player.game_played = game_played;
    player.catch_taken = catch_taken;
    player.total_awards = total_awards;
    player.wickets_taken = wickets_taken;
    player.run_score = run_score;
    player.best_figure = best_figure;
    player.skills = skills;
    player.rank = rank;
    player.description = description;
    if (imageUrl) {
      player.imageUrl = imageUrl;
    }

    player = await player.save();
    res.json(player);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a player
app.delete("/api/players/:id", async (req, res) => {
  try {
    const player = await Players.findByIdAndDelete(req.params.id);
    if (!player) {
      return res.status(404).json({ message: "Player not found" });
    }

    res.json({ message: "Player deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//uploading the news and events in the royal crciket academy

const storagee = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const uploadss = multer({ storage: storagee });

// Middleware to serve static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.post("/events_change", uploadss.single("image"), async (req, res) => {
  try {
    const { title1, paragraph } = req.body;

    // Validate required fields (title1 and paragraph)
    if (!title1 || !paragraph) {
      return res
        .status(400)
        .json({ success: false, error: "Title and paragraph are required" });
    }

    const { filename } = req.file;
    const imageurl = "/uploads/" + filename;

    const newImage = new News({ title1, paragraph, url: imageurl });

    // Save with error handling
    await newImage.save();
    res.json({ success: true, message: "Image uploaded successfully" });
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Fetch events
app.get("/events_change", async (req, res) => {
  try {
    const events = await News.find();
    res.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).send("Failed to fetch events");
  }
});

// Delete event
app.delete("/events_change/:eventId", async (req, res) => {
  const { eventId } = req.params;
  try {
    const deletedEvent = await News.findByIdAndDelete(eventId);
    if (!deletedEvent) {
      return res.status(404).json({ success: false, error: "Event not found" });
    }
    res.status(204).end(); // No content response for successful deletion
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).send("Failed to delete event");
  }
});

app.put("/events_change/:id", uploadss.single("image"), async (req, res) => {
  try {
    const { id } = req.params;
    const { title1, paragraph } = req.body;
    const updateData = { title1, paragraph };

    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    const updatedEvent = await News.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json({ message: "Event updated successfully", event: updatedEvent });
  } catch (error) {
    res.status(500).json({ error: "Error updating event" });
  }
});

//creating the io connection with the react js and the node js and the chatting application with client and the serve

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

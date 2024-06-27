import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ppdynamic.css";
import ResponsiveDrawer from "../drawer";

const Players_profile_dynamic = () => {
  const [names, setNames] = useState("");
  const [role, setRole] = useState("");
  const [game_played, setGamePlayed] = useState("");
  const [catch_taken, setCatchTaken] = useState("");
  const [total_awards, setTotalAwards] = useState("");
  const [wickets_taken, setWicketsTaken] = useState("");
  const [run_score, setRunScore] = useState("");
  const [best_figure, setBestFigure] = useState("");
  const [skills, setSkills] = useState("");
  const [rank, setrank] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  const [editingImage, setEditingImage] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Fetch images from backend when component mounts
  useEffect(() => {
    fetchImages();
  }, []);

  // Function to fetch images
  const fetchImages = async () => {
    try {
      const response = await axios.get("https://backendroyal.nepalmodelsecondaryschool.com/api/players");
      setImages(response.data.reverse());
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  // Function to handle file input change
  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!names || !role || !game_played || !catch_taken || !total_awards || !wickets_taken || !run_score || !best_figure || !skills || !description || !image && !editingImage || !rank) {
      console.error("All fields are required.");
      return;
    }

    const formData = new FormData();
    formData.append("names", names);
    formData.append("role", role);
    formData.append("game_played", game_played);
    formData.append("catch_taken", catch_taken);
    formData.append("total_awards", total_awards);
    formData.append("wickets_taken", wickets_taken);
    formData.append("run_score", run_score);
    formData.append("best_figure", best_figure);
    formData.append("skills", skills);
    formData.append("rank", rank);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    try {
      let response;
      if (editingImage) {
        response = await axios.put(
          `https://backendroyal.nepalmodelsecondaryschool.com/api/players/${editingImage._id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (progressEvent) => {
              setUploadProgress(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              );
            },
          }
        );
        setEditingImage(null);
      } else {
        response = await axios.post(
          "https://backendroyal.nepalmodelsecondaryschool.com/api/players",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (progressEvent) => {
              setUploadProgress(
                Math.round((progressEvent.loaded * 100) / progressEvent.total)
              );
            },
          }
        );
      }
      console.log(response.data);
      fetchImages();
      setUploadProgress(0);
      setNames("");
      setRole("");
      setGamePlayed("");
      setCatchTaken("");
      setTotalAwards("");
      setWicketsTaken("");
      setRunScore("");
      setBestFigure("");
      setrank("");
      setSkills("");
      setDescription("");
      setImage(null);
    } catch (error) {
      console.error("Error uploading/updating image:", error);
    }
  };

  // Function to handle editing an image
  const handleEdit = (image) => {
    setNames(image.names);
    setRole(image.role);
    setGamePlayed(image.game_played);
    setCatchTaken(image.catch_taken);
    setTotalAwards(image.total_awards);
    setWicketsTaken(image.wickets_taken);
    setRunScore(image.run_score);
    setBestFigure(image.best_figure);
    setSkills(image.skills);
    setrank(image.rank);
    setDescription(image.description);
    setEditingImage(image);
    setImage(null); // Clear the image file input
  };

  // Function to handle deleting an image
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://backendroyal.nepalmodelsecondaryschool.com/api/players/${id}`);
      fetchImages();
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="fo">
        <h2>Enter Players details....</h2>
        <input
          type="text"
          value={names}
          onChange={(e) => setNames(e.target.value)}
          placeholder="name"
          required
        />
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role"
          required
        />
        <input
          type="text"
          value={game_played}
          onChange={(e) => setGamePlayed(e.target.value)}
          placeholder="total game played"
          required
        />
        <input
          type="text"
          value={catch_taken}
          onChange={(e) => setCatchTaken(e.target.value)}
          placeholder="total catch taken"
          required
        />
        <input
          type="text"
          value={total_awards}
          onChange={(e) => setTotalAwards(e.target.value)}
          placeholder="total awards"
          required
        />
        <input
          type="text"
          value={wickets_taken}
          onChange={(e) => setWicketsTaken(e.target.value)}
          placeholder="total wickets taken"
          required
        />
        <input
          type="text"
          value={run_score}
          onChange={(e) => setRunScore(e.target.value)}
          placeholder="total run score"
          required
        />
        <input
          type="text"
          value={best_figure}
          onChange={(e) => setBestFigure(e.target.value)}
          placeholder="Best figure"
          required
        />
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          placeholder="Skills"
          required
        />
          <input
          type="text"
          value={rank}
          onChange={(e) => setrank(e.target.value)}
          placeholder="ranking"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="comments from coach to their players"
          required
        ></textarea>
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          required={!editingImage}
        />
        <button type="submit">
          {editingImage ? "Update Image" : "Upload Image"}
        </button>
      </form>

      {uploadProgress > 0 && (
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}

      <div className="getting">
        {images.map((image) => (
          <div key={image._id}>
            <h3>name : {image.names}</h3>
            <p>role : {image.role}</p>
            <p>game played : {image.game_played}</p>
            <p>catch_taken : {image.catch_taken}</p>
            <p>total_awards : {image.total_awards}</p>
            <p>wickets_taken :  {image.wickets_taken}</p>
            <p>run score : {image.run_score}</p>
            <p>ranking : {image.rank}</p>
            <p>best_figure :  {image.best_figure}</p>
            <p>skill : {image.skills}</p>
            <p>comments from coach : {image.description}</p>
            <img
              src={`https://backendroyal.nepalmodelsecondaryschool.com/${image.imageUrl}`}
              alt={image.names}
            />
            <button onClick={() => handleEdit(image)}>Edit</button>
            <button onClick={() => handleDelete(image._id)}>Delete</button>
          </div>
        ))}
      </div>
      <ResponsiveDrawer />
    </div>
  );
};

export default Players_profile_dynamic;

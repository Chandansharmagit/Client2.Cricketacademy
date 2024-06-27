

// const User = mongoose.model('User', userSchema);

// module.exports = User;
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

// Define the user schema
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,

        unique: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    },

    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});


//creating the another schema for the events change by the client in the website without code access
// Event model (Mongoose schema)








// Hash the password before saving the user
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});






userSchema.methods.generateAuthToken = async function () {
    try {
        //consoling with id to get user id information
        // console.log(this._id);
        //converting the given token into the string foe cancatination
        const token = jwt.sign({ _id: this._id.toString() }, "thenameischanansharmaclassnepalsecondaryschoolthename");
        //concating the tokens with token
        this.tokens = this.tokens.concat({ token })
        //saving the concatded token
        await this.save();
        //reternin the tokens with token
        return token;

    } catch (error) {


        console.log("the error part " + error);
    }
}

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;




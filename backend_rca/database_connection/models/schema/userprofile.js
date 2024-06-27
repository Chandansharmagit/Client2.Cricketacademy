const mongoose = require('mongoose');

const userScema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        // unique:true,

    },
    firstname:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true,

    },
})

const sending_email = mongoose.model("Sending_email",userScema);
module.exports = sending_email;
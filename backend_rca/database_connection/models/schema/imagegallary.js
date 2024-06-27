const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    imageUrl: String,

   




 
});




const ImageGallary = mongoose.model('ImageGallary', imageSchema);
module.exports = ImageGallary;

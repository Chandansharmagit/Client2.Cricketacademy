const mongoose = require('mongoose');

const news_and_eventsSchema = new mongoose.Schema({
    title1: {
        type: String,
        required: true, // Enforce non-empty title
        unique: true, // Ensure unique titles (optional, adjust as needed)
    },
    paragraph: {
        type: String,
        required: true, // Enforce non-empty paragraph
    },
    url: {
        type: String,
        required: true, // Ensure image URL is present
    },



});


const news_and_events = mongoose.model('news_and_events', news_and_eventsSchema);
module.exports = news_and_events;



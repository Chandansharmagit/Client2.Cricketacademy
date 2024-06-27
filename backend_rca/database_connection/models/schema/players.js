// models/Player.js
const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  names: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  game_played: {
    type: String,
    required: true,
  },
  catch_taken: {
    type: String,
    required: true,
  },
  total_awards: {
    type: String,
    required: true,
  },
  wickets_taken: {
    type: String,
    required: true,
  },
  run_score: {
    type: String,
    required: true,
  },
  best_figure: {
    type: String,
    required: true,
  },
  skills: {
    type: String,
    required: true,
  },
  rank: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});
const Players = mongoose.model("Player",PlayerSchema);

module.exports = Players;

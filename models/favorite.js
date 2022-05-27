const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FavoriteSchema = new Schema({
  name: String,
  image: String,
  description: String,
  price: Number,
  rating: String,
});

module.exports = mongoose.model("Favorite", FavoriteSchema);

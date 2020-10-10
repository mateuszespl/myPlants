const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let Sneaker = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  discount: {
    type: Boolean,
  },
  price: {
    type: Number,
  },
  discountPrice: {
    type: Number,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  subCategory: {
    type: String,
  },
});

module.exports = mongoose.model("sneakers", Sneaker);

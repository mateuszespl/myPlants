const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let Sneaker = new Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model("sneakers", Sneaker);

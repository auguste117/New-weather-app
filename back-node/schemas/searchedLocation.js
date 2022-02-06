const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const location = new Schema({
  value: {
    type: String,
  },
});

module.exports = mongoose.model("location", location);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const weather = new Schema({
  cloudiness: {
    type: Number,
  },
  dewPoint: {
    type: Number,
  },
  feelsLikeTemp: {
    type: Number,
  },
  precipProb: {
    type: Number,
  },
  precipRate: {
    type: Number,
  },
  pressure: {
    type: Number,
  },
  relHumidity: {
    type: Number,
  },
  symbol: {
    type: String,
  },
  symbolPhrase: {
    type: String,
  },
  temperature: {
    type: Number,
  },
  thunderProb: {
    type: Number,
  },
  time: {
    type: String,
  },
  uvIndex: {
    type: Number,
  },
  visibility: {
    type: Number,
  },
  windDir: {
    type: Number,
  },
  windDirString: {
    type: String,
  },
  windGust: {
    type: Number,
  },
  windSpeed: {
    type: Number,
  },
});

module.exports = mongoose.model("weather", weather);

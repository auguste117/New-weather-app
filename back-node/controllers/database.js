const locationDatabase = require("../schemas/searchedLocation");
const weatherDatabase = require("../schemas/currentWeather");

module.exports = {
  createLocation: async (req, res) => {
    const value = req.params.value;
    console.log(value);
    const location = new locationDatabase();
    location.value = value;

    await location.save();

    res.send({ message: "location saved" });
  },
  currentWeather: async (req, res) => {
    res.send({ message: "Registration ok" });
  },
};

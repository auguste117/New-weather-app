const locationDatabase = require("../schemas/searchedLocation");
const weatherDatabase = require("../schemas/currentWeather");

module.exports = {
  createLocation: async (req, res) => {
    const value = req.params.value;
    const location = new locationDatabase();
    location.value = value;

    await location.save();

    res.send({ message: "location saved" });
  },
  currentWeather: async (req, res) => {
      const { currentWeather } = req.body;
        const weather = new weatherDatabase();
    await weather.save();

    res.send({ message: "weather saved" });
  },
};

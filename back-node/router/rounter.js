const express = require("express");
const router = express.Router();
const controller = require("../controllers/database");

router.get("/input/:value", controller.createLocation);
router.post("/weather", controller.currentWeather);

module.exports = router;

const express = require("express");
const weatherData = require("./weatherData");
const router = express.Router();

router.use(express.urlencoded({ extended: true }));

router.post("/today", (req, res) => {
  weatherData(req.body.lat, req.body.lon, (weatherArray) => {
    console.log("콜백: ", weatherArray);
    return res.send(weatherArray);
  });
});

module.exports = router;

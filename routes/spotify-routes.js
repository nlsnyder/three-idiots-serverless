const express = require("express");
const { body } = require("express-validator");
const spotifyController = require("../controllers/spotify-controller");

const router = express.Router();

router.get("/getClientParams", spotifyController.getSpotifyClientParams);

router.post(
  "/accessToken",
  body("code").not().isEmpty().withMessage("Invalid access code."),
  spotifyController.getSpotifyAccessToken
);

router.post(
  "/shows",
  body("accessToken")
    .not()
    .isEmpty()
    .withMessage(
      "Unable to grab the latest podcast episodes from Spotify. Invalid access token."
    ),
  spotifyController.getSpotifyShows
);

module.exports = router;

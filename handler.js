require("dotenv").config();

const serverless = require("serverless-http");
const express = require("express");
const cors = require("cors");
const spotifyRoutes = require("./routes/spotify-routes");
const contactRoutes = require("./routes/contact-routes");

const app = express();

app.use(express.json());

app.use("/api/spotify", spotifyRoutes);

app.use("/api/contact", contactRoutes);

app.use(cors());

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);

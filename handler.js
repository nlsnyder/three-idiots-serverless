require("dotenv").config();

const serverless = require("serverless-http");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const spotifyRoutes = require("./routes/spotify-routes");
const contactRoutes = require("./routes/contact-routes");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use("/api/spotify", spotifyRoutes);

app.use("/api/contact", contactRoutes);

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);

const mongoose = require("mongoose");

// dotenv already loaded in server.js, but adding this makes it robust
require("dotenv").config();

const conn = mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => {
    console.log("Database Connected");
    return db;
  })
  .catch((err) => {
    console.log("Connection Error: " + err);
  });

module.exports = conn;
const mongoose = require('mongoose');

// Use the MONGO_URI from config.env, or the local one if testing on your laptop
const db_url = process.env.MONGO_URI || "mongodb://localhost:27017/expense-tracker";

const con = mongoose.connect(db_url)
    .then(db => {
        console.log("Database Connected Successfully");
        return db;
    }).catch(err => {
        console.log("Database Connection Error: " + err);
    });

module.exports = con;
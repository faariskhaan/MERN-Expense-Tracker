const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

// 1. Load the secret map (config.env)
require('dotenv').config({ path: "./config.env" });

// 2. Set the Port (Use the one from the map, or 5000)
const port = process.env.PORT || 5000;

// 3. Use Middlewares
app.use(cors());
app.use(express.json());

// 4. Connect to the Database
// This calls the code Shahmeer is fixing in db/connection.js
const con = require('./db/connection');

// 5. Using Routes
app.use(require('./routes/route'));

// 6. API Status Check
app.get('/', function (req, res) {
    res.send('Budget Buddy API is running perfectly!');
});

// 7. Start the Server
con.then(db => {
    if (!db) return process.exit(1);
    
    app.listen(port, function (err) {
        if (err) { 
            console.error("Server Error: " + err); 
        } else {
            console.log(`Success: Server is running on: http://localhost:${port}`);
        }
    });

    app.on('error', err => console.log("Failed to Connect with HTTP Server: " + err));

}).catch(error => {
    console.log("Connection failed! Check if your MongoDB is running. Error: " + error);
});
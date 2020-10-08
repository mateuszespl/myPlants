require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const connectDB = require("./db");
const sneakers = require("./models/Sneaker");

// Server setup
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening @${port}`));

// DB setup
connectDB();

// Logger middleware
app.use(morgan("dev"));

// Cors middleware
app.use(cors());

// Routing
app.get("/", (req, res) => sneakers.find((err, data) => res.json(data)));

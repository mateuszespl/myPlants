require("dotenv").config();
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => `Server is listening @${port}`);
app.get("/", (req, res) => res.send("Start"));

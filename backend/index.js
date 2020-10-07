require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is listening @${port}`));
app.use(morgan("dev"));
app.get("/", (req, res) => res.send("<h1>Hej</h1>"));

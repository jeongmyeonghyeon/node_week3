const express = require("express");
const app = express();

const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRouter = require("./routes/users");

app.use("/users", userRouter);

// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT);

console.log(`Server listening at ${PORT}`);

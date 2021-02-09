// Add code to models to complete the model
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
});

app.use(express.static("public"));

// Routes
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);


// Start the server
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT
const url = process.env.ATLAS_URI.toString();

app.use(cors());
app.use(express.json());

// connect to mongoose
//mongoose.connect("mongodb+srv://clairemcgonigle:SpainRecipeBook2023@recipebook.3zsmpvn.mongodb.net/recipe_book");
mongoose.connect(url);

// require route
app.use("/", require("./routes"));


app.listen(port, function() {
    console.log(`Server is running on port: ${port}`);
})

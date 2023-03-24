const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
    name: String,
    recipe: String,
})

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
    name: String,
    recipe: String,
    recipeSpanish: String,
    ingredients: String,
    ingredientsSpanish: String,
    recipeInfo: String,
})

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;
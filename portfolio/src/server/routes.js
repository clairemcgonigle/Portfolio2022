const express = require("express");
const router = express.Router();
const Recipe = require("./models");


// Gets all recipes in DB
router.route("/recipe_book").get((req, res) =>  {
    Recipe.find()
        .then(foundRecipes => res.json(foundRecipes));
});

module.exports = router;
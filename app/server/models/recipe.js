const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schmea({
  recipeName: {
    type: String,
    require: true,
    trim: true,
    lowercase: true,
  },
  ingredients: [
    {
      ingredientName: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
      },
      quantity: {
        type: Number,
        require: true,
      },
    },
  ],
  recipeImage: {
    type: String,
    require: true,
    trim: true,
    lowercase: true,
  },
});

const Recipe = mongoose.model("recipes", RecipeSchema);

module.exports = Recipe;

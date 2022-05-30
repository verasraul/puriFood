const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  recipeName: {
    type: String,
    require: true,
    trim: true,
    lowercase: true,
  },
  ingredients: [
    {
      quantity: {
        type: String,
        require: true,
      },
      ingredientName: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
      },
    },
  ],
  recipeImage: {
    type: String,
    require: false,
    trim: true,
    lowercase: true,
  },
});

const Recipe = mongoose.model("recipes", RecipeSchema);

module.exports = Recipe;

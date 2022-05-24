const db = require("../db/index");
const RecipeModel = require("../models/recipe");

db.on("error", console.error.bind(console, "MongoDB Connection Error"));

const main = async () => {
  const initialRecipes = [
    {
      recipeName: "Bacon, Egg, and Avocado Burgers",
      ingredients: [
        {
          quantity: "3 tablespoons",
          ingredientName: "salted butter, softened",
        },
        {
          quantity: "4",
          ingredientName: "hamburger buns, split",
        },
        {
          quantity: "8 slices",
          ingredientName: "thick-cut bacon",
        },

        {
          quantity: "1 ½ pounds",
          ingredientName: "lean ground beef",
        },
      ],
      recipeImage:
        "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8131746.jpg&w=595&h=398&c=sc&poi=face&q=60",
    },
  ];
  await RecipeModel.insertMany(initialRecipes);
  console.log("Submitted Recipes");
};

const run = async () => {
  await main();
  db.close;
};
run();

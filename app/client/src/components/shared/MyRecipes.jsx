import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Layout from "./Layout";


function MyRecipes() {
  const [currentRecipeData, setCurrentRecipeData] = useState([]);

  const fetchLocalRecipe = async () => {
    try {
      const response = await axios("http://localhost:3001/recipes");
      setCurrentRecipeData(response.data.MyRecipes);
      console.log(response.data.MyRecipes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLocalRecipe();
  }, []);

  return (
    <Layout>
      <div className="my-recipes-container">
        <button>
          <NavLink to="/recipes/create-recipe">Create New Recipe</NavLink>
        </button>
        {currentRecipeData.map((data, key) => {
          return (
            <div className="listed-recipe" key={key}>
              <h2>{data.recipeName}</h2>
              <img src={data.recipeImage} alt="" />
              <div className="ingredients">
                <ul>
                  {data.ingredients.map((ingredient, key) => {
                    return (
                      <li key={key} className="ingredient">
                        {ingredient.quantity} {ingredient.ingredientName}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default MyRecipes;
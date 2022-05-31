import Layout from "./Layout";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RecipeForm() {
  const navigate = useNavigate();
  const [createdRecipe, setCreatedRecipe] = useState(null);
  const [recipeData, setRecipeData] = useState({
    recipeName: "",
    recipeImage: "",
    ingredients: [
      {
        quantity: "",
        ingredientName: "",
      },
    ],
  });

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };
    const editedRecipe = Object.assign(recipeData, updatedField);
    setRecipeData(editedRecipe);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: `http://localhost:3001/recipes/create-recipe`,
      method: "POST",
      data: recipeData,
    })
      .then((res) => setCreatedRecipe(res.data.recipeData))
      .catch(console.error);
  };

  useEffect(() => {
    if (createdRecipe) {
      return navigate("/recipes");
    }
  }, [createdRecipe, navigate]);

  return (
    <Layout>
      <div>
        <form className="recipe-form" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Enter Recipe Title"
            name="recipeName"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="Link A URL Image"
            name="recipeImage"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="quantity"
            name="quantity"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="ingredientName"
            name="ingredientName"
            onChange={(e) => handleChange(e)}
          />
        </form>
      </div>
    </Layout>
  );
};

export default RecipeForm;
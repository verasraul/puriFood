import "./App.css";
import Footer from "./components/Footer";
import { useState } from 'react';
import axios from "axios";
import RecipeTile from "./components/RecipeTile";


function App() {
  const [query, setQuery] = useState(" ");
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, setHealthLabel] = useState("vegetarian");
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_EDAMAM_RECIPE_ID_KEY}&app_key=${process.env.REACT_APP_EDAMAM_RECIPE_API_KEY}&health=${healthLabel}`

  const getRecipeInfo = async() => {
    let response = await axios.get(url);
    setRecipes(response.data.hits);
    console.log(response.data.hits);
  };

  const onSubmit = (e) => {
    // will prevent page from reloading when submiting the form/query
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <div className="app">
      <h1 onClick={ getRecipeInfo }>
        <u>PuriFood</u>
      </h1>

      <form className="app-searchForm" onSubmit={ onSubmit }>
        <input className="app-searchInput"
        type="text" 
        placeholder="Type the ingredient"
        autoComplete="Off"
        value={query}
        onChange={ (e) => {setQuery(e.target.value)}}
        />
        <select className="app-healthLabels">
          <option value="vegan" onClick={ () => { setHealthLabel("vegan")}}>Vegan</option>
          <option value="vegan" onClick={ () => { setHealthLabel("vegetarian")}}>Vegetarian</option>
          <option value="vegan" onClick={ () => { setHealthLabel("low-sugar")}}>Low-Sugar</option>
          <option value="vegan" onClick={ () => { setHealthLabel("dairy-free")}}>Dairy-Free</option>
          <option value="vegan" onClick={ () => { setHealthLabel("immuno-supportive")}}>Immuno-Supportive</option>
          <option value="vegan" onClick={ () => { setHealthLabel("gluten-free")}}>Gluten-Free</option>
        </select>
        <input className="app-submit" type="submit" value="Get Recipe"  />
      </form>
      
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
     

      <Footer/>
    </div>
  );
}

export default App;

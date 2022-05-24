import "./App.css";
import Footer from "./components/Footer";
import { useState } from 'react';
import axios from "axios";


function App() {
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=ginger&app_id=${process.env.REACT_APP_EDAMAM_RECIPE_ID_KEY}&app_key=${process.env.REACT_APP_EDAMAM_RECIPE_API_KEY}`
  const [recipes, setRecipes] = useState([]);

  const getRecipeInfo = async() => {
    let response = await axios.get(url);
    setRecipes(response.data.hits);
    console.log(response.data.hits);
  };

  return (
    <div className="app">
      <h1 onClick={ getRecipeInfo }>
        <u>PuriFood</u>
      </h1>

      <div className="app-searchForm">
        <input className="app-searchInput"
        type="text" 
        placeholder="Type the ingredient"
        autoComplete="Off" 
        />
        <select className="app-healthLabels">
          <option value="vegan">Vegan</option>
        </select>
        <input className="app-submit" type="submit" value="Get Recipe"  />
      </div>
      <Footer/>
    </div>
  );
}

export default App;

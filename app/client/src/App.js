import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/shared/Footer";
import GetNewRecipes from "./components/routes/Home";
import Home from "./components/routes/Home";
import Items from "./components/routes/Items";
import ItemCreate from "./components/routes/ItemCreate";
import Item from "./components/routes/Item";
import ItemEdit from "./components/routes/ItemEdit";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import { faBowlRice } from "@fortawesome/free-solid-svg-icons";


function App() {
  const location = useLocation();

  return (
    <div className="app">
       <h3>{ location.state ? location.state.msg: null }</h3>

       <Routes>
         <Route path="/" element={ <GetNewRecipes /> } />
         <Route path="/recipes" element={<MyRecipes />} />
         <Route path="/recipes/create-recipe" element={<RecipeForm />} />
         {/* <Route path="saved-recipes" element={ <Items /> } />
         <Route path="create-recipes" element={ <ItemCreate /> } />
         <Route path="saved-recipes/:id" element={ <Item />} />
         <Route path="saved-recipes/:id/edit" element={ <ItemEdit /> } /> */}
        
       </Routes>
    </div>
  );
}

export default App;

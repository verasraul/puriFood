import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MyRecipes } from "../pages/MyRecipes";
import { RecipeForm } from "../components/RecipeForm";
export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/recipes" element={<MyRecipes />}></Route>
      <Route path="/recipes/create-recipe" element={<RecipeForm />}></Route>
    </Routes>
  );
};

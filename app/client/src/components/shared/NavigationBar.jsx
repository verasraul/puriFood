import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <header className="header-container">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recipes">My Recipes</NavLink>
      <NavLink to="/recipes/create-recipe">Create New Recipe</NavLink>
    </header>
  );
}

export default NavigationBar;

import { NavLink } from "react-router-dom";
export const NavigationBar = () => {
  return (
    <header className="header-container">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/recipes">My Recipes</NavLink>
    </header>
  );
};

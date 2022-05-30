import { Navigate, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <NavLink to="/">Search Recipes</NavLink>
            <NavLink to="/create-recipe">Create New Recipe</NavLink>
            <NavLink to="/saved-recipes">Saved Recipes</NavLink>
        </nav>
    )
}

export default Nav;
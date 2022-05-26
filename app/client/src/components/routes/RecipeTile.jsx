import React from "react";
import "../../styling.css";

function RecipeTile({recipe}) {
  return (
    // create a filter to display images with certain extensions and not recipes with missing images
    // recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && ( 
    <div className="recipeTile">
      <a href={recipe["recipe"]["url"]}>
      <img className="recipeTile-image" 
      src={recipe["recipe"]["image"]} 
      alt="title-image" 
      />
      </a>
      <p className="recipeTile-name">{ recipe["recipe"]["label"] }</p>
      <p className="recipeTile-recipes">
        {recipe["recipe"]["ingredients"].map((ingredient) => {
          return <p className="recipeTile-ingredients">{ingredient.text}</p>
        })}
        </p>
    </div>
    // )
  )
}

export default RecipeTile;
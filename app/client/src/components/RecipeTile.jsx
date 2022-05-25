import "../styling.css"
import React from 'react'

function RecipeTile({recipe}) {
  return (
    <div className='recipeTile'>
      <img className='recipeTile-image' src={recipe['recipe']['image']} alt='title-image' />
      <p className='recipeTile-name'>{ recipe["recipe"]["label"] }</p>
    </div>
  );
}

export default RecipeTile
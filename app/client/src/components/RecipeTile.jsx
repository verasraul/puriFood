import React from 'react'

function RecipeTile({recipe}) {
  return (
    <div className='recipeTile'>
      <p>{ recipe["recipe"]["label"] }</p>
      <img src={recipe['recipe']['image']} alt='title-image' />
    </div>
  )
}

export default RecipeTile
import React from 'react'

function RecipeTile({recipe}) {
  return (
    <div>
      <p>{ recipe["recipe"]["label"] }</p>
    </div>
  )
}

export default RecipeTile
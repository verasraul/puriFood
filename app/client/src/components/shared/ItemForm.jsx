import { Link } from "react-router-dom";


function ItemForm({ item, handleSubmit, handleChange, cancelPath }) {
  return (
    <div className="item-form">ItemForm>

    <form onSubmit={ (e) => handleSubmit(e) }>
        <input
        placeholder="recipe namet"
        defaultValue={item.recipeName}
        name="Recipe Name"
        onChange={ (e) => handleChange(e) } />

        <input
        placeholder="item to input"
        defaultValue={item["ingredients"]["ingredientName"]}
        name="name"
        onChange={ (e) => handleChange(e) } /> 

        <input
        placeholder="item to input"
        defaultValue={item["ingredients"]["quantity"]}
        name="name"
        onChange={ (e) => handleChange(e) } />

        <div className="item-form-submit-button">
            <button type="item-form-submit">Submit</button>
            <Link to={cancelPath}>
                <button>Cancel</button>
            </Link>
        </div>
    </form>
    </div>
  )
}

export default ItemForm
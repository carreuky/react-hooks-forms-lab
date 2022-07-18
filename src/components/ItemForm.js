import React, {useState} from "react";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit}) {
const [myNewValue, setmyNewValue]=useState('')
const [mySelected, setmySelected]=useState('Produce')



  function handleChangeValue(event){
    setmyNewValue(event.target.value)
  }

  function handleChangeCategory(event){
    setmySelected(event.target.value)
  }
  function addItem (event){
    event.preventDefault()
    const newItem = {
     id: uuid(), // the `uuid` library can be used to generate a unique id
     name: myNewValue,
     category: mySelected}
     onItemFormSubmit(newItem)
     console.log(newItem)

    }
  
  
  return (
    <form className="NewItem" onSubmit={addItem}>
      <label>
        Name:
        <input onChange={handleChangeValue} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={handleChangeCategory} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button  type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

import { useState } from 'react';
import Axios from "axios";
import './index.css';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const Recipes = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const {recipeObj} = props;
  return (
    <>
      <Dialog open = {show} className='dialog_back'>
        <DialogTitle><h1>{recipeObj.label}</h1></DialogTitle>
        <DialogContent>
        <h2>Ingredients</h2>
          <ul>
            {recipeObj.ingredients.map((ingredirntObj) => (
              <li>{ingredirntObj.text}</li>
            ))}
          </ul>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}>Cancle</button>
        </DialogActions>
      </Dialog>
      <div className="recipe">
              <img className='image' src = {recipeObj.image} alt='food'/>
              <span className='recipe_name'>{recipeObj.label}</span>
              <button className='Ingredients' onClick={() => setShow(true)} >Ingredients</button>
      </div>
    </>
  )
}

function App() {
  
  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);

  const fetchRecipe = async(searchString) => {
    const response = await Axios.get(`
      https://api.edamam.com/search?q=${searchString}&app_id=b5dadc33&app_key=22d61e6e21fb274a96959f19b309604d`
    );
    updateRecipeList(response.data.hits)
  }

  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    const timeout = setTimeout(() => fetchRecipe(event.target.value), 1000);
    updateTimeoutId(timeout);
  }

  return (
    <>
      <div className='container'>
        <div className='header'>
          <div className="app_name">
            <i className="fa-solid fa-utensils"></i>
            Recipe App
          </div>
          <div className="search">
            <input className='search_input' placeholder='Search...' onChange={onTextChange} />
          </div>
        </div>
        <div className="recipe_container">
          {recipeList.length ? ( recipeList.map((recipeObj) => (
          <Recipes recipeObj = {recipeObj.recipe} />
          ))
          ) : (
            <img className='err_img' src="https://cdn.dribbble.com/users/1012566/screenshots/4187820/topic-2.jpg" alt='Match Not Found'/>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

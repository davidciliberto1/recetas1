import React, { useEffect, useState, Fragment } from 'react';
import Recipe from "./componentes/recipe";
import RecipePreview from './componentes/recipePreview';
import './App.css';

const App = () => {
  const APP_ID = "f464e962";
  const APP_KEY = "0e0832c3def882ff9cef9561fc8268ab";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('rice');
  const [selectedRecipe, setSelectedRecipe] = useState(undefined);

  useEffect(() => {
    getRecipes();
  }, [query]);


  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };
  const onRecipeSelect = (e, recipe) => {
    console.log(recipe);
    e.preventDefault();
    setSelectedRecipe(recipe);
  }

  return (
    <>
      <div className="container">
        <div className="container-card">
          <div className="containerForm">
            <form
              onSubmit={getSearch}
              className="search-form">
              <input
                className="search-bar"
                type="text"
                value={search}
                onChange={updateSearch}
              />
              <button
                className="search-button"
                type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="recipe-stuff">
        <div id='leftPanel' className='left'>
          {recipes.map(recipe => (
            <RecipePreview
              key={recipe.recipe.uri}
              recipe={recipe}
              onButtonClick={onRecipeSelect}
            />
          ))}
        </div>
        <div className='right'>

          {
            !!selectedRecipe &&
            <Recipe
              key={selectedRecipe.recipe.uri}
              title={selectedRecipe.recipe.label}
              calories={selectedRecipe.recipe.calories}
              image={selectedRecipe.recipe.image}
              ingredients={selectedRecipe.recipe.ingredients}
              /> 
          }

        </div>
      </div>
    </>
  );
};

export default App;

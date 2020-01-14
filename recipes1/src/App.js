import React, { useEffect, useState, Fragment } from 'react';
import Recipe from "./componentes/recipe";

import './App.css';

const App = () => {
  const APP_ID = "f464e962";
  const APP_KEY = "0e0832c3def882ff9cef9561fc8268ab";
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState ("");
  const [query, setQuery] = useState ('');

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

  return (
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
        
        <div className="recipe-stuff">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.calories}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
        </div>
        </div>
      </div>
    </div>

  );
};

export default App;

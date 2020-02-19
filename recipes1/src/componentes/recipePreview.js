import React from "react";


const RecipePreview = ({onButtonClick, recipe }) => {
    return (
        <div>
            <img height='50px' src={recipe.recipe.image} alt="" />
            <button onClick={(event) => onButtonClick(event, recipe)} >{recipe.recipe.label}</button>
            
            
        </div>
    );
}

export default RecipePreview;
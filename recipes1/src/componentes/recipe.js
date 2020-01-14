import React from "react";


const Recipe = ({key,title,calories,image,ingredients}) => {
    return(
    <div>
        <h1>{title}</h1>
        <p>{calories}</p>
        <img src={image} alt="" />
        {ingredients.map(ingredient => (
                <p>{ingredient.text}</p>
            ))}
    </div>
    );
}

export default Recipe;
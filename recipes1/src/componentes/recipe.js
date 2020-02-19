import React from "react";


const Recipe = ({title,calories,image,ingredients}) => {
    return(
    <div>
        <h1>{title}</h1>
        <p>{calories}</p>
        <img src={image} alt="" />
        {ingredients.map((ingredient, index) => (
                <p key= {index}>{ingredient.text}</p>
            ))}
    </div>
    );
}

export default Recipe;
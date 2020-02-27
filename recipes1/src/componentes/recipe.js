import React from "react";


const Recipe = ({title,calories,image,ingredients}) => {
    return(
    <div>
        <h1>{title}</h1>
        <p>Calories: {calories}</p>
        <div className='card'>
        <img src={image} alt="" />
        </div>
        <div className='ingredientes'>
        {ingredients.map((ingredient, index) => (
                <p key= {index}>{ingredient.text}</p>
            ))}
            </div>
    </div>
    );
}

export default Recipe;
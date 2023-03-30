import React from 'react';
import './Meal.css'

const Meal = ({meal, addToFavorite}) => {
    const {strMealThumb, strMeal, strArea, strYoutube} = meal;
    
    return (
        <div className='meal'>
            <img src={strMealThumb} alt="" />
            <h3>Name: {strMeal}</h3>
            <p>Origin: {strArea}</p>
            <a href={strYoutube} target='_blank'>Recipe</a><br />
            <button onClick={() => addToFavorite(strMealThumb, strMeal)} className='btnAddFavorite' >Add to Favorite</button>

        </div>
    );
};

export default Meal;
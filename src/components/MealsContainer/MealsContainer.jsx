import React, { useEffect, useState } from 'react';
import FavoriteList from '../FavoriteList/FavoriteList';
import Meal from '../Meal/Meal';
import './MealsContainer.css'

const MealsContainer = () => {
    const [meals, setMeals] = useState([]);

    useEffect( () =>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
        .then( res => res.json())
        .then(data => setMeals(data.meals))
    }, [])

    const [favorite, setFavorite] = useState([])

    const addToFavorite = (img, name) =>{
        let newFavorite
        if(favorite.includes(name)){
            alert('Meal Already added');
        }
        else{
            newFavorite = [...favorite, name];
            setFavorite(newFavorite)
        }
        
    }

    console.log(favorite);

    return (
        <div className='mealsContainer'>
            <div className='meals'>
               {
                    meals.map( meal => <Meal
                        key={meal.idMeal}
                        meal={meal}
                        addToFavorite={addToFavorite}
                    ></Meal>)
               }
            </div>
            <div className='favoriteList'>
                <FavoriteList
                    favorite={favorite}
                ></FavoriteList>
            </div>
        </div>
    );
};

export default MealsContainer;
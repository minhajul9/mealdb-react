import React from 'react';
import './FavoriteList.css'

const FavoriteList = (props) => {
    const {favorite} = props
    return (
        <div className='favorite'>
            <h3>Favorite List</h3>
            <ol>
                {
                    favorite.map( item => <li>{item}</li>)
                }
            </ol>
        </div>
    );
};

export default FavoriteList;
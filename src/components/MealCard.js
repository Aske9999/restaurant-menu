import React from 'react';
import {Link} from "react-router-dom";

const MealCard = ({meal}) => {
    return (
        <div className="col-3">
            <div className="meal-card">
                <Link className="meal-link" to={`/meals/${meal.idMeal}`}>{meal.strMeal}</Link>
                <img className="meal-pic" src={meal.strMealThumb} alt=""/>
            </div>
        </div>
    );
};

export default MealCard;
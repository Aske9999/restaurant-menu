import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import MealCard from "./MealCard";

const FromIngs = () => {
    const {ing} = useParams()
    const [meals, setMeals] = useState([])
    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ing}`)
            .then(({data}) => setMeals(data.meals))
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <div className="ingredient">
                        <img className="ingredient-pic" src={`http://www.themealdb.com/images/ingredients/${ing}.png`} alt=""/>
                        <h3 className="ingredient-pic-title">{ing}</h3>
                    </div>
                </div>
                <div className="col-6">
                    <div className="row">
                        {
                            meals.map(item => {
                                return (
                                    <div className="col-3">
                                        <div className="meal-card-fromIngs">
                                            <img className="meal-pic-fromIngs" src={item.strMealThumb} alt=""/>
                                            <Link className="meal-link" to={`/meals/${item.idMeal}`}>{item.strMeal}</Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FromIngs;
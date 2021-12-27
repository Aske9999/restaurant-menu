import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const Main = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        axios('https://www.themealdb.com/api/json/v2/1/randomselection.php')
            .then(({data}) => setMeals(data.meals))
    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    meals.map(item => {
                        return (
                            <div className="col-3" key={item.idMeal}>
                                <div className="meal-card">
                                    <Link className="meal-link" to={`/meals/${item.idMeal}`}>
                                        <img className="meal-pic" src={item.strMealThumb} alt=""/>
                                        <h3>{item.strMeal}</h3>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Main;
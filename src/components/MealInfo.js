import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const MealInfo = () => {
    const {id} = useParams()
    const [meal, setMeal] = useState({})

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(({data}) => {
                const mealIngs = {...data.meals[0]}
                const ings = []
                for (let i = 1; i <= 20; i++) {
                    if (mealIngs[`strIngredient${i}`]) {
                        ings.push(mealIngs[`strIngredient${i}`])
                    }
                }
                mealIngs.ings = ings
                setMeal(mealIngs)
            })
    }, [id])
    return (
        <div className="meal-card" key={meal.id}>
            <div className="row">
                <div className="col-6">
                    <h2>{meal.strMeal}</h2>
                    <div>{meal.strArea}</div>
                    <img className="meal-link-pic" src={meal.strMealThumb} alt=""/>
                </div>
                <div className="col-6">
                    <div className="row">
                        {
                            meal.ings?.map((item, idx) => {
                                return (
                                    <div className="col-3">
                                        <Link className="meal-ingredient-link" to={`/ingredients/${item}`} key={idx}>
                                            <img src={`http://www.themealdb.com/images/ingredients/${item}-Small.png`} alt=""/>
                                            <div>{item}</div>
                                        </Link>
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

export default MealInfo;
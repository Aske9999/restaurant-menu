import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import MealCard from "./MealCard";

const Search = () => {
    const {name} = useParams()
    const [meal, setMeal] = useState([])


    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
            .then(({data}) => setMeal(data.meals))
    }, [name])

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        meal
                        ? meal.map(item => {
                            return (
                                <MealCard meal={item}/>
                            )
                        }) : <h1 className="text-danger">404 Error</h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;
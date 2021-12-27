import React from 'react';
import Header from "./components/Header";
import {Navigate, Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import MealInfo from "./components/MealInfo";
import Search from "./components/Search";
import FromIngs from "./components/FromIngs";


const App = () => {

    return (
        <div className="body">
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/meals/:id" element={<MealInfo/>}/>
                <Route path="/search/:name" element={<Search/>}/>
                <Route path="/ingredients/:ing" element={<FromIngs/>}/>
                <Route path="*" element={<Navigate to='/'/>}/>
            </Routes>
        </div>
    );
};

export default App;
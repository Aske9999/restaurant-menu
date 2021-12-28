import React, {useState} from 'react';
import {useNavigate, NavLink} from "react-router-dom";
import logo from "../images/hat2.png"


const Header = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const changeName = (e) => {
        setName(e.target.value.trim())
    }
    const search = () => {
        navigate(`/search/${name}`)
    }
    const enter = (e) => {
        if (e.key === 'Enter'){
            navigate(`/search/${name}`)
        }
    }

    return (
        <header className="header">
            <div className="container">
                <div className="flex-container">
                    <img className="hat" src={logo} alt=""/>
                    <h2 className="main-title">INTERCONTINENTAL RESTAURANT</h2>
                    <div className="header">
                        <NavLink className="main-links" to="/">Main</NavLink>
                        <input onKeyDown={enter} className="name-input" onChange={changeName} type="text" placeholder="meal name"/>
                        <button disabled={!name} onClick={search} className="link" type="button">Search</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
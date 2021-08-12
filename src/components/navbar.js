import React from "react";
import {Link} from "react-router-dom";
import "../css/navbar.css";




export default function NavBar(props) {



    return (
        <div className="bar">
            <div className="home">
                <Link to="/" className="link">Home</Link>
            </div>
            <div className="about">
                <Link to="/about" className="link">About</Link>
            </div>
        </div>
    )

}



















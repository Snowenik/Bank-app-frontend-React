import React from "react";
import {Link} from "react-router-dom";
import "../css/user.css";





export default function ActionBar(props) {


    return (
        <div className="actionBar">
            <Link to="/user/konto" className="link">Konto</Link>
            <Link to="/user/transakcje" className="link">Transakcje</Link>
            <Link to="/user/przelewy" className="link">Przelewy</Link>
            <Link to="/user/ustawienia" className="link">Ustawienia</Link>
        </div>
    )


}






















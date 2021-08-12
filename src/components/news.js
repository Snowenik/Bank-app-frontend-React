import React from "react";
import {Link} from "react-router-dom";
import "../css/home.css";




export default function News(props) {

    const data = [];
    data.push("Bank kupil nowe ");
    data.push("Klienci maja teraz");
    data.push("Nowe atrakcyjne oferty");
    data.push("Wzrost pozycji banku");
    

    return (
        <div className="newsDiv">
            <div className="newsHeader">
                <p>Ostatnie informacje</p>
            </div>
            <div className="newsContainer">
                <ul>
                    {data.map(item => <li key={item}><Link to="/" className="link">{item}</Link></li>)}
                </ul>
            </div>
        </div>
    )
}
























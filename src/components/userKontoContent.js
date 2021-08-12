import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import visa from "../imgs/visa.png";
import "../css/user.css";



export default function Content(props) {

    
    const [user, setUser] = useState({})


    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user")));
    }, [])




    return (
        <div className="accountContainer">
            <div>
                <p>Posiadany przez ciebie rachunek bankowy</p>
                <p>{user.accountNumber}</p>
                <p className="specialP">Typ karty: Visa</p>
                <button type="button"><Link to="/user/konto/zarzadzaj" className="link">Zarzadzaj kontem bankowym</Link></button>
            </div>
            <div>
                <p>Twoj obecny stan konta wynosi</p>
                <p>{user.amount}zl</p>
            </div>
            <div>
                <img src={visa}/>
            </div>
        </div>
    )
}




















import React from "react";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import "../css/user.css";




export default function Links(props) {

    const history = useHistory();

    return (
        // <>
        //     <div>
        //         <Link to="/" className="link">Strona glowna</Link>
        //     </div>
        //     <div>
        //         <Link to="/about" className="link">O nas</Link>
        //     </div>
        //     <div>
        //         <Link to="/" className="link">Obsluga klienta</Link>
        //     </div>
        //     {/* <div>
        //         <Link to="/" className="link">Kontakt</Link>
        //     </div> */}
        //     <div>
        //         <Link to="/user" className="link">User</Link>
        //     </div>
        //     <div className="actions">
        //         <Link to="/create" className="link">Wyloguj</Link>
        //     </div>
        // </>


        <>
            <div className="headerFirst">
                <div>
                    <Link to="/user/home" className="link">Strona glowna</Link>
                </div>
                <div>
                    <Link to="/user/about" className="link">O nas</Link>
                </div>
                <div>
                    <Link to="/user/support" className="link">Obsluga klienta</Link>
                </div>
                <div>
                    <Link to="/user" className="link">Panel uzytkownika</Link>
                </div>
            </div>
            <div className="headerSecond">
                <div>
                    <button type="button" onClick={() => {localStorage.clear(); history.push("/")}}>
                        <Link to="/create" className="link">Wyloguj</Link>                        
                    </button>
                </div>
            </div>
        </>


    )
}



























































import React from "react";
import {Link} from "react-router-dom";
import "../css/home.css";




export default function Links(props) {
    return (
        // <>
        //     {/* <div>
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
        //         <Link to="/create" className="link">Utworz nowe konto</Link>
        //     </div>
        //     <div>
        //         <Link to="/" className="link">Zaloguj</Link>
        //     </div> */}

        // </>

        <>
            <div className="headerFirst">
                <div>
                    <Link to="/" className="link">Strona glowna</Link>
                </div>
                <div>
                    <Link to="/about" className="link">O nas</Link>
                </div>
                <div>
                    <Link to="/support" className="link">Obsluga klienta</Link>
                </div>
            </div>            
            <div className="headerSecond">
                <div>
                    <Link to="/create" className="link">Utworz nowe konto</Link>
                </div>
                <div>
                    <Link to="/zaloguj" className="link">Zaloguj</Link>
                </div>
            </div>
        </>


    )
}



























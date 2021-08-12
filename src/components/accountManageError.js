import React from "react";
import "../css/user.css";
import error from "../imgs/error.png";



export default function ModalError(props) {



    return (
        props.showError ? (
        <div className="manageModalError">
            <div className="manageModalErrorContent">
                <div className="errorContainer">
                    <img src={error} className="error"/>
                </div>
                <p>{props.message}</p>
                <div>
                    <button type="button" onClick={() => props.setError(false)}>Ok</button>
                </div>
            </div>
        </div>
        ) : null        
    )


}




































import React from "react";
import "../css/modal.css";
import error from "../imgs/error.png";



export default function ModalError(props) {


    return (
        props.showError ? (
        <div className="genericModal">
            <div className="genericModalContainer">
                <div className="errorContainer">
                    <img src={error} className="error"/>
                </div>
                <p>{props.message}</p>
                <button type="button" onClick={() => props.setError(false)}>Ok</button>
            </div>
        </div>
        ) : null
    )


}






























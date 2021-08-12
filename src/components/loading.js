import React from "react";
import "../css/loading.css";
import spinner from "../imgs/loading06.gif";



export default function Loading(props) {


    return (
        <div className="loadingContainer">
            <div className="spinnerContainer">
                <img src={spinner} className="spinner" />
            </div>
        </div>
    )
}






















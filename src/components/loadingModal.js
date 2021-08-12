import React from "react";
import "../css/loadingModal.css";
import spinner from "../imgs/loading03.gif";



export default function LoadingModal(props) {


    return (
        <div className="loadingModal">
            <div className="loadingModalContent">
                <div className="loadingModalSpinnerContainer">
                    <img src={spinner} className="loadingModalSpinner"/>
                </div>
            </div>
        </div>
    )
}



















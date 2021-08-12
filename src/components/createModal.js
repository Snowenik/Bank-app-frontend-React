import React from "react";
import greenTick from "../imgs/greenTick.png";
import "../css/createAccount.css";




export default function Modal(props) {


    return (
        props.showModal ? (
        <div className="modal">
            <div className="modalContent">
                <div className="greenTickContainer">
                    <img src={greenTick} className="greenTick"/>
                </div>
                <p>{props.message}</p>
                <div className="modalOkButton">
                    <button type="button" onClick={() => props.setShowModal(false)}>Ok</button>
                </div>
            </div>
        </div>
        ) : null
    )
}





















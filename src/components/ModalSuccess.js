import React from "react";
import "../css/modal.css";
import greenTick from "../imgs/greenTick.png";



export default function ModalSuccess(props) {


    return (
        props.showSuccess ? (
        <div className="genericModal">
            <div className="genericModalContainer">
                <div className="greenTickContainer">
                    <img src={greenTick} className="greenTick"/>
                </div>
                <p>{props.message}</p>
                <button type="button" onClick={() => props.setSuccess(false)}>Ok</button>
            </div>
        </div>
        ) : null
    )

}






































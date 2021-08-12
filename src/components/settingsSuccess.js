import React from "react";
import "../css/settings.css";
import greenTick from "../imgs/greenTick.png";



export default function ModalSuccess(props) {




    return (
        props.showSuccess ? (
        <div className="modalSuccess">
            <div className="modalSuccessContent">
                <div className="greenTickContainer">
                    <img src={greenTick} className="greenTick"/>
                </div>
                <p>{props.message}</p>
                <button type="button" onClick={() => props.setModalSuccess(false)}>Ok</button>
            </div>
        </div>
        ) : null
    )


}




































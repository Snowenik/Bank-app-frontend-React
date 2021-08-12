import React from "react";
import "../css/transfer.css";
import greenTick from "../imgs/greenTick.png";



export default function ModalSuccess(props) {


    return (
        props.showSuccess ? (
        <div className="modalSuccess">
            <div className="modalSuccessContent">
                <div className="greenTickContainer">
                    <img src={greenTick} className="greenTick"/>
                </div>
                <p>Twoj przelew zostal zrealizowany pomyslnie</p>
                <div>
                    <button type="button" onClick={() => props.setSuccess(false)}>Ok</button>
                </div>
            </div>
        </div>
        ) : null
    )
}



































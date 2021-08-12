import React from "react";
import "../css/user.css";
import greenTick from "../imgs/greenTick.png";




export default function ModalSuccess(props) {



    return (
        props.showSuccess ? (
        <div className="manageModalSuccess">
            <div className="manageModalSuccessContent">
                <div className="greenTickContainer">
                    <img src={greenTick} className="greenTick"/>
                </div>
                <p>{props.message}</p>
                <div>
                    <button type="button" onClick={() => props.setSuccess(false)}>Ok</button>
                </div>
            </div>
        </div>
        ) : null
    )


}







































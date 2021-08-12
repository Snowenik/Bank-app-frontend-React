import React from "react";
import imgOne from "../imgs/01.jpg";
import imgTwo from "../imgs/02.webp";
import imgThree from "../imgs/03.jpg";
import "../css/home.css";



export default function Images(props) {
    return (
        <div className="imgDiv">
            <div className="fadein">
                <img id="f3" src={imgOne}/>
                <img id="f2" src={imgTwo}/>
                <img id="f1" src={imgThree}/>
            </div>
        </div>
    )
}

























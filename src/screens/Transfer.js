import React from "react";
import "../css/transfer.css";
import Header from "../components/userHeader";
import Images from "../components/images";
import News from "../components/userNews";
import ActionBar from "../components/userActionBar";
import Content from "../components/transferContent";




export default function Transfer(props) {


    return (
        <div>
            <Header/>
            <Images/>
            <News/>
            <ActionBar/>
            <Content/>
        </div>
    )
}




























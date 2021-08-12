import React from "react";
import "../css/user.css";
import Header from "../components/userHeader";
import Images from "../components/images";
import News from "../components/userNews";
import ContentArea from "../components/userContentArea";
import ActionBar from "../components/userActionBar";




export default function User(props) {
    return (
        <div>
            <Header/>
            <Images/>
            <News/>
            <ActionBar/>
            <ContentArea/>
        </div>
    )
}
























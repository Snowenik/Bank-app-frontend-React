import React from "react";
import Header from "../components/userHomeHeader";
import Images from "../components/images";
import News from "../components/news";
import ContentArea from "../components/homeContentArea";




export default function UserHome(props) {
    return (
        <div>
            <Header/>
            <Images/>
            <News/>
            <ContentArea/>
        </div>
    )
}





























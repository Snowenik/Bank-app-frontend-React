import React from 'react';
import "../css/home.css";
import Header from "../components/homeHeader";
import Images from "../components/images";
import News from "../components/news";
import ContentArea from "../components/homeContentArea";




export default function Home(props) {
    return (
        <div>
            <Header/>
            <Images/>
            <News/>
            <ContentArea/>
        </div>
    )
}








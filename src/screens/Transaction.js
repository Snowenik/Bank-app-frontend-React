import React from "react";
import "../css/transaction.css";
import Header from "../components/userHeader";
import Images from "../components/images";
import News from "../components/userNews";
import ActionBar from "../components/userActionBar";
import Content from "../components/transactionContent";



export default function Transaction(props) {


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
























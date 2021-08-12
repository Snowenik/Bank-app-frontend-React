import React from "react";
import "../css/user.css";
import Header from "../components/userHeader";
import Images from "../components/images";
import News from "../components/userNews";
import ActionBar from "../components/userActionBar";
import Content from "../components/accountManageContent";





export default function AccountManage(props) {


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




















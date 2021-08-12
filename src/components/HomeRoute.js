import React from "react";
import {Route, Redirect} from "react-router-dom";




const HomeRoute = ({component: Component, to, ...rest}) => {


    return (
        <Route {...rest}>
            {localStorage.getItem("jwt") && localStorage.getItem("loggedIn")} ? (
                <Redirect to={to}/>
            ) : <Component/>
        </Route>
    )
}


export default HomeRoute;




















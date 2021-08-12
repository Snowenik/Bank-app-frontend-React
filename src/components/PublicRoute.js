import React from "react";
import {Route, Redirect} from "react-router-dom";






const PublicRoute = ({component: Component, to, ...rest}) => {


    console.log("Public jwt: " + localStorage.getItem("jwt"))

    return (
        <Route {...rest}>
            {localStorage.getItem("jwt") ? (
                <Redirect to={to}/>
            ) : <Component/>
            }
        </Route>
    )
}



export default PublicRoute;




























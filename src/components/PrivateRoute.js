import React from "react";
import {Route, Redirect} from "react-router-dom";




const PrivateRoute = ({component: Component, to, ...rest}) => {


    console.log("Private jwt: " + localStorage.getItem("jwt"))

    return (
        <Route {...rest}>
            {localStorage.getItem("jwt") ? (
                <Component/>
            ) : <Redirect to={to}/>
            }
        </Route>
    )
}


export default PrivateRoute;


















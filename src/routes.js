import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Home from "./Container/Home"
import Order from "./Container/Order"

function Routes() {
    return (



        <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/Order" component={Order} />
        </Router>





    )

}
export default Routes
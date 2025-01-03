import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewContact from "./pages/NewContact";
import EditContact from "./pages/EditContact";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route parth="/new" component={NewContact} />
            <Route parth="/edit/:id" component={EditContact} />
        </Switch>
    );
}

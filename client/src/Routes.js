import React from "react";
import { Route, Switch } from "react-router-dom";

import FruitsList from "./components/FruitsList";
import VegetablesList from "./components/VegetablesList";

import AppliedRoute from "./components/AppliedRoute";

export default ({ childProps }) =>
    <Switch>
        <AppliedRoute path="/fruits" exact component={FruitsList}/>
        <AppliedRoute path="/vegetables" exact component={VegetablesList}/>
    </Switch>;
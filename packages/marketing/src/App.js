import React from 'react';
import {
    Router,
    Switch,
    Route,
} from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Landing from './components/Landing'
import Pricing from "./components/Pricing";

const generateClassname = createGenerateClassName({
    productionPrefix: 'ma'
})

export default ({ history }) => {
    return (
        <div>
            <StylesProvider generateClassname={generateClassname}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} />
                        <Route path="" component={Landing} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
};
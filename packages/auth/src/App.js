import React from 'react';
import {
    Router,
    Switch,
    Route,
} from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Signup from './components/Signup'
import Signin from './components/Signin'

const generateClassname = createGenerateClassName({
    productionPrefix: 'au'
})

export default ({ history }) => {
    return (
        <div>
            <StylesProvider generateClassname={generateClassname}>
                <Router history={history}>
                    <Switch>
                        <Route path="/auth/signin/" component={Signin} />
                        <Route path="/auth/signup/" component={Signup} />
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    );
};
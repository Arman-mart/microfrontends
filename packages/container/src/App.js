import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Progress from './components/Progress'
import Header from './components/Header'

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'))

const generateClassname = createGenerateClassName({
    productionPrefix: 'co'
})


export default () => {
    return (
      <BrowserRouter>
         <StylesProvider generateClassName={generateClassname}>
            <div>
               <Header />
                <Suspense fallback={<Progress />}>
                   <Switch>
                       <Route path="/auth" component={AuthLazy} />
                       <Route path="/" component={MarketingLazy} />
                   </Switch>
                </Suspense>
            </div>
         </StylesProvider>
     </BrowserRouter>
    )
}
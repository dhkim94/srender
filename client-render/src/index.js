import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, HashRouter, Switch} from "react-router-dom";
// import {syncHistoryWithStore} from "react-router-redux";
import store from "./commons/Store";
import Layout1 from "./containers/Layout1";
import PLogin from "./pages/PLogin";

// const history = syncHistoryWithStore(hashHistory, store);

render(
    <Provider store={store}>
        <HashRouter>
            <Layout1>
                <Switch>
            {/*<Route path="/" component={Layout1}>*/}
                <Route path="login" component={PLogin}/>
            {/*</Route>*/}
                </Switch>
            </Layout1>
        </HashRouter>
    </Provider>,
    document.getElementById("root")
);

console.log('---here');
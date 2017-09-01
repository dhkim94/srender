import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import store from "./commons/Store";
import Layout1 from "./containers/Layout1";
import PLogin from "./pages/PLogin";
import PLogin2 from "./pages/PLogin2";
import PLoginSub from "./pages/PLoginSub";
import "./less/core.less";

const history = syncHistoryWithStore(hashHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Layout1}>
                <Route path="login">
                    <IndexRoute component={PLogin}/>
                    <Route path=":id" component={PLoginSub}/>
                </Route>
                <Route path="login2" component={PLogin2} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById("root")
);

console.log('----process.env', process.env);
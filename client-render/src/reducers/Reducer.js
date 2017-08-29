import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import common from "./CommonReducer";

const reducer = combineReducers({
    common,
    routing: routerReducer
});

export default reducer;
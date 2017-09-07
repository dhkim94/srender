import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
// import common from "./CommonReducer";
// import values from "../commons/Values";
// import initialState from "../commons/InitialState";
import {common} from "../modules/Commons";


const reducer = combineReducers({
    common,
    routing: routerReducer
});

export default reducer;


// const reducer = handleActions({
//     [values.AT_CHG_USER_ID]: (state, action) => ({
//         userId: action.payload.userId
//     })
// }, initialState.common);
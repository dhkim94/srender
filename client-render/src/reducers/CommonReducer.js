import initialState from "../commons/InitialState";
import {handleActions} from "redux-actions";

// const common = (state = initialState.common, action) => {
//     switch (action.type) {
//
//         default:
//             return state;
//     }
// };
//
// export default common;



export const common = handleActions({
    AT_CHG_USER_ID: (state, action) => ({
        userId: action.payload.userId
    })
}, initialState.common);
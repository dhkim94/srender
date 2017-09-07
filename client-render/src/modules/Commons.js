import {createAction, handleActions} from "redux-actions";

const CHG_USER_ID = "commons/CHG_USER_ID";

const initialState = {
    userId: "abc"
};

export const changeUserId = createAction(CHG_USER_ID);

export const common = handleActions({
    [CHG_USER_ID]: (state, action) => ({
        userId: action.payload.userId
    })
}, initialState);

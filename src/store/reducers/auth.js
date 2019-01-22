import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    accessedPage: false
};

const authStart = (state, action) => {
    return updateObject(state, {accessedPage: true});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        default: 
            return state;
    }
};

export default reducer;
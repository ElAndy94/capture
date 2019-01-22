import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    accessedPage: false
};

const authStart = (state, action) => {
    console.log('hi');
    return updateObject(state, {accessedPage: true});
};

setTimeout(function(){ console.log(initialState.accessedPage); }, 3000);

const reducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        default: 
            return state;
    }
};

export default reducer;
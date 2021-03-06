// import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const auth = () => {
    return dispatch => {
        dispatch(authStart());
    };
};
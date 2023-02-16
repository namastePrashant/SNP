import {
    USER_PASSWORD_UPDATE_REQUEST,
    USER_PASSWORD_UPDATE_REQUEST_SUCCESS,
    USER_PASSWORD_UPDATE_REQUEST_FAILURE,
    USER_PASSWORD_UPDATE_CLEAN_REQUEST,
} from '../constants/actionTypes';

const INITIAL_STATE = {
    payload: [],
    loading: false,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const userPasswordUpdateReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case USER_PASSWORD_UPDATE_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case USER_PASSWORD_UPDATE_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case USER_PASSWORD_UPDATE_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case USER_PASSWORD_UPDATE_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });

        default:
            return state;
    }
};

export default userPasswordUpdateReducer;

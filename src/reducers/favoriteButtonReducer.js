import {
    FAVORITE_REQUEST,
    FAVORITE_REQUEST_SUCCESS,
    FAVORITE_REQUEST_FAILURE,
    FAVORITE_CLEAN_REQUEST,
} from '../constants/actionTypes';

const INITIAL_STATE = {
    payload: [],
    loading: false,
    id:undefined,
    errors: {},
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const favoriteButtonReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case FAVORITE_REQUEST:
            return{
                ...state,
                loading: true,
                id:action.id
            };

        case FAVORITE_REQUEST_SUCCESS:
            return Object.assign({}, state, {
                payload: action.data,
                loading: false,
                errors: {},
            });

        case FAVORITE_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case FAVORITE_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],
                errors: {},
                loading: false,
            });

        default:
            return state;
    }
};

export default favoriteButtonReducer;
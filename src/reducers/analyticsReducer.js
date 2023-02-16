import {
    ANALYTICS_FETCH_REQUEST,
    ANALYTICS_FETCH_REQUEST_SUCCESS,
    ANALYTICS_FETCH_REQUEST_FAILURE,
} from '../constants/actionTypes';

const initState = {
    payload: [],
    loading: false,
    errors: {},
};

const analyticsReducer = (state=initState, action)=>{

    switch(action.type){
        case ANALYTICS_FETCH_REQUEST:
            return {
                ...state,
                loading:true,
            }
        case ANALYTICS_FETCH_REQUEST_SUCCESS:            
            return {
                ...state,
                payload:action.data,
                loading:false,
                errors:{},
            }
        case ANALYTICS_FETCH_REQUEST_FAILURE:
            return {
                ...state,                
                loading:false,
                errors:action.errors,
            }
        default:
            return state;
    }
}

export default analyticsReducer;
import {
    advertisementFetchRequest,
    advertisementFetchRequestSuccess,
    advertisementFetchRequestFailure,
    advertisementFetchByLocation,
} from '../actions/advertisementAction';

import { fetch } from '../utils/httpUtil';


export const fetchAdvertisements = () => {
    return async dispatch => {

        dispatch(advertisementFetchRequest());
        try {
            const response = await fetch('api/v1/advertisements');
            if (response.data.success === true) {
                dispatch(advertisementFetchRequestSuccess(response.data.data.advertisement));
            } else {
                // TODO
            }
        } catch (error) {
            return dispatch(advertisementFetchRequestFailure(error));
        }
    };
};

export const fetchAdvertisementByLocation = (formData) =>{
    return async dispatch =>{
        dispatch(advertisementFetchRequest());
        try{
            const response = await fetch('api/v1/advertisements/bylocation/',formData);
            if(response.data.success === true) dispatch(advertisementFetchByLocation(response.data.data));
        }
        catch (error) {
            return dispatch(advertisementFetchRequestFailure(error));
        }
    }
}
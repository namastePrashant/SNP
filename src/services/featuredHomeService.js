import { featuredFetchRequest, featuredFetchRequestSuccess, featuredFetchRequestFailure } from '../actions/featuredAction';

import { fetch } from '../utils/httpUtil'


export const fetchFeatured = () => {
    return async dispatch => {
        
        dispatch(featuredFetchRequest());
       
        try {           
            const response = await fetch('api/v1/featureds/songs/featured_songs');            
            
            if (response.data.success === true) {

                dispatch(featuredFetchRequestSuccess(response.data.data.featureds));

            } else {
                // TODO
            }
        } catch (error) {
            return dispatch(featuredFetchRequestFailure(error.response.data));
        }
    }
};
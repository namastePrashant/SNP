import { favoriteButtonFetchRequest, favoriteButtonFetchRequestFailure, favoriteButtonFetchRequestSuccess } from '../actions/favoriteButtonAction';
import { store } from '../utils/httpUtil';


export const fetchFavoriteButton = (formData, id) => {
    
    return async dispatch => {
        dispatch(favoriteButtonFetchRequest(id));

        try {
            const response = await store(`api/v1/users/set_favourite_song`, formData)
            
            if (response.data.success === true) {                
                dispatch(favoriteButtonFetchRequestSuccess(response.data.data.favourite_song));                
            } else {
                // TODO
            }
        } catch (error) {

            return dispatch(favoriteButtonFetchRequestFailure(error));
        }
    };
};
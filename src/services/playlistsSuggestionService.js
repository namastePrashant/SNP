import {
    playlistsSuggestionFetchRequest, 
    playlistsSuggestionFetchRequestSuccess, 
    playlistsSuggestionFetchRequestFailure,
} from '../actions/playlistsSuggestionAction';

import { fetch } from '../utils/httpUtil';


export const fetchPlaylistsSuggestion= () => {
    return async dispatch => {
    
        dispatch(playlistsSuggestionFetchRequest());
        try {           
           
            const response = await fetch('api/v1/playlists/playlists_suggestion');

        
            if (response.data.success === true) {
                               
                dispatch(playlistsSuggestionFetchRequestSuccess(response.data.data));
            } else {
                // TODO
            }
        } catch (error) {
            
            return dispatch(playlistsSuggestionFetchRequestFailure(error));
            // return dispatch(playlistsSuggestionFetchRequestFailure(error.response.data));
        }
    };
};
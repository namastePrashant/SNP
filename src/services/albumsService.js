import { fetch } from '../utils/httpUtil';

import {
    individualAlbumFetchRequest,
    individualAlbumFetchRequestFailure,
    individualAlbumFetchRequestSuccess
} from '../actions/individualAlbumAction';

import {
    relatedAlbumsByAlbumFetchRequest,
    relatedAlbumsByAlbumFetchRequestFailure,
    relatedAlbumsByAlbumFetchRequestSuccess
} from '../actions/relatedAlbumsByAlbumAction';


// import {
//     relatedArtistsByAlbumFetchRequest,
//     relatedArtistsByAlbumFetchRequestFailure,
//     relatedArtistsByAlbumFetchRequestSuccess
// } from '../actions/relatedArtistsByAlbumAction';





export const fetchIndividualAlbum = (identifier, addToQueueCallBack) => {

    return async dispatch => {
        dispatch(individualAlbumFetchRequest());

        try {
            const response = await fetch(`api/v1/albums/${identifier}`);

            if (response.data.success === true) {                
                dispatch(individualAlbumFetchRequestSuccess(response.data.data.album));
                
                if(addToQueueCallBack){                    
                    addToQueueCallBack(response.data.data.album);
                }
            } else {
                // TODO
            }
        } catch (error) {

            return dispatch(individualAlbumFetchRequestFailure(error));
        }
    };
};

export const fetchRelatedAlbumsByAlbum = identifier => {
    return async dispatch => {
        dispatch(relatedAlbumsByAlbumFetchRequest());

        try {
            
            const response = await fetch(`api/v1/artists/more_albums?album_id=${identifier}&per_page=20`);
            
            if (response.data.success === true) {

                dispatch(relatedAlbumsByAlbumFetchRequestSuccess(response.data.data.album));
            } else {
                // TODO
            }
        } catch (error) {

            return dispatch(relatedAlbumsByAlbumFetchRequestFailure(error));
        }
    };
};


// export const fetchRelatedArtistsByAlbum = identifier => {
//     return async dispatch => {
//         dispatch(relatedArtistsByAlbumFetchRequest());

//         try {
//             const response = await fetch(`api/v1/artists/${identifier}/related_artist?per_page=10`);

//             if (response.data.success === true) {

//                 dispatch(relatedArtistsByAlbumFetchRequestSuccess(response.data.data.artist));
//             } else {
//                 // TODO
//             }
//         } catch (error) {

//             return dispatch(relatedArtistsByAlbumFetchRequestFailure(error));
//         }
//     };
// };






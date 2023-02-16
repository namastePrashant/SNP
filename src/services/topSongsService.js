import {
    topSongsFetchRequest,
    topSongsFetchRequestSuccess,
    topSongsFetchRequestFailure,
    topSongsFetchMoreRequest,
    topSongsFetchMoreRequestSuccess,
    topSongsFetchMoreRequestFailure,
    topSongsFetchMeta,
} from '../actions/topSongsAction';

import { fetch } from '../utils/httpUtil';


export const fetchTopSongs = (page) => {
    let pageNumber = page ? page : 1;

    return async dispatch => {

        if (page) {
            dispatch(topSongsFetchMoreRequest());
        } else {
            dispatch(topSongsFetchRequest());

        }

        try {

            const response = await fetch(`api/v1/songs/top_songs?page=${pageNumber}&per_page=20`);

            if (response.data.success === true) {
                if (page) {
                    dispatch(topSongsFetchMoreRequestSuccess(response.data.data.top_songs));

                } else {
                    dispatch(topSongsFetchRequestSuccess(response.data.data.top_songs));

                }
                dispatch(topSongsFetchMeta(response.data.page_meta));

            } else {
                // TODO
            }
        } catch (error) {


            if (page) {
                return dispatch(topSongsFetchMoreRequestFailure(error));
            } else {
                return dispatch(topSongsFetchRequestFailure(error));
            }
        }
    };
};
import {
    explorePlaylistsFetchRequest,
    explorePlaylistsFetchRequestSuccess,
    explorePlaylistsFetchRequestFailure,
    explorePlaylistsFetchMoreRequest,
    explorePlaylistsFetchMoreRequestSuccess,
    // explorePlaylistsFetchMoreRequestFailure,
    explorePlaylistsFetchMeta,
} from '../actions/explorePlaylistsAction';

import { fetch } from '../utils/httpUtil';


export const fetchExplorePlaylists = (page) => {
    let pageNumber = page || 1;

    return async dispatch => {



        if (page) {
            dispatch(explorePlaylistsFetchMoreRequest());
        } else {
            dispatch(explorePlaylistsFetchRequest());
        }

        let url = `api/v1/genres/playlists_from_genre?per_page=10&page=${pageNumber}&inner_per_page=10&inner_page=1`;

        try {
            const response = await fetch(url);
            if (response.data.success === true) {

                if (page) {
                    dispatch(explorePlaylistsFetchMoreRequestSuccess(response.data.data));
                } else {
                    dispatch(explorePlaylistsFetchRequestSuccess(response.data.data));
                }
                dispatch(explorePlaylistsFetchMeta(response.data.page_meta));
            } else {
                // TODO
            }
        } catch (error) {

            if (page) {
                return dispatch(explorePlaylistsFetchRequestFailure(error));
            } else {
                return dispatch(explorePlaylistsFetchRequestFailure(error));
            }
        }
    };
};
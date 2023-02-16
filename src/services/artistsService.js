import { fetch } from '../utils/httpUtil';

import {
    individualArtistFetchRequest,
    individualArtistFetchRequestFailure,
    individualArtistFetchRequestSuccess,

    artistSingleSongRequest,
    artistSingleSongSuccess,
    artistSingleSongFail
} from '../actions/individualArtistAction';

import {
    popularSongsByArtistFetchRequest,
    popularSongsByArtistFetchRequestFailure,
    popularSongsByArtistFetchRequestSuccess
} from '../actions/popularSongsByArtistAction';

import {
    relatedArtistsByArtistFetchRequest,
    relatedArtistsByArtistFetchRequestFailure,
    relatedArtistsByArtistFetchRequestSuccess
} from '../actions/relatedArtistsByArtistAction';

import {
    artistLatestReleasesFetchRequest,
    artistLatestReleasesFetchRequestSuccess,
    artistLatestReleasesFetchMoreRequest,
    artistLatestReleasesFetchMoreRequestSuccess,
    artistLatestReleasesFetchRequestFailure,
    artistLatestReleasesFetchMoreRequestFailure,
    artistLatestReleasesFetchMeta,
    
} from '../actions/artistLatestReleasesAction';

import {
    artistLatestReleasedAlbumFetchRequest,
    artistLatestReleasedAlbumFetchRequestFailure,
    artistLatestReleasedAlbumFetchRequestSuccess
} from '../actions/artistLatestReleasedAlbumAction';




export const fetchIndividualArtist = identifier => {
    return async dispatch => {
        dispatch(individualArtistFetchRequest());

        try {
            const response = await fetch(`api/v1/artists/${identifier}`);
            if (response.data.success === true) {

                dispatch(individualArtistFetchRequestSuccess(response.data.data.artist));
            } else {
                // TODO
            }
        } catch (error) {

            return dispatch(individualArtistFetchRequestFailure(error));
        }
    };
};

export const fetchPopularSongsByArtist = identifier => {
    return async dispatch => {
        dispatch(popularSongsByArtistFetchRequest(identifier));

        try {
            const response = await fetch(`api/v1/analytics/popular_songs_from_artist?artist_id=${identifier}`);

            if (response.data.success === true) {

                dispatch(popularSongsByArtistFetchRequestSuccess(response.data.data.popular_songs_from_artist));
            } else {
                // TODO
            }
        } catch (error) {

            return dispatch(popularSongsByArtistFetchRequestFailure(error));
        }
    };
};

export const fetchRelatedArtistsByArtist = identifier => {
    return async dispatch => {
        dispatch(relatedArtistsByArtistFetchRequest());

        try {
            const response = await fetch(`api/v1/artists/${identifier}/related_artist?per_page=15`);

            if (response.data.success === true) {

                dispatch(relatedArtistsByArtistFetchRequestSuccess(response.data.data.artist));
            } else {
                // TODO
            }
        } catch (error) {

            return dispatch(relatedArtistsByArtistFetchRequestFailure(error));
        }
    };
};

export const fetchArtistLatestReleases = (identifier, page) => {
    let pageNumber = page ? page : 1;
    return async dispatch => {


        if (page) {
            dispatch(artistLatestReleasesFetchMoreRequest());
        } else {
            dispatch(artistLatestReleasesFetchRequest());
        }

        try {
            const response = await fetch(`api/v1/artists/latest_release?artist_id=${identifier}&page=${pageNumber}&show_album=0&sort=asc`);
            if (response.data.success === true) {

                

                if (page) {
                    dispatch(artistLatestReleasesFetchMoreRequestSuccess(response.data.data.artist.albums.data));
                } else {
                    dispatch(artistLatestReleasesFetchRequestSuccess(response.data.data.artist));
                }

                dispatch(artistLatestReleasesFetchMeta(response.data.data.artist.albums.page_meta));


            } else {
                // TODO
            }
        } catch (error) {

            if (page) {
                return dispatch(artistLatestReleasesFetchMoreRequestFailure(error));
            } else {
                return dispatch(artistLatestReleasesFetchRequestFailure(error));
            }
        }
    };
};

export const fetchArtistLatestReleasedAlbum = identifier => {
    return async dispatch => {
        dispatch(artistLatestReleasedAlbumFetchRequest());
        try {

            const response = await fetch(`api/v1/albums/${identifier}`);

            if (response.data.success === true) {
                
                // dispatch(artistLatestReleasedAlbumFetchRequestSuccess(response.data.data.artist));
                dispatch(artistLatestReleasedAlbumFetchRequestSuccess(response.data.data.album));
            } else {
                // TODO
            }
        } catch (error) {

            return dispatch(artistLatestReleasedAlbumFetchRequestFailure(error));
        }
    };
};




// fetch artist single Song 
export const fetchArtistSingleSong = (id) => {
    return async dispatch => {
        dispatch(artistSingleSongRequest())
        try {
            let formData = new FormData();  
            formData.append('id',id)          
            const response = await fetch('api/v1/artists/singles/?id='+id)
            dispatch(artistSingleSongSuccess(response.data.data))
        } catch (error) {
            dispatch(artistSingleSongFail(error))
        }
    }
}
// fetch artist single Song


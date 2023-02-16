import {fetch} from '../utils/httpUtil';

import {
  individualPlaylistFetchRequest,
  individualPlaylistFetchRequestFailure,
  individualPlaylistFetchRequestSuccess
} from '../actions/individualPlaylistAction';


import {
  similarPlaylistsByPlaylistFetchRequest,
  similarPlaylistsByPlaylistFetchRequestFailure,
  similarPlaylistsByPlaylistFetchRequestSuccess
} from '../actions/similarPlaylistsByPlaylistAction';

import {
  relatedArtistsByPlaylistFetchRequest,
  relatedArtistsByPlaylistFetchRequestFailure,
  relatedArtistsByPlaylistFetchRequestSuccess
} from '../actions/relatedArtistsByPlaylistAction';


// import {
//     relatedArtistsByAlbumFetchRequest,
//     relatedArtistsByAlbumFetchRequestFailure,
//     relatedArtistsByAlbumFetchRequestSuccess
// } from '../actions/relatedArtistsByAlbumAction';
// TODO:featured playlist
import {
  featuredPlaylistFetchRequest,
  featuredPlaylistFetchRequestFailure,
  featuredPlaylistFetchRequestSuccess
} from '../actions/featuredPlaylistAction';


export const fetchIndividualPlaylist = identifier => {
  return async dispatch => {
    dispatch(individualPlaylistFetchRequest());

    try {
      const response = await fetch(`api/v1/playlists/${identifier}`);

      if (response.data.success === true) {

        dispatch(individualPlaylistFetchRequestSuccess(response.data.data.playlist));
      } else {
        // TODO
      }
    } catch (error) {

      return dispatch(individualPlaylistFetchRequestFailure(error));
    }
  };
};


export const fetchSimilarPlaylistsByPlaylist = identifier => {
  return async dispatch => {
    dispatch(similarPlaylistsByPlaylistFetchRequest());

    try {
      const response = await fetch(`api/v1/playlists/${identifier}/related_playlist?per_page=10`);

      if (response.data.success === true) {

        dispatch(similarPlaylistsByPlaylistFetchRequestSuccess(response.data.data.playlist));
      } else {
        // TODO
      }
    } catch (error) {

      return dispatch(similarPlaylistsByPlaylistFetchRequestFailure(error));
    }
  };
};


export const fetchRelatedArtistsByPlaylist = identifier => {
  return async dispatch => {
    dispatch(relatedArtistsByPlaylistFetchRequest());

    try {
      const response = await fetch(`api/v1/artists?genre_id=${identifier}&per_page=10`);
      if (response.data.success === true) {
        dispatch(relatedArtistsByPlaylistFetchRequestSuccess(response.data.data.artists));
      } else {
        // TODO
      }
    } catch (error) {

      return dispatch(relatedArtistsByPlaylistFetchRequestFailure(error));
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

export const fetchFeaturedPlaylist = () => {

  return async dispatch => {
    dispatch(featuredPlaylistFetchRequest());

    try {
      const response = await fetch(`api/v1/featureds/playlists/featured_playlists`);
      if (response.data.success === true) {

        dispatch(featuredPlaylistFetchRequestSuccess(response.data.data.featureds.Playlist));
      } else {
        // TODO
      }
    } catch (error) {

      return dispatch(featuredPlaylistFetchRequestFailure(error));
    }
  };
};

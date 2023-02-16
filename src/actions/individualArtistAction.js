import {
    INDIVIDUAL_ARTIST_FETCH_REQUEST,
    INDIVIDUAL_ARTIST_FETCH_REQUEST_SUCCESS,
    INDIVIDUAL_ARTIST_FETCH_REQUEST_FAILURE,
    INDIVIDUAL_ARTIST_CLEAN_REQUEST,

    // artist song song actions
    ARTIST_SINGLE_SONG_FETCH_REQUEST,
    ARTIST_SINGLE_SONG_FETCH_SUCCESS,
    ARTIST_SINGLE_SONG_FETCH_FAIL,
    // artist song song actions
} from '../constants/actionTypes';

export const individualArtistFetchRequest = () => {
    return {
        type: INDIVIDUAL_ARTIST_FETCH_REQUEST,
    };
};

export const individualArtistFetchRequestSuccess = data => {

    return {
        type: INDIVIDUAL_ARTIST_FETCH_REQUEST_SUCCESS,
        data,
    };
};

export const individualArtistFetchRequestFailure = error => {
    return {
        type: INDIVIDUAL_ARTIST_FETCH_REQUEST_FAILURE,
        error,
    };
};

export const individualArtistCleanRequest = () => {
    return {
        type: INDIVIDUAL_ARTIST_CLEAN_REQUEST,
    };
};



// artist single songs
export const artistSingleSongRequest = () =>{
  return{
    type: ARTIST_SINGLE_SONG_FETCH_REQUEST
  }
}


export const artistSingleSongSuccess = data =>{
  return{
    type:ARTIST_SINGLE_SONG_FETCH_SUCCESS,
    data,
  }
}


export const artistSingleSongFail = data =>{
  return{
    type:ARTIST_SINGLE_SONG_FETCH_FAIL,
    data,
  }
}

// end artist single songs
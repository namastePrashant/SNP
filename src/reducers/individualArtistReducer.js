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

const INITIAL_STATE = {
  payload: [],
  loading: false,
  errors: {},

  // artist single songs loading
  singleSongs:[],
  singleSongsLoading:false,
  errorsSingleSong:{}
  // artist single songs loading
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const individualArtistReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case INDIVIDUAL_ARTIST_FETCH_REQUEST:
          return{
            ...state,
                loading: true,
            };

        case INDIVIDUAL_ARTIST_FETCH_REQUEST_SUCCESS:
          return{
            ...state,
                payload: action.data,
                loading: false,
            };

        case INDIVIDUAL_ARTIST_FETCH_REQUEST_FAILURE:
          return{
            ...state,
                loading: false,
                errors: action.error,
            };

        case INDIVIDUAL_ARTIST_CLEAN_REQUEST:
          return{
            ...state,
                payload: [],
                errors: {},
                loading: false,
            };


        // artist singles
        case ARTIST_SINGLE_SONG_FETCH_REQUEST:
          return{
            ...state,
            singleSongsLoading:true
          }
        
        case ARTIST_SINGLE_SONG_FETCH_SUCCESS:
          return{
            ...state,
            singleSongsLoading:false,
            singleSongs:action.data
          }

        case ARTIST_SINGLE_SONG_FETCH_FAIL:
          return{
            ...state,
            singleSongsLoading:false,
            errorsSingleSong:action.data
          }
        


        default:
            return state;
    }
};

export default individualArtistReducer;
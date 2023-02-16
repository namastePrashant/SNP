import {
    SEARCH_FETCH_REQUEST,
    SEARCH_FETCH_REQUEST_SUCCESS,
    SEARCH_FETCH_REQUEST_FAILURE,
    SEARCH_CLEAN_REQUEST,
    SEARCH_LOAD_MORE_REQUEST,
    SEARCH_LOAD_MORE_SUCCESS,
    SET_SEARCH_KEY
} from '../constants/actionTypes';




const INITIAL_STATE = {
    songs:[],
    albums:[],
    artists:[],
    loading: false,
    loadMore:false,
    page_meta:0,
    errors: {},
    hasMoreSongs:false,
    hasMoreArtists:false,
    hasMoreAlbums:false,
    searchedKey:null,
    noResults:false,
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const searchReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
        case SEARCH_FETCH_REQUEST:
            return Object.assign({}, state, {
                loading: true,
            });

        case SET_SEARCH_KEY:
          return{
            ...state,
            searchedKey:action.searchedKey,
            hasMoreSongs:true,
            hasMoreArtists:true,
            hasMoreAlbums:true,
          }

        case SEARCH_FETCH_REQUEST_SUCCESS:

          const noResultCheck=()=>{
            if(action.data.artists.data.length || action.data.albums.data.length || action.data.songs.data.length) {
              return false
            }
            return  true
          }

            return Object.assign({}, state, {
                songs:action.data.songs.data,
                albums:action.data.albums.data,
                artists:action.data.artists.data,
                loading: false,
                page_meta:action.data.songs.page_meta.current_page,
                noResults:noResultCheck(),
                errors: {},
            });
        
        case SEARCH_FETCH_REQUEST_FAILURE:
            return Object.assign({}, state, {
                loading: false,
                errors: action.error,
            });

        case SEARCH_CLEAN_REQUEST:
            return Object.assign({}, state, {
                songs:[],
                albums:[],
                artist:[],
                errors: {},
                page_meta:0,
                currentKey:null,
                loading: false,
                loadMore:false
            });

        case SEARCH_LOAD_MORE_REQUEST:
          return {
              ...state,
              loadMore:true,
          }


        case SEARCH_LOAD_MORE_SUCCESS:
          const HasMorecheck = (data)=>{
            if(data.length ){
              return true
            }
            return false
          }

          return {
            ...state,
            loadMore:false,
            songs:state.songs.concat(action.data.songs.data),
            albums:state.albums.concat(action.data.albums.data),
            artists:state.artists.concat(action.data.artists.data),
            page_meta:action.data.songs.page_meta.current_page,
            hasMoreSongs:HasMorecheck(action.data.songs.data ),
            hasMoreArtists:HasMorecheck(action.data.albums.data),
            hasMoreAlbums:HasMorecheck(action.data.artists.data),
        }

        default:
            return state;
    }
};

export default searchReducer;

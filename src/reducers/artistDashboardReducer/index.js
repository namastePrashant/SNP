import {

  // analytics count action types
  ARTIST_ANALYTICS_COUNTS_REQUEST,
  ARTIST_ANALYTICS_COUNTS_SUCCESS,
  ARTIST_ANALYTICS_COUNTS_FAIL,
  // analytics count action types


  // ARTIST TOTAL EARNINGS
  ARTIST_TOTAL_EARNINGS_REQUEST,
  ARTIST_TOTAL_EARNINGS_SUCCESS,
  ARTIST_TOTAL_EARNINGS_FAIL,

  // ARTIST TOTAL FOLLOWERS
  ARTIST_TOTAL_FOLLOWERS_REQUEST,
  ARTIST_TOTAL_FOLLOWERS_SUCCESS,
  ARTIST_TOTAL_FOLLOWERS_FAIL,

  // ARTIST TOTAL PLAY COUNTS
  ARTIST_TOTAL_PLAY_COUNTS_REQUEST,
  ARTIST_TOTAL_PLAY_COUNTS_SUCCESS,
  ARTIST_TOTAL_PLAY_COUNTS_FAIL,

  // ARTIST TOTAL SINGLE SONG PLAY COUNT
  ARTIST_TOTAL_SINGLE_SONG_PLAY_COUNT_REQUEST,
  ARTIST_TOTAL_SINGLE_SONG_PLAY_COUNT_SUCCESS,
  ARTIST_TOTAL_SINGLE_SONG_PLAY_COUNT_FAIL,

  // ARTIST TOTAL SINGLE SONG EARNING
  ARTIST_TOTAL_SINGLE_SONG_EARNING_REQUEST,
  ARTIST_TOTAL_SINGLE_SONG_EARNING_SUCCESS,
  ARTIST_TOTAL_SINGLE_SONG_EARNING_FAIL,

  //my albums
  MY_ALBUMS_FETCH_REQUEST,
  MY_ALBUMS_FETCH_SUCCESS,
  MY_ALBUMS_FETCH_FAIL,
  MY_ALBUM_LM_REQUEST,
  MY_ALBUM_LM_SUCCESS,
  MY_ALBUM_LM_FAIL,


  // uploading album
  ARTIST_ALBUM_CREATE_REQUEST,
  ARTIST_ALBUM_CREATE_SUCCESS,
  ARTIST_ALBUM_CREATE_FAIL,
  SET_CURRENT_EDIT_ALBUM,
  REMOVE_CURRENT_EDIT_ALBUM,


  // my songs 
  MY_SONGS_FETCH_REQUEST,
  MY_SONGS_FETCH_SUCCESS,
  MY_SONGS_META_FETCH_SUCCESS,
  MY_SONGS_FETCH_FAIL,
  MY_SONGS_LM_REQUEST,
  MY_SONGS_LM_SUCCESS,
  MY_SONGS_LM_FAIL,

  // uploading songs
  UPLOAD_SONG_REQUEST,
  UPLOAD_SONG_SUCCESS,
  UPLOAD_SONG_FAIL,
  SET_CURRENT_EDIT_SONG,
  REMOVE_CURRENT_EDIT_SONG,

  ARTIST_POPULAR_SONGS_REQUEST,
  ARTIST_POPULAR_SONGS_SUCCESS,
  ARTIST_POPULAR_SONGS_FAIL,
  


} from '../../constants/actionTypes'



const initialState = {

  // artist analytics count
  loadingAnalyticsCounts: false,
  analyticsCounts: {},
  errorAnalyticsCounts: null,
  // artist analytics count


  //artist total earnings
  loadingTotalEarnings: false,
  totalEarnings: {},
  errorTotalEarnings: null,

  //artist total followers
  loadingTotalFollowers: false,
  totalFollowers: {},
  errorTotalFollowers: null,

  //artist total followers
  loadingTotalPlayCounts: false,
  totalPlayCounts: {},
  errorTotalPlayCounts: null,

  //artist total single play count
  loadingTotalSingleSongPlayCount: false,
  // loadingTotalSingleSongPlayCountId: undefined,
  totalSingleSongPlayCount: {},
  errorTotalSingleSongPlayCount: null,

  // artist single song play count/earning loading id
  loadingActiveSongAnalyticsId: undefined,

  //artist total single song earning
  loadingTotalSingleSongEarning: false,
  // loadingTotalSingleSongEarningId: undefined,
  totalSingleSongEarning: {},
  errorTotalSingleSongEarning: null,


  // UPLOAD ALBUM,
  loadingUploadAlbum: false,
  uploadedAlbum: null,
  errorUploadingAlbum: null,
  currentEditAlbum:null,

  // my album
  loadingMyAlbums: false,
  myAlbums: [],
  currentAlbumPage: 1,
  loadingMoreAlbums: false,
  hasMoreAlbums: false,
  errorMyAlbums: null,



  // my songs
  loadingMySongs: false,
  mySongs: [],
  loadingMoreSongs: false,
  currentSongPage: 1,
  hasMoreSongs: false,
  errorMySongs: {},

  // popular songs
  loadingPopularSongs: false,
  popularSongs: [],
  errorPopularSongs: null,


  // upload songs
  loadingUploadSongs: false,
  uploadedSong: null,
  errorUploadingSong: null,
  currentEditSong:null

}



const ArtistDashboardReducer = (state, action) => {

  state = state || initialState

  switch (action.type) {

    // artist analytics count 
    case ARTIST_ANALYTICS_COUNTS_REQUEST:
      return {
        ...state,
        loadingAnalyticsCounts: true,
      }

    case ARTIST_ANALYTICS_COUNTS_SUCCESS:
      return {
        ...state,
        loadingAnalyticsCounts: false,
        analyticsCounts: action.data
      }

    case ARTIST_ANALYTICS_COUNTS_FAIL:
      return {
        ...state,
        loadingAnalyticsCounts: false,
        errorAnalyticsCounts: action.data
      }
    // artist analytics count end

    // artist total earnings
    case ARTIST_TOTAL_EARNINGS_REQUEST:
      return {
        ...state,
        loadingTotalEarnings: true,
      }

    case ARTIST_TOTAL_EARNINGS_SUCCESS:
      return {
        ...state,
        loadingTotalEarnings: false,
        totalEarnings: action.data
      }

    case ARTIST_TOTAL_EARNINGS_FAIL:
      return {
        ...state,
        loadingTotalEarnings: false,
        errorTotalEarnings: action.data
      }

    // artist total earnings

    // artist total followers
    case ARTIST_TOTAL_FOLLOWERS_REQUEST:
      return {
        ...state,
        loadingTotalFollowers: true,
      }

    case ARTIST_TOTAL_FOLLOWERS_SUCCESS:
      return {
        ...state,
        loadingTotalFollowers: false,
        totalFollowers: action.data
      }

    case ARTIST_TOTAL_FOLLOWERS_FAIL:
      return {
        ...state,
        loadingTotalFollowers: false,
        errorTotalFollowers: action.data
      }

    // artist total followers

    // artist total play counts
    case ARTIST_TOTAL_PLAY_COUNTS_REQUEST:
      return {
        ...state,
        loadingTotalPlayCounts: true,
      }

    case ARTIST_TOTAL_PLAY_COUNTS_SUCCESS:
      return {
        ...state,
        loadingTotalPlayCounts: false,
        totalPlayCounts: action.data
      }

    case ARTIST_TOTAL_PLAY_COUNTS_FAIL:
      return {
        ...state,
        loadingTotalPlayCounts: false,
        errorTotalPlayCounts: action.data
      }

    // artist total play counts

    // artist total single song play count
    case ARTIST_TOTAL_SINGLE_SONG_PLAY_COUNT_REQUEST:
      return {
        ...state,
        loadingTotalSingleSongPlayCount: true,
        // loadingTotalSingleSongPlayCountId: action.id,
        loadingActiveSongAnalyticsId: action.id,
      }

    case ARTIST_TOTAL_SINGLE_SONG_PLAY_COUNT_SUCCESS:
      return {
        ...state,
        loadingTotalSingleSongPlayCount: false,
        totalSingleSongPlayCount: action.data
      }

    case ARTIST_TOTAL_SINGLE_SONG_PLAY_COUNT_FAIL:
      return {
        ...state,
        loadingTotalSingleSongPlayCount: false,
        errorTotalSingleSongPlayCount: action.data
      }

    // artist total single song play count

    // artist total single song earning
    case ARTIST_TOTAL_SINGLE_SONG_EARNING_REQUEST:
      return {
        ...state,
        loadingTotalSingleSongEarning: true,
        // loadingTotalSingleSongEarningId: action.id,
        loadingActiveSongAnalyticsId: action.id,
      }

    case ARTIST_TOTAL_SINGLE_SONG_EARNING_SUCCESS:
      return {
        ...state,
        loadingTotalSingleSongEarning: false,
        totalSingleSongEarning: action.data
      }

    case ARTIST_TOTAL_SINGLE_SONG_EARNING_FAIL:
      return {
        ...state,
        loadingTotalSingleSongEarning: false,
        errorTotalSingleSongEarning: action.data
      }

    // artist total single song earning

    // uploading album
    case ARTIST_ALBUM_CREATE_REQUEST:
      return {
        ...state,
        loadingUploadAlbum: true,
      }

    case ARTIST_ALBUM_CREATE_SUCCESS:
      return {
        ...state,
        loadingUploadAlbum: false,
        uploadedAlbum: action.data
      }

    case ARTIST_ALBUM_CREATE_FAIL:
      return {
        ...state,
        loadingUploadAlbum: false,
        errorUploadingAlbum: action.data
      }


    // end uploading albums

    // my albums

    case MY_ALBUMS_FETCH_REQUEST:
      return {
        ...state,
        loadingMyAlbums: true,
      }

    case MY_ALBUMS_FETCH_SUCCESS:
      return {
        ...state,
        loadingMyAlbums: false,
        currentAlbumPage: 1,
        myAlbums: action.data,
        hasMoreAlbums: true,
      }

    case MY_ALBUMS_FETCH_FAIL:
      return {
        ...state,
        loadingMyAlbums: false,
        errorMyAlbums: action.data,
      }

    case MY_ALBUM_LM_REQUEST:
      return {
        ...state,
        loadingMoreAlbums: true,
      }

    case MY_ALBUM_LM_SUCCESS:
      return {
        ...state,
        loadingMoreAlbums: false,
        myAlbums: state.myAlbums.concat(action.data.albums),
        hasMoreAlbums: action.data.length ? true : false,
        currentAlbumPage: action.data.currentPage
      }

    case MY_ALBUM_LM_FAIL:
      return {
        ...state,
        loadingMoreAlbums: false,
        errorMyAlbums: action.data
      }

    case SET_CURRENT_EDIT_ALBUM:
      return{
        ...state,
        currentEditAlbum:action.data
      }

    case REMOVE_CURRENT_EDIT_ALBUM:
      return{
        ...state,
        currentEditAlbum:null
      }
    // end my albums

    /**
     * Songs related
    */

    // upload songs
    case UPLOAD_SONG_REQUEST:
      return {
        ...state,
        loadingUploadSongs: true,
      }

    case UPLOAD_SONG_SUCCESS:
      return {
        ...state,
        loadingUploadSongs: false,
        uploadedSong: action.data
      }

    case UPLOAD_SONG_FAIL:
      return {
        ...state,
        loadingUploadSongs: false,
        errorUploadingSong: action.data
      }


    // my songs
    case MY_SONGS_FETCH_REQUEST:
      return {
        ...state,
        loadingMySongs: true,
      }

    case MY_SONGS_FETCH_SUCCESS:

      return {
        ...state,
        loadingMySongs: false,
        currentSongPage: 1,
        hasMoreSongs: false,
        mySongs: action.data
      }

    case MY_SONGS_META_FETCH_SUCCESS:

      let hasMoreSongs = action.meta.total === state.mySongs.length ? false : true;

      return {
        ...state,
        hasMoreSongs: hasMoreSongs, //CHECK IF total songs is equal to the length of the redux data       
      }

    case MY_SONGS_FETCH_FAIL:
      return {
        ...state,
        loadingMySongs: false,
        errorMySongs: action.data
      }


    case MY_SONGS_LM_REQUEST:
      return {
        ...state,
        loadingMoreSongs: true,
      }


    case MY_SONGS_LM_SUCCESS:
      return {
        ...state,
        loadingMoreSongs: false,
        mySongs: state.mySongs.concat(action.data.songs),
        hasMoreSongs: action.data.length ? true : false,
        currentSongPage: action.data.currentPage
      }

    case MY_SONGS_LM_FAIL:
      return {
        ...state,
        loadingMoreSongs: false,
        errorMyAlbums: action.data
      }


    case ARTIST_POPULAR_SONGS_REQUEST:
      return {
        ...state,
        loadingPopularSongs: true,
      }

    case ARTIST_POPULAR_SONGS_SUCCESS:
      return {
        ...state,
        loadingPopularSongs: false,
        popularSongs: action.data
      }

    case ARTIST_POPULAR_SONGS_FAIL:
      return {
        ...state,
        loadingPopularSongs: false,
        errorPopularSongs: action.data
      }
    
    case SET_CURRENT_EDIT_SONG:
      return{
        ...state,
        currentEditSong:action.data
      }

    case REMOVE_CURRENT_EDIT_SONG:
      return{
        ...state,
        currentEditSong:null
      }
    /**
     * end songs related
     */


    default:
      return state
  }

}

export default ArtistDashboardReducer
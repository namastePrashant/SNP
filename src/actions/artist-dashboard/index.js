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

  // uploading album
  ARTIST_ALBUM_CREATE_REQUEST,
  ARTIST_ALBUM_CREATE_SUCCESS,
  ARTIST_ALBUM_CREATE_FAIL,


  //my albums
  MY_ALBUMS_FETCH_REQUEST,
  MY_ALBUMS_FETCH_SUCCESS,
  MY_ALBUMS_FETCH_FAIL,
  MY_ALBUM_LM_REQUEST,
  MY_ALBUM_LM_SUCCESS,
  MY_ALBUM_LM_FAIL,
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
  ARTIST_POPULAR_SONGS_REQUEST,
  ARTIST_POPULAR_SONGS_SUCCESS,
  ARTIST_POPULAR_SONGS_FAIL,
  SET_CURRENT_EDIT_SONG,
  REMOVE_CURRENT_EDIT_SONG,

  // uploading songs
  UPLOAD_SONG_REQUEST,
  UPLOAD_SONG_SUCCESS,
  UPLOAD_SONG_FAIL,




} from '../../constants/actionTypes'


/**
 *  analytics count
 */
export const AnalyticsCountFetchRequest = () => {
  return {
    type: ARTIST_ANALYTICS_COUNTS_REQUEST
  }
}


export const AnalyticsCountFetchSuccess = (data) => {
  return {
    type: ARTIST_ANALYTICS_COUNTS_SUCCESS,
    data: data
  }
}


export const AnalyticsCountFetchFail = (data) => {
  return {
    type: ARTIST_ANALYTICS_COUNTS_FAIL,
    data: data
  }
}

/**
*  end analytics count
*/

/**
 *  TOTAL EARNINGS
 */
export const TotalEarningsFetchRequest = () => {
  return {
    type: ARTIST_TOTAL_EARNINGS_REQUEST
  }
}


export const TotalEarningsFetchSuccess = (data) => {
  return {
    type: ARTIST_TOTAL_EARNINGS_SUCCESS,
    data: data
  }
}


export const TotalEarningsFetchFail = (data) => {
  return {
    type: ARTIST_TOTAL_EARNINGS_FAIL,
    data: data
  }
}

/**
*  end TOTAL EARNINGS
*/

/**
 *  TOTAL FOLLOWERS
 */
export const TotalFollowersFetchRequest = () => {
  return {
    type: ARTIST_TOTAL_FOLLOWERS_REQUEST
  }
}


export const TotalFollowersFetchSuccess = (data) => {
  return {
    type: ARTIST_TOTAL_FOLLOWERS_SUCCESS,
    data: data
  }
}


export const TotalFollowersFetchFail = (data) => {
  return {
    type: ARTIST_TOTAL_FOLLOWERS_FAIL,
    data: data
  }
}

/**
*  end TOTAL FOLLOWERS
*/

/**
 *  TOTAL PLAY COUNT
 */
export const TotalPlayCountFetchRequest = () => {
  return {
    type: ARTIST_TOTAL_PLAY_COUNTS_REQUEST
  }
}


export const TotalPlayCountFetchSuccess = (data) => {
  return {
    type: ARTIST_TOTAL_PLAY_COUNTS_SUCCESS,
    data: data
  }
}


export const TotalPlayCountFetchFail = (data) => {
  return {
    type: ARTIST_TOTAL_PLAY_COUNTS_FAIL,
    data: data
  }
}

/**
*  end TOTAL PLAY COUNT
*/

//  SINGLE SONG PLAY COUNT

export const TotalSingleSongPlayCountFetchRequest = (id) => {
  return {
    type: ARTIST_TOTAL_SINGLE_SONG_PLAY_COUNT_REQUEST,
    id:id,
  }
}

export const TotalSingleSongPlayCountFetchSuccess = (data)=>{
  return {
    type: ARTIST_TOTAL_SINGLE_SONG_PLAY_COUNT_SUCCESS,
    data:data
  }
}

export const TotalSingleSongPlayCountFetchFail=(data)=>{
  return {
    type:ARTIST_TOTAL_SINGLE_SONG_PLAY_COUNT_FAIL,
    data:data
  }
}
// END SINGLE SONG PLAY COUNT

//  SINGLE SONG PLAY Earning COUNT

export const TotalSingleSongEarningFetchRequest = (id) => {
  return {
    type: ARTIST_TOTAL_SINGLE_SONG_EARNING_REQUEST,
    id:id
  }
}

export const TotalSingleSongEarningFetchSuccess = (data)=>{
  return {
    type: ARTIST_TOTAL_SINGLE_SONG_EARNING_SUCCESS,
    data:data
  }
}

export const TotalSingleSongEarningFetchFail=(data)=>{
  return {
    type:ARTIST_TOTAL_SINGLE_SONG_EARNING_FAIL,
    data:data
  }
}
// END SINGLE SONG PLAY Earning COUNT

// album relaed

/**my albums */

export const myAlbumFetchRequest = () => {
  return {
    type: MY_ALBUMS_FETCH_REQUEST
  }
}


export const myAlbumFetchSuccess = (data) => {
  return {
    type: MY_ALBUMS_FETCH_SUCCESS,
    data: data
  }
}


export const myAlbumFetchFail = (data) => {
  return {
    type: MY_ALBUMS_FETCH_FAIL,
    data: data
  }
}

export const moreAlbumFetchRequest = () => {
  return {
    type: MY_ALBUM_LM_REQUEST
  }
}


export const moreAlbumFetchSuccess = (data) => {
  return {
    type: MY_ALBUM_LM_SUCCESS,
    data: data,
  }
}


export const moreAlbumFetchFail = (data) => {
  return {
    type: MY_ALBUM_LM_FAIL,
    data: data
  }
}

/**end my albums */

/**
 * upload album
 */
export const uploadAlbumRequest = () => {
  return {
    type: ARTIST_ALBUM_CREATE_REQUEST
  }
}


export const uploadAlbumSuccess = (data) => {
  return {
    type: ARTIST_ALBUM_CREATE_SUCCESS,
    data: data
  }
}


export const uploadAlbumFail = (data) => {
  return {
    type: ARTIST_ALBUM_CREATE_FAIL,
    data: data
  }
}
/**
 * end upload album
 */


 export const setEditAlbum = (data) => {
  return {
    type: SET_CURRENT_EDIT_ALBUM,
    data: data
  }
}

export const removeEditAlbum = () => {
  return {
    type: REMOVE_CURRENT_EDIT_ALBUM,
  }
}

//end album related

/**
 * songs related
 */

export const mySongFetchRequest = () => {
  return {
    type: MY_SONGS_FETCH_REQUEST
  }
}


export const mySongFetchSuccess = (data) => {
  return {
    type: MY_SONGS_FETCH_SUCCESS,
    data: data
  }
}

export const mySongMetaFetchSuccess = (meta) => {
  return {
    type: MY_SONGS_META_FETCH_SUCCESS,
    meta: meta
  }
}


export const mySongFetchFail = (data) => {
  return {
    type: MY_SONGS_FETCH_FAIL,
    data: data
  }
}

export const moreSongFetchRequest = () => {
  return {
    type: MY_SONGS_LM_REQUEST
  }
}


export const moreSongFetchSuccess = (data) => {
  return {
    type: MY_SONGS_LM_SUCCESS,
    data: data,
  }
}


export const moreSongFetchFail = (data) => {
  return {
    type: MY_SONGS_LM_FAIL,
    data: data
  }
}


export const artistPSfetchRequest = () => {
  return {
    type: ARTIST_POPULAR_SONGS_REQUEST,
  }
}


export const artistPSfetchSuccess = (data) => {
  return {
    type: ARTIST_POPULAR_SONGS_SUCCESS,
    data: data
  }
}


export const artistPSfetchFail = (data) => {
  return {
    type: ARTIST_POPULAR_SONGS_FAIL,
    data: data
  }
}

//song upload
export const songUploadFetchRequest = () => {
  return {
    type: UPLOAD_SONG_REQUEST
  }
}


export const songUploadFetchSuccess = (data) => {
  return {
    type: UPLOAD_SONG_SUCCESS,
    data: data
  }
}


export const songUploadFetchFail = (data) => {
  return {
    type: UPLOAD_SONG_FAIL,
    data: data
  }
}

export const setEditSong = (data) => {
  return {
    type: SET_CURRENT_EDIT_SONG,
    data: data
  }
}

export const removeEditSong = () => {
  return {
    type: REMOVE_CURRENT_EDIT_SONG,
  }
}

/**
 * songs related
 */
import {
  //analytics count 
  AnalyticsCountFetchRequest,
  AnalyticsCountFetchFail,
  AnalyticsCountFetchSuccess,
  //analytics count 

  // total earned
  TotalEarningsFetchRequest,
  TotalEarningsFetchSuccess,
  TotalEarningsFetchFail,

  // end total earned

  // total followers
  TotalFollowersFetchRequest,
  TotalFollowersFetchSuccess,
  TotalFollowersFetchFail,
  // end total followers

  // total play count
  TotalPlayCountFetchRequest,
  TotalPlayCountFetchSuccess,
  TotalPlayCountFetchFail,
  // end total play count

  //  single song play count
  TotalSingleSongPlayCountFetchRequest,
  TotalSingleSongPlayCountFetchSuccess,
  TotalSingleSongPlayCountFetchFail,
  // end single song play count

  //  single song earning
  TotalSingleSongEarningFetchRequest,
  TotalSingleSongEarningFetchSuccess,
  TotalSingleSongEarningFetchFail,
  // end single song earning


  // album related
  uploadAlbumRequest, // upload album
  uploadAlbumSuccess,
  uploadAlbumFail,

  myAlbumFetchRequest, // fetch my albums as an artist
  myAlbumFetchSuccess,
  myAlbumFetchFail,

  moreAlbumFetchRequest,
  moreAlbumFetchFail,
  moreAlbumFetchSuccess,

  removeEditAlbum,
  setEditAlbum,
  // end album related

  // songs related
  mySongFetchFail, // fetch my songs
  mySongFetchRequest,
  mySongMetaFetchSuccess,
  mySongFetchSuccess,

  moreSongFetchRequest,
  moreSongFetchFail,
  moreSongFetchSuccess,

  artistPSfetchFail,
  artistPSfetchRequest,
  artistPSfetchSuccess,

  songUploadFetchRequest, // upload song
  songUploadFetchSuccess,
  songUploadFetchFail,
  setEditSong,
  removeEditSong
  // end songs related

} from '../../actions/artist-dashboard'
import { push } from 'connected-react-router';
import { fetch } from '../../utils/httpUtil'
import { httpFormData } from '../../utils/httpBaseUtil'
import { message } from 'antd'

/**
 * 
 * Analytic related
 */
// fetch artist analytics count

export const fetchAnalyticsCounts = (date = "") => {
  return async dispatch => {
    dispatch(AnalyticsCountFetchRequest())
    try {
      const response = await fetch('api/v1/artists/getcounts/?range=' + date)
      dispatch(AnalyticsCountFetchSuccess(response.data.data))
    } catch (e) {
      dispatch(AnalyticsCountFetchFail(e))
    }
  }
}

// end fetch artist analytics count



// fetch artist total earnings
export const fetchTotalEarnings = (year) => {
  return async dispatch => {
    dispatch(TotalEarningsFetchRequest())
    try {
      // const response = await fetch('api/v1/artists/gettotalearned/?year=' + year)
      let url = year ? ('api/v1/artists/getearncountbyyear?year=' + year) : ("api/v1/artists/getearncountbyyear")
      const response = await fetch(url)
      dispatch(TotalEarningsFetchSuccess(response.data.data))
    } catch (e) {
      dispatch(TotalEarningsFetchFail(e))
    }
  }
}

// end artitis total earning 

// fetch artist followers
export const fetchTotalFollowers = (year) => {
  return async dispatch => {
    dispatch(TotalFollowersFetchRequest())
    try {
      // const response = await fetch('api/v1/artists/getfollowerscount?year='+year);

      let url = year ? `api/v1/artists/getfollowerscount?year=${year}` : "api/v1/artists/getfollowerscount";

      const response = await fetch(url);

      dispatch(TotalFollowersFetchSuccess(response.data.data))
    } catch (e) {
      dispatch(TotalFollowersFetchFail(e))
    }
  }
}

// end fetch artist followers

// fetch artist play counts
export const fetchTotalPlayCounts = (startDate, endDate) => {
  return async dispatch => {
    dispatch(TotalPlayCountFetchRequest())
    try {
      // const response = await fetch('api/v1/artists/getfollowerscount?year='+year);

      let url = startDate && !endDate ? `api/v1/artists/getplaycountsbydaterange?start_date=${startDate}`
        : startDate && endDate
          ?
          `api/v1/artists/getplaycountsbydaterange?start_date=${startDate}&end_date=${endDate}`
          :
          "api/v1/artists/getplaycountsbydaterange";

      const response = await fetch(url);

      dispatch(TotalPlayCountFetchSuccess(response.data.data))

    } catch (e) {
      dispatch(TotalPlayCountFetchFail(e))
    }
  }
}

// end fetch artist play counts

// fetch artist play counts
export const fetchSingleSongPlayCount = (type, song_id, year) => {
  return async dispatch => {
    dispatch(TotalSingleSongPlayCountFetchRequest(song_id))
    try {
      // const response = await fetch('api/v1/artists/getfollowerscount?year='+year);

      let url = year ? `api/v1/artists/getsongsanalyticsdetails?year=${year}&type=${type}&song_id=${song_id}` : `api/v1/artists/getsongsanalyticsdetails?type=${type}&song_id=${song_id}`;

      const response = await fetch(url);

      dispatch(TotalSingleSongPlayCountFetchSuccess(response.data.data))

    } catch (e) {
      dispatch(TotalSingleSongPlayCountFetchFail(e))
    }
  }
}


// fetch single song earning
export const fetchSingleSongEarning = (type, song_id, year) => {
  return async dispatch => {
    dispatch(TotalSingleSongEarningFetchRequest(song_id))
    try {
      // const response = await fetch('api/v1/artists/getfollowerscount?year='+year);

      let url = year ? `api/v1/artists/getsongsanalyticsdetails?year=${year}&type=${type}&song_id=${song_id}` : `api/v1/artists/getsongsanalyticsdetails?type=${type}&song_id=${song_id}`;

      const response = await fetch(url);

      dispatch(TotalSingleSongEarningFetchSuccess(response.data.data))

    } catch (e) {
      dispatch(TotalSingleSongEarningFetchFail(e))
    }
  }
}

// end fetch single song earning
/**
 * end analytic related
 */


/**
 *  album related
 */

// get my albums
export const fetchMyAlbums = (dateRange = { start: '', end: '' }, search = '',) => {
  return async dispatch => {
    dispatch(myAlbumFetchRequest())
    try {
      const response = await fetch(`api/v1/artists/myalbums?start_date=${dateRange.start}&end_date=${dateRange.end}&keyword=${search}`)
      dispatch(myAlbumFetchSuccess(response.data.data.albums))
    } catch (e) {
      dispatch(myAlbumFetchFail(e.response))
    }
  }
}



export const fetchMoreAlbums = (dateRange = { start: '', end: '' }, page, search = '') => {
  return async dispatch => {
    dispatch(moreAlbumFetchRequest())
    try {
      const response = await fetch(`api/v1/artists/myalbums?start_date=${dateRange.start}&end_date=${dateRange.end}&page=${page}&keyword=${search}`)
      dispatch(moreAlbumFetchSuccess({ albums: response.data.data.albums, currentPage: response.data.page_meta.current_page }))
    } catch (e) {
      dispatch(moreAlbumFetchFail(e.response))
    }
  }
}



// upload albums
export const uploadAlbum = (formData) => {
  return async dispatch => {
    dispatch(uploadAlbumRequest())
    try {
      const response = await httpFormData().post('api/v1/albums', formData)
      dispatch(uploadAlbumSuccess(response.data.data))
      message.success('New album created successfully');
      dispatch(push('/my-albums'))
    } catch (e) {
      dispatch(uploadAlbumFail(e.response))
    }
  }
}


export const updateAlbum = (formData, id) => {
  return async dispatch => {
    dispatch(uploadAlbumRequest())
    try {
      const response = await httpFormData().put('api/v1/albums/' + id, formData)
      dispatch(uploadAlbumSuccess(response.data.data))
      message.success('Album updated successfully');
      dispatch(push('/my-albums'))
    } catch (e) {
      dispatch(uploadAlbumFail(e.response))
    }
  }
}

// end uploads albums


/**
 * end  album related
 */


/**Songs related */
export const fetchMySongs = (dateRange = { start: '', end: '' }, search = '') => {
  return async dispatch => {
    dispatch(mySongFetchRequest())
    try {
      const response = await fetch(`api/v1/artists/mysongs?start_date=${dateRange.start}&end_date=${dateRange.end}&keyword=${search}`)
      dispatch(mySongFetchSuccess(response.data.data.songs))
      dispatch(mySongMetaFetchSuccess(response.data.page_meta))
    } catch (e) {
      dispatch(mySongFetchFail(e))
    }
  }
}

export const fetchMoreSongs = (dateRange = { start: '', end: '' }, page, search = "") => {
  return async dispatch => {
    dispatch(moreSongFetchRequest())
    try {
      const response = await fetch(`api/v1/artists/mysongs?start_date=${dateRange.start}&end_date=${dateRange.end}&page=${page}&keyword=${search}`)
      dispatch(moreSongFetchSuccess({ songs: response.data.data.songs, currentPage: response.data.page_meta.current_page }))
    } catch (e) {
      dispatch(moreSongFetchFail(e.response))
    }
  }
}


export const fetchPopularSongs = () => {
  return async dispatch => {
    dispatch(artistPSfetchRequest())
    try {
      const response = await fetch('api/v1/artists/getpopularsongs')
      dispatch(artistPSfetchSuccess(response.data.data.popular_songs))
    } catch (e) {
      dispatch(artistPSfetchFail(e.response))
      // message.error('Something went wrong while fetching popular songs')
    }
  }
}



export const uploadSong = (formData, options) => {
  return async dispatch => {
    dispatch(songUploadFetchRequest())
    try {
      const response = await httpFormData().post('api/v1/songs', formData, options)
      dispatch(songUploadFetchSuccess(response.data.data.song))
      message.success('New song added successfully');
      dispatch(push('/my-songs'))
    } catch (e) {
      dispatch(songUploadFetchFail(e))
      message.error('Oops !! Something went wrong');
    }
  }
}

export const updateSong = (formData, id, options) => {
  return async dispatch => {
    dispatch(songUploadFetchRequest())
    try {
      const response = await httpFormData().put('api/v1/songs/' + id, formData, options)
      dispatch(songUploadFetchSuccess(response.data.data.song))
      message.success('song updated successfully');
      dispatch(push('/my-songs'))
    } catch (e) {
      dispatch(songUploadFetchFail(e))
      message.error('Oops !! Something went wrong');
    }
  }
}


export const editSong = (song)=>{
  return dispatch=>{
    dispatch(setEditSong(song));
  }
}


export const rmEditSong = () =>{
  return dispatch =>{
    dispatch(removeEditSong());
  }
}


export const songDeleteRequest = async(formData,setLoader,closeModal)=>{
  setLoader(true);
  try{
    await httpFormData().post('api/v1/artists/songs',formData);
    message.success('Song delete request has been sent successfully! You will be notified soon');
    setLoader(false);
    closeModal();
  }catch{
    message.error('Something went wrong!')
    setLoader(false);
  }
}


/**end Songs related */




export const editAlbum = (album)=>{
  return dispatch=>{
    dispatch(setEditAlbum(album));
  }
}


export const rmEditAlbum= () =>{
  return dispatch =>{
    dispatch(removeEditAlbum());
  }
}

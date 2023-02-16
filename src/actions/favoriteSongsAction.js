import {
    FAVORITE_SONGS_FETCH_REQUEST,
    FAVORITE_SONGS_FETCH_REQUEST_SUCCESS,
    FAVORITE_SONGS_FETCH_REQUEST_FAILURE,
    FAVORITE_SONGS_CLEAN_REQUEST,
    FAVORITE_SONGS_FETCH_DETAIL_SUCCESS,
    
 } from '../constants/actionTypes';
  
 export const favoriteSongsFetchRequest = () => {
    return {
        type: FAVORITE_SONGS_FETCH_REQUEST,
    };
 };

  export const favoriteSongsFetchRequestSuccess = data => {
    return {
        type: FAVORITE_SONGS_FETCH_REQUEST_SUCCESS,
        data,
    };
 };
 
  

 export const favoriteSongsFetchRequestFailure = error => {
    return {
        type: FAVORITE_SONGS_FETCH_REQUEST_FAILURE,
        error,
    };
 };
  

 export const favoriteSongsCleanRequest = () => {
    return {
        type: FAVORITE_SONGS_CLEAN_REQUEST,
    };
 };
  
  
 export const favouriteSongDetailSuccess = (total_duration,total_songs) =>{
    return {
       type: FAVORITE_SONGS_FETCH_DETAIL_SUCCESS,
       total_duration,
       total_songs
    }
 }
 
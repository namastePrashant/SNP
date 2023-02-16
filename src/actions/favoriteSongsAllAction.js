import {
    FAVORITE_SONGS_ALL_FETCH_REQUEST,
    FAVORITE_SONGS_ALL_FETCH_REQUEST_SUCCESS,
    FAVORITE_SONGS_ALL_FETCH_REQUEST_FAILURE,
    FAVORITE_SONGS_ALL_CLEAN_REQUEST,
    FAVORITE_SONGS_ALL_FETCH_DETAIL_SUCCESS,
    FAVORITE_SONGS_ALL_FETCH_MORE_REQUEST,
    FAVORITE_SONGS_ALL_FETCH_MORE_REQUEST_SUCCESS,
    FAVORITE_SONGS_ALL_FETCH_MORE_REQUEST_FAILURE,
    FAVORITE_SONGS_ALL_FETCH_META_INFO,
 } from '../constants/actionTypes';
  
 export const favoriteSongsAllFetchRequest = () => {
    return {
        type: FAVORITE_SONGS_ALL_FETCH_REQUEST,
    };
 };
 export const favoriteSongsAllFetchMoreRequest = () => {
    return {
        type: FAVORITE_SONGS_ALL_FETCH_MORE_REQUEST,
    };
 };
  
 export const favoriteSongsAllFetchRequestSuccess = data => {
    return {
        type: FAVORITE_SONGS_ALL_FETCH_REQUEST_SUCCESS,
        data,
    };
 };
 export const favoriteSongsAllFetchMoreRequestSuccess = data => {
    return {
        type: FAVORITE_SONGS_ALL_FETCH_MORE_REQUEST_SUCCESS,
        data,
    };
 };
  
 export const favoriteSongsAllFetchMetaInfo = meta => {
    return {
        type: FAVORITE_SONGS_ALL_FETCH_META_INFO,
        meta,
    };
 };
 export const favoriteSongsAllFetchRequestFailure = error => {
    return {
        type: FAVORITE_SONGS_ALL_FETCH_REQUEST_FAILURE,
        error,
    };
 };
  
 export const favoriteSongsAllFetchMoreRequestFailure = error => {
    return {
        type: FAVORITE_SONGS_ALL_FETCH_MORE_REQUEST_FAILURE,
        error,
    };
 };
 export const favoriteSongsAllCleanRequest = () => {
    return {
        type: FAVORITE_SONGS_ALL_CLEAN_REQUEST,
    };
 };
  
  
 export const favouriteSongAllDetailSuccess = (total_duration,total_songs) =>{
    return {
       type: FAVORITE_SONGS_ALL_FETCH_DETAIL_SUCCESS,
       total_duration,
       total_songs
    }
 }
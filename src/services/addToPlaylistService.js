import {
    addToPlaylistRequest, 
    addToPlaylistRequestSuccess, 
    addToPlaylistRequestFailure,
} from '../actions/addToPlaylistAction';

import {
    createPlaylistRequest, 
    createPlaylistRequestSuccess, 
    createPlaylistRequestFailure,
} from '../actions/createUserPlaylistAction';

import {message} from 'antd';

import { store } from '../utils/httpUtil';


export const addSongToPlaylist = (formData) => {
        
    const {songId, playlistId, addToPlaylistCallBack}= formData;

    const songIdFormData = new FormData();

    songIdFormData.append('playlist[song][song_id]', songId);

    return async dispatch => {        

        dispatch(addToPlaylistRequest(playlistId));
        try {                   
            const response = await store(`api/v1/playlists/${playlistId}/set_song`, songIdFormData);            
            if (response.data.success === true) {
                
                dispatch(addToPlaylistRequestSuccess(response.data.data.playlist));
                message.success(`successfully added the song to ${response.data.data.playlist.title} playlist`);
                addToPlaylistCallBack();
            } else {
                // TODO
            }
        } catch (error) {
            
            return dispatch(addToPlaylistRequestFailure(error));            
        }
    };
};

export const createAndAddToPlaylist = (formData) => {
        
    const {songId, playlistTitle, createAndAddToPlaylistCallBack}= formData;

    const newPlaylistFormData = new FormData();

    newPlaylistFormData.append('playlist[title]', playlistTitle);
    newPlaylistFormData.append('song_id', songId);

    return async dispatch => {        

        dispatch(createPlaylistRequest());
        try {                   
            const response = await store(`api/v1/users/playlist`, newPlaylistFormData);            
            if (response.data.success === true) {                
                dispatch(createPlaylistRequestSuccess(response.data.data.playlist));
                message.success(`successfully added the song to ${response.data.data.playlist.title} playlist`);  
                createAndAddToPlaylistCallBack();
            } else {
                // TODO
            }
        } catch (error) {        
            return dispatch(createPlaylistRequestFailure(error));            
        } finally {

        }
    };
};
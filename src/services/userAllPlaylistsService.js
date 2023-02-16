import {
  userAllPlaylistsFetchRequest,
  userAllPlaylistsFetchRequestFailure,
  userAllPlaylistsFetchRequestSuccess,

  updatePlaylistFail,
  updatePlaylistRequest,
  updatePlaylistSuccess, removeFromPlaylistSuccess,



} from '../actions/userAllPlaylistsAction';

import {fetch} from '../utils/httpUtil';
import {httpFormData} from '../utils/httpBaseUtil';
import {message} from "antd";
import {
  deletePlaylistFail,
  deletePlaylistRequest, deletePlaylistSuccess,
  removeSongFromCurrentPlaylist
} from "../actions/individualPlaylistAction";

export const fetchUserAllPlaylists = () => {

  return async dispatch => {


    dispatch(userAllPlaylistsFetchRequest());
    try {
      const response = await fetch('api/v1/users/playlist?per_page=10&sort=desc');
      if (response.data.success === true) {
        dispatch(userAllPlaylistsFetchRequestSuccess(response.data.data.playlist));
      } else {
        // TODO
      }
    } catch (error) {

      return dispatch(userAllPlaylistsFetchRequestFailure(error));
      // return dispatch(userAllPlaylistsFetchRequestFailure(error.response.data));
    }
  };
};


export const updatePlaylist = (formData,closeModel)=>{
  return async dispatch =>{
    dispatch(updatePlaylistRequest());
    try{
      const response = await httpFormData().put(`api/v1/users/playlist`,formData);
      dispatch(updatePlaylistSuccess(response.data.data.playlist));
      closeModel();
      message.success("Playlist updated Successfully");
    }catch(e){
      if(e && e.response){
        dispatch(updatePlaylistFail(e.response.data));
      }
      dispatch(updatePlaylistFail("Error updating"));
      message.error("Something went wrong");
    }
  }
}


export const removeSongFromPlayList = (songId,playlistId)=>{
  return async dispatch=>{
    dispatch(updatePlaylistRequest());
    try{
      await httpFormData().delete(`api/v1/playlists/${playlistId}/unset_song?playlist[song][song_id]=${songId}`);
      dispatch(removeSongFromCurrentPlaylist(songId));
      dispatch(removeFromPlaylistSuccess());
      message.success("Songs removed from playlist Successfully");
    }catch(e){
      if(e && e.response){
        dispatch(updatePlaylistFail(e.response.data));
      }
      dispatch(updatePlaylistFail("Error updating"));
      message.error("Something went wrong");
    }
  }
}

export const deletePlaylist = (playlistId)=>{
  return async dispatch=>{
    dispatch(deletePlaylistRequest());
    try{
      await httpFormData().delete(`api/v1/playlists/${playlistId}`);
      dispatch(deletePlaylistSuccess(playlistId));
      message.success("PlayList deleted");
    }catch(e){
      if(e && e.response){
        dispatch(deletePlaylistFail(e.response.data));
      }
      dispatch(deletePlaylistFail("Error updating"));
      message.error("Something went wrong");
    }
  }
}
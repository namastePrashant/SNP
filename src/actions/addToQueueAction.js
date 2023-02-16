import {
    ADD_SONG_TO_CURRENT_AUDIO_QUEUE, 
    ADD_SONG_TO_CURRENT_AUDIO_QUEUE_CLEAN_REQUEST,    
} from '../constants/actionTypes';


export const addSongToCurrentAudioQueue = (songData) => {   
    console.log('songData', songData)   
    return {
        type:ADD_SONG_TO_CURRENT_AUDIO_QUEUE,
        payload:songData,               
    };
};

export const addSongToCurrentAudioQueueCleanRequest = () => {
    return {
        type: ADD_SONG_TO_CURRENT_AUDIO_QUEUE_CLEAN_REQUEST,
    };
};






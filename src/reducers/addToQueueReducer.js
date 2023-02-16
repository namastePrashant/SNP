import {
    ADD_SONG_TO_CURRENT_AUDIO_QUEUE,   
    ADD_SONG_TO_CURRENT_AUDIO_QUEUE_CLEAN_REQUEST,  
} from '../constants/actionTypes';

const INITIAL_STATE={
    payload:[],
}

const addSongToCurrentAudioQueueReducer = (state=INITIAL_STATE, action)=>{
    switch (action.type){
        case ADD_SONG_TO_CURRENT_AUDIO_QUEUE:
            return {
                payload: action.payload
            }
        case ADD_SONG_TO_CURRENT_AUDIO_QUEUE_CLEAN_REQUEST:
            return Object.assign({}, state, {
                payload: [],                
            });
        default:
            return state;
    }
}

export default addSongToCurrentAudioQueueReducer;
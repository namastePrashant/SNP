import {
    CURRENT_PLAY_SONG,
    CURRENT_PLAY_SONG_ID,
    CURRENT_PLAYER_IS_PLAYING,
    // CURRENT_PLAY_IS_BULK_PLAYING,
    CLEAR_CURRENT_PLAY_SONGS,
} from '../constants/actionTypes';


export const currentPlaySong = (songData) => {

    return {
        type: CURRENT_PLAY_SONG,
        payload: songData,
    };
};

export const currentPlaySongId = (songId) => {
    return {
        type: CURRENT_PLAY_SONG_ID,
        songId: songId,
    };
};

export const isPlayerPlaying = (isPlayerPlaying) => {
    
    return {
        type: CURRENT_PLAYER_IS_PLAYING,
        isPlayerPlaying,
    };
};

export const clearPlayer = () => {
    return {
        type: CLEAR_CURRENT_PLAY_SONGS,
    };
};






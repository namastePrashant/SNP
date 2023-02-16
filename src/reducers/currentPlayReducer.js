import {
    CURRENT_PLAY_SONG,
    CURRENT_PLAY_SONG_ID,
    CURRENT_PLAYER_IS_PLAYING,
    // CURRENT_PLAY_IS_BULK_PLAYING, 
    CLEAR_CURRENT_PLAY_SONGS     
} from '../constants/actionTypes';

const INITIAL_STATE = {
    payload: [],    
    errors: {},
    songId:undefined,
    isPlayerPlaying:false,    
};

/**
 * A reducer takes two arguments, the current state and an action.
 */
const currentPlayReducer = (state, action) => {
    state = state || INITIAL_STATE;

    switch (action.type) {
      case CURRENT_PLAY_SONG:
        return {    
          ...state,
          payload: action.payload,                        
        };

      case CURRENT_PLAY_SONG_ID:
        return {    
          ...state,
          songId: action.songId,                        
        };
      case CURRENT_PLAYER_IS_PLAYING:                                   
        return {    
          ...state,
          isPlayerPlaying: action.isPlayerPlaying,                                               
        };
      
      case CLEAR_CURRENT_PLAY_SONGS:
        return {
          ...state,
          payload:[],
          songId:undefined,
          isPlayerPlaying:false,
        }
                    
      default:
        return state;
    }
};

export default currentPlayReducer;

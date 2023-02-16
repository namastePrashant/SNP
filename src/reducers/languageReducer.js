import {
  LANGUAGE_FETCH_SUCCESS,
  LANGUAGE_FETCH_REQUEST,
  LANGUAGE_FETCH_FAIL,
} from '../constants/actionTypes'


const initialState = {
  payload:[],
  loading:false,
  errors:null
}

const LanguageReducer = (state,action) => {
  state = state || initialState

  switch(action.type){
    case LANGUAGE_FETCH_REQUEST:
      return{
        ...state,
        loading:true,
      }
    
    case LANGUAGE_FETCH_SUCCESS:
      return{
        ...state,
        loading:false,
        payload:action.data
      }
    
    case LANGUAGE_FETCH_FAIL:
      return{
        ...state,
        loading:false,
        errors:action.data
      }
    
    default:
      return state
  }
}

export default LanguageReducer
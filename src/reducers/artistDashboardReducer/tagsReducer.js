import {
  TAG_FETCH_REQUEST,
  TAG_FETCH_FAIL,
  TAG_FETCH_SUCCESS,
} from '../../constants/actionTypes'

const initialState = {
  loading:false,
  Tags:[],
  error:null
}

const tagReducer = (state=initialState,action)=>{
  switch(action.type){
    case TAG_FETCH_REQUEST:
      return{
        ...state,
        loading:true,
      }

    case TAG_FETCH_SUCCESS:
      return{
        ...state,
        loading:false,
        Tags:action.data
      }

    case TAG_FETCH_FAIL:
      return{
        ...state,
        loading:false,
        error:action.data
      }

    default:
      return state
  }
}

export default tagReducer
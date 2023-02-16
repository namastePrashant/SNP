import {
  BANK_DETAIL_FETCH_REQUEST,
  BANK_DETAIL_FETCH_SUCCESS,
  BANK_DETAIL_FETCH_FAIL,

  BANK_DETAIL_UPDATE_REQUEST,
  BANK_DETAIL_UPDATE_SUCCESS,
  BANK_DETAIL_UPDATE_FAIL,
} from '../../constants/actionTypes'


const initialState  = {
  loading:false,
  bankDetails:null,
  error:null,

  updating:false,
}


const ArtistBankReducer = (state=initialState,action) =>{
  switch(action.type){

    case BANK_DETAIL_FETCH_REQUEST:
      return{
        ...state,
        loading:true
      }
    
    case BANK_DETAIL_FETCH_SUCCESS:
      return{
        ...state,
        loading:false,
        bankDetails:action.data
      }
    
    case BANK_DETAIL_FETCH_FAIL:
      return{
        ...state,
        loading:false,
        error:action.data
      }

      case BANK_DETAIL_UPDATE_REQUEST:
        return{
          ...state,
          updating:true
        }
      
      case BANK_DETAIL_UPDATE_SUCCESS:
        return{
          ...state,
          updating:false,
          bankDetails:action.data
        }
      
      case BANK_DETAIL_UPDATE_FAIL:
        return{
          ...state,
          updating:false,
          error:action.data
        }

    
    
    default:
      return state
  }
}

export default ArtistBankReducer
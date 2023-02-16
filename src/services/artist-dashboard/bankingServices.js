import {
  fetchBDRequest,
  fetchBDSuccess,
  fetchBDFail,

  BDUpdateFail,
  BDUpdateRequest,
  BDUpdateSuccess
} from '../../actions/artist-dashboard/bankActions'

import {fetch} from '../../utils/httpUtil'
import {httpFormData} from '../../utils/httpBaseUtil'

  export const fetchBankingDetails = () =>{
    return async dispatch =>{
      dispatch(fetchBDRequest())
      try{
        const response = await fetch('api/v1/artists/bankdetails')
        dispatch(fetchBDSuccess(response.data.data))
      }catch(e){
        dispatch(fetchBDFail(e))
      }
    }
  }

  export const updateBankingDetails = (formData) =>{
    return async dispatch =>{
      dispatch(BDUpdateRequest())
      try{
        const response = await httpFormData().post('api/v1/artists/bankdetails',formData)
        dispatch(BDUpdateSuccess(response.data.data))
        dispatch(fetchBankingDetails())
      }catch(e){
        dispatch(BDUpdateFail(e))
      }
    }
  }
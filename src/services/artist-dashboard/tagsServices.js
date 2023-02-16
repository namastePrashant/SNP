import {
fetchTagSuccess,
fetchTagRequest,
fetchTagFail
} from '../../actions/artist-dashboard/tagActions'

import {fetch} from '../../utils/httpUtil'


// fetch tags
export const fetchTags = (keyword="") => {
  return async dispatch =>{
    dispatch(fetchTagRequest())
    try{
      const response = await fetch('api/v1/tags?keyword='+keyword)
      dispatch(fetchTagSuccess(response.data.data.tags))
    }catch(e){
      dispatch(fetchTagFail(e))
    }
  }
}
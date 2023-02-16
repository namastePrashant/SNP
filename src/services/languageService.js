import {
fetchLanguageFail,
fetchLanguageSuccess,
fetchLanguageRequest
} from '../actions/languageActions'

import {fetch} from '../utils/httpUtil'


// fetch language function
export const fetchLanguage = () => {
  return async dispatch => {
    dispatch(fetchLanguageRequest())
    try{
      const response = await fetch('api/v1/languages?page=1&sort=desc&per_page=10')
      dispatch(fetchLanguageSuccess(response.data.data.languages))
    }catch(error){
      dispatch(fetchLanguageFail(error))
    }
  }
}
// end fetch language function


/**
 * @params keyword
 * @returns updates redux with searched language
*/
export const searchLanguages = (keyword) => {
  return async dispatch => {
    dispatch(fetchLanguageRequest())
    try{
      const response = await fetch('api/v1/languages?keyword='+keyword)
      dispatch(fetchLanguageSuccess(response.data.data.languages))
    }catch(error){
      dispatch(fetchLanguageFail(error))
    }
  }
}
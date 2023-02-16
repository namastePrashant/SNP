import {
    notificationFetchRequest,
    notificationFetchRequestSuccess,
    notificationFetchRequestFailure,
} from '../actions/notificationAction';

import { fetch,destroy,store } from '../utils/httpUtil';


export const fetchNotification = () => {
    return async dispatch => {

        dispatch(notificationFetchRequest());
        try {
            const response = await fetch('api/v1/notifications');
            if (response.data.success === true) {
                dispatch(notificationFetchRequestSuccess(response.data.data.notifications));
            } else {
                // TODO
            }
        } catch (error) {
            return dispatch(notificationFetchRequestFailure(error));
        }
    };
};


export const clearAllNotification = () =>{
  return async dispatch=>{
    dispatch(notificationFetchRequest());
    try{
      await destroy('api/v1/notifications/clear_all')
      const response = await fetch('api/v1/notifications');
      if (response.data.success === true) {
        dispatch(notificationFetchRequestSuccess(response.data.data.notifications));
      }
    }catch (error) {
      return dispatch(notificationFetchRequestFailure(error));
  }
  }
}


export const notificationSeenStatus = (notification_id) =>{
  return async dispatch=>{
    try{
      const formData = {
        notification_id : notification_id
      }
      await store('api/v1/notifications/seenstatus',formData)
    }catch(error){
      dispatch(notificationFetchRequestFailure(error));
    }
  }
}
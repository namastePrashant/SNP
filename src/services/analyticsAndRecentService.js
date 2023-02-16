import { store, update } from '../utils/httpUtil';
import {
    analyticsFetchRequest, 
    analyticsFetchRequestSuccess, 
    analyticsFetchRequestFailure,
} from '../actions/analyticsAction';

export const setAnalyticsAndRecent = (formData) => {
    
    const analyticsData = new FormData();

    Object.keys(formData).forEach((key)=>{        
        if(key==='album_id' || key==='playlist_id' || key==='artist_id'){
            analyticsData.append(key,formData[key])             
        }else{
            analyticsData.append(`analytic[${key}]`, formData[key])            
        }                
    })    

    return async (dispatch)=>{
        
        dispatch(analyticsFetchRequest());
        try {                       
            const response = await store('api/v1/users/sethistory', analyticsData); 
            
            if(response.data.success===true){
                  
                dispatch(analyticsFetchRequestSuccess(response.data.data.analytics));
            }
        } catch (error) {                                    
            dispatch(analyticsFetchRequestFailure(error));
        }
    }

};

export const updateAnalytics = (analyticsUpdateData) => {
    
    const {analyticsId, songPlayDuration}=analyticsUpdateData;
    
    
    return async (dispatch)=>{
        if(songPlayDuration){
            try {                       
                const response = await update(`api/v1/analytics/${analyticsId}?duration=${songPlayDuration}`);     //eslint-disable-line

            } catch (error) {                        
                // console.log('analytics error:', error);
            }
        }
    }

};
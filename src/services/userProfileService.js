import { userDataFetchRequest, userDataFetchRequestFailure, userDataFetchRequestSuccess } from '../actions/userDataAction';
import { userPasswordUpdateRequest, userPasswordUpdateRequestFailure, userPasswordUpdateRequestSuccess } from '../actions/userPasswordAction';

import {
    userProfileFetchRequest,
    userProfileFetchRequestSuccess,
    userProfileFetchRequestFailure,
} from '../actions/userProfileAction';

import { userProfileUpdateRequest, userProfileUpdateRequestFailure, userProfileUpdateRequestSuccess } from '../actions/userUpdateAction';

import { fetch, store, update } from '../utils/httpUtil';
// import { push } from 'connected-react-router';

import { message } from 'antd'

export const fetchUserProfile = () => {
    return async dispatch => {

        dispatch(userProfileFetchRequest());
        try {
            const response = await fetch(`api/v1/users/profile`);


            if (response.data.success === true) {

                dispatch(userProfileFetchRequestSuccess(response.data.data.user));
              
                 if(response.data?.data?.user?.role){
                   localStorage.setItem('role',response.data?.data?.user?.role)
                }

            } else {
                // TODO
            }
        } catch (error) {
            

            return dispatch(userProfileFetchRequestFailure(error));
            // return dispatch(topSongsFetchRequestFailure(error.response.data));
        }
    };
};

export const fetchUserData = () => {
    return async dispatch => {

        dispatch(userDataFetchRequest());
        try {
            const response = await fetch(`api/v1/users/overview`);


            if (response.data.success === true) {

                dispatch(userDataFetchRequestSuccess(response.data.data));
            } else {
                // TODO
            }
        } catch (error) {

            return dispatch(userDataFetchRequestFailure(error));
            // return dispatch(topSongsFetchRequestFailure(error.response.data));
        }
    };
};

export const updateUserProfile = (data) => {
    return async dispatch => {

        dispatch(userProfileUpdateRequest());
        try {
            const response = await update(`api/v1/users/editprofile`, data);


            if (response.data.success === true) {
                dispatch(userProfileUpdateRequestSuccess(response.data.data));
                message.success('Profile Updated Sucessfully!')
            } else {
                // TODO
            }
        } catch (error) {

            return dispatch(userProfileUpdateRequestFailure(error));
            // return dispatch(topSongsFetchRequestFailure(error.response.data));
        }
    };
};

export const updateUserPassword = (data) => {
    return async dispatch => {

        dispatch(userPasswordUpdateRequest());
        try {
            const response = await store(`api/v1/users/changepassword`, data);


            if (response.data.success === true) {
                dispatch(userPasswordUpdateRequestSuccess(response.data.data));
                message.success('Password Updated Sucessfully!')
            } else {
                // TODO
            }
        } catch (error) {

            return dispatch(userPasswordUpdateRequestFailure(error));
            // return dispatch(topSongsFetchRequestFailure(error.response.data));
        }
    };
};


export const updateUserImage = (formData) => {
    return async dispatch => {
        try {
            const response = await store(`api/v1/users/changeprofileimage`, formData);
            if (response.data.success === true) {
                dispatch(fetchUserProfile());
            } else {
                // TODO
            }
        } catch (error) {
            if (error?.response?.data?.error?.message) {
                message.error(error?.response?.data?.error?.message)
            }
        }
    }
}
import { contentTypeHeader, API_URL } from '../constants/appConfig'

export const signUpEndpoint = {
    url: `${API_URL}/auth/`,
    method: "POST",
    headers: contentTypeHeader,
};

export const logoutEndpoint = {
    url: `${API_URL}/auth/sign_out`,
    method: "DELETE",
    headers: contentTypeHeader,
};
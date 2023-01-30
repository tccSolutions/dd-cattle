import axios from "axios";

export const apiClient = axios.create(
    {
    baseURL: '/'
    }
);

export const executeJwtAuthentication = (email, password)=>apiClient.post("validate", {email, password})

 

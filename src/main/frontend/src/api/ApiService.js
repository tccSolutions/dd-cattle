import { apiClient } from "./AuthenticationService"



// <---------------New Registration------------------->

export const register=(user)=>apiClient.post("/register", user)
import { apiClient } from "./AuthenticationService"



// <---------------New Registration------------------->
export const register=(user)=>apiClient.post("register", user)

//Horses
export const getHorses = async () => await apiClient.get('api/horses');
export const getHorseById = async (id) => await apiClient.get(`api/horses/${id}`)
export const getHorsesForSale = async ()=> await apiClient.get('api/horses/for-sale' );
export const getHorsesNotForSale = async ()=> await apiClient.get('api/horses/not-for-sale');
export const getHorseImages = async (name) => await apiClient.get(`api/horses/images/${name}`)


//Medical Records
export const getMedicalRecordById = async(id)=> await apiClient.get(`api/medical-records/${id}`)
export const getMedicalRecordsByHorseId = async (id)=> await apiClient.get(`api/medical-records/horse/${id}`);
export const getLastWormed = async (id)=> await apiClient.get(`api/medical-records/wormed/${id}`)
export const getLastVaccination = async (id)=> await apiClient.get(`api/medical-records/vaccinated/${id}`)
export const getLastCoggins = async (id)=> await apiClient.get(`api/medical-records/coggins/${id}`)
export const getLastRabiesShot = async (id)=> await apiClient.get(`api/medical-records/rabies-shot/${id}`)
export const getWeight = async (id)=>await apiClient.get(`api/medical-records/weight/${id}`)
export const getHeight = async (id)=> await apiClient.get(`api/medical-records/height/${id}`)

export const deleteRecord = async (id) => await apiClient.delete(`api/auth/medical-records/delete/${id}`)
export const addRecord=(record)=>apiClient.post(`api/auth/medical-records/add`, record)
export const updateRecord=(id, record)=>apiClient.put(`api/auth/medical-records/update/${id}`, record)

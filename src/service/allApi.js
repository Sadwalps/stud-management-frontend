import { commonAPI } from "./commonApi"
import { serverURL } from "./serverUrl"

//api for add students details
export const adddetailsAPI = async (reqbody) => {
    return await commonAPI(`POST`, `${serverURL}/details`, reqbody)
}

//api for get students details
export const getdetailsAPI= async()=>{
    return await commonAPI(`GET`, `${serverURL}/details`,"")
}

//api for delete students details
export const deletedetailsAPI= async(id)=>{
    return await commonAPI(`DELETE`,`${serverURL}/details/${id}`,{})
}

//api for edit students details
export const editdetailsAPI = async(id, reqbody)=>{
    return await commonAPI(`PUT`, `${serverURL}/details/${id} `, reqbody)
}
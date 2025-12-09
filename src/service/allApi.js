import { commonAPI } from "./commonApi"
import { serverURL } from "./serverUrl"

//api for add students details
export const adddetailsAPI = async (reqbody) => {
    return await commonAPI(`POST`, `${serverURL}/details`, reqbody)
}
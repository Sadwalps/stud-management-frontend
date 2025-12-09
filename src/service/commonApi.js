import axios from "axios";

export const commonAPI = async (httprequest, url, reqbody) => {
    const reqConfig = {
        method: httprequest,
        url,
        data: reqbody,
        headers: { "Content-Type": "application/json" }
    }
    return await axios(reqConfig).then((result) => {
        return result
    }).catch((error) => {
        return error
    })
}
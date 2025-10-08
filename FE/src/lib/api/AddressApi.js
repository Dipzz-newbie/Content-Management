import axios from "axios"


export const addressCreate = async(token, id, data) => {
    try{
        const response = await axios.post(`${import.meta.env.VITE_API_PATH}/contacts/${id}/addresses`, data, {
            headers: {
                "Content-Type" : "application/json",
                "Accept": "application/json",
                "Authorization" : token
            }
        })
        return {
            status : response.status,
            json : async () => response.data
        }
    } catch(error) {
        return {
            status : error.response.status,
            json: async () => error.response.status
        }
    }
}
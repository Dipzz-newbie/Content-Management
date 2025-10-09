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
            json: async () => error.response.data
        }
    }
}

export const addressList = async(token, id) => {
     try{
        const response = await axios.get(`${import.meta.env.VITE_API_PATH}/contacts/${id}/addresses`, {
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
            json: async () => error.response.data
        }
    }
}

export const addressDetail = async(token, id, addressId) => {
     try{
        const response = await axios.get(`${import.meta.env.VITE_API_PATH}/contacts/${id}/addresses/${addressId}`, {
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
            json: async () => error.response.data
        }
    }
}

export const addressUpdate = async(token, id, addressId, payload) => {
     try{
        const response = await axios.put(`${import.meta.env.VITE_API_PATH}/contacts/${id}/addresses/${addressId}`, payload, {
            headers: {
                "Content-Type" : "application/json",
                "Accept" : "application/json",
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
            json: async () => error.response.data
        }
    }
}

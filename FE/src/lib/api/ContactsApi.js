import axios from "axios";

export const contactCreate = async (token, data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_PATH}/contacts`, data, {
            headers : {
                'Content-type': "application/json",
                'Accept': "application/json",
                'Authorization' : token
            }
        });
        return {
            status: response.status,
            json: async () => response.data
        };
    } catch (error) {
        if (error.response) {
            return {
                status: error.response.status,
                json: async () => error.response.data
            };
        }
        throw error;
    }
}

export const contactList = async (token, fetch = {}) => {

    const {name, email, phone, page} = fetch

    const url = new URL(`${import.meta.env.VITE_API_PATH}/contacts`)
    if(name) url.searchParams.append('name', name)
    if(email) url.searchParams.append('email', email)
    if(phone) url.searchParams.append('phone', phone)
    if(page) url.searchParams.append('page', page)

    try {
        const response = await axios.get(url.toString(), {
            headers : {
                'Content-type': "application/json",
                'Authorization' : token
            }
        });
        return {
            status: response.status,
            json: async () => response.data
        };
    } catch (error) {
        if (error.response) {
            return {
                status: error.response.status,
                json: async () => error.response.data
            };
        }
        throw error;
    }
}


export const contactDelete = async(token, id) => {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_API_PATH}/contact/${id}`, {
            headers : {
                'Content-Type': "application/json",
                'Authorization': token
            }
        });
        return {
            status : response.status,
            json: async () => response.data
        };
    } catch(error) {
        if (error.response) {
            return {
                status : error.response.status,
                json: async () => error.response.data
            }
        }
    }
} 

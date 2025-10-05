import axios from "axios";

export const userRegister = async (data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_PATH}/users`, data);
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


export const userLogin = async (data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_PATH}/users/login`, data);
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

export const userDetail = async (data) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_PATH}/users/current`, {
            headers: {
                'Accept': "aplication/json",
                'Authorization': data
            }
        });
        return {
            status: response.data,
            json: async () => response.data
        }
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
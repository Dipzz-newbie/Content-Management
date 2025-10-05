import axios from "axios";

export const userRegister = async (data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_PATH}/users`, data, {
            headers : {
                'Content-type': "application/json"
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


export const userLogin = async (data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_PATH}/users/login`, data, {
            headers : {
                'Content-type': "application/json"
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

export const userUpdateProfile = async (token, name) => {
    try {
        const response = await axios.patch(`${import.meta.env.VITE_API_PATH}/users/current`, name, {
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

export const userUpdatePassword = async (token, password) => {
    try {
        const response = await axios.patch(`${import.meta.env.VITE_API_PATH}/users/current`, password, {
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

export const userDetail = async (token) => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_PATH}/users/current`, {
            headers: {
                'Accept': "application/json",
                'Authorization': token
            }
        });
        return {
            status: response.status,
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
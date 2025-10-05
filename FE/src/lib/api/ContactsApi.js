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
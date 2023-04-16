const { default: axiosInstance } = require(".");

// ^ Axios: Axios is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6.

export const registerUser = async (payload) => {
    try {
        const response = await axiosInstance.post('/api/users/register', payload);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}

export const loginUser = async (payload) => {
    try {
        
        const response = await axiosInstance.post('/api/users/login',payload);
        return response.data; 

    } catch (error) {
        return error.response.data;
    }
}


export const getUserInfo = async (payload) => {
    try {
        
        const response = await axiosInstance.post('/api/users/get-user-info',payload);
        return response.data; 

    } catch (error) {
        return error.response.data;
    }
}




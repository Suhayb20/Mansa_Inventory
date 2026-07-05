import axios from 'axios';

const baseURL = import.meta.env.VITE_BACKEND_BASE_API 
const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    }

})
// Add a request interceptor to include the access token in the headers
axiosInstance.interceptors.request.use(
    function (config) {
        const accessToken = localStorage.getItem('accessToken')
        if (accessToken){
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    }

)

// Add a response interceptor to handle token expiration and refresh
axiosInstance.interceptors.response.use(
    function (response) {
       
        return response; // Return the response if it's successful

    }, async function (error) { // Handle errors, including token expiration
       
        const originalRequest = error.config;
       if(error.response.status === 401 && !originalRequest.retry) {

        originalRequest.retry = true;
        const refreshToken = localStorage.getItem('refreshToken')

        try {
            const response = await axiosInstance.post(`/token/refresh/`, {refresh: refreshToken})
            // console.log('Token refreshed successfully', response.data.assccess)
            localStorage.setItem('accessToken', response.data.access) 
            originalRequest.headers['Authorization'] = `Bearer ${response.data.access}`
            return axiosInstance(originalRequest) // Retry the original request with the new access token
        }catch (error) {
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
        }
       }
        return Promise.reject(error)
    }


);
export default axiosInstance;
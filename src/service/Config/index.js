import axios from 'axios';

export const baseUrl = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
  baseURL: baseUrl,
  withCredentials: false
  
});

// Request Interceptor
instance.interceptors.request.use((request) => {
  let user = JSON.parse(localStorage.getItem('user'));
  const sessionID = JSON.parse(localStorage.getItem('sessionId'));

  request.headers = {
    ...request.headers, 
    'Accept': "application/json, text/plain, */*",
    'Authorization': `Bearer ${user?.token}`, 
    'sessionId': sessionID,
    'timezone': new Date().getTimezoneOffset(),
    'route': window.location.pathname
  };

  return request; // Ensure the request object is returned
});

// Response Interceptor
instance.interceptors.response.use(
  (response) => {
    // If the response is successful
    return response;
  },
  (error) => {
    // Handle error
    return Promise.reject(error);
  }
);

export default instance;

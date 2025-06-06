import axios from 'axios';
import { toast } from 'sonner';
import { store } from '../redux/store';
import { logout } from '../redux/slices/authSlice';

// Create base axios instance
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://api.rrlto.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000, // 15 seconds
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.token;
    
    // If token exists, add to headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    
    // Handle different error statuses
    if (response) {
      switch (response.status) {
        case 401:
          // Unauthorized - token expired or invalid
          store.dispatch(logout());
          toast.error('Your session has expired. Please login again.');
          break;
          
        case 403:
          // Forbidden
          toast.error('You don\'t have permission to access this resource');
          break;
          
        case 404:
          // Not found
          toast.error('Resource not found');
          break;
          
        case 500:
          // Server error
          toast.error('Server error. Please try again later.');
          break;
          
        default:
          // Other errors
          const errorMessage = response.data?.message || 'Something went wrong';
          toast.error(errorMessage);
      }
    } else {
      // Network error
      toast.error('Network error. Please check your connection.');
    }
    
    return Promise.reject(error);
  }
);

export default api;
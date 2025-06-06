import api from './api';

// Define response types
export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name?: string;
  };
}

export interface AuthError {
  message: string;
  errors?: Record<string, string[]>;
}

// Auth service functions
const authService = {
  // Login with email and password
  login: async (email: string, password: string) => {
    const response = await api.post<LoginResponse>('/auth/login', {
      email,
      password,
    });
    return response.data;
  },
  
  // Request password reset
  forgotPassword: async (email: string) => {
    const response = await api.post('/auth/forgot-password', { email });
    return response.data;
  },
  
  // Verify reset code
  verifyResetCode: async (email: string, code: string) => {
    const response = await api.post('/auth/verify-reset-code', {
      email,
      code,
    });
    return response.data;
  },
  
  // Reset password
  resetPassword: async (email: string, code: string, password: string, password_confirmation: string) => {
    const response = await api.post('/auth/reset-password', {
      email,
      code,
      password,
      password_confirmation,
    });
    return response.data;
  },
  
  // Register new user
  register: async (email: string, password: string, name?: string) => {
    const response = await api.post<LoginResponse>('/auth/register', {
      email,
      password,
      name,
    });
    return response.data;
  },
  
  // Logout
  logout: async () => {
    try {
      await api.post('/auth/logout');
    } catch (error) {
      console.error('Logout error:', error);
      // Even if API logout fails, we still want to remove the token from client
    }
  },
  
  // Get current user profile
  getCurrentUser: async () => {
    const response = await api.get('/auth/me');
    return response.data;
  },
};

export default authService;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthStep = 'login' | 'forgotPassword' | 'verifyCode' | 'resetPassword';

interface UIState {
  authStep: AuthStep;
  email: string;
  verificationCode: string;
  isPasswordVisible: boolean;
}

const initialState: UIState = {
  authStep: 'login',
  email: '',
  verificationCode: '',
  isPasswordVisible: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setAuthStep: (state, action: PayloadAction<AuthStep>) => {
      state.authStep = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setVerificationCode: (state, action: PayloadAction<string>) => {
      state.verificationCode = action.payload;
    },
    togglePasswordVisibility: (state) => {
      state.isPasswordVisible = !state.isPasswordVisible;
    },
    resetUI: () => initialState,
  },
});

export const {
  setAuthStep,
  setEmail,
  setVerificationCode,
  togglePasswordVisibility,
  resetUI,
} = uiSlice.actions;

export default uiSlice.reducer;
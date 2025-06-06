import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@/hooks/useRedux';
import { setAuthStep } from '@/redux/slices/uiSlice';

import AuthLayout from '@/components/auth/AuthLayout';
import LoginForm from '@/components/auth/LoginForm';
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm';
import VerifyCodeForm from '@/components/auth/VerifyCodeForm';
import ResetPasswordForm from '@/components/auth/ResetPasswordForm';

const AuthPage = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { authStep } = useAppSelector((state) => state.ui);
  
  // Sync routes with auth step
  useEffect(() => {
    const path = location.pathname.split('/').pop() || '';
    
    switch (path) {
      case 'forgot-password':
        dispatch(setAuthStep('forgotPassword'));
        break;
      case 'verify-code':
        dispatch(setAuthStep('verifyCode'));
        break;
      case 'reset-password':
        dispatch(setAuthStep('resetPassword'));
        break;
      default:
        if (path !== 'login' && authStep !== 'login') {
          dispatch(setAuthStep('login'));
        }
    }
  }, [location.pathname, dispatch, authStep]);

  return (
    <AuthLayout>
      <Routes>
        <Route path="login" element={<LoginForm />} />
        <Route path="forgot-password" element={<ForgotPasswordForm />} />
        <Route path="verify-code" element={<VerifyCodeForm />} />
        <Route path="reset-password" element={<ResetPasswordForm />} />
        <Route path="*" element={<Navigate to="login" />} />
      </Routes>
    </AuthLayout>
  );
};

export default AuthPage;
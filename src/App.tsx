import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'sonner';
import { useAppDispatch, useAppSelector } from './hooks/useRedux';
import { fetchCurrentUser } from './redux/slices/authSlice';
import { useEffect } from 'react';

import AuthPage from './pages/auth/AuthPage';
import Dashboard from './pages/dashboard/Dashboard';
import DashboardLayout from './layouts/DashboardLayout';
// import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, isAuthenticated]);

  return (
    <>
      <Routes>
        <Route
          path="/auth/*"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <AuthPage />}
        />
        <Route
          path="/dashboard"
          element={
            // <ProtectedRoute>
              <DashboardLayout />
            // </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
        </Route>
        <Route
          path="/"
          element={<Navigate to={isAuthenticated ? "/dashboard" : "/auth"} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster position="top-right" richColors />
    </>
  );
}

export default App;
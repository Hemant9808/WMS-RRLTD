import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "sonner";
import { useAppDispatch, useAppSelector } from "./hooks/useRedux";
import { fetchCurrentUser } from "./redux/slices/authSlice";
import { useEffect } from "react";

import AuthPage from "./pages/auth/AuthPage";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardLayout from "./layouts/DashboardLayout";
import Employee from "./pages/Employee/Employee";
import UnderMaintenance from "./components/ui/notFound";
import VendorPage from "./pages/vendor/Vendor";
import VendorTabs from "./pages/vendor/VendorTabs";
import StockInPage from "./pages/stockIn/StockIn";
import StockInTabs from "./pages/stockIn/StockInTabs";
import StockOutPage from "./pages/stockOut/StockOut";
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
        <Route path="/auth/*" element={<AuthPage />} />
        <Route
          path="/dashboard"
          element={
            // <ProtectedRoute>
            <DashboardLayout />
            // </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="employee" element={<Employee />} />
          <Route path="vendor" element={<VendorPage />} />
          <Route path="vendorDetails" element={<VendorTabs />} />
          <Route path="stockIn" element={<StockInPage />} />
          <Route path="stockInDetails" element={<StockInTabs/>} />
          <Route path="notFound" element={<UnderMaintenance />} />
          <Route path="stockOut" element={<StockOutPage/>} />

        </Route>
        <Route path="/" element={<Navigate to={"/auth/login"} />} />

        <Route path="*" element={<Navigate to="/dashboard/notFound" />} />
      </Routes>
      <Toaster position="top-right" richColors />
    </>
  );
}

export default App;

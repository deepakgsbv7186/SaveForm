import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Layout from "./pages/layout";
import Dashboard from "./pages/dashboard";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Error from "./pages/auth/Error";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const ProtectedRoutes = () => {
  const { userData } = useContext(AuthContext);
  return userData?.token ? <Layout /> : <Navigate to="/login" replace />;
};

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Navigate to={"/dashboard"} replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Toaster position="top-center" />
    </>
  );
}

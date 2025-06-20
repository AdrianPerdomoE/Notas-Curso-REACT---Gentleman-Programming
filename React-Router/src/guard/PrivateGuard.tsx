import { Navigate, Outlet } from "react-router-dom";

export const PrivateGuard = () => {

    const token = localStorage.getItem("token");

    const isAuthenticated = !!token;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
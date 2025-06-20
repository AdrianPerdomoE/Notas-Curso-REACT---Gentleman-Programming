import { Navigate, Route } from "react-router-dom";
import { Dashboard } from "./Dashboard/Dashboard";
import { RoutesWithNotFound } from "../Components";

export const PrivateRouter = () => {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </RoutesWithNotFound>
    );
}
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 w-full p-6">
                <Outlet />
            </div>
        </div>
    );
}

export default DashboardLayout;
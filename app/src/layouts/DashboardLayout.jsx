import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex h-screen">
            {/*Sidebar*/}
            <Sidebar />

            {/*Main Content*/}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <Header />

                {/* Page Content */}
                <div className="flex-1 p-6 overflow-y-auto w-full">
                <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;
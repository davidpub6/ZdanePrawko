import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="flex h-screen w-full">
            {/*Sidebar*/}
            <Sidebar />

            {/*Main Content*/}
            <div className="flex-1 flex flex-col w-11/12">
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
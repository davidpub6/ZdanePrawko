import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const menuItems = [
        {name:"Test1", path:"/test1"},
        {name:"Test2", path:"/test2"},
        {name:"Test3", path:"/test3"},
    ];

    return (
        <div className="h-screen w-64 bg-gray-800 text-white flex flex-col p-4">
            <h2 className="text-xl font-bold mb-6"> ZdanePrawko </h2>
            {menuItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => `p-3 rounded-lg transition-colors ${ isActive ? "bg-gray-700 font-semibold" : "hover:bg-gray-700"}`}
                >
                    {item.name}
                </NavLink>
            ))}
        </div>
    );
}

export default Sidebar;
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const menuItems = [
        {name:"Jazdy", path:"/jazdy"},
        {name:"Egzamin", path:"/egzamin"},
        {name:"Nauka", path:"/nauka"},
    ];

    return (
        <div className="h-screen w-1/12 bg-gray-800 text-white flex flex-col p-4">
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
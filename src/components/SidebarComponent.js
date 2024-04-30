import {
  BiUser,
  BiLogOut,
  BiKey,
  BiListOl,
  BiBarChartSquare,
  BiEdit,
} from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Cookies from "js-cookie";

const SidebarComponent = () => {
  const { setCurrentId } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("userData");
    navigate("/");
  };

  return (
    <aside className="text-gray-800 px-2">
      <div className="py-4 border-b border-neutral-200">
        <Link
          to="/dashboard"
          className="block px-4 py-2 rounded-lg transition duration-200 hover:bg-neutral-100 mb-3"
        >
          <BiBarChartSquare className="inline-block mr-1.5 text-2xl" />
          <span className="hidden md:inline">Dashboard</span>
        </Link>
        <Link
          to="/dashboard/list-job-vacancy"
          className="block px-4 py-2 rounded-lg transition duration-200 hover:bg-neutral-100 mb-3"
        >
          <BiListOl className="inline-block mr-1.5 text-2xl" />
          <span className="hidden md:inline">Job List</span>
        </Link>
        <Link
          to="/dashboard/list-job-vacancy/form"
          className="block px-4 py-2 rounded-lg transition duration-200 hover:bg-neutral-100 mb-3"
          onClick={() => setCurrentId(-1)}
        >
          <BiEdit className="inline-block mr-1.5 text-2xl" />
          <span className="hidden md:inline">Create Data</span>
        </Link>
      </div>
      <div className="py-4">
        <Link
          to="/dashboard/profile"
          className="block px-4 py-2 rounded-lg transition duration-200 hover:bg-neutral-100 mb-3"
        >
          <BiUser className="inline-block mr-1.5 text-2xl" />
          <span className="hidden md:inline">Profile</span>
        </Link>
        <Link
          to="/dashboard/change-password"
          className="block px-4 py-2 rounded-lg transition duration-200 hover:bg-neutral-100 mb-3"
        >
          <BiKey className="inline-block mr-1.5 text-2xl" />
          <span className="hidden md:inline">Change Password</span>
        </Link>
        <button
          className="block w-full text-left px-4 py-2 rounded-lg transition duration-200 hover:bg-neutral-100"
          onClick={handleLogout}
        >
          <BiLogOut className="inline-block mr-1.5 text-2xl" />
          <span className="hidden md:inline">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default SidebarComponent;

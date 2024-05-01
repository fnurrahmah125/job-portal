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
    <div className="px-2 text-gray-800">
      <div className="border-b border-neutral-200 py-4">
        <Link
          to="/dashboard"
          className="mb-3 block rounded-lg px-1 py-2 transition duration-200 hover:bg-neutral-100 md:px-2 lg:px-4"
        >
          <BiBarChartSquare className="mr-1.5 inline-block text-2xl" />
          <span className="hidden md:inline">Dashboard</span>
        </Link>
        <Link
          to="/dashboard/list-job-vacancy"
          className="mb-3 block rounded-lg px-1 py-2 transition duration-200 hover:bg-neutral-100 md:px-2 lg:px-4"
        >
          <BiListOl className="mr-1.5 inline-block text-2xl" />
          <span className="hidden md:inline">Job List</span>
        </Link>
        <Link
          to="/dashboard/list-job-vacancy/form"
          className="mb-3 block rounded-lg px-1 py-2 transition duration-200 hover:bg-neutral-100 md:px-2 lg:px-4"
          onClick={() => setCurrentId(-1)}
        >
          <BiEdit className="mr-1.5 inline-block text-2xl" />
          <span className="hidden md:inline">Create Data</span>
        </Link>
      </div>
      <div className="py-4">
        <Link
          to="/dashboard/profile"
          className="mb-3 block rounded-lg px-1 py-2 transition duration-200 hover:bg-neutral-100 md:px-2 lg:px-4"
        >
          <BiUser className="mr-1.5 inline-block text-2xl" />
          <span className="hidden md:inline">Profile</span>
        </Link>
        <Link
          to="/dashboard/change-password"
          className="mb-3 block rounded-lg px-1 py-2 transition duration-200 hover:bg-neutral-100 md:px-2 lg:px-4"
        >
          <BiKey className="mr-1.5 inline-block text-2xl" />
          <span className="hidden md:inline">Change Password</span>
        </Link>
        <button
          className="block w-full rounded-lg px-1 py-2 text-left transition duration-200 hover:bg-neutral-100 md:px-2 lg:px-4"
          onClick={handleLogout}
        >
          <BiLogOut className="mr-1.5 inline-block text-2xl" />
          <span className="hidden md:inline">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default SidebarComponent;

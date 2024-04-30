import { Link } from "react-router-dom";
import { Flowbite, Button, Navbar } from "flowbite-react";
import logo from "../assets/logo.png";
import Cookies from "js-cookie";

const customTheme = {
  navbar: {
    link: {
      active: {
        on: "bg-blue-600 text-white md:bg-transparent md:text-blue-500",
      },
    },
  },
};

const HeaderComponent = ({ container }) => {
  const customClass = container ? "container mx-auto" : "";

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <Navbar fluid rounded className={customClass}>
        <div className="flex items-center">
          <Navbar.Brand>
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite React Logo"
              />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                JobQuest
              </span>
            </Link>
          </Navbar.Brand>
          <span className="hidden md:block md:mx-4">|</span>
          <Link
            to="/job-vacancy"
            className="hidden md:block hover:text-blue-500 transition duration-150"
          >
            Job Vacancy
          </Link>
        </div>
        <div className="hidden md:flex md:order-2">
          {!Cookies.get("token") && (
            <Link to="/login">
              <Button color="blue" pill>
                Login
              </Button>
            </Link>
          )}
          {Cookies.get("token") && (
            <Link to="/dashboard">
              <Button color="blue" pill>
                Dashboard
              </Button>
            </Link>
          )}
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse className="md:hidden absolute left-0 top-[60px] p-4 rounded-b-lg bg-white z-10">
          <Link to="/job-vacancy">
            <Navbar.Link>Job Vacancy</Navbar.Link>
          </Link>
          {!Cookies.get("token") && (
            <Link to="/login">
              <Button color="blue" pill className="mt-8 md:mt-0 w-full">
                Login
              </Button>
            </Link>
          )}
          {Cookies.get("token") && (
            <Link to="/dashboard">
              <Button color="blue" pill className="mt-8 md:mt-0 w-full">
                Dashboard
              </Button>
            </Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    </Flowbite>
  );
};

export default HeaderComponent;

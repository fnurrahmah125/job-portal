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
          <span className="hidden md:mx-4 md:block">|</span>
          <Link
            to="/job-vacancy"
            className="hidden transition duration-150 hover:text-blue-500 md:block"
          >
            Job Vacancy
          </Link>
        </div>
        <div className="hidden md:order-2 md:flex">
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
        <Navbar.Collapse className="absolute left-0 top-[60px] z-10 rounded-b-lg bg-white p-4 md:hidden">
          <Link to="/job-vacancy">
            <Navbar.Link>Job Vacancy</Navbar.Link>
          </Link>
          {!Cookies.get("token") && (
            <Link to="/login">
              <Button color="blue" pill className="mt-8 w-full md:mt-0">
                Login
              </Button>
            </Link>
          )}
          {Cookies.get("token") && (
            <Link to="/dashboard">
              <Button color="blue" pill className="mt-8 w-full md:mt-0">
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

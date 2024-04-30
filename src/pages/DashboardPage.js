import { useEffect, useState } from "react";
import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const DashboardPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const userDataString = Cookies.get("userData");

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setUserData(userData);
    }
  }, []);

  return (
    <div>
      <div className="bg-blue-700 text-white text-3xl font-medium px-7 py-10">
        Welcome back, {userData && userData.name}!
      </div>
      <div className="p-6 grid lg:grid-cols-2 gap-4">
        <Card>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            View job listing
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Discover detailed job descriptions, requirements, and application
            instructions for each position. Stay updated with our dynamic list
            of vacancies, regularly updated to reflect our evolving
            organizational needs.
          </p>
          <Link to="/dashboard/list-job-vacancy">
            <Button color="blue">
              Go to the page
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Link>
        </Card>
        <Card>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Create new vacancy
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-5">
            Ready to build your dream team? Create a new vacancy to find the
            perfect fit for your organization. Define the role, set
            expectations, and attract top talent to propel your business
            forward. Let's shape the future together!
          </p>
          <Link to="/dashboard/list-job-vacancy/form">
            <Button color="blue">
              Go to the page
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Link>
        </Card>
        <Card>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            View your profile info
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-5">
            Take a deep dive into your profile information to discover what
            makes you unique. From basic details like your name and email
            address to more personalized insights, explore the various facets
            that define you. Whether you're updating your preferences or simply
            reflecting on who you are, your profile info provides a window into
            your digital identity. Explore and manage your profile with ease,
            and ensure that your online presence accurately reflects the real
            you.
          </p>
          <Link to="/dashboard/profile">
            <Button color="blue">
              Go to the page
              <svg
                className="-mr-1 ml-2 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;

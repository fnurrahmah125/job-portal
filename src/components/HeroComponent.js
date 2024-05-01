import { Link } from "react-router-dom";

const HeroComponent = () => {
  return (
    <div className="to-98% min-h-[400px] bg-gradient-to-tr from-blue-950 to-blue-700 py-20 text-white md:bg-gradient-to-r lg:py-10">
      <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-3 lg:gap-0">
        <div className="hidden py-8 lg:block ">
          <img
            src="https://www.findmyprofession.com/wp-content/uploads/2016/12/Ideal-Work-Environment-800474-1.png"
            alt="hero"
            Component
            className="h-[480px] w-64 rounded-full object-cover"
          />
        </div>
        <div className="self-center px-2 text-center md:px-0 lg:col-span-2 lg:text-left">
          <h1 className="mb-4 text-3xl font-semibold md:pr-8 md:text-5xl md:leading-snug">
            Discover your new career with JobQuest
          </h1>
          <p className="mb-8 md:text-xl md:font-light">
            Search and find jobs fast and easy
          </p>
          <Link
            to="/job-vacancy"
            className="rounded-full bg-blue-600 px-8 py-3.5 transition duration-300 hover:bg-blue-700"
          >
            View all vacancies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;

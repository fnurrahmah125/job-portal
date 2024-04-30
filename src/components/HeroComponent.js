import { Link } from "react-router-dom";

const HeroComponent = () => {
  return (
    <div className="bg-gradient-to-tr md:bg-gradient-to-r from-blue-950 to-blue-700 to-98% text-white min-h-[400px] py-20 lg:py-10">
      <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-8 lg:gap-0">
        <div className="hidden py-8 lg:block ">
          <img
            src="https://www.findmyprofession.com/wp-content/uploads/2016/12/Ideal-Work-Environment-800474-1.png"
            alt="hero"
            Component
            className="w-64 h-[480px] rounded-full object-cover"
          />
        </div>
        <div className="text-center lg:col-span-2 px-2 lg:text-left self-center md:px-0">
          <h1 className="text-3xl font-semibold mb-4 md:text-5xl md:leading-snug md:pr-8">
            Discover your new career with JobQuest
          </h1>
          <p className="mb-8 md:text-xl md:font-light">
            Search and find jobs fast and easy
          </p>
          <Link
            to="/job-vacancy"
            className="bg-blue-600 px-8 py-3.5 rounded-full transition duration-300 hover:bg-blue-700"
          >
            View all vacancies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;

import CitiesComponent from "../components/CitiesComponent";
import CompaniesComponent from "../components/CompaniesComponent";
import HeroComponent from "../components/HeroComponent";
import JobTypecomponent from "../components/JobTypecomponent";

const Homepage = () => {
  return (
    <>
      <HeroComponent />
      <CitiesComponent />
      <CompaniesComponent />
      <JobTypecomponent />
    </>
  );
};

export default Homepage;

import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";
import company5 from "../assets/company5.png";
import company6 from "../assets/company6.png";
import company7 from "../assets/company7.png";
import company8 from "../assets/company8.png";
import company9 from "../assets/company9.png";
import company10 from "../assets/company10.png";

const CompaniesComponent = () => {
  const companies = [
    company1,
    company2,
    company3,
    company4,
    company5,
    company6,
    company7,
    company8,
    company9,
    company10,
  ];

  return (
    <section className="bg-blue-100 px-4 py-10 md:py-14">
      <div className="container mx-auto">
        <h2 className="mb-10 text-center text-2xl font-semibold md:text-3xl md:leading-snug">
          We are trusted by
        </h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {companies.map((company, index) => (
            <li key={index} className="w-48 rounded-md bg-white py-2">
              <img src={company} alt="company" className="mx-auto h-16" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CompaniesComponent;

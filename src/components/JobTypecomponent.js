const JobTypecomponent = () => {
  const categories = [
    "Data Analyst",
    "Digital Marketing",
    "Management Trainee",
    "Customer Service",
    "Administrasi",
    "Graphic Designer",
    "Content Writer",
    "Quality Assurance",
    "Web Developer",
    "Human Resource",
    "UI/UX Designer",
    "Content Creator",
    "Product Manager",
    "Social Media Specialist",
  ];

  return (
    <section className="py-10 px-4 md:py-14 bg-blue-900 text-white text-center">
      <h2 className="text-2xl font-semibold md:text-3xl md:leading-snug mb-10">
        Urgently needed jobs
      </h2>
      <div className="max-w-5xl mx-auto">
        <ul className="grid grid-cols-2 gap-2 justify-center md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {categories.map((category, index) => (
            <li
              key={index}
              className="relative text-sm md:text-base text-left bg-blue-200 text-blue-900 pl-9 pr-4 py-2 rounded-md after:content-[''] after:h-4 after:w-4 after:bg-blue-50 after:absolute after:left-3 after:top-3 after:rounded-full after:border-4 after:border-blue-500"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default JobTypecomponent;

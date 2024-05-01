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
    <section className="bg-blue-900 px-4 py-10 text-center text-white md:py-14">
      <h2 className="mb-10 text-2xl font-semibold md:text-3xl md:leading-snug">
        Urgently needed jobs
      </h2>
      <div className="mx-auto max-w-5xl">
        <ul className="grid grid-cols-2 justify-center gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {categories.map((category, index) => (
            <li
              key={index}
              className="relative rounded-md bg-blue-200 py-2 pl-9 pr-4 text-left text-sm text-blue-900 after:absolute after:left-3 after:top-3 after:h-4 after:w-4 after:rounded-full after:border-4 after:border-blue-500 after:bg-blue-50 after:content-[''] md:text-base"
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

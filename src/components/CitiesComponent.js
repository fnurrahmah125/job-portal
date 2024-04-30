import map from "../assets/map.png";

const CitiesComponent = () => {
  const cities = [
    "jakarta",
    "bandung",
    "depok",
    "bogor",
    "bekasi",
    "tangerang",
    "medan",
    "surabaya",
    "yogyakarta",
    "semarang",
    "makassar",
    "medan",
  ];

  return (
    <section className="container mx-auto py-10 px-4 md:py-14">
      <h2 className="text-center text-2xl font-semibold md:text-3xl md:leading-snug">
        Find opportunities in big cities
      </h2>
      <img src={map} alt="map" className="mx-auto" />
      <ul className="flex flex-wrap gap-4 max-w-4xl mx-auto justify-center">
        {cities.map((city, index) => (
          <li
            key={index}
            className="rounded-md mb-2 px-4 py-2 capitalize text-center border border-slate-200"
          >
            {city}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CitiesComponent;

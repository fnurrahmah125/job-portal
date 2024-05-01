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
    <section className="container mx-auto px-4 py-10 md:py-14">
      <h2 className="text-center text-2xl font-semibold md:text-3xl md:leading-snug">
        Find opportunities in big cities
      </h2>
      <img src={map} alt="map" className="mx-auto" />
      <ul className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4">
        {cities.map((city, index) => (
          <li
            key={index}
            className="mb-2 rounded-md border border-slate-200 px-4 py-2 text-center capitalize"
          >
            {city}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CitiesComponent;

import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { CiClock2, CiLocationOn, CiMoneyBill, CiSearch } from "react-icons/ci";
import { formatCurrency } from "../utils/helpers";
import SearchFilterComponent from "../components/SearchFilterComponent";

const JobVacancyPage = () => {
  const { data } = useContext(GlobalContext);
  const [filteredData, setFilteredData] = useState(data);
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  const handleFilter = ({ job_tenure, job_type, location }) => {
    const filtered = data.filter((item) => {
      return (
        item.job_tenure.toLowerCase().includes(job_tenure) &&
        item.job_type.toLowerCase().includes(job_type) &&
        item.company_city.toLowerCase().includes(location)
      );
    });
    setFilteredData(filtered);
  };

  return (
    <main className="min-h-screen border-y border-slate-200 pt-10">
      <SearchFilterComponent onSearch={handleSearch} onFilter={handleFilter} />

      {filteredData && (
        <div className="container mx-auto grid gap-4 px-4 py-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredData.map((item) => (
            <Card
              key={item.id}
              className="cursor-pointer transition duration-150 hover:border hover:border-blue-400 hover:bg-white md:max-w-sm"
              onClick={() => navigate(`/job-vacancy/${item.id}`)}
            >
              <div className="flex gap-4">
                <img
                  src={item.company_image_url}
                  alt={item.title}
                  className={
                    item.job_status === 1 ? "h-14 w-14" : "1-14 h-14 blur-sm"
                  }
                />
                <div
                  className={
                    item.job_status === 1 ? "text-gray-900" : "text-neutral-300"
                  }
                >
                  <div className="line-clamp-1 text-lg font-bold tracking-tight">
                    {item.title}
                  </div>
                  <div className="line-clamp-2 text-sm leading-snug">
                    {item.company_name}
                  </div>
                </div>
              </div>
              <div className="flex items-center text-sm font-normal text-gray-700 dark:text-gray-400">
                <CiClock2 className="mr-1 inline-block text-lg" />
                <span className="capitalize text-blue-500">
                  {item.job_tenure} {}
                </span>
              </div>
              <div className="-mt-2 flex items-center text-sm font-normal text-gray-700 dark:text-gray-400">
                <CiLocationOn className="mr-1 inline-block text-lg" />
                <span className="line-clamp-1 capitalize">
                  {item.job_type} • {item.company_city}
                </span>
              </div>
              <div className="-mt-2 flex items-center text-sm font-normal text-gray-700 dark:text-gray-400">
                <CiMoneyBill className="mr-1 inline-block text-lg" />
                <span className="capitalize">
                  Rp {formatCurrency(item.salary_min)} -{" "}
                  {formatCurrency(item.salary_max)}
                </span>
              </div>
              <div className="mt-2 text-xs font-semibold">
                <span
                  className={
                    item.job_status === 1
                      ? "rounded-full bg-green-200 px-4 py-1 text-green-600"
                      : "rounded-full bg-neutral-200 px-4 py-1 text-neutral-600"
                  }
                >
                  {item.job_status === 1 ? "Job Open" : "Job Closed"}
                </span>
              </div>
            </Card>
          ))}
        </div>
      )}

      {!filteredData.length && (
        <div className="pt-32 text-center text-gray-500">
          <CiSearch className="mb-3 inline-block text-9xl" />
          <p className="text-2xl">No matching search results</p>
        </div>
      )}
    </main>
  );
};

export default JobVacancyPage;

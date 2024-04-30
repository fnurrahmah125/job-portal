import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { CiClock2, CiLocationOn, CiMoneyBill, CiSearch } from "react-icons/ci";
import { rupiah } from "../utils/helpers";
import SearchFilterComponent from "../components/SearchFilterComponent";

const JobVacancyPage = () => {
  const { data } = useContext(GlobalContext);
  const [filteredData, setFilteredData] = useState(data);
  const navigate = useNavigate();

  const handleSearch = (searchTerm) => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
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
    <main className="min-h-screen pt-10 border-y border-slate-200">
      <SearchFilterComponent onSearch={handleSearch} onFilter={handleFilter} />

      {filteredData && (
        <div className="container mx-auto px-4 py-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredData.map((item) => (
            <Card
              key={item.id}
              className="md:max-w-sm transition duration-150 hover:bg-white hover:border hover:border-blue-400 cursor-pointer"
              onClick={() => navigate(`/job-vacancy/${item.id}`)}
            >
              <div className="flex gap-4">
                <img
                  src={item.company_image_url}
                  alt={item.title}
                  className={
                    item.job_status === 1 ? "h-14 w-14" : "h-14 1-14 blur-sm"
                  }
                />
                <div
                  className={
                    item.job_status === 1 ? "text-gray-900" : "text-neutral-300"
                  }
                >
                  <div className="text-lg font-bold tracking-tight line-clamp-1">
                    {item.title}
                  </div>
                  <div className="text-sm leading-snug line-clamp-2">
                    {item.company_name}
                  </div>
                </div>
              </div>
              <div className="font-normal text-gray-700 dark:text-gray-400 text-sm flex items-center">
                <CiClock2 className="inline-block text-lg mr-1" />
                <span className="text-blue-500 capitalize">
                  {item.job_tenure} {}
                </span>
              </div>
              <div className="font-normal text-gray-700 dark:text-gray-400 text-sm flex items-center -mt-2">
                <CiLocationOn className="inline-block text-lg mr-1" />
                <span className="capitalize line-clamp-1">
                  {item.job_type} • {item.company_city}
                </span>
              </div>
              <div className="font-normal text-gray-700 dark:text-gray-400 text-sm flex items-center -mt-2">
                <CiMoneyBill className="inline-block text-lg mr-1" />
                <span className="capitalize">
                  Rp {rupiah(item.salary_min)} - {rupiah(item.salary_max)}
                </span>
              </div>
              <div className="text-xs font-semibold mt-2">
                <span
                  className={
                    item.job_status === 1
                      ? "text-green-600 bg-green-200 px-4 py-1 rounded-full"
                      : "text-neutral-600 bg-neutral-200 px-4 py-1 rounded-full"
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
        <div className="text-center pt-32 text-gray-500">
          <CiSearch className="inline-block text-9xl mb-3" />
          <p className="text-2xl">No matching search results</p>
        </div>
      )}
    </main>
  );
};

export default JobVacancyPage;

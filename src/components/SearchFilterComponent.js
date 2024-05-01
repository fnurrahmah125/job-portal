import { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GlobalContext } from "../context/GlobalContext";

const SearchFilterComponent = ({ onSearch, onFilter }) => {
  const { cities } = useContext(GlobalContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState({
    job_tenure: "",
    job_type: "",
    location: "",
  });

  const handleSearch = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
    setFilter({ job_tenure: "", job_type: "", location: "" });
  };

  const handleFilter = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setFilter({ ...filter, [name]: value });
    onFilter({ ...filter, [name]: value });
  };

  return (
    <div className="px-4">
      <div className="container mx-auto md:px-4 ">
        <div className="relative">
          <input
            type="text"
            className="w-full rounded-lg border-neutral-300 px-10 text-slate-600 placeholder:text-neutral-300"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by job title"
          />
          <CiSearch className="absolute left-3 top-2 text-2xl text-neutral-400" />
        </div>

        <div className="flex flex-col gap-4 py-3 md:flex-row">
          <select
            onChange={handleFilter}
            name="job_tenure"
            value={filter.job_tenure}
            className="w-full cursor-pointer appearance-none rounded-md border-neutral-300 bg-neutral-50 px-4 py-2 text-sm text-slate-600"
          >
            <option value="">Job Tenure</option>
            <option value="fulltime">Fulltime</option>
            <option value="internship">Internship</option>
            <option value="part time">Part Time</option>
            <option value="contract">Contract</option>
            <option value="freelance">Freelance</option>
          </select>
          <select
            onChange={handleFilter}
            name="job_type"
            value={filter.job_type}
            className="w-full cursor-pointer appearance-none rounded-md border-neutral-300 bg-neutral-50 px-4 py-2 text-sm text-slate-600"
          >
            <option value="">Job Type</option>
            <option value="remote">Remote</option>
            <option value="onsite">Onsite</option>
            <option value="hybrid">Hybrid</option>
          </select>
          <select
            onChange={handleFilter}
            name="location"
            value={filter.location}
            className="w-full cursor-pointer appearance-none rounded-md border-neutral-300 bg-neutral-50 px-4 py-2 text-sm text-slate-600"
          >
            <option value="">Location</option>
            {cities &&
              cities.map((city) => (
                <option key={city} value={city.toLowerCase()}>
                  {city}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterComponent;

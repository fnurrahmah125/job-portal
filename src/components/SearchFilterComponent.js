import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchFilterComponent = ({ onSearch, onFilter }) => {
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
            className="w-full px-10 rounded-lg text-slate-600 border-neutral-300 placeholder:text-neutral-300"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by job title"
          />
          <CiSearch className="absolute left-3 top-2 text-2xl text-neutral-400" />
        </div>

        <div className="py-3 flex flex-col md:flex-row gap-4">
          <select
            onChange={handleFilter}
            name="job_tenure"
            value={filter.job_tenure}
            className="appearance-none w-full px-4 py-2 rounded-md cursor-pointer bg-neutral-50 border-neutral-300 text-slate-600 text-sm"
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
            className="appearance-none w-full px-4 py-2 rounded-md cursor-pointer bg-neutral-50 border-neutral-300 text-slate-600 text-sm"
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
            className="appearance-none w-full px-4 py-2 rounded-md cursor-pointer bg-neutral-50 border-neutral-300 text-slate-600 text-sm"
          >
            <option value="">Location</option>
            <option value="bandung">Bandung</option>
            <option value="bekasi">Bekasi</option>
            <option value="jakarta">Jakarta</option>
            <option value="surabaya">Surabaya</option>
            <option value="tangerang">Tangerang</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterComponent;

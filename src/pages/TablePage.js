import { Button, Table } from "flowbite-react";
import { BiPlusCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { formatCurrency, truncateString } from "../utils/helpers";
import SearchFilterComponent from "../components/SearchFilterComponent";
import axios from "axios";
import Cookies from "js-cookie";

const TablePage = () => {
  const { data, setFetchStatus, setCurrentId } = useContext(GlobalContext);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleSearch = (searchTerm) => {
    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.company_name.toLowerCase().includes(searchTerm.toLowerCase()),
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

  const navigate = useNavigate();

  const handleEdit = (e) => {
    const idData = parseInt(e.target.value);

    setCurrentId(idData);
    navigate(`/dashboard/list-job-vacancy/edit/${idData}`);
  };

  const handleDelete = (e) => {
    const idData = parseInt(e.target.value);

    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`, {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then((res) => {
        setFetchStatus(true);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="overflow-x-auto p-6">
      <div className="mb-10 flex flex-col items-center md:flex-row md:justify-between">
        <h1 className="mb-6 text-5xl font-medium md:mb-0">Job List</h1>
        <Link to="/dashboard/list-job-vacancy/form">
          <Button color="gray">
            <BiPlusCircle className="mr-2 h-5 w-5" />
            Add new data
          </Button>
        </Link>
      </div>
      <SearchFilterComponent onSearch={handleSearch} onFilter={handleFilter} />
      <div className="mt-8 overflow-x-auto">
        <Table>
          <Table.Head className="bg-blue-100">
            <Table.HeadCell>Company Image</Table.HeadCell>
            <Table.HeadCell>Job Title</Table.HeadCell>
            <Table.HeadCell>Company Name</Table.HeadCell>
            <Table.HeadCell>Job Tenure</Table.HeadCell>
            <Table.HeadCell>Job Type</Table.HeadCell>
            <Table.HeadCell>Location</Table.HeadCell>
            <Table.HeadCell>Salary</Table.HeadCell>
            <Table.HeadCell>Status</Table.HeadCell>
            <Table.HeadCell>Actions</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {filteredData &&
              filteredData.map((item) => {
                return (
                  <Table.Row key={item.id} className="bg-white">
                    <Table.Cell>
                      <img
                        src={item.company_image_url}
                        alt={item.title}
                        className="h-14 w-14"
                      />
                    </Table.Cell>
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                      <div>{truncateString(item.title, 35)}</div>
                    </Table.Cell>
                    <Table.Cell>
                      <div>{truncateString(item.company_name, 35)}</div>
                    </Table.Cell>
                    <Table.Cell className="capitalize">
                      {item.job_tenure}
                    </Table.Cell>
                    <Table.Cell className="capitalize">
                      {item.job_type}
                    </Table.Cell>
                    <Table.Cell className="capitalize">
                      {item.company_city}
                    </Table.Cell>
                    <Table.Cell>
                      {formatCurrency(item.salary_min)} -{" "}
                      {formatCurrency(item.salary_max)}
                    </Table.Cell>
                    <Table.Cell>
                      <div
                        className={
                          item.job_status === 1
                            ? "block rounded-full bg-green-200 px-2 text-center text-sm font-medium text-green-600 "
                            : "block rounded-full bg-neutral-200 px-2 text-center text-sm font-medium text-neutral-600"
                        }
                      >
                        {item.job_status === 1 ? "Open" : "Closed"}
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="flex gap-1">
                        {" "}
                        <button
                          className="mr-4 font-medium text-cyan-600 hover:underline"
                          value={item.id}
                          onClick={handleEdit}
                        >
                          Edit
                        </button>
                        <button
                          className="font-medium text-red-600 hover:underline"
                          value={item.id}
                          onClick={handleDelete}
                        >
                          Delete
                        </button>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default TablePage;

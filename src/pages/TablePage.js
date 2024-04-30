import { Button, Table } from "flowbite-react";
import { BiPlusCircle } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { rupiah } from "../utils/helpers";
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
        item.company_name.toLowerCase().includes(searchTerm.toLowerCase())
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
    <div className="p-6 overflow-x-auto">
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-10">
        <h1 className="text-5xl font-medium mb-6 md:mb-0">Job List</h1>
        <Link to="/dashboard/list-job-vacancy/form">
          <Button color="gray">
            <BiPlusCircle className="h-5 w-5 mr-2" />
            Add new data
          </Button>
        </Link>
      </div>
      <SearchFilterComponent onSearch={handleSearch} onFilter={handleFilter} />
      <div className="overflow-x-auto mt-8">
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
                      <div className="line-clamp-1">{item.title}</div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="line-clamp-1">{item.company_name}</div>
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
                      {rupiah(item.salary_min)} - {rupiah(item.salary_max)}
                    </Table.Cell>
                    <Table.Cell>
                      <div
                        className={
                          item.job_status === 1
                            ? "block text-sm text-green-600 text-center font-medium bg-green-200 rounded-full px-2 "
                            : "block text-sm text-neutral-600 text-center font-medium bg-neutral-200 rounded-full px-2"
                        }
                      >
                        {item.job_status === 1 ? "Open" : "Closed"}
                      </div>
                    </Table.Cell>
                    <Table.Cell>
                      <div className="flex gap-1">
                        {" "}
                        <button
                          className="font-medium text-cyan-600 hover:underline mr-4"
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

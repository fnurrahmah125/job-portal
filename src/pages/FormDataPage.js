import { Button, Label, Textarea, TextInput, Select } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const FormDataPage = () => {
  const { currentId, setCurrentId, setFetchStatus } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [input, setInput] = useState({
    title: "",
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: 0,
    salary_max: 0,
    job_type: "onsite",
    job_tenure: "fulltime",
    job_status: 1,
    job_description: "",
    job_qualification: "",
  });

  useEffect(() => {
    if (currentId !== -1) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`)
        .then((res) => {
          let data = res.data;

          setInput({
            title: data.title,
            company_name: data.company_name,
            company_image_url: data.company_image_url,
            company_city: data.company_city,
            salary_min: data.salary_min,
            salary_max: data.salary_max,
            job_type: data.job_type.toLowerCase(),
            job_tenure: data.job_tenure.toLowerCase(),
            job_status: data.job_status,
            job_description: data.job_description,
            job_qualification: data.job_qualification,
          });
        })
        .catch((error) => console.error("Error fetching data:", error));
    } else {
      setInput({
        title: "",
        company_name: "",
        company_image_url: "",
        company_city: "",
        salary_min: 0,
        salary_max: 0,
        job_type: "onsite",
        job_tenure: "fulltime",
        job_status: 1,
        job_description: "",
        job_qualification: "",
      });
    }
  }, [currentId, setCurrentId]);

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let {
      title,
      company_name,
      company_image_url,
      company_city,
      salary_min,
      salary_max,
      job_type,
      job_tenure,
      job_status,
      job_description,
      job_qualification,
    } = input;

    if (currentId === -1) {
      axios
        .post(
          "https://dev-example.sanbercloud.com/api/job-vacancy",
          {
            title,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
            job_type,
            job_tenure,
            job_status,
            job_description,
            job_qualification,
          },
          { headers: { Authorization: "Bearer " + Cookies.get("token") } },
        )
        .then((res) => {
          setFetchStatus(true);
          navigate("/dashboard/list-job-vacancy");
        });
    } else {
      axios
        .put(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
          {
            title,
            company_name,
            company_image_url,
            company_city,
            salary_min,
            salary_max,
            job_type,
            job_tenure,
            job_status,
            job_description,
            job_qualification,
          },
          { headers: { Authorization: "Bearer " + Cookies.get("token") } },
        )
        .then((res) => {
          setFetchStatus(true);
          navigate("/dashboard/list-job-vacancy");
        });
    }

    setCurrentId(-1);
  };

  return (
    <div className="px-4 py-6 md:py-12">
      <h1 className="text-center text-3xl font-medium md:text-4xl ">
        {currentId === -1 ? "Add new data" : "Edit data"}
      </h1>

      <form
        className="mx-auto mt-6 flex max-w-md flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="title" value="Job Title" />
          </div>
          <TextInput
            id="title"
            type="text"
            name="title"
            value={input.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="company_name" value="Company Name" />
          </div>
          <TextInput
            id="company_name"
            type="text"
            name="company_name"
            value={input.company_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="company_image_url" value="Company Image" />
          </div>
          <TextInput
            id="company_image_url"
            type="text"
            name="company_image_url"
            value={input.company_image_url}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="company_city" value="Location" />
          </div>
          <TextInput
            id="company_city"
            type="text"
            name="company_city"
            value={input.company_city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="salary_min" value="Salary min" />
          </div>
          <TextInput
            id="salary_min"
            type="number"
            name="salary_min"
            value={input.salary_min}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="salary_max" value="Salary max" />
          </div>
          <TextInput
            id="salary_max"
            type="number"
            name="salary_max"
            value={input.salary_max}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="job_type" value="Job Type" />
          </div>
          <Select
            id="job_type"
            name="job_type"
            value={input.job_type}
            onChange={handleChange}
            required
          >
            <option value="onsite">Onsite</option>
            <option value="remote">Remote</option>
            <option value="hybrid">Hybrid</option>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="job_tenure" value="Job Tenure" />
          </div>
          <Select
            id="job_tenure"
            name="job_tenure"
            value={input.job_tenure}
            onChange={handleChange}
            required
          >
            <option value="fulltime">Fulltime</option>
            <option value="internship">Internship</option>
            <option value="part time">Part Time</option>
            <option value="freelance">Freelance</option>
            <option value="contract">Contract</option>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="job_status" value="Status" />
          </div>
          <Select
            id="job_status"
            name="job_status"
            value={input.job_status}
            onChange={handleChange}
            required
          >
            <option value={1}>Open</option>
            <option value={2}>Closed</option>
          </Select>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="job_description" value="Description" />
          </div>
          <Textarea
            id="job_description"
            type="text"
            name="job_description"
            value={input.job_description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="job_qualification" value="Qualification" />
          </div>
          <Textarea
            id="job_qualification"
            type="text"
            name="job_qualification"
            value={input.job_qualification}
            onChange={handleChange}
            required
          />
        </div>
        <Button color="blue" type="submit" className="mt-4">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormDataPage;

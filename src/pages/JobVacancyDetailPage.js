import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  CiCircleChevLeft,
  CiLocationOn,
  CiClock2,
  CiMoneyBill,
} from "react-icons/ci";
import { formatCurrency } from "../utils/helpers";
import { Spinner } from "flowbite-react";
import axios from "axios";

const JobVacancyDetailPage = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  if (data === null) {
    return (
      <div className="grid h-screen w-screen place-content-center">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }

  return (
    <section className="min-h-screen border-y border-slate-200">
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="flex items-center justify-between">
          <Link
            to="/job-vacancy"
            className="flex items-center text-gray-600 hover:text-blue-800"
          >
            <CiCircleChevLeft className="mr-2 rounded-full border-2 border-blue-200 bg-blue-50 text-3xl text-blue-400" />
            <span>Back</span>
          </Link>
          <div
            className={
              data.job_status === 1
                ? "rounded-full bg-green-200 px-4 py-1 text-sm font-medium text-green-600"
                : "rounded-full bg-neutral-200 px-4 py-1 text-sm font-medium text-neutral-600"
            }
          >
            {data.job_status === 1 ? "Job Open" : "Job Closed"}
          </div>
        </div>

        <img
          src={data.company_image_url}
          alt={data.title}
          className="mb-5 mt-12 h-24 w-24"
        />

        <h1 className="mb-1 text-xl font-semibold">{data.title}</h1>
        <div className="mb-4 text-sm text-gray-600">{data.company_name}</div>

        <div className="mb-3 flex items-center gap-2">
          <CiLocationOn className="text-lg" />
          <span className="text-sm font-light capitalize text-gray-700">
            {data.job_type} • {data.company_city}
          </span>
        </div>

        <div className="mb-3 flex items-center gap-2">
          <CiClock2 className="text-lg" />
          <span className="text-sm font-light capitalize text-gray-700">
            {data.job_tenure}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <CiMoneyBill className="text-lg" />
          <span className="text-sm font-light capitalize text-gray-700">
            Rp {formatCurrency(data.salary_min)} -{" "}
            {formatCurrency(data.salary_max)}
          </span>
        </div>

        <h2 className="mb-2 mt-6 font-semibold">Job Description</h2>
        <p className="font-light text-gray-700">{data.job_description}</p>

        <h2 className="mb-2 mt-6 font-semibold">Job Qulifications</h2>
        <p className="font-light text-gray-700">{data.job_qualification}</p>
      </div>
    </section>
  );
};

export default JobVacancyDetailPage;

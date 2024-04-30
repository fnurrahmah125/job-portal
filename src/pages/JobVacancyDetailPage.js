import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  CiCircleChevLeft,
  CiLocationOn,
  CiClock2,
  CiMoneyBill,
} from "react-icons/ci";
import { rupiah } from "../utils/helpers";
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
      <div className="h-screen w-screen grid place-content-center">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }

  return (
    <section className="min-h-screen border-y border-slate-200">
      <div className="max-w-5xl mx-auto py-8 px-4">
        <div className="flex items-center justify-between">
          <Link
            to="/job-vacancy"
            className="flex items-center text-gray-600 hover:text-blue-800"
          >
            <CiCircleChevLeft className="text-3xl text-blue-400 mr-2 bg-blue-50 rounded-full border-2 border-blue-200" />
            <span>Back</span>
          </Link>
          <div
            className={
              data.job_status === 1
                ? "text-sm text-green-600 font-medium bg-green-200 px-4 py-1 rounded-full"
                : "text-sm text-neutral-600 font-medium bg-neutral-200 px-4 py-1 rounded-full"
            }
          >
            {data.job_status === 1 ? "Job Open" : "Job Closed"}
          </div>
        </div>

        <img
          src={data.company_image_url}
          alt={data.title}
          className="h-24 w-24 mt-12 mb-5"
        />

        <h1 className="text-xl font-semibold mb-1">{data.title}</h1>
        <div className="text-sm text-gray-600 mb-4">{data.company_name}</div>

        <div className="flex items-center gap-2 mb-3">
          <CiLocationOn className="text-lg" />
          <span className="capitalize text-gray-700 text-sm font-light">
            {data.job_type} • {data.company_city}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <CiClock2 className="text-lg" />
          <span className="capitalize text-gray-700 text-sm font-light">
            {data.job_tenure}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <CiMoneyBill className="text-lg" />
          <span className="capitalize text-gray-700 text-sm font-light">
            Rp {rupiah(data.salary_min)} - {rupiah(data.salary_max)}
          </span>
        </div>

        <h2 className="font-semibold mb-2 mt-6">Job Description</h2>
        <p className="font-light text-gray-700">{data.job_description}</p>

        <h2 className="font-semibold mb-2 mt-6">Job Qulifications</h2>
        <p className="font-light text-gray-700">{data.job_qualification}</p>
      </div>
    </section>
  );
};

export default JobVacancyDetailPage;

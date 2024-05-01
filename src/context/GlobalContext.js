import { createContext, useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [data, setData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [currentId, setCurrentId] = useState(-1);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
          setData([...res.data.data]);
          setCities(getCityName(res.data.data));
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  const getCityName = (data) => {
    const cities = data.map((item) => item.company_city);
    const filteredCities = [...new Set(cities)];
    return filteredCities;
  };

  if (data === null) {
    return (
      <div className="grid h-screen w-screen place-content-center">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }

  return (
    <GlobalContext.Provider
      value={{
        data,
        fetchStatus,
        currentId,
        cities,
        setFetchStatus,
        setCurrentId,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

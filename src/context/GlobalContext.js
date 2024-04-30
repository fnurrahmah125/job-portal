import { createContext, useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [data, setData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(true);
  const [currentId, setCurrentId] = useState(-1);

  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get("https://dev-example.sanbercloud.com/api/job-vacancy")
        .then((res) => {
          setData([...res.data.data]);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  if (data === null) {
    return (
      <div className="h-screen w-screen grid place-content-center">
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
        setFetchStatus,
        setCurrentId,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

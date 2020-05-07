import { useState, useEffect } from "react";
import axios from "axios";

/*
  custom hook for performing GET request
*/

const useFetch = (initialUrl, initialData) => {
  // Set the list of loans to an empty array
  const [loans, setLoans] = useState(initialData);
  //Set the intial url to be used onLoad
  const [url, setUrl] = useState(initialUrl);
  //Set a boolean isLoading val to show when the API is loading.
  const [isLoading, setIsLoading] = useState(false);
  //Set a boolean isError val for API error handling.
  const [isError, setIsError] = useState(false);

  //Recat hook to make an async call. Used axios here.
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        if (result.status === 200) {
          setLoans(result.data);
        }
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);

  return [{ loans, isLoading, isError }, setUrl];
};

export default useFetch;

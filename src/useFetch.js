import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  // Fetching the data as soon the component renders, but only once, because useEffect has empty array for dependency parameter
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("Could not fetch data for that resource...");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setIsPending(false);
        });
    }, 1000);
  }, [url]); // useEffect dependency reruns useFetch custom hook, whenever url changes

  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;

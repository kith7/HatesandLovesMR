import { useEffect, useState } from "react";

const useMoviesFetch = (url) => {
  const [data, setData] = useState(null);
  const [errMsg, setErrMsg] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    (async function () {
      setisLoading(true);
      setErrMsg("");
      const res = await fetch(url);
      console.log(res);
      const fetchedData = await res.json();

      if (fetchedData) {
        setData(fetchedData);
        setisLoading(false);
        setErrMsg("");
        console.log(fetchedData);
      }
      if (fetchedData.errors) {
        setErrMsg(data.errors[0]);
        console.log(errMsg);
        setisLoading(false);
      }
      setisLoading(false);
    })();
  }, [url]);

  return [data, errMsg, isLoading];
};

export default useMoviesFetch;

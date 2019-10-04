import { useState, useEffect } from "react";
interface DataLoading {
  status: "loading";
}
interface DataLoaded<T> {
  status: "loaded";
  payload: T;
}
interface DataError {
  status: "error";
  error: Error;
}

type Data<T> = DataLoading | DataLoaded<T> | DataError;

function useFetch<T>(apiCall: () => Promise<T>, filter?: string) {
  const [result, setResult] = useState<Data<T>>({
    status: "loading"
  });

  useEffect(() => {
    setResult({ status: "loading" });
    apiCall()
      .then((response: T) => setResult({ status: "loaded", payload: response }))
      .catch((error: Error) => setResult({ status: "error", error }));
  }, [apiCall, filter]);

  return result;
}

export default useFetch;

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

function useFetchID<T>(
  apiCall: (ID: string | number | undefined) => Promise<T>,
  ID: string | number | undefined
) {
  const [result, setResult] = useState<Data<T>>({
    status: "loading"
  });

  useEffect(() => {
    setResult({ status: "loading" });
    apiCall(ID)
      .then((response: T) => setResult({ status: "loaded", payload: response }))
      .catch((error: Error) => setResult({ status: "error", error }));
  }, [apiCall, ID]);

  return result;
}

export default useFetchID;

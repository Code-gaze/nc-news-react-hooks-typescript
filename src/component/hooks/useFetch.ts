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

function useFetch<T>(
  apiCall: (
    topic?: "" | "cooking" | "coding" | "football",
    author?: string,
    sort_by?: string,
    order?: "asc" | "desc",
    limit?: number,
    p?: number
  ) => Promise<T>,
  topic?: "" | "cooking" | "coding" | "football",
  author?: string,
  sort_by?: string,
  order?: "asc" | "desc",
  limit?: number,
  p?: number
) {
  const [result, setResult] = useState<Data<T>>({
    status: "loading"
  });

  useEffect(() => {
    setResult({ status: "loading" });
    apiCall(topic, author, sort_by, order, limit, p)
      .then((response: T) => setResult({ status: "loaded", payload: response }))
      .catch((error: Error) => setResult({ status: "error", error }));
  }, [apiCall, topic, author, limit, order, p, sort_by]);

  return result;
}

export default useFetch;

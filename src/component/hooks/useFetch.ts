import { useState, useEffect, useRef } from "react";
import { count } from "console";
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
    topic?: "cooking" | "coding" | "football",
    author?: string,
    sort_by?: string,
    order?: string,
    limit?: number,
    p?: number
  ) => Promise<T>,
  topic?: "cooking" | "coding" | "football",
  author?: string,
  sort_by?: string,
  order?: string,
  limit?: number,
  p?: number,
  resetPage?: () => void
) {
  const [result, setResult] = useState<Data<T>>({
    status: "loading"
  });
  //reset page to 1 when other dependency changes
  const prevPRef = useRef<number>();
  useEffect(() => {
    prevPRef.current = p;
  });
  const prevP = prevPRef.current;

  useEffect(() => {
    setResult({ status: "loading" });
    if (prevP === p && resetPage !== undefined) {
      resetPage();
      apiCall(topic, author, sort_by, order, limit, 1)
        .then((response: T) =>
          setResult({ status: "loaded", payload: response })
        )
        .catch((error: Error) => setResult({ status: "error", error }));
    } else {
      apiCall(topic, author, sort_by, order, limit, p)
        .then((response: T) =>
          setResult({ status: "loaded", payload: response })
        )
        .catch((error: Error) => setResult({ status: "error", error }));
    }
  }, [apiCall, topic, author, limit, order, p, sort_by]);

  return result;
}

export default useFetch;

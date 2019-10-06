import { useState, useEffect } from "react";
import { IComment } from '../types/index';
interface CommentsLoading {
    status: "loading";
}
interface CommentsLoaded {
    status: "loaded";
    payload: IComment;
}
interface CommentsError {
    status: "error";
    error: Error;
}

type Comments = CommentsLoading | CommentsLoaded | CommentsError;

function useFetchID(
    apiCall: (ID: string | number | undefined) => Promise<IComment>,
    ID: string | number | undefined
) {
    const [result, setResult] = useState<Comments>({
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
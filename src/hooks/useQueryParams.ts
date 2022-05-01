/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
import { useRouter } from "next/router";


type setQueryFuncType = (obj: Record<string, unknown>, shouldReplace?: boolean) => void;

const useQueryParams: () => [Record<string, any>, setQueryFuncType] = () => {
  const router = useRouter();
  const params = new URLSearchParams();
  const queryParams: Record<string, any> = { ...router.query };

  const setQueryParams: setQueryFuncType = (obj, shouldReplace = false) => {
    Object.keys(obj).forEach(key => {
      if (typeof obj[key] !== "undefined") {
        params.set(key, `${obj[key]}`);
      } else {
        params.delete(key);
      }
    });

    const newLocation = `${router.pathname}?${params.toString()}`;
    if (shouldReplace) {
      router.replace(newLocation);
    } else {
      router.push(newLocation)
    }
  }

  return [queryParams, setQueryParams];
}

export default useQueryParams;

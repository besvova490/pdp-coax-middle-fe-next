
import { AxiosError } from "axios";

export default function errorBoundary(error: unknown) {
  const err = error as AxiosError;

  if (err.response && err.response.data) throw err.response.data;
  throw err;
}

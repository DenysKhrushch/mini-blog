import useSWR from "swr";
import {fetcher} from "../api";

export const usePosts = () => {
  const { data, error, isLoading } = useSWR(`${process.env.NX_REACT_APP_BASE_API_URL}/posts`, fetcher)

  return {
    posts: data,
    isLoading,
    isError: error
  }
}

import useSWR from "swr";
import {fetcher} from "../api";

export const usePosts = () => {
  const { data, error, isLoading } = useSWR(`http://localhost:3333/posts`, fetcher)

  return {
    posts: data,
    isLoading,
    isError: error
  }
}

import useSWR from "swr";
import {fetcher} from "../api";

export const usePosts = () => {
  const { data, error, isLoading } = useSWR(`mini-blog-server.vercel.app/posts`, fetcher)

  return {
    posts: data,
    isLoading,
    isError: error
  }
}

import useSWR from "swr";
import {fetcher} from "../api";

export const usePosts = () => {
  const { data, error, isLoading } = useSWR(`https://mini-blog-server-git-main-denyskhrushch.vercel.app/posts`, fetcher)

  return {
    posts: data,
    isLoading,
    isError: error
  }
}

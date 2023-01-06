import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function useGetProfile(id: string) {
  const {
    data: messages,
    error,
    isLoading,
    mutate,
  } = useSWR(`api/users/${id}`, fetcher, {
    errorRetryCount: 4,
  });

  return {
    messages,
    error,
    isLoading,
    mutate,
  };
}

export default useGetProfile;

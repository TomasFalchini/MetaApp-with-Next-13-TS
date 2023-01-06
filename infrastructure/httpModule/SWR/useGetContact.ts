import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function useGetContacts() {
  const {
    data: contacts,
    error,
    isLoading,
    mutate,
  } = useSWR(`api/contacts`, fetcher, {
    errorRetryCount: 4,
  });

  return {
    contacts,
    error,
    isLoading,
    mutate,
  };
}

export default useGetContacts;

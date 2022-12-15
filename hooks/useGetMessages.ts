import axios from "axios";
import useSWR from "swr";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

function useGetMessages(id: string, reciverid: string) {
  const {
    data: messages,
    error,
    isLoading,
    mutate,
  } = useSWR(`api/getMessages/${id}/${reciverid}`, fetcher, {
    errorRetryCount: 4,
  });

  return {
    messages,
    error,
    isLoading,
    mutate,
  };
}

/* 

await mutate (uploadMessage, {
  optimisticData: [message, ...oldMessages],
  rollbackOnError: true
})

*/

export default useGetMessages;

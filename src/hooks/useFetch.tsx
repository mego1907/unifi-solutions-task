import { SetStateAction, useEffect, useState } from "react";

const useFetch = (endpoint: string) => {
  const [data, setData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<SetStateAction<null | unknown>>(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await fetch(`https://bikeindex.org/api/v3/${endpoint}`);
      const data = await res.json();

      setData(data);
      setIsLoading(false);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, isLoading, error };
};

export default useFetch;

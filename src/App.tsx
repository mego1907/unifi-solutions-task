import { List } from "antd";
import Filter from "./components/Filter";
import { useEffect, useState } from "react";
import BikeCard from "./components/BikeCard";
import Error from "./components/Error";

type dataTypes = {
  bikes: {
    thumb: string;
    title: string;
    description: string;
    serial: string;
    date_stolen: number;
    stolen_location: string;
    url: string;
    year: number;
  }[];
};

function App() {
  const [pageNum, setPageNum] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [data, setData] = useState({ bikes: [] } as dataTypes);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [title, setTitle] = useState("");

  const [bikesTotal, setBikesTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(
          `https://bikeindex.org:443/api/v3/search?page=${pageNum}&per_page=${pageSize}&location=Munich&stolenness=stolen&query=${title}`
        );
        const resTotal = await fetch(
          `https://bikeindex.org:443/api/v3/search/count?page=${pageNum}&per_page=${pageSize}&location=Munich&stolenness=stolen&query=${title}`
        );

        const data = await res.json();
        const total = await resTotal.json();

        setData(data);
        setIsLoading(false);
        setBikesTotal(total.stolen);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [pageNum, pageSize, startDate, endDate, title]);


  return (
    <>
      <div className="container py-5">
        <h2 className="text-2xl font-bold text-slate-700">
          <span>Stolen bikes</span>
          <span> ({bikesTotal})</span>
        </h2>

        <div className="pt-10">
          <Filter
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            setTitle={setTitle}
          />
          {/* Error */}
          {error ? (
            <Error />
          ) : (
            <List
              itemLayout="vertical"
              size="large"
              loading={isLoading}
              pagination={{
                onChange: (page, size) => {
                  setPageNum(page);
                  setPageSize(size);
                },
                pageSize: pageSize,

                total: bikesTotal,
              }}
              dataSource={data.bikes}
              renderItem={(item) => <BikeCard {...item} />}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;

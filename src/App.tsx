import { List } from "antd";
import Filter from "./components/Filter";
import Loading from "./components/Loading";
import useFetch from "./hooks/useFetch";
import { useEffect, useState } from "react";
import BikeCard from "./components/BikeCard";

function App() {
  const [pageNum, setPageNum] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [title, setTitle] = useState("");

  const { data: count } = useFetch(`search/count?location=Munich`);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(
          `https://bikeindex.org:443/api/v3/search?page=${pageNum}&per_page=${pageSize}&location=Munich&stolenness=stolen&query=${title}`
          // `https://bikeindex.org:443/api/v3/search?
          //   page=${pageNum}&
          //   per_page=${pageSize}&
          //   query=2019&
          //   location=Munich&
          //   stolenness=stolen
          // `
        );

        const data = await res.json();

        setData(data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [pageNum, pageSize, startDate, endDate, title]);

  if (error) throw error;

  return (
    <>
      <div className="container py-5">
        {/* <Loading loading={isLoading} /> */}
        <h2 className="text-2xl text-slate-700 font-bold">
          <span>Stolen bikes</span>
          <span> ({count?.stolen})</span>
        </h2>

        <div className="pt-10">
          <Filter
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            title={title}
            setTitle={setTitle}
          />
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

              total: count?.stolen,
            }}
            dataSource={data.bikes}
            renderItem={(item) => <BikeCard {...item} />}
          />
        </div>
      </div>
    </>
  );
}

export default App;

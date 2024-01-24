import { List } from "antd";
import Filter from "./components/Filter";
import Loading from "./components/Loading";
import useFetch from "./hooks/useFetch";
import { useEffect, useState } from "react";
import BikeCard from "./components/BikeCard";
import moment from "moment";

function App() {
  const [pageNum, setPageNum] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [title, setTitle] = useState("");

  const { data, isLoading, error } = useFetch(`search`);

  const [bikes, setBikes] = useState(data?.bikes);

  useEffect(() => {
    const newBikes = data?.bikes?.filter((bike: { title: string }) =>
      bike.title.includes(title)
    );

    setBikes(newBikes);
  }, [title, data?.bikes]);

  useEffect(() => {
    const bikesbetweenDates = bikes?.filter((bike) => {
      const from = Date.parse(startDate);
      const to = Date.parse(endDate);

      return bike.date_stolen >= from && bike.date_stolen <= to;
    });

    setBikes(bikesbetweenDates);
  }, [startDate, endDate]);

  if (error) throw error;

  return (
    <>
      <div className="container">
        <h2 className="text-xl text-slate-700 font-semibold">
          Stolen bikes ({data?.bikes?.length})
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
              onChange: (page) => {
                setPageNum(page);
              },
              pageSize: pageSize,
              total: bikes?.length,
            }}
            dataSource={bikes}
            renderItem={(item) => <BikeCard {...item} />}
          />
        </div>
      </div>
    </>
  );
}

export default App;

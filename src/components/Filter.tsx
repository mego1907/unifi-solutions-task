import { Input, DatePicker } from "antd";
import dayjs from "dayjs";

const { RangePicker } = DatePicker;

const Filter = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  title,
  setTitle,
}) => {
  // console.log(urlParams);
  // const url = new URL(window.location.href);

  // function setURLSearchParam(key, value) {
  //   const url = new URL(window.location.href);
  //   url.searchParams.set(key, value);
  //   window.history.pushState({ path: url.href }, "", url.href);
  // }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
    // setURLSearchParam("title", e.target.value);
  };

  const handleDatePicker = (dates) => {
    setStartDate(dayjs(dates[0].$d).format("YYYY-MM-DD"));
    setEndDate(dayjs(dates[1].$d).format("YYYY-MM-DD"));
  };

  return (
    <div className="w-full p-3 border border-green-100 bg-slate-50 rounded-md mb-5">
      <h5 className="text-xl font-semibold mb-3">Filter</h5>
      <div className="flex gap-5">
        <div className="w-3/5">
          <Input
            placeholder="Enter the title here..."
            name="title"
            size="large"
            onChange={handleChangeTitle}
          />
        </div>
        <div className="w-2/5">
          <RangePicker
            format="YYYY-MM-DD"
            size="large"
            style={{ width: "100%" }}
            onChange={handleDatePicker}
            // onChange={(val) => {
            //   console.log(dayjs())
            // }}
          />
        </div>
        <button
          type="button"
          className="border px-8 rounded-md bg-green-300 text-slate-700 font-semibold"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Filter;

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
  let timeout: number | undefined;
  const handleChangeTitle = (e) => {
    timeout = setTimeout(() => {
      setTitle(e.target.value);
    }, 1000);
  };

  const handleDatePicker = (
    dates: { $d: string | number | dayjs.Dayjs | Date | null | undefined }[]
  ) => {
    setStartDate(dayjs(dates[0].$d).format("YYYY-MM-DD"));
    setEndDate(dayjs(dates[1].$d).format("YYYY-MM-DD"));
  };

  return (
    <div className="w-full p-3 mb-5 border border-green-100 rounded-md bg-slate-50">
      <h5 className="mb-3 text-xl font-semibold">Filter</h5>
      <div className="flex gap-5">
        <div className="w-3/5">
          <Input
            placeholder="Enter the title here..."
            name="title"
            size="large"
            onChange={handleChangeTitle}
            onKeyDown={() => clearTimeout(timeout)}
          />
        </div>
        <div className="w-2/5">
          <RangePicker
            format="YYYY-MM-DD"
            size="large"
            style={{ width: "100%" }}
            onChange={handleDatePicker}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;

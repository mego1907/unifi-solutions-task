import { Input, DatePicker } from "antd";
import { RangePickerProps } from "antd/es/date-picker";
import { Dispatch, SetStateAction } from "react";

const { RangePicker } = DatePicker;

type filterProps = {
  setStartDate: Dispatch<SetStateAction<string>>;
  setEndDate: Dispatch<SetStateAction<string>>;
  setTitle: Dispatch<SetStateAction<string>>;
};

const Filter = ({ setStartDate, setEndDate, setTitle }: filterProps) => {
  let timeout: number | undefined;
  const handleChangeTitle = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    timeout = setTimeout(() => {
      setTitle(e.target.value);
    }, 1000);
  };

  const handleDatePicker = (
    _value: RangePickerProps["value"],
    dateString: [string, string] | string
  ) => {
    setStartDate(dateString[0]);
    setEndDate(dateString[1]);
  };

  return (
    <div className="w-full p-3 mb-5 border border-green-100 rounded-md bg-slate-50">
      <h5 className="mb-3 text-xl font-semibold">Filter</h5>
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="w-full md:w-3/5">
          <Input
            placeholder="Enter the title here..."
            name="title"
            size="large"
            onChange={handleChangeTitle}
            onKeyDown={() => clearTimeout(timeout)}
          />
        </div>
        <div className="w-full md:w-2/5">
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

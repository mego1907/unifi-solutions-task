import moment from "moment";

type BikeCardProps = {
  thumb: string;
  title: string;
  description: string;
  serial: string;
  date_stolen: number;
  stolen_location: string;
  url: string;
  year: number;
};

const BikeCard = ({
  thumb,
  title,
  description,
  stolen_location,
  date_stolen,
}: BikeCardProps) => {
  const stolenDefaultImg =
    "https://bikeindex.org/assets/revised/bike_photo_placeholder-ff15adbd9bf89e10bf3cd2cd6c4e85e5d1056e50463ae722822493624db72e56.svg";

  const date = moment(date_stolen).format("YYYY-MM-DD");

  return (
    <div className="flex gap-5 border border-gray-300 rounded-md mb-5">
      <div className="w-[200px] h-[200px] bg-slate-200 rounded-tl-md rounded-bl-md overflow-hidden flex items-center justify-center">
        <img
          className={thumb ? "w-full" : "h[100px] w-[150px]"}
          src={thumb ? thumb : stolenDefaultImg}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <h3 className="text-2xl font-bold text-gray-700">{title}</h3>
        <p className="text-base text-gray-500">{description}</p>
        <p className="text-base">
          <span className="font-bold mr-2">Location:</span>
          {stolen_location ? stolen_location : "unknown"}
        </p>
        <p className="text-base">
          <span className="font-bold">Date:</span>
          {date_stolen ? date : "unknown"}
        </p>
        <p className="text-base">
          <span className="font-bold ">
            Date of when the case was reported :
          </span>
          {date_stolen ? date : "unknown"}
        </p>
      </div>
    </div>
  );
};

export default BikeCard;

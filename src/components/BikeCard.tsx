import { formatDate, stolenDefaultImg } from "./../utils/utils";

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
  url,
}: BikeCardProps) => {
  const date = formatDate(date_stolen);

  return (
    <div className="flex gap-5 border border-gray-300 rounded-md mb-5">
      <div className="w-[200px] min-w-[200px] h-[200px] bg-slate-200 rounded-tl-md rounded-bl-md overflow-hidden flex items-center justify-center">
        <img
          className={thumb ? "w-full" : "h[100px] w-[150px]"}
          src={thumb ? thumb : stolenDefaultImg}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <a
          className="text-2xl font-semibold text-blue-500"
          href={url}
          target="_blank"
        >
          {title}
        </a>
        <p className="text-base text-gray-500">{description}</p>
        <p className="text-base">
          <span className="font-bold uppercase text-gray-500 mr-2">
            Location:
          </span>
          {stolen_location ? stolen_location : "unknown"}
        </p>
        <p className="text-base">
          <span className="font-bold text-red-400 uppercase mr-2">Stolen:</span>
          {date_stolen ? date[0] : "unknown"}
        </p>
        <p className="text-base">
          <span className="font-bold mr-2 uppercase text-gray-500">
            Date the case was reported:
          </span>
          {date_stolen ? `${date[0]}   ${date[1].split("+")[0]}` : "unknown"}
        </p>
      </div>
    </div>
  );
};

export default BikeCard;

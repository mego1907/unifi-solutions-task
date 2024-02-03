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
    <div className="flex flex-col gap-5 mb-5 border border-gray-300 rounded-md md:flex-row">
      <div className="md:w-[200px] md:min-w-[200px] md:h-[200px] bg-slate-200 rounded-tl-md rounded-bl-md overflow-hidden flex items-center justify-center">
        <img
          className={thumb ? "w-full" : "h[100px] w-[150px]"}
          src={thumb ? thumb : stolenDefaultImg}
          alt={title}
        />
      </div>
      <div className="flex flex-col gap-2 p-3 md:mt-2 md:p-0">
        <a
          className="text-lg font-semibold text-blue-500 md:text-2xl"
          href={url}
          target="_blank"
        >
          {title}
        </a>
        <p className="text-gray-500 md:text-base">{description}</p>
        <p className="md:text-base">
          <span className="mr-2 font-bold text-gray-500 uppercase">
            Location:
          </span>
          {stolen_location ? stolen_location : "unknown"}
        </p>
        <p className="md:text-base">
          <span className="mr-2 font-bold text-red-400 uppercase">Stolen:</span>
          {date_stolen ? date[0] : "unknown"}
        </p>
        <p className="md:text-base">
          <span className="mr-2 font-bold text-gray-500 uppercase">
            Date the case was reported:
          </span>
          {date_stolen ? `${date[0]}   ${date[1].split("+")[0]}` : "unknown"}
        </p>
      </div>
    </div>
  );
};

export default BikeCard;

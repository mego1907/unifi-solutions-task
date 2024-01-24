import BikeCard from "./BikeCard";

const ListOfBikes = ({ bikes }: { bikes: [] }) => {
  console.log("bikes :", bikes);
  return (
    <div className="flex flex-col gap-3">
      {bikes?.map(
        (
          {
            thumb,
            title,
            serial,
            description,
            date_stolen,
            stolen_location,
            url,
            year,
          },
          i
        ) => {
          return (
            <div key={i}>
              <BikeCard
                image={thumb}
                title={title}
                description={description}
                serial={serial}
                dateStolen={date_stolen}
                stolenLocation={stolen_location}
                url={url}
                year={year}
              />
            </div>
          );
        }
      )}
    </div>
  );
};

export default ListOfBikes;

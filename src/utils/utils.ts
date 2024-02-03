import moment from "moment";

export const stolenDefaultImg =
  "https://bikeindex.org/assets/revised/bike_photo_placeholder-ff15adbd9bf89e10bf3cd2cd6c4e85e5d1056e50463ae722822493624db72e56.svg";

export const formatDate = (date_stolen: number) => {
  return moment(date_stolen).format().split("T");
};

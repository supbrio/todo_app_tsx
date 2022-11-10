import moment from "moment";

export const todoTimeStamp = (date: string) => {
  return moment(date).format("L");
};

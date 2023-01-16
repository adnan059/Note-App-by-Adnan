const useMakeDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const moment = `${day}-${month}-${year} [${
    hours >= 12 ? hours - 12 : hours
  }:${minutes} ${hours >= 12 ? "pm" : "am"}]`;
  return moment;
};

export default useMakeDate;

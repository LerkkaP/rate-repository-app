const formatDate = ({ date }) => {
  const currentDate = new Date(date);
  const formattedDate = `${currentDate.getDate()}.${
    currentDate.getMonth() + 1
  }.${currentDate.getFullYear()}`;
  return formattedDate;
};

export default formatDate;

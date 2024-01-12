const roundNumber = (value) => {
  if (value >= 1000) {
    return (value / 1000).toFixed(1) + "k";
  }
  return value;
};

export default roundNumber;

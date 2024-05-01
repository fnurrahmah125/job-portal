export const formatCurrency = (number) => {
  return number.toLocaleString("id-ID");
};

export const truncateString = (str, num) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};

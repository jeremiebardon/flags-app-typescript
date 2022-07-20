export const formatNumberWithComma = (number: number | undefined) => {
  if (!number) {
    return undefined;
  }

  const numString = number.toString();
  if (numString.length < 4) return numString;
  return numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

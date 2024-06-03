export const fromDateToFormattedString = (date: string): string => {
  const dateObj = new Date(date);
  return (
    dateObj.getDate() +
    "." +
    (dateObj.getMonth() + 1) +
    "." +
    dateObj.getFullYear()
  );
};

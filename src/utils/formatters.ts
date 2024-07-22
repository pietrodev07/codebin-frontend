export const camelToNormal = (str: string) => {
  return str
    .replace(/([A-Z])/g, " $1")
    .toLowerCase()
    .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    .trim();
};

export const formatDate = (isoDate: string) => {
  const date = new Date(isoDate);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };

  return date.toLocaleDateString("en-US", options);
};

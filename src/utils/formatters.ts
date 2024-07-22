export const camelToNormal = (str: string) => {
  return str
    .replace(/([A-Z])/g, " $1")
    .toLowerCase()
    .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase())
    .trim();
};

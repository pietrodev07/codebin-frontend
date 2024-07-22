export const get = async (url: string) => {
  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  });

  return await response.json();
};

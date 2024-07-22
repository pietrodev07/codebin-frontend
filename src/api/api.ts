export const get = async (url: string) => {
  const response = await fetch(url, {
    method: "GET",
    credentials: "include",
  });

  return await response.json();
};

export const post = async (url: string, body: object) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
};

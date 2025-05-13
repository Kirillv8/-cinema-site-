export const getGenres = async (url: string, token: string) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    if (response.ok) {
      const data = await response.json();

      return data.genres ?? [];
    } else {
      throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
    return [];
  }
};

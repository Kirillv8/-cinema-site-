export const getFavoriteFilms = async (url: string, token: string) => {
  try {
    const response = await fetch(url, {
      method: "Get",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    });

    if (!response.ok) {
      throw new Error(`Ошибка ${Error.name};
            }`);
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.name);
      console.log(error.message);
    } else {
      console.log("Unexpected error:", error);
    }
  }
};

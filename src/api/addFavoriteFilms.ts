export const addFavoriteFilms = async (
  url: string,
  token: string,
  movieId: number,
  favorite: boolean
) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        media_type: "movie",
        media_id: movieId,
        favorite,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
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

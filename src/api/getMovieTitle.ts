export const getMovieTitle = async (movieTitle: string, token: string) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
    movieTitle
  )}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json;charset=utf-8",
      },
    });

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    return data.results;
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.name);
      console.error(error.message);
    } else {
      console.log("Unexpected error:", error);
    }
  }
};

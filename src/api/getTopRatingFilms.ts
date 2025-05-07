export const getTopRatingFilms = async (url: string, token: string) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data.results;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.name);
      console.log(error.message);
    } else {
      console.log("Unexpected error:", error);
    }
  }
};

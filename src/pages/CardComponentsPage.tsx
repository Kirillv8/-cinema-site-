import CardComponent from "../components/Card/CardComponent";
import { useEffect, useState, useContext } from "react";
import { ContextToken } from "../context/ContextForToken/ContextToken";
import { MoviesList } from "../types/movieList";
import { getPopularFilms } from "../api/getPopularFilms";
import { getTopRatingFilms } from "../api/getTopRatingFilms";

const CardComponentsPage = () => {
  const [movies, setMovies] = useState<MoviesList[]>([]);
  const token = useContext(ContextToken);

  useEffect(() => {
    const urlPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${token}`;

    const getMovies = async () => {
      const resultPopularFilms = await getPopularFilms(urlPopular, token);
    };
    getMovies();
  }, [movies]);
  return (
    <>
      <CardComponent movies={movies} />
    </>
  );
};

export default CardComponentsPage;

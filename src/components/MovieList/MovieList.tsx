import { useEffect, useState } from "react";
import { getGenres } from "../../api/moviesApi";

interface Genre {
  id: number | string;
  name: string;
}
const MovieList = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTIwMDQ1ZmZjNDU2Y2ZlNTdmYWFhOTBiNTFjMTk2YSIsIm5iZiI6MTcyMjUyNzM0OS4wODgsInN1YiI6IjY2YWJhZTc1NGZlNDIxMzEwY2QyY2M4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tiiJIjyQwzyPjCE1wkYwAyuFwBAH48g_V2plF_4kwow";

    const reguestGenres = async () => {
      try {
        setLoading(true);
        const result = await getGenres(url, token);

        if (result) {
          setLoading(false);
          setGenres(result);
        } else {
          throw new Error(`Ошибка${error}`);
        }
      } catch (error) {
        setError(true);
      }
    };
    reguestGenres();
  }, []);

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка при загрузке жанров</div>;

  return (
    <>
      {genres.map((genre) => {
        return (
          <div key={genre.id}>
            <input type="checkbox" id={`genre-${genre.id}`} />
            <label htmlFor={`genre-${genre.id}`}>{genre.name}</label>
          </div>
        );
      })}
    </>
  );
};

export default MovieList;

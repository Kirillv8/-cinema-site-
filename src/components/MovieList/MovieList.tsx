import { useEffect, useState } from "react";
import { getGenres } from "../../api/moviesApi";

interface Genre {
  id: number | string;
  name: string;
}

interface MovieListProps {
  selectedGenres: Set<string>;
  setSelectedGenres: React.Dispatch<React.SetStateAction<Set<string>>>;
}

const MovieList: React.FC<MovieListProps> = ({
  selectedGenres,
  setSelectedGenres,
}) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
    const token = "YOUR_TOKEN_HERE";

    const requestGenres = async () => {
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
    requestGenres();
  }, []);

  const handleGenreChange = (genreId: string, isChecked: boolean) => {
    setSelectedGenres((prev) => {
      const newSet = new Set(prev);
      if (isChecked) {
        newSet.add(genreId);
      } else {
        newSet.delete(genreId);
      }
      return newSet;
    });
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка при загрузке жанров</div>;

  return (
    <>
      {genres.map((genre) => (
        <div key={genre.id}>
          <input
            type="checkbox"
            checked={selectedGenres.has(genre.id.toString())}
            onChange={(e) =>
              handleGenreChange(genre.id.toString(), e.target.checked)
            }
            id={`genre-${genre.id}`}
          />
          <label htmlFor={`genre-${genre.id}`}>{genre.name}</label>
        </div>
      ))}
    </>
  );
};

export default MovieList;

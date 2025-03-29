import { useEffect, useState, useContext } from "react";
import { getGenres } from "../../api/moviesApi";
import { ContextToken } from "../../context/ContextForToken/ContextToken";
import AutocompleteComponent from "../Autocomplete/AutocompleteComponent";

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

  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const token = useContext(ContextToken);

  useEffect(() => {
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

  

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка при загрузке жанров</div>;

  return (
    <>
      <AutocompleteComponent movieGenres={genres} />
    </>
  );
};

export default MovieList;

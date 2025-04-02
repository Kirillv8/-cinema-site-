import { Typography, FormControl, Select, MenuItem } from "@mui/material";
import { SelectChangeEvent } from "@mui/material";
import { useState, useEffect, useContext } from "react";
import { getPopularFilms } from "../../api/getPopularFilms";
import { getTopRatingFilms } from "../../api/getTopRatingFilms";
import { ContextToken } from "../../context/ContextForToken/ContextToken";
import CardComponent, { MoviesList } from "../Card/CardComponent";
import MovieList from "../MovieList/MovieList";

const SortMovies = () => {
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [movies, setMovies] = useState<MoviesList[]>([]);
  const token = useContext(ContextToken);

  const handleChange = (e: SelectChangeEvent) => {
    setSortBy(e.target.value);
  };

  useEffect(() => {
    if (!token || !sortBy) return;

    const fetchData = async () => {
      const urlPopular = `https://api.themoviedb.org/3/movie/popular?api_key=${token}`;
      const urlRating = `https://api.themoviedb.org/3/movie/top_rated?api_key=${token}`;

      let result;
      if (sortBy === "popular") {
        result = await getPopularFilms(urlPopular, token);
      } else if (sortBy === "top-rating") {
        result = await getTopRatingFilms(urlRating, token);
      }

      setMovies(result || []);
    };

    fetchData();
  }, [sortBy, token]);

  return (
    <>
      <Typography>Sort by:</Typography>
      <FormControl fullWidth>
        <Select value={sortBy || ""} onChange={handleChange}>
          <MenuItem value="popular">Popular</MenuItem>
          <MenuItem value="top-rating">Top rating</MenuItem>
        </Select>
      </FormControl>
      <CardComponent movies={movies} />
    </>
  );
};

export default SortMovies;

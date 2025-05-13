import { useState, useContext, memo } from "react";
import { Box, Typography, Divider } from "@mui/material";
import Pagination from "../Pagination/Pagination";
import MovieList from "../MovieList/MovieList";
import SliderComponent from "../Slider/Slider";
import MovieTitle from "../Card/MovieTitle";
import CardComponent from "../Card/CardComponent";
import { MoviesList } from "../../types/movieList";
import { ContextMoviesTitle } from "../../context/ContextMoviesTitle/ContextMoviesTitle";

const Filters = () => {
  const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set());
  const [movies] = useState<MoviesList[]>([]);
  const state = useContext(ContextMoviesTitle);

  if (!state) return null;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 4,
        padding: 4,
        flexWrap: "wrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          minWidth: 250,
        }}
      >
        <Typography variant="h5" gutterBottom>
          Фильтры
        </Typography>
        <MovieTitle />
        <SliderComponent />
        <MovieList
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
        />
        <Box>
          <Pagination />
        </Box>
      </Box>

      <Divider orientation="vertical" flexItem />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          flex: 1,
          maxWidth: "1000px",
        }}
      >
        <CardComponent movies={movies.length > 0 ? movies : state.movies} />
      </Box>
    </Box>
  );
};

export default memo(Filters);

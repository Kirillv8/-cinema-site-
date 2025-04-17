import { useState, useContext } from "react";
import { ChangeEvent } from "react";
import { Box, Typography, Divider } from "@mui/material";
import { Delete } from "@mui/icons-material";

import Pagination from "../Pagination/Pagination";
import MovieList from "../MovieList/MovieList";
import SliderComponent from "../Slider/Slider";
import SortMovies from "./SortMovies";

import {
  ContextOptionGenres,
  ContextOptionsYears,
  useChangeDispatch,
} from "../../context/ContextForFlters/ContextForFilters";

const Filters = () => {
  const [selectedGenres, setSelectedGenres] = useState<Set<string>>(new Set());

  const optionsGenres = useContext(ContextOptionGenres);
  const optionsYears = useContext(ContextOptionsYears);
  const dispatch = useChangeDispatch();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: "change",
      event: e.target.value,
    });
  };

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

        <SliderComponent />

        <MovieList
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
        />
        <Box>
          <Pagination />
        </Box>
        {/* <SortMovies /> */}
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
        {/* Карточки фильмов от SortMovies */}
        {/* <SortMovies /> тут карточки фильмов добавить */}
      </Box>
    </Box>
  );
};

export default Filters;

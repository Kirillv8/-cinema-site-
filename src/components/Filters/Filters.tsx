import { useState, useContext } from "react";
import Pagination from "../Pagination/Pagination";
import imageCloseButton from "../../assets/free-icon-close-button.png";
import MovieList from "../MovieList/MovieList";
import Select from "./Select";
import { ChangeEvent } from "react";
import { ContextOptionGenres } from "../../context/ContextForFlters/ContextForFilters";
import { ContextOptionsYears } from "../../context/ContextForFlters/ContextForFilters";
import { useChangeDispatch } from "../../context/ContextForFlters/ContextForFilters";
import { IconButton, Box, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
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

  const resetFilters = () => {
    setSelectedGenres(new Set());
  };

  return (
    <>
      <Box component="section">
        <Box component="div">
          <Typography variant="h5">Фильтры</Typography>
        </Box>
      </Box>
      <Box>
        <IconButton aria-label="fingerprint" color="success">
          {" "}
          <Delete />
        </IconButton>
      </Box>
      <Box>
        <Select
          label={"Сортировать по:"}
          htmlFor={"genres"}
          id={"genres"}
          options={optionsGenres}
          handleChange={handleChange}
        />
        <Select
          label={"Год релиза:"}
          htmlFor={"year"}
          id={"year"}
          options={optionsYears}
          handleChange={handleChange}
        />
      </Box>
      <Box>
        <MovieList
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
        />
      </Box>
      <Box>
        <Pagination />
      </Box>
    </>
  );
};

export default Filters;

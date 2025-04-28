import { Box, Button, TextField } from "@mui/material";
import { getMovieTitle } from "../../api/getMovieTitle";
import { useState, useContext } from "react";
import { ChangeEvent } from "react";
import { ContextToken } from "../../context/ContextForToken/ContextToken";
import { MoviesList } from "../../types/movieList";

interface MovieTitleProps {
  setMovies: React.Dispatch<React.SetStateAction<MoviesList[]>>;
}

const MovieTitle: React.FC<MovieTitleProps> = ({ setMovies }) => {
  const [movieTitle, setMovieTitle] = useState("");
  const token = useContext(ContextToken);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Сабмит сработал");
    const dataGetMovieTitle = await getMovieTitle(movieTitle, token);

    console.log(dataGetMovieTitle);
    
    if (dataGetMovieTitle) {
      setMovies(dataGetMovieTitle);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMovieTitle(e.target.value);
  };

  return (
    <Box component="form" onSubmit={(e) => handleSubmit(e)}>
      <TextField
        label="Movie search"
        variant="outlined"
        value={movieTitle}
        onChange={(e) => handleChange(e)}
      />
      <Button type="submit">Send</Button>
    </Box>
  );
};

export default MovieTitle;

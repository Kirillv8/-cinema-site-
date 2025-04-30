import { Box, Button, TextField } from "@mui/material";
import { getMovieTitle } from "../../api/getMovieTitle";
import { useContext } from "react";
import { ChangeEvent } from "react";
import { ContextToken } from "../../context/ContextForToken/ContextToken";
import { ContextMoviesTitle } from "../../context/ContextMoviesTitle/ContextMoviesTitle";
import { ContextDispathMovieTitle } from "../../context/ContextMoviesTitle/ContextMoviesTitle";

const MovieTitle = () => {
  const token = useContext(ContextToken);
  const state = useContext(ContextMoviesTitle);
  const dispatch = useContext(ContextDispathMovieTitle);

  if (!state || !dispatch) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.query.trim()) {
      console.warn(`Query is empty${state.query}`);
      return;
    }
    const data = await getMovieTitle(state.query, token);
    if (data) {
      dispatch({ type: "SET_MOVIES", payload: data });
      console.log("DISPATCHED DATA:", data);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({ type: "SET_QUERY", payload: e.target.value });
    console.log("QUERY SUBMITTED:", state.query);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Movie search"
        variant="outlined"
        value={state.query}
        onChange={handleChange}
      />
      <Button type="submit">Send</Button>
    </Box>
  );
};

export default MovieTitle;

import { Box, Button, TextField } from "@mui/material";
import { getMovieTitle } from "../../api/getMovieTitle";
import { useContext, memo, useCallback, useState } from "react";
import { ChangeEvent } from "react";
import { ContextToken } from "../../context/ContextForToken/ContextToken";
import { ContextMoviesTitle } from "../../context/ContextMoviesTitle/ContextMoviesTitle";
import { ContextDispathMovieTitle } from "../../context/ContextMoviesTitle/ContextMoviesTitle";

const MovieTitle = () => {
  const [inputValue, setInputValue] = useState("");
  const token = useContext(ContextToken);
  const state = useContext(ContextMoviesTitle);
  const dispatch = useContext(ContextDispathMovieTitle);

 
  if (!state || !dispatch) return null;

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!inputValue.trim()) {
        return;
      }
      const data = await getMovieTitle(inputValue, token);
    
      if (data) {
        dispatch({ type: "SET_MOVIES", payload: data });
        console.log("DISPATCHED DATA:", data);
        console.log("рендер DISPATCHED DATA:, data");
      }
    },
    [token, state, dispatch, inputValue]
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setInputValue(e.target.value);
    },
    [inputValue]
  );

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Movie search"
        variant="outlined"
        value={inputValue}
        onChange={handleChange}
      />
      <Button type="submit">Send</Button>
    </Box>
  );
};

export default memo(MovieTitle);

import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

interface Genre {
  id: number | string;
  name: string;
}

interface PropForAutocompleteComponent {
  movieGenres: Genre[];
}

const AutocompleteComponent: React.FC<PropForAutocompleteComponent> = ({
  movieGenres,
}) => {
  const [genre, setGenre] = useState<Genre[]>([]);

  return (
    <>
      <Autocomplete
        sx={{ width: 300 }}
        value={genre}
        onChange={(e, newVaalue) => {
          setGenre(newVaalue);
        }}
        multiple
        options={movieGenres}
        disableCloseOnSelect
        getOptionLabel={(option) => option.name}
        renderInput={(params) => (
          <TextField {...params} label="Choose a genre" />
        )}
      />
    </>
  );
};

export default AutocompleteComponent;

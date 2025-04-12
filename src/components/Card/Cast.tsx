import { Typography } from "@mui/material";
import { MovieCast } from "../../types/castFilms";

interface PropMovieCast {
  movieCast: MovieCast[];
}

const Cast: React.FC<PropMovieCast> = ({ movieCast }) => {
  return (
    <>
      {" "}
      <Typography variant="body2" color="text.secondary">
        Актёры:
      </Typography>
      {movieCast.map((cast) => (
        <Typography key={cast.id}>{cast.name}</Typography>
      ))}
    </>
  );
};

export default Cast;

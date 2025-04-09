import { Typography } from "@mui/material";
import { MovieDetails } from "../../types/detailsFilms";

interface PropDetails {
  movieDetails: MovieDetails | null;
}
const Detail: React.FC<PropDetails> = ({ movieDetails }) => {
  return (
    <>
      {" "}
      <Typography variant="body2" color="text.secondary">
        Детали:
      </Typography>
      {movieDetails && (
        <Typography variant="body2">{movieDetails.overview}</Typography>
      )}
    </>
  );
};

export default Detail;

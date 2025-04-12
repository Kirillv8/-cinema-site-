import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import DetailsComponent from "./DetailsComponent";
import { PropCardComponent } from "../../types/movieList";

const CardComponent: React.FC<PropCardComponent> = ({ movies }) => {
  return (
    <>
      {movies.map((film) => (
        <Card sx={{ maxWidth: 300, padding: 2 }} key={film.id}>
          <CardMedia
            sx={{ height: 140 }}
            image={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
            title={film.title}
          />
          <CardContent>
            <Typography variant="h6">{film.title}</Typography>
            <Typography variant="body2">{`Rating: ${film.vote_average}`}</Typography>
            <DetailsComponent filmId={film.id} />
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default CardComponent;

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import DetailsComponent from "./DetailsComponent";
import { PropCardComponent } from "../../types/movieList";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

const CardComponent: React.FC<PropCardComponent> = ({ movies }) => {
  return (
    <>
      {movies.map((film) => (
        <Link to={`${film.id}`}>
          <Card sx={{ maxWidth: 300, padding: 2 }} key={film.id}>
            <CardMedia
              sx={{ height: 140 }}
              image={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
              title={film.title}
            />
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">{film.title}</Typography>
                <Button>
                  <FavoriteIcon />
                </Button>
              </Box>
              <Typography variant="body2">{`Rating: ${film.vote_average}`}</Typography>
              <DetailsComponent filmId={film.id} />
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default CardComponent;

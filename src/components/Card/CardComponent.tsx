import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";
import DetailsComponent from "./DetailsComponent";
import { MoviesList, PropCardComponent } from "../../types/movieList";
import { Link } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState, useContext } from "react";
import { addFavoriteFilms } from "../../api/addFavoriteFilms";
import { deleteFavoriteFilms } from "../../api/deleteFavoriteFilms";
import { getFavoriteFilms } from "../../api/getFavoriteFilms";
import { ContextToken } from "../../context/ContextForToken/ContextToken";
import { ContextAccount } from "../../context/ContextAccount/ContextAccount";

const CardComponent: React.FC<PropCardComponent> = ({ movies }) => {
  const [favoriteFilms, setFavoriteFilms] = useState<number[]>([]);
  const token = useContext(ContextToken);
  const { accountId } = useContext(ContextAccount) || {};

  const handleClick = (film: MoviesList) => {
    if (!token || !accountId?.id) return;

    const isFavorite = favoriteFilms.includes(film.id);
    const url = `https://api.themoviedb.org/3/account/${accountId.id}/favorite`;

    setFavoriteFilms((prev) =>
      isFavorite ? prev.filter((id) => id !== film.id) : [...prev, film.id]
    );

    const resultAddFilms = async () => {
      const res = await addFavoriteFilms(url, token, film.id, !isFavorite);
      return res;
    };
    resultAddFilms();
    console.log("ferfrfr");
  };

  return (
    <>
      {movies.map((film) => (
        <Card sx={{ maxWidth: 300, padding: 2 }} key={film.id}>
          <Link to={`${film.id}`}>
            <CardMedia
              sx={{ height: 140 }}
              image={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
              title={film.title}
            />
          </Link>

          <CardContent>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                component={Link}
                to={`${film.id}`}
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                {film.title}
              </Typography>

              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  handleClick(film);
                }}
              >
                <FavoriteIcon
                  sx={{
                    color: favoriteFilms.includes(film.id) ? "red" : "grey",
                  }}
                />
              </Button>
            </Box>

            <Typography variant="body2">{`Rating: ${film.vote_average}`}</Typography>
            <DetailsComponent filmId={film.id} />
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default CardComponent;

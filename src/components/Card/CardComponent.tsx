import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export interface MoviesList {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface PropCardComponent {
  movies: MoviesList[];
}
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
            <Typography variant="body2">{`Rating ${film.vote_average}`}</Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default CardComponent;

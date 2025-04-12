import { CardContent, CardMedia } from "@mui/material";
import { MovieCast } from "../../types/castFilms";
import { MovieDetails } from "../../types/detailsFilms";
import { ContextToken } from "../../context/ContextForToken/ContextToken";
import { useContext, useEffect, useState } from "react";
import { getCastFilms } from "../../api/getCastFilms";
import { getDetailsFilms } from "../../api/getDetailsFilms";
import CastComponent from "./Cast";
import Detail from "./Detail";
import { ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";

interface FilmDetailsProps {
  filmId: number;
}

const DetailsComponent: React.FC<FilmDetailsProps> = ({ filmId }) => {
  const [movieCast, setMovieCast] = useState<MovieCast[]>([]);
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [isVisibleCast, setIsVisibleCast] = useState(false);
  const [isVisbleDetails, setIsVisibleDetails] = useState(false);

  const token = useContext(ContextToken);

  useEffect(() => {
    const fetchData = async () => {
      const movieCredits = `https://api.themoviedb.org/3/movie/${filmId}/credits`;
      const resCastFilms = await getCastFilms(movieCredits, token);
      if (resCastFilms) setMovieCast(resCastFilms);

      const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${filmId}`;
      const resMovieDetails = await getDetailsFilms(movieDetailsUrl, token);
      if (resMovieDetails) setMovieDetails(resMovieDetails);
    };

    fetchData();
  }, [filmId, token]);

  const handleClick = () => {
    setIsVisibleCast(!isVisibleCast);
    setIsVisibleDetails(!isVisbleDetails);
  };

  return (
    <CardContent>
      {isVisibleCast && <CastComponent movieCast={movieCast} />}

      {isVisbleDetails && <Detail movieDetails={movieDetails} />}
      <Button onClick={handleClick}>
        <ArrowForward />
      </Button>
    </CardContent>
  );
};

export default DetailsComponent;

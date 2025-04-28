import { createContext } from "react";
import { useState, useContext } from "react";
import { ContextToken } from "../ContextForToken/ContextToken";
import { getMovieTitle } from "../../api/getMovieTitle";
import { ReactNode } from "react";

interface TypesMoviesTitle {
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
}

interface PropContextMovieTitleComponent {
  children: ReactNode;
}

const ContextMoviesTitle = createContext<TypesMoviesTitle[] | []>([]);

const ContextMovieTitleComponent: React.FC<PropContextMovieTitleComponent> = ({
  children,
}) => {
  const [movies, setMovies] = useState<TypesMoviesTitle[] | []>([]);
  const token = useContext(ContextToken);


 
  
  return (
    <>
      <ContextMoviesTitle.Provider value={movies}>
        children
      </ContextMoviesTitle.Provider>
    </>
  );
};

export default ContextMovieTitleComponent;

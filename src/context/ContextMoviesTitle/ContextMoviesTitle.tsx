import { createContext } from "react";
import { ReactNode } from "react";
import { useReducer } from "react";
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
  vote_count: number;
}

interface PropContextMovieTitleComponent {
  children: ReactNode;
}

type Action =
  | { type: "SET_MOVIES"; payload: TypesMoviesTitle[] }
  | { type: "SET_QUERY"; payload: string };

interface State {
  movies: TypesMoviesTitle[];
  query: string;
}

const initialState: State = {
  movies: [],
  query: "",
};

export const ContextMoviesTitle = createContext<State | null>(null);
export const ContextDispathMovieTitle =
  createContext<React.Dispatch<Action> | null>(null);

const ContextMovieTitleComponent: React.FC<PropContextMovieTitleComponent> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  return (
    <ContextMoviesTitle.Provider value={state}>
      <ContextDispathMovieTitle.Provider value={dispatch}>
        {children}
      </ContextDispathMovieTitle.Provider>
    </ContextMoviesTitle.Provider>
  );
};

export default ContextMovieTitleComponent;

const moviesReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_MOVIES":
      return { ...state, movies: action.payload };
    case "SET_QUERY":
      return { ...state, query: action.payload };
    default:
      return state;
  }
};

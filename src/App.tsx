import { useState } from "react";
import "./App.scss";
import RegistrationModal from "./components/Registration/RegistrationModal";
import AuthorizationModal from "./components/Authorization/Authorization";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import { getGenres } from "./api/moviesApi";

const App: React.FC = () => {
  const [isVisibleReg, setIsVisibleReg] = useState<boolean>(false);
  const [isVisibleAuth, setIsVisibleAuth] = useState<boolean>(false);
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTIwMDQ1ZmZjNDU2Y2ZlNTdmYWFhOTBiNTFjMTk2YSIsIm5iZiI6MTcyMjUyNzM0OS4wODgsInN1YiI6IjY2YWJhZTc1NGZlNDIxMzEwY2QyY2M4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tiiJIjyQwzyPjCE1wkYwAyuFwBAH48g_V2plF_4kwow";
  const result = getGenres(url, token);
  console.log(result);
  return (
    <>
      {isVisibleReg && <RegistrationModal />}
      <Header />
      <Filters />
    </>
  );
};

export default App;

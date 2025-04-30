import { useState, useContext } from "react";
import "./App.scss";
import RegistrationModal from "./components/Registration/RegistrationModal";
import AuthorizationModal from "./components/Authorization/Authorization";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import { ContextToken } from "./context/ContextForToken/ContextToken";
import { FiltersProvider } from "./context/ContextForFlters/ContextForFilters";
import SortMovies from "./components/Filters/SortMovies";
import AppRoutes from "./routes/AppRoutes";
import Navigations from "./components/Navigations/Navigations";
import AccountProvider from "./context/ContextAccount/ContextAccount";
import ContextMovieTitleComponent from "./context/ContextMoviesTitle/ContextMoviesTitle";

const App: React.FC = () => {
  const [isVisibleReg, setIsVisibleReg] = useState<boolean>(false);
  const [isVisibleAuth, setIsVisibleAuth] = useState<boolean>(false);

  const handleClickReg = () => {
    setIsVisibleReg(!isVisibleReg);
  };

  const handleClickAuth = () => {
    setIsVisibleAuth(!isVisibleAuth);
  };

  const token = useContext(ContextToken);
  return (
    <>
      <ContextToken.Provider value={token}>
        {isVisibleReg && <RegistrationModal />}
        <AccountProvider>
          {isVisibleAuth && <AuthorizationModal />}
        </AccountProvider>
        <Navigations />

        <Header
          handleClickReg={handleClickReg}
          handleClickAuth={handleClickAuth}
        />
        <FiltersProvider>
          <ContextMovieTitleComponent>
            {" "}
            <Filters />
            <SortMovies />
          </ContextMovieTitleComponent>

          <AppRoutes />
        </FiltersProvider>
      </ContextToken.Provider>
    </>
  );
};

export default App;

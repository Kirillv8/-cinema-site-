import { useState, useContext, useReducer } from "react";
import "./App.scss";
import RegistrationModal from "./components/Registration/RegistrationModal";
import AuthorizationModal from "./components/Authorization/Authorization";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import { ContextToken } from "./context/ContextForToken/ContextToken";
import { FiltersProvider } from "./context/ContextForFlters/ContextForFilters";
import AutocompleteComponent from "./components/Autocomplete/AutocompleteComponent";
import SortMovies from "./components/Filters/SortMovies";

const App: React.FC = () => {
  const [isVisibleReg, setIsVisibleReg] = useState<boolean>(false);
  const [isVisibleAuth, setIsVisibleAuth] = useState<boolean>(false);

  const handleClick = () => {
    setIsVisibleReg(!isVisibleReg);
  };
  const token = useContext(ContextToken);
  return (
    <>
      <ContextToken.Provider value={token}>
        {isVisibleReg && <RegistrationModal isVisibleReg={isVisibleReg} />}
        <Header handleClick={handleClick} />
        <FiltersProvider>
          <Filters />
          <SortMovies />
        </FiltersProvider>
      </ContextToken.Provider>
    </>
  );
};

export default App;

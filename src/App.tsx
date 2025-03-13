import { useState, useContext } from "react";
import "./App.scss";
import RegistrationModal from "./components/Registration/RegistrationModal";
import AuthorizationModal from "./components/Authorization/Authorization";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import { ContextToken } from "./context/ContextForToken/ContextToken";

const App: React.FC = () => {
  const [isVisibleReg, setIsVisibleReg] = useState<boolean>(false);
  const [isVisibleAuth, setIsVisibleAuth] = useState<boolean>(false);
  const token = useContext(ContextToken);
  return (
    <>
      <ContextToken.Provider value={token}>
        {isVisibleReg && <RegistrationModal />}
        <Header />
        <Filters />
      </ContextToken.Provider>
    </>
  );
};

export default App;

import { useState } from 'react';
import './App.scss';
import RegistrationModal from './components/Registration/RegistrationModal';
import AuthorizationModal from './components/Authorization/Authorization';
import Header from './components/Header/Header';
import Filters from './components/Filters/Filters';


const App: React.FC = () => {
  const [isVisibleReg, setIsVisibleReg] = useState<boolean>(false);
  const [isVisibleAuth, setIsVisibleAuth] = useState<boolean>(false);
  return (
    <>
      {isVisibleReg && <RegistrationModal />}
      <Header />
      <Filters />
    </>
  );
};

export default App;

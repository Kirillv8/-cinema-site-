import { useState } from 'react';
import './App.scss';
import RegistrationModal from './components/Registration/RegistrationModal';
import AuthorizationModal from './components/Authorization/Authorization';

const App: React.FC = () => {
  const [isVisibleReg, setIsVisibleReg] = useState<boolean>(true);
  const [isVisibleAuth, setIsVisibleAuth] = useState<boolean>(false);
  return <>{isVisibleReg && <RegistrationModal />}</>;
};

export default App;

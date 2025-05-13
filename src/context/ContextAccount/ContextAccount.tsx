import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getMyAccountData } from "../../api/getMyAccountData";
import { ContextToken } from "../ContextForToken/ContextToken";

interface AccountId {
  id: number;
}

interface AccountData {
  accountId: AccountId;
}

export const ContextAccount = createContext<AccountData | null>(null);

interface PropAccountProvider {
  children: ReactNode;
}

const AccountProvider: React.FC<PropAccountProvider> = ({ children }) => {
  const [accountId, setAccountId] = useState<AccountId | null>(null);
  const token = useContext(ContextToken);

  useEffect(() => {
    if (!token) return;

    const fetchAccountData = async () => {
      const resAccountId = await getMyAccountData(
        "https://api.themoviedb.org/3/account",
        token
      );
      setAccountId(resAccountId);
    };

    fetchAccountData();
  }, [token]);

  return (
    <ContextAccount.Provider value={accountId ? { accountId } : null}>
      {children}
    </ContextAccount.Provider>
  );
};

export default AccountProvider;

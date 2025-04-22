import { createContext, ReactNode } from "react";
import { getMyAccountData } from "../../api/getMyAccountData";
import { useContext, useEffect, useState } from "react";
import { ContextToken } from "../ContextForToken/ContextToken";

interface AccountData {
  accountId: number | null;
}

export const ContextAccount = createContext<AccountData | null>(null);

interface PropAccountProvider {
  children: ReactNode;
}
const AccountProvider: React.FC<PropAccountProvider> = ({ children }) => {
  const [accountId, setAccountId] = useState(null);
  const token = useContext(ContextToken);
  const urlAccountId = `https://api.themoviedb.org/3/account`;

  useEffect(() => {
    const getMyAccountDataRes = async () => {
      const resAccountId = await getMyAccountData(urlAccountId, token);

      setAccountId(resAccountId);
    };
    getMyAccountDataRes();
  }, [token]);
  return (
    <>
      <ContextAccount.Provider value={{ accountId }}>
        {children}
      </ContextAccount.Provider>
    </>
  );
};

export default AccountProvider;

import { useState } from 'react';
import { AccountInfo, DefaultAccountInfo } from 'src/models/AccountInfo';

const useAccountInfo = () => {
  const [account, setAccount] = useState<AccountInfo>({
    ...DefaultAccountInfo,
  });

  const logout = () => {
    setAccount({
      ...DefaultAccountInfo,
    })
  }
  
  return {
    account,
    setAccount,
    logout
  }
}

export default useAccountInfo;
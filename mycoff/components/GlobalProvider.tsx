import { useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import { CoffeeCardProp } from './CoffeeCard';

type GlobalProviderProps = {
  children: React.ReactNode;
};

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState<CoffeeCardProp['item'] | null>({
    id: 0,
    title: '',
    subtitle: '',
    price: 0,
    rating: 0,
    image: '',
  });

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading,
        setIsLoading,
        product,
        setProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

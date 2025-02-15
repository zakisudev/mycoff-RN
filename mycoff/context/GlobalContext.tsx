import { CoffeeCardProp } from '@/components/CoffeeCard';
import { createContext, useContext, useState } from 'react';

export type GlobalContextProps = {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  user: any;
  setUser: (value: any) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  product: CoffeeCardProp['item'] | null;
  setProduct: (value: CoffeeCardProp['item'] | null) => void;
};

const GlobalContext = createContext<GlobalContextProps>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  user: null,
  setUser: () => {},
  isLoading: false,
  setIsLoading: () => {},
  product: {
    id: 0,
    title: '',
    subtitle: '',
    price: 0,
    rating: 0,
    image: '',
  },
  setProduct: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContext;

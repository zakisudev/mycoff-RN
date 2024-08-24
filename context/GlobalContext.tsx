import { CoffeeCardProp } from '@/components/CoffeeCard';
import { createContext, useContext, useState } from 'react';

export type GlobalContextProps = {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
  user: any;
  setUser: (value: any) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  saveProduct: (value: CoffeeCardProp['item']) => Promise<void>; // Add saveProduct method
  loadProduct: () => Promise<CoffeeCardProp | null>; // Add loadProduct method
};

const GlobalContext = createContext<GlobalContextProps>({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  user: null,
  setUser: () => {},
  isLoading: true,
  setIsLoading: () => {},
  saveProduct: async () => {},
  loadProduct: async () => null,
});

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContext;

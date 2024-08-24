import { useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import { CoffeeCardProp } from './CoffeeCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

type GlobalProviderProps = {
  children: React.ReactNode;
};

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Method to save product in AsyncStorage
  const saveProduct = async (value: CoffeeCardProp) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('product', jsonValue);
    } catch (e) {
      console.error('Failed to save the product', e);
    }
  };

  // Method to load product from AsyncStorage
  const loadProduct = async (): Promise<CoffeeCardProp | null> => {
    try {
      const jsonValue = await AsyncStorage.getItem('product');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error('Failed to load the product', e);
      return null;
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isLoading,
        setIsLoading,
        saveProduct,
        loadProduct,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

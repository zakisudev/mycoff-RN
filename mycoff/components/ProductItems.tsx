import { View, FlatList } from 'react-native';
import React from 'react';
import CoffeeCard from './CoffeeCard';

type ProductItemsProps = {
  selectedCoffee: string;
};

const items: any[] = [
  {
    id: 1,
    title: 'Cappuccino',
    subtitle: 'with Chocolate',
    price: 4.53,
    rating: 4.8,
    image: '@/assets/images/Product01.png',
  },
  {
    id: 2,
    title: 'Cappuccino',
    subtitle: 'with Vanilla',
    price: 4.5,
    rating: 4.6,
    image: '@/assets/images/Product02.png',
  },
  {
    id: 3,
    title: 'Cappuccino',
    subtitle: 'with Caramel',
    price: 4.7,
    rating: 4.9,
    image: '@/assets/images/Product03.png',
  },
  {
    id: 4,
    title: 'Cappuccino',
    subtitle: 'with Oat milk',
    price: 4.6,
    rating: 4.7,
    image: '@/assets/images/Product04.png',
  },
  {
    id: 5,
    title: 'Macchiato',
    subtitle: 'with Chocolate',
    price: 3.43,
    rating: 4.8,
    image: '@/assets/images/Product05.png',
  },
  {
    id: 6,
    title: 'Macchiato',
    subtitle: 'with Vanilla',
    price: 3.4,
    rating: 4.6,
    image: '@/assets/images/Product06.png',
  },
  {
    id: 7,
    title: 'Latte',
    subtitle: 'with Chocolate',
    price: 3.53,
    rating: 4.8,
    image: '@/assets/images/Product07.png',
  },
  {
    id: 8,
    title: 'Latte',
    subtitle: 'with Caramel',
    price: 3.7,
    rating: 4.9,
    image: '@/assets/images/Product09.png',
  },
  {
    id: 9,
    title: 'Espresso',
    subtitle: 'with Chocolate',
    price: 2.53,
    rating: 4.8,
    image: '@/assets/images/Product09.png',
  },
  {
    id: 10,
    title: 'Americano',
    subtitle: 'with Chocolate',
    price: 2.53,
    rating: 4.8,
    image: '@/assets/images/Product10.png',
  },
  {
    id: 11,
    title: 'Mocha',
    subtitle: '',
    price: 4.53,
    rating: 4.8,
    image: '@/assets/images/Product11.png',
  },
  {
    id: 12,
    title: 'Affogato',
    subtitle: '',
    price: 4.53,
    rating: 4.8,
    image: '@/assets/images/Product12.png',
  },
];

const ProductItems: React.FC<ProductItemsProps> = ({ selectedCoffee }) => {
  return (
    <FlatList
      data={items.filter((item) => item.title === selectedCoffee)}
      keyExtractor={(item: any) => item.id.toString()}
      renderItem={({ item }) => <CoffeeCard item={item} />}
      horizontal={false}
      numColumns={2}
      style={{ width: '100%' }}
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ProductItems;

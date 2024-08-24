import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { router } from 'expo-router';
import { useGlobalContext } from '@/context/GlobalContext';

export type CoffeeCardProp = {
  item: {
    id: number;
    title: string;
    subtitle: string;
    price: number;
    rating: number;
    image: string;
  };
};

export const imageMapper: { [key: string]: any } = {
  '@/assets/images/Product01.png': require('@/assets/images/Product01.png'),
  '@/assets/images/Product02.png': require('@/assets/images/Product02.png'),
  '@/assets/images/Product03.png': require('@/assets/images/Product03.png'),
  '@/assets/images/Product04.png': require('@/assets/images/Product04.png'),
  '@/assets/images/Product05.png': require('@/assets/images/Product05.png'),
  '@/assets/images/Product06.png': require('@/assets/images/Product06.png'),
  '@/assets/images/Product07.png': require('@/assets/images/Product07.png'),
  '@/assets/images/Product08.png': require('@/assets/images/Product08.png'),
  '@/assets/images/Product09.png': require('@/assets/images/Product09.png'),
  '@/assets/images/Product10.png': require('@/assets/images/Product10.png'),
  '@/assets/images/Product11.png': require('@/assets/images/Product11.png'),
  '@/assets/images/Product12.png': require('@/assets/images/Product12.png'),
};

const CoffeeCard: React.FC<CoffeeCardProp> = ({ item }) => {
  const { setProduct } = useGlobalContext();

  const handleProductSelect = async () => {
    setProduct(item);
    router.push(`/product/${item.id}`);
  };

  return (
    <View
      style={{
        width: 180,
        height: 260,
        paddingVertical: 8,
        backgroundColor: '#fff',
        borderRadius: 16,
        marginHorizontal: 7,
        flexDirection: 'column',
        gap: 7,
      }}
    >
      <TouchableOpacity
        style={{
          width: '100%',
          maxHeight: 152,
          height: '100%',
          position: 'relative',
          borderRadius: 10,
        }}
        onPress={handleProductSelect}
      >
        <Image
          source={
            imageMapper[item.image] || require('@/assets/images/default.png')
          }
          style={{ width: '100%', height: '100%' }}
          resizeMode="contain"
        />
        <View
          style={{
            position: 'absolute',
            top: 5,
            left: 15,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5,
            backgroundColor: 'rgba(141,141,141,0.4)',
            paddingHorizontal: 2,
            borderRadius: 6,
          }}
        >
          <Image
            source={require('../assets/images/Star.png')}
            style={{ width: 16, height: 16 }}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'semibold',
              fontFamily: 'SpaceMono',
              color: '#fff',
            }}
          >
            {item.rating}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ flexDirection: 'column', paddingHorizontal: 12 }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'semibold',
            fontFamily: 'SpaceMono',
            color: '#2F2D2C',
          }}
        >
          {item.title}
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'semibold',
            fontFamily: 'SpaceMono',
            color: '#9B9B9B',
          }}
        >
          {item.subtitle}
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          paddingHorizontal: 16,
        }}
      >
        <Text
          style={{
            fontFamily: 'SpaceMono',
            fontSize: 18,
            fontWeight: 'semibold',
          }}
        >
          $ {item.price}
        </Text>
        <TouchableOpacity
          style={{
            width: 32,
            height: 32,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: '#C67C4E',
            padding: 5,
          }}
        >
          <Image
            source={require('../assets/images/Add.png')}
            style={{ width: '100%', height: '100%' }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CoffeeCard;

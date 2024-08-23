import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

type CoffeeTypesProps = {
  selectedCoffee: string;
  setSelectedCoffee: (coffee: string) => void;
};

const CoffeeTypes: React.FC<CoffeeTypesProps> = ({
  selectedCoffee,
  setSelectedCoffee,
}) => {
  const coffeeTypes = [
    { id: '2', name: 'Cappuccino' },
    { id: '5', name: 'Macchiato' },
    { id: '3', name: 'Latte' },
    { id: '6', name: 'Americano' },
    { id: '1', name: 'Espresso' },
    { id: '4', name: 'Mocha' },
    { id: '7', name: 'Affogato' },
  ];

  const renderItem = ({ item }: any) => {
    const isSelected = selectedCoffee === item.name;

    return (
      <TouchableOpacity
        onPress={() => setSelectedCoffee(item.name)}
        style={{
          backgroundColor: isSelected ? '#c67c4e' : '#e3e3e3',
          borderRadius: 10,
          height: 38,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 10,
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: '500',
            color: isSelected ? '#fff' : '#333',
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={coffeeTypes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );
};

export default CoffeeTypes;

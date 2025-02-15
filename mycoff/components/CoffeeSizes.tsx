import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CoffeeSizes = () => {
  const [size, setSize] = useState('Medium');

  const activeStyle = {
    borderWidth: 1,
    borderColor: '#C67C4E',
    backgroundColor: '#FFF5EE',
    padding: 10,
    width: '31%' as '31%',
    borderRadius: 16,
    height: 55,
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center',
  };

  const inActiveStyle = {
    borderWidth: 1,
    borderColor: '#e6e6e6',
    backgroundColor: 'white',
    padding: 10,
    width: '31%' as '31%',
    borderRadius: 16,
    height: 55,
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center',
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        width: '100%',
      }}
    >
      <TouchableOpacity
        onPress={() => setSize('Small')}
        style={size === 'Small' ? activeStyle : inActiveStyle}
      >
        <Text
          style={{
            color: size === 'Small' ? '#C67C4E' : 'black',
            fontSize: 20,
          }}
        >
          S
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSize('Medium')}
        style={size === 'Medium' ? activeStyle : inActiveStyle}
      >
        <Text
          style={{
            color: size === 'Medium' ? '#C67C4E' : 'black',
            fontSize: 20,
          }}
        >
          M
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setSize('Large')}
        style={size === 'Large' ? activeStyle : inActiveStyle}
      >
        <Text
          style={{
            color: size === 'Large' ? '#C67C4E' : 'black',
            fontSize: 20,
          }}
        >
          L
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CoffeeSizes;

import { View, Text } from 'react-native';
import React from 'react';

const StyledText = ({ title }: any) => {
  return (
    <View
      style={{
        backgroundColor: '#242424',
        justifyContent: 'center',
        paddingHorizontal: 5,
        width: '60%',
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 34,
          fontFamily: 'SpaceMono',
          fontWeight: 700,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default StyledText;

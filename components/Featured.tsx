import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import StyledText from './StyledText';

const Featured = ({ promo }: any) => {
  return (
    <ImageBackground
      source={require('../assets/images/Coffee02.png')}
      style={{
        width: '100%',
        height: 140,
        borderRadius: 16,
        paddingVertical: 13,
        paddingHorizontal: 23,
        justifyContent: 'center',
      }}
      imageStyle={{ borderRadius: 16 }}
    >
      <View
        style={{
          flexDirection: 'column',
          gap: 10,
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            padding: 4,
            borderRadius: 10,
            backgroundColor: '#ED5151',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
          }}
        >
          <Text
            style={{
              color: '#FFF',
              fontFamily: 'SpaceMono',
              fontWeight: 500,
              fontSize: 16,
            }}
          >
            {promo ? 'Promo' : 'Popular'}
          </Text>
        </View>
        <StyledText title={promo ? 'Buy one get one Free' : "Today's choice"} />
      </View>
    </ImageBackground>
  );
};

export default Featured;

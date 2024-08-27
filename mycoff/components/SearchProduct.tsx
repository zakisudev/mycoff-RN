import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Toast from 'react-native-toast-message';

type SearchProductProps = {
  setSearchTerm: (term: string) => void;
};

const SearchProduct: React.FC<SearchProductProps> = ({ setSearchTerm }) => {
  return (
    <View style={{ width: '100%', height: 52, borderRadius: 10 }}>
      <View
        style={{
          backgroundColor: '#313131',
          width: '100%',
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderRadius: 16,
          paddingLeft: 20,
          paddingRight: 4,
          gap: 10,
        }}
      >
        <Image
          source={require('../assets/images/Search.png')}
          style={{
            width: 28,
            height: 28,
            alignItems: 'center',
            justifyContent: 'center',
            margin: 5,
          }}
          resizeMode="contain"
        />

        <TextInput
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'SpaceMono',
            fontSize: 20,
            color: '#f2f2f2',
          }}
          placeholder="Search coffee"
          placeholderTextColor="#929292"
          autoCapitalize="none"
          onChangeText={setSearchTerm}
        />
        <TouchableOpacity
          style={{
            width: 52,
            height: 52,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#C67C4E',
            borderRadius: 14,
            padding: 10,
          }}
          onPress={() =>
            Toast.show({
              type: 'customToast',
              text1: 'Filter',
              text2: 'Coming soon!',
            })
          }
        >
          <Image
            source={require('../assets/images/Filter.png')}
            style={{
              width: '100%',
              height: '100%',
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchProduct;

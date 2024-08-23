import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const LocationDropdown = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const cities = [
    { label: 'Bole', value: 'Bole' },
    { label: 'Piasa', value: 'Piasa' },
    { label: 'Gerji', value: 'Gerji' },
  ];

  const placeholder = {
    label: 'Select',
    value: null,
    color: '#C1C1C1',
  };

  return (
    <View style={[styles.container, { width: 100, justifyContent: 'center' }]}>
      <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
        <Text style={styles.label}>Location</Text>
        <Image
          source={require('../assets/icons/Location.png')}
          style={{ width: 16, height: 16 }}
          resizeMode="contain"
        />
      </View>
      <RNPickerSelect
        placeholder={placeholder}
        onValueChange={(value) => setSelectedCity(value)}
        items={cities}
        style={pickerSelectStyles}
        useNativeAndroidPickerStyle={false}
        Icon={() => {
          return (
            <Image
              source={require('../assets/images/ArrowDown.png')}
              style={{
                width: 16,
                height: 14,
                justifyContent: 'center',
                alignItems: 'center',
                top: 15,
              }}
              resizeMode="cover"
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  label: {
    color: '#cbcbcb',
    fontFamily: 'SpaceMono',
    fontSize: 18,
    fontWeight: '300',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    width: '100%',
    left: 0,
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'SpaceMono',
    color: '#FFFFFF',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginRight: 5,
  },
  inputAndroid: {
    width: '100%',
    left: 0,
    fontSize: 24,
    fontWeight: '600',
    fontFamily: 'SpaceMono',
    color: '#FFFFFF',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default LocationDropdown;

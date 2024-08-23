import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
} from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import LocationDropdown from '@/components/LocationSelect';
import SearchProduct from '@/components/SearchProduct';
import Featured from '@/components/Featured';
import CoffeeTypes from '@/components/CoffeeTypes';
import ProductItems from '@/components/ProductItems';

const home = () => {
  const [selectedCoffee, setSelectedCoffee] = useState('Cappuccino');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NativeViewGestureHandler>
        <SafeAreaView
          style={{
            backgroundColor: '#f2f2f2',
            width: '100%',
            height: '100%',
            flex: 1,
          }}
        >
          <View style={{ flex: 1 }}>
            <LinearGradient
              colors={['#131313', '#313131']}
              style={{
                height: '100%',
                width: '100%',
                alignItems: 'center',
                flex: 1.3,
              }}
              start={{ x: 1, y: 0 }}
              end={{ x: 0, y: 1 }}
            >
              <View
                style={{
                  width: '100%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 25,
                }}
              >
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: 2,
                    }}
                  >
                    <LocationDropdown />
                  </View>
                  <TouchableOpacity
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image
                      source={require('../../assets/images/Profile.png')}
                      resizeMode="cover"
                      style={{ width: 44, height: 44 }}
                    />
                  </TouchableOpacity>
                </View>

                <SearchProduct setSearchTerm={setSearchTerm} />
              </View>
            </LinearGradient>

            {/* Products */}
            <View
              style={{
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 2,
                position: 'relative',
                paddingTop: 120,
              }}
            >
              <View
                style={{
                  width: '100%',
                  position: 'absolute',
                  top: -40,
                  left: 22,
                  zIndex: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Featured promo={true} />
              </View>
              <View
                style={{
                  width: '100%',
                  marginHorizontal: 'auto',
                  flex: 1,
                }}
              >
                <View style={{ alignItems: 'center', flex: 0.12 }}>
                  <CoffeeTypes
                    selectedCoffee={selectedCoffee}
                    setSelectedCoffee={setSelectedCoffee}
                  />
                </View>
                <View
                  style={{
                    width: '100%',
                    alignItems: 'center',
                    flex: 1,
                  }}
                >
                  <ProductItems selectedCoffee={selectedCoffee} />
                </View>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </NativeViewGestureHandler>
    </GestureHandlerRootView>
  );
};

export default home;

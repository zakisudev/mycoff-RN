import {
  View,
  Text,
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

const home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <GestureHandlerRootView>
      <NativeViewGestureHandler>
        <SafeAreaView
          style={{
            backgroundColor: '#f2f2f2',
            width: '100%',
            flex: 1,
            height: '100%',
          }}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
          >
            <LinearGradient
              colors={['#131313', '#313131']}
              style={{
                position: 'absolute',
                top: 0,
                height: '35%',
                marginVertical: 'auto',
                width: '100%',
                alignItems: 'center',
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
                  padding: 20,
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

                <SearchProduct />
              </View>
            </LinearGradient>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </NativeViewGestureHandler>
    </GestureHandlerRootView>
  );
};

export default home;

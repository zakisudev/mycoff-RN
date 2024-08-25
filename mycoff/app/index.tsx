import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
} from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';

const index = () => {
  const handleGoogleLogin = () => {
    router.push('/home');
  };
  return (
    <GestureHandlerRootView>
      <NativeViewGestureHandler>
        <SafeAreaView
          style={{
            backgroundColor: '#0D0C0C',
            width: '100%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flex: 1,
              width: '100%',
            }}
          >
            <Image
              source={require('../assets/images/Coffee.png')}
              style={{ width: '100%', height: '55%' }}
              resizeMode="cover"
            />
            <View
              style={{
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingHorizontal: 30,
                marginTop: 20,
              }}
            >
              <Text
                style={{
                  color: '#FFFFFF',
                  justifyContent: 'center',
                  fontSize: 34,
                  fontFamily: 'SpaceMono',
                  fontWeight: 700,
                  textAlign: 'center',
                  maxWidth: '95%',
                }}
              >
                Coffee so good, your taste buds will dance.
              </Text>
              <Text
                style={{
                  color: '#9a9a9a',
                  justifyContent: 'center',
                  fontSize: 16,
                  fontFamily: 'SpaceMono',
                  fontWeight: 600,
                  textAlign: 'center',
                  marginTop: 20,
                  maxWidth: '95%',
                }}
              >
                The best grain, the finest roast, the powerful flavor.
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: '90%',
                height: 64,
                marginHorizontal: 'auto',
                marginTop: 20,
                borderRadius: 10,
                backgroundColor: '#FFFFFF',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 20,
              }}
              onPress={handleGoogleLogin}
            >
              <Image
                source={require('../assets/images/GoogleLogo.png')}
                resizeMode="cover"
                style={{
                  width: 40,
                  height: 40,
                }}
              />
              <Text
                style={{
                  fontFamily: 'SpaceMono',
                  fontWeight: 600,
                  fontSize: 18,
                }}
              >
                Continue with Google
              </Text>
            </TouchableOpacity>
          </View>
          <StatusBar style="light" />
        </SafeAreaView>
      </NativeViewGestureHandler>
    </GestureHandlerRootView>
  );
};

export default index;

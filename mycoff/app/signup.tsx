import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useEffect } from 'react';
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
} from 'react-native-gesture-handler';
import { router } from 'expo-router';
import Toast from 'react-native-toast-message';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGlobalContext } from '@/context/GlobalContext';
import { auth } from './index';
import { createUserWithEmailAndPassword } from '@firebase/auth';

const signup = () => {
  // const { user, setUser, isLoading, setIsLoading } = useGlobalContext();
  const [phone, setPhone] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [cPassword, setCPassword] = React.useState('');

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // const handleSignup = async () => {
  //   setIsLoading(true);
  //   if (!isValidEmail(email.toLowerCase())) {
  //     Toast.show({
  //       type: 'error',
  //       text1: 'Invalid email format',
  //     });
  //     setIsLoading(false);
  //     return;
  //   }

  //   if (password !== cPassword) {
  //     Toast.show({
  //       type: 'error',
  //       text1: 'Passwords do not match',
  //     });
  //     setIsLoading(false);
  //     return;
  //   }

  //   try {
  //     const userCred = await createUserWithEmailAndPassword(
  //       auth,
  //       email.toLowerCase(),
  //       password
  //     );

  //     if (!userCred.user) return;

  //     setUser(userCred.user);
  //     setIsLoading(false);
  //     Toast.show({
  //       type: 'success',
  //       text1: 'Register successful',
  //     });
  //   } catch (error: any) {
  //     console.log('Error:', error.message);
  //     Toast.show({
  //       type: 'error',
  //       text1: 'Register failed',
  //     });
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   if (user) {
  //     router.push('/');
  //   }
  // }, [user]);

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
            position: 'relative',
          }}
        >
          <Image
            source={require('../assets/images/Coffee.png')}
            style={{ width: '100%', height: 200 }}
            resizeMode="cover"
          />

          <TouchableOpacity
            style={{
              width: 30,
              height: 30,
              position: 'absolute',
              justifyContent: 'center',
              alignItems: 'center',
              top: 100,
              left: 20,
            }}
            onPress={() => router.back()}
          >
            <Image
              source={require('../assets/images/Back.png')}
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: '#d6d6d6',
                borderRadius: 50,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>

          {/* SignUp Form */}
          <View
            style={{
              marginTop: 20,
              paddingHorizontal: 30,
              width: '100%',
            }}
          >
            <TextInput
              style={{
                width: '100%',
                height: 54,
                fontSize: 18,
                fontFamily: 'SpaceMono',
                marginHorizontal: 'auto',
                marginTop: 10,
                borderRadius: 10,
                backgroundColor: '#FFFFFF',
                paddingLeft: 20,
              }}
              placeholder="Enter Phone: (0912345678)"
              value={phone.trim()}
              onChangeText={setPhone}
              keyboardType="phone-pad"
            />
            <TextInput
              style={{
                width: '100%',
                height: 54,
                fontSize: 18,
                fontFamily: 'SpaceMono',
                marginHorizontal: 'auto',
                marginTop: 10,
                borderRadius: 10,
                backgroundColor: '#FFFFFF',
                paddingLeft: 20,
              }}
              placeholder="Enter your Email"
              value={email.trim()}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <TextInput
              style={{
                width: '100%',
                height: 54,
                fontSize: 18,
                fontFamily: 'SpaceMono',
                marginHorizontal: 'auto',
                marginTop: 10,
                borderRadius: 10,
                backgroundColor: '#FFFFFF',
                paddingLeft: 20,
              }}
              placeholder="Enter Password"
              value={password.trim()}
              onChangeText={setPassword}
              autoCapitalize="none"
              secureTextEntry={true}
            />
            <TextInput
              style={{
                width: '100%',
                height: 54,
                fontSize: 18,
                fontFamily: 'SpaceMono',
                marginHorizontal: 'auto',
                marginTop: 10,
                borderRadius: 10,
                backgroundColor: '#FFFFFF',
                paddingLeft: 20,
              }}
              placeholder="Confirm Password"
              value={cPassword.trim()}
              onChangeText={setCPassword}
              autoCapitalize="none"
              secureTextEntry={true}
            />

            <TouchableOpacity
              style={{
                width: '100%',
                height: 54,
                marginHorizontal: 'auto',
                marginTop: 20,
                borderRadius: 10,
                backgroundColor: '#C67C4E',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={handleSignup}
              // disabled={isLoading}
            >
              {/* {isLoading ? (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image
                    source={require('../assets/Loading.gif')}
                    style={{ width: 40, height: 40 }}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      fontFamily: 'SpaceMono',
                      fontWeight: 600,
                      fontSize: 20,
                      color: '#FFFFFF',
                    }}
                  >
                    Signing...
                  </Text>
                </View>
              ) : ( */}
                <Text
                  style={{
                    fontFamily: 'SpaceMono',
                    fontWeight: 600,
                    fontSize: 20,
                    color: '#FFFFFF',
                  }}
                >
                  Sign Up
                </Text>
              {/* )} */}
            </TouchableOpacity>

            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 20,
                marginHorizontal: 'auto',
                gap: 20,
              }}
            >
              <Text
                style={{
                  color: '#FFFFFF',
                  justifyContent: 'center',
                  fontSize: 16,
                  fontFamily: 'SpaceMono',
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                Already have an account?
              </Text>
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => router.push('/signin')}
              >
                <Text
                  style={{
                    fontFamily: 'SpaceMono',
                    fontWeight: 600,
                    fontSize: 16,
                    color: '#C67C4E',
                    textDecorationLine: 'underline',
                  }}
                >
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </NativeViewGestureHandler>
    </GestureHandlerRootView>
  );
};

export default signup;

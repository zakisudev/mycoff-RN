import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useEffect } from 'react';
import { auth } from './index';
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
} from 'react-native-gesture-handler';
import { router } from 'expo-router';
import Toast from 'react-native-toast-message';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useGlobalContext } from '@/context/GlobalContext';
import { signInWithEmailAndPassword } from '@firebase/auth';

const signin = () => {
  const { user, setUser, isLoading, setIsLoading } = useGlobalContext();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  const handleSignin = async () => {
    setIsLoading(true);
    const trimmedEmail = email.trim().toLowerCase();
    if (!isValidEmail(trimmedEmail)) {
      Toast.show({
        type: 'error',
        text1: 'Invalid email address',
      });
      return;
    }

    try {
      const res = await signInWithEmailAndPassword(
        auth,
        trimmedEmail,
        password
      );

      const user = res.user;

      setUser(user);

      Toast.show({
        type: 'success',
        text1: 'Login successful',
      });

      router.push('/home');
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        Toast.show({
          type: 'customToast',
          text1: 'User error',
          text2: 'User not found',
        });
      } else if (error.code === 'auth/wrong-password') {
        Toast.show({
          type: 'customToast',
          text1: 'Password',
          text2: 'Incorrect password',
        });
      } else if (error.code === 'auth/invalid-email') {
        Toast.show({
          type: 'customToast',
          text1: 'Email error',
          text2: 'Invalid Email',
        });
      } else if (error.code === 'auth/invalid-credential') {
        Toast.show({
          type: 'customToast',
          text1: 'Login error',
          text2: 'Invalid Email or password',
        });
      } else {
        Toast.show({
          type: 'customToast',
          text1: 'Login error',
          text2: error.message,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      router.push('/home');
    }
  }, [user]);

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
              left: 30,
            }}
            onPress={() => router.push('/')}
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

          {/* SignIn */}
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
              placeholder="Enter your Email"
              value={email?.trim()}
              onChangeText={setEmail}
              autoCapitalize="none"
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
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true}
              autoCapitalize="none"
            />
            <Text
              style={{
                color: '#adadad',
                alignSelf: 'flex-end',
                fontSize: 16,
                fontFamily: 'SpaceMono',
                fontWeight: 600,
                textAlign: 'center',
                marginTop: 5,
                maxWidth: '95%',
              }}
            >
              Forgot your password?
            </Text>
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
              onPress={handleSignin}
              disabled={isLoading}
            >
              {isLoading ? (
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
              ) : (
                <Text
                  style={{
                    fontFamily: 'SpaceMono',
                    fontWeight: 600,
                    fontSize: 20,
                    color: '#FFFFFF',
                  }}
                >
                  Sign In
                </Text>
              )}
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
                Don't have an account?
              </Text>
              <TouchableOpacity
                style={{
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => router.push('/signup')}
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
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </NativeViewGestureHandler>
    </GestureHandlerRootView>
  );
};

export default signin;

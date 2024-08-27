import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
} from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { router } from 'expo-router';
import { useGlobalContext } from '@/context/GlobalContext';
import app from '../firebase';

type IndexProps = {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  handleAuthentication: () => void;
};

export const auth = getAuth(app);

const Index: React.FC<IndexProps> = () => {
  const { setUser, setIsLoading, setIsLoggedIn } = useGlobalContext();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          setUser(user);
          setIsLoggedIn(true);
          router.push('/home');
        } else {
          setIsLoading(false);
          setUser(null);
        }
      },
      (error) => {
        setIsLoading(false);
        console.log('Error: ', error);
      },
      () => {
        setIsLoading(false);
        console.log('finished');
      }
    );

    return () => unsubscribe();
  }, []);

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
              style={{ width: '100%', height: '30%' }}
              resizeMode="cover"
            />

            <View
              style={{
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'center',
                paddingHorizontal: 30,
                marginTop: 10,
                borderTopEndRadius: 50,
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

            <View
              style={{
                width: '100%',
                paddingHorizontal: 30,
                flexDirection: 'column',
              }}
            >
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 54,
                  marginHorizontal: 'auto',
                  marginTop: 20,
                  borderRadius: 10,
                  backgroundColor: '#FFFFFF',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 20,
                }}
                onPress={() => router.push('/signin')}
              >
                <Image
                  source={require('../assets/images/Email.png')}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'SpaceMono',
                    fontWeight: 600,
                    fontSize: 18,
                  }}
                >
                  Continue with Email
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 54,
                  marginHorizontal: 'auto',
                  marginTop: 20,
                  borderRadius: 10,
                  backgroundColor: '#FFFFFF',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 20,
                }}
                onPress={() => console.log('Google')}
              >
                <Image
                  source={require('../assets/images/GoogleLogo.png')}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
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

              <TouchableOpacity
                style={{
                  width: '100%',
                  height: 54,
                  marginHorizontal: 'auto',
                  marginTop: 20,
                  borderRadius: 10,
                  backgroundColor: '#FFFFFF',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 20,
                }}
                onPress={() => console.log('Phone')}
              >
                <Image
                  source={require('../assets/images/Phone.png')}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
                <Text
                  style={{
                    fontFamily: 'SpaceMono',
                    fontWeight: 600,
                    fontSize: 18,
                  }}
                >
                  Continue with Phone
                </Text>
              </TouchableOpacity>
            </View>
            {/* <View
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                backgroundColor: '#0000003d',
                justifyContent: 'center',
                alignItems: 'center',
                right: 0,
                left: 0,
                top: 0,
                bottom: 0,
                margin: 'auto',
                display: `${isLoading ? 'flex' : 'none'}`,
              }}
            >
              <Image
                source={require('../assets/3DCoffeeCup.gif')}
                style={{
                  width: '50%',
                  height: '50%',
                }}
                resizeMode="contain"
              />
            </View> */}
          </View>
          <StatusBar style="light" />
        </SafeAreaView>
      </NativeViewGestureHandler>
    </GestureHandlerRootView>
  );
};

export default Index;

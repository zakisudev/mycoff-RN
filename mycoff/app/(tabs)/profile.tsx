import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  GestureHandlerRootView,
  NativeViewGestureHandler,
  ScrollView,
} from 'react-native-gesture-handler';
import { useGlobalContext } from '@/context/GlobalContext';
import { router } from 'expo-router';
import Toast from 'react-native-toast-message';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signOut, updateProfile } from '@firebase/auth';
import { auth } from '../index';
import { formatDistanceToNow } from 'date-fns';

const Profile = () => {
  const { user, setUser, isLoading, setIsLoading } = useGlobalContext();
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
  const [memberSince, setMemberSince] = useState('');
  const [profileImage, setProfileImage] = useState(
    require('../../assets/images/Profile.png')
  );

  const updateUserProfile = async () => {
    setIsLoading(true);

    if (!user) {
      router.push('/');
    }

    if (user) {
      try {
        await updateProfile(user, {
          displayName,
          photoURL: profileImage,
          phoneNumber,
        });

        Toast.show({
          type: 'success',
          text1: 'Profile Updated',
          text2: 'Your profile has been updated successfully',
        });
      } catch (error) {
        console.log('Error updating profile: ', error);
        Toast.show({
          type: 'error',
          text1: 'Error Updating Profile',
          text2: 'An error occurred while updating your profile',
        });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const signOutUser = async () => {
    setIsLoading(true);

    try {
      const res = await signOut(auth);
      setUser(null);

      Toast.show({
        type: 'success',
        text1: 'Signed Out',
        text2: 'You have been signed out successfully',
      });
      setIsLoading(false);
    } catch (error: any) {
      console.error('Error signing out:', error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
      router.push('/');
    }

    if (user) {
      setDisplayName(user.displayName || '');
      setEmail(user.email || '');
      setPhoneNumber(user.phoneNumber || '');
      const creationTime = user.metadata.creationTime;
      if (creationTime) {
        setMemberSince(creationTime);
      }

      setIsLoading(false);
    }
  }, [user]);

  return (
    <GestureHandlerRootView>
      <NativeViewGestureHandler>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
        >
          <SafeAreaView
            style={{
              backgroundColor: '#e7e7e7',
              width: '100%',
              flex: 1,
              alignItems: 'center',
              paddingHorizontal: 20,
              position: 'relative',
            }}
          >
            <ScrollView
              style={{ width: '100%', flexGrow: 1 }}
              showsVerticalScrollIndicator={false}
            >
              <View
                style={{
                  marginTop: 30,
                  marginBottom: 30,
                  width: '100%',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: 'SpaceMono',
                    fontWeight: 'bold',
                  }}
                >
                  Profile
                </Text>
              </View>

              <View
                style={{
                  marginBottom: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    width: 100,
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={profileImage}
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 20,
                      backgroundColor: 'white',
                      padding: 10,
                    }}
                    resizeMode="contain"
                  />
                </View>
                <Text
                  style={{
                    fontSize: 24,
                    fontFamily: 'SpaceMono',
                    fontWeight: 'semibold',
                    color: '#C67C4E',
                  }}
                >
                  {displayName}
                </Text>
                <View style={{ flexDirection: 'row', gap: 10 }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'SpaceMono',
                      fontWeight: 'semibold',
                    }}
                  >
                    Member since:
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'SpaceMono',
                      fontWeight: 'semibold',
                      color: '#C67C4E',
                    }}
                  >
                    {memberSince &&
                      formatDistanceToNow(new Date(memberSince), {
                        addSuffix: true,
                      })}
                  </Text>
                </View>
              </View>

              <View style={{ width: '100%', gap: 20 }}>
                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'SpaceMono',
                      fontWeight: 'semibold',
                    }}
                  >
                    Phone:
                  </Text>
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
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                    keyboardType="phone-pad"
                  />
                </View>

                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'SpaceMono',
                      fontWeight: 'semibold',
                    }}
                  >
                    Email:
                  </Text>
                  <TextInput
                    value={email}
                    onChangeText={setEmail}
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
                      borderWidth: 2,
                      borderColor: emailVerified ? '#C67C4E' : '#ff6363',
                    }}
                    editable={false}
                  />
                  {!emailVerified && (
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: 'SpaceMono',
                        fontWeight: 'semibold',
                        color: '#ff6363',
                      }}
                    >
                      Email not verified
                    </Text>
                  )}
                </View>

                <View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'SpaceMono',
                      fontWeight: 'semibold',
                    }}
                  >
                    Username:
                  </Text>
                  <TextInput
                    value={displayName}
                    onChangeText={setDisplayName}
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
                  />
                </View>

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
                  onPress={updateUserProfile}
                >
                  <Text
                    style={{
                      fontFamily: 'SpaceMono',
                      fontWeight: 600,
                      fontSize: 20,
                      color: '#FFFFFF',
                    }}
                  >
                    Update
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    width: 150,
                    height: 54,
                    marginHorizontal: 'auto',
                    marginTop: 20,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={signOutUser}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}
                    >
                      <Image
                        source={require('../../assets/Loading.gif')}
                        style={{ width: 40, height: 40 }}
                        resizeMode="contain"
                      />
                    </View>
                  ) : (
                    <Text
                      style={{
                        fontFamily: 'SpaceMono',
                        fontWeight: 600,
                        fontSize: 24,
                        color: '#91481b',
                      }}
                    >
                      [ Logout ]
                    </Text>
                  )}
                </TouchableOpacity>
              </View>
            </ScrollView>
          </SafeAreaView>
        </KeyboardAvoidingView>
      </NativeViewGestureHandler>
    </GestureHandlerRootView>
  );
};

export default Profile;

import { launchImageLibrary } from 'react-native-image-picker';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export const uploadImage = async (uri: string, userId: string) => {
  if (!uri) return null;

  // Create a reference to the location in Firebase Storage
  const imageRef = storage().ref(`profileImages/${userId}.jpg`);

  try {
    // Upload the file to Firebase Storage
    await imageRef.putFile(uri);

    // Get the download URL
    const downloadURL = await imageRef.getDownloadURL();
    return downloadURL;
  } catch (error) {
    console.log('Error uploading image: ', error);
    return null;
  }
};

export const saveProfileImageToFirestore = async (
  downloadURL: string,
  userId: string
) => {
  try {
    await firestore().collection('users').doc(userId).update({
      profileImageUrl: downloadURL,
    });
    console.log('Profile image URL saved to Firestore');
  } catch (error) {
    console.log('Error saving image URL to Firestore: ', error);
  }
};

export const selectImage = async () => {
  const result = await launchImageLibrary({
    mediaType: 'photo',
    quality: 1,
  });

  if (!result.didCancel && result.assets && result.assets.length > 0) {
    const { uri } = result.assets[0];
    return uri;
  }
  return null;
};

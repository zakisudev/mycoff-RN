import { StyleSheet, Text, View } from 'react-native';

const CustomToast = ({ text1, text2 }: any) => {
  if (!text1 && !text2) {
    return null;
  }
  if (text1.includes('Error') || text1.includes('error')) {
    return (
      <View style={styles.containerError}>
        <Text style={{ fontSize: 24, color: 'black' }}>{text1}</Text>
        <Text style={styles.text2}>{text2}</Text>
      </View>
    );
  } else if (text1.includes('Success') || text1.includes('success')) {
    return (
      <View style={styles.containerSuccess}>
        <Text style={styles.text1}>{text1}</Text>
        <Text style={styles.text2}>{text2}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>{text1}</Text>
      <Text style={styles.text2}>{text2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#C67C4E',
    borderRadius: 8,
  },
  containerError: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ff5c5c',
    borderRadius: 8,
  },
  containerSuccess: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#6aff6f',
    borderRadius: 8,
  },
  text1: {
    fontSize: 20,
    fontWeight: 'semibold',
    color: '#000',
    fontFamily: 'SpaceMono',
  },
  text2: {
    fontSize: 14,
    color: '#ffffff',
    fontFamily: 'SpaceMono',
  },
});

export default CustomToast;

import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    // Set a timer for the splash screen
    const timer = setTimeout(() => {
      navigation.replace('OnboardingScreen'); // Replace with your main screen name
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/image7.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SplashScreen;

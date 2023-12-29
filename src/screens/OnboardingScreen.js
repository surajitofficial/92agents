import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Button, Card} from 'react-native-paper';

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/image7.png')}
          style={styles.logo}
        />
      </View>

      <View style={{height: '50%', marginBottom: '20%'}}>
        <View style={styles.card}>
          <Image
            source={require('../assets/images/home1.png')}
            style={{width: '100%', height: '100%', borderRadius: 8}}
          />
        </View>

        <Text style={styles.tagline}>
          Tag line of the application goes here
        </Text>
      </View>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('RoleSelectionScreen')}
          style={styles.button}>
          Sign In
        </Button>
        <Button
          mode="outlined"
          onPress={() => console.log('Sign Up')}
          style={styles.buttonOutline}>
          Sign Up
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    height: 20,
  },
  logoContainer: {},
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
  },
  card: {
    borderRadius: 8,
    elevation: 3,
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    marginVertical: 20,
    height: '100%',
  },
  tagline: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 20,
  },
  button: {
    width: '90%',
    paddingVertical: 5,
    marginVertical: 10,
    backgroundColor: '#74C52C',
    borderRadius: 38,
  },
  buttonOutline: {
    width: '90%',
    paddingVertical: 4,
    marginVertical: 10,

    borderRadius: 38,
  },
});

export default OnboardingScreen;

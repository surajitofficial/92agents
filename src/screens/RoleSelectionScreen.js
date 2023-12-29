import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const RoleSelectionScreen = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Choose your Sign Up role</Text>
      
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('SignupScreen')}>
        <Image source={require('../assets/images/image4.png')} style={styles.image} />
        <Text style={styles.roleText}>Become a buyer</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('SignupScreen')}>
        <Image source={require('../assets/images/image5.png')} style={styles.image} />
        <Text style={styles.roleText}>Become a Seller</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('SignupScreen')}>
        <Image source={require('../assets/images/image6.png')} style={styles.image} />
        <Text style={styles.roleText}>Become a Agent</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  card: {
    width:'80%',
backgroundColor:"#F8F8F8",
    borderRadius: 8,
    // overflow: 'hidden',
    marginBottom: 20,
    padding:20
  },
  image: {
    width: '100%',
    // height: 200,
    // resizeMode: 'cover',
    borderRadius:8
  },
  roleText: {
    fontSize: 20,
    color: 'rgba(0, 0, 0, 0.60))',
    textAlign: 'center',
    padding: 10,
    fontWeight:'600'
  }
});

export default RoleSelectionScreen;

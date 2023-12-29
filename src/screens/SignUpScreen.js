import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TextInput, Button, TouchableOpacity } from 'react-native';

const SignupScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSignUp = () => {
    // Handle the sign-up logic here
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Signup</Text>
      </View>
      <TextInput
        placeholder="First Name *"
        value={firstName}
        onChangeText={setFirstName}
        style={styles.input}
      />
      <TextInput
        placeholder="Last Name *"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email *"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password *"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <TextInput
        placeholder="Confirm Password *"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        style={styles.input}
      />
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={() => setTermsAccepted(!termsAccepted)} style={styles.checkbox}>
          <Text>{termsAccepted ? "✓" : ""}</Text>
        </TouchableOpacity>
        <Text style={styles.checkboxLabel} onPress={() => setTermsAccepted(!termsAccepted)}>
          I read and accept the Terms and Conditions
        </Text>
      </View>
      <Button title="Sign Up" onPress={handleSignUp} color="#841584" />
      <Button title="Cancel" onPress={() => {}} color="#000000" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 8,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
  },
  button: {
    marginTop: 10,
    borderRadius: 20,
    paddingVertical: 10,
  },
  buttonSecondary: {
    marginTop: 10,
    borderRadius: 20,
    paddingVertical: 10,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#000',
  },
});

export default SignupScreen;

// SignupScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Signup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      {/* Email Field */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Email Field */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password Field */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Confirm Password Field */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Already have an account */}
      <Text style={styles.accountText}>Already have an account?</Text>

      {/* Login Button */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.loginButton}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    margin: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
    marginBottom: 0,
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  rememberText: {
    fontSize: 15,
    color: '#555',
  },
  signupButton: {
    backgroundColor: '#A63ED3',
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
    fontSize: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  accountText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  loginButton: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#A63ED3',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  loginText: {
    color: '#A63ED3',
    fontSize: 16,
  },
});

export default Signup;

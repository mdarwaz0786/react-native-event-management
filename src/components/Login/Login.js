import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

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

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Don't have an account */}
      <Text style={styles.accountText}>Don't have an account?</Text>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
  },
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
    marginBottom: 20,
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
  forgotPassword: {
    fontSize: 15,
    color: '#007bff',
  },
  loginButton: {
    backgroundColor: '#A63ED3',
    marginTop: 20,
    padding: 15,
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
  signupButton: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#A63ED3',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  signupText: {
    color: '#A63ED3',
    fontSize: 16,
  },
});

export default Login;

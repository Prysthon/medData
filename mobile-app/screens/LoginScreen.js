import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação
    navigation.navigate('Main'); // Navega para a tela principal
  };

  const handleSignup = () => {
    // Navegar para a tela de cadastro
    navigation.navigate('Signup');
  };

  const handleForgotPassword = () => {
    // Navegar para a tela de recuperação de senha
    navigation.navigate('ForgotPassword');
  };

  const handlePrivacyPolicy = () => {
    // Navegar para a tela de política e privacidade
    navigation.navigate('PrivacyPolicy');
  };

  return (
    <View style={styles.container}>
      {/* Imagem no topo */}
      <Image source={require('../assets/MedData.png')} style={styles.logo} resizeMode="contain" />

      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Link para esqueci minha senha */}
      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      {/* Botão de cadastro */}
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupText}>Criar Conta</Text>
      </TouchableOpacity>

      {/* Link para política e privacidade */}
      <TouchableOpacity onPress={handlePrivacyPolicy}>
        <Text style={styles.privacyText}>Política e Privacidade</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: '100%',
    height: 100,
    marginBottom: 20,
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPassword: {
    textAlign: 'center',
    color: '#007BFF',
    marginVertical: 10,
  },
  signupButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  signupText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  privacyText: {
    textAlign: 'center',
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});

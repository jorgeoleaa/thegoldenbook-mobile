// app/login.tsx
import { DefaultApi, UserCredentials } from "@/services/proxy/generated";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { AuthenticateUserRequest } from '../services/proxy/generated/apis/DefaultApi';

export default function LoginScreen() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const defaultLocale = "en_US";

  const api = new DefaultApi();

  const handleLogin = async () => {
    console.log("Trying to log in with", {email, password});

    const userCredentials: UserCredentials = {
      email: email,
      password: password,
    }

    const authenticateUserRequest: AuthenticateUserRequest = {
      userCredentials: userCredentials,
      locale: defaultLocale,
    }

    const authenticatedUser = await api.authenticateUser(authenticateUserRequest);

    if(authenticatedUser){
      localStorage.setItem("user", JSON.stringify(authenticatedUser));
      console.log("User authenticated succesfully",JSON.stringify(authenticatedUser));
    };

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar sesión</Text>

      <TextInput
        placeholder="Correo electrónico"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

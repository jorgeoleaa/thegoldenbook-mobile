import { DefaultApi, User, UserCredentials } from "@/services/proxy/generated";
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { AuthenticateUserRequest } from '../services/proxy/generated/apis/DefaultApi';

export default function Login() {
  
  async function saveAuthenticatedUser(key: string, value:User){
    await SecureStore.setItemAsync(key, JSON.stringify(value));
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const defaultLocale = "en_US";
  const api = new DefaultApi();

  const handleLogin = async () => {
    console.log("Trying to log in with", {email, password});

    const userCredentials: UserCredentials = {
      email: email,
      password: password,
    };

    const authenticateUserRequest: AuthenticateUserRequest = {
      userCredentials: userCredentials,
      locale: defaultLocale,
    };

    try {
      const authenticatedUser = await api.authenticateUser(authenticateUserRequest);

      if (authenticatedUser) {
        await saveAuthenticatedUser("user", authenticatedUser);
        console.log("User authenticated successfully", JSON.stringify(authenticatedUser));

        router.replace("/home");
      } else {
        console.log("Authentication failed");
      }
    } catch (error) {
      console.error("Error authenticating user:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Log in" onPress={handleLogin} />
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

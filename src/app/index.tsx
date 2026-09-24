import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

export default function SignInCard() {
  // useState gives us a value + a "set" function to change it.
  // Whenever we call setName/setPassword, React re-draws the screen
  // with the new value automatically — that's the whole trick here.
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  // This runs when the Sign In button is pressed.
  // It just sets both fields to fixed values — no real login happening.
  function handleSignIn() {
    setName("Dipankar Tamrakar");
    setPassword("mypassword123");
  }

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>Sign In</Text>

        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          placeholderTextColor="#888"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          placeholderTextColor="#888"
          secureTextEntry
        />

        <Pressable style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 340,
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    color: "#25292e",
  },
  label: {
    fontSize: 13,
    color: "#555555",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    fontSize: 15,
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "700",
    fontSize: 15,
  },
});
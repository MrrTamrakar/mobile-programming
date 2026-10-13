import { useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth, db } from "../firebase";

export default function SignUpScreen() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Client");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSignUp() {
    if (name.trim() === "" || email.trim() === "" || password === "") {
      setIsError(true);
      setMessage("Please fill in all fields.");
      return;
    }
    if (password.length < 6) {
      setIsError(true);
      setMessage("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      // 1. Create the account (Firebase Authentication keeps the password safe)
      const result = await createUserWithEmailAndPassword(auth, email.trim(), password);

      // 2. Save the profile details in the Realtime Database under users/<uid>
      await set(ref(db, "users/" + result.user.uid), {
        name: name.trim(),
        email: email.trim(),
        role: role,
        createdAt: Date.now(),
      });

      setIsError(false);
      setMessage("Account created! Welcome to Kalakar.");
      setName("");
      setEmail("");
      setPassword("");
    } catch (error: any) {
      setIsError(true);
      if (error.code === "auth/email-already-in-use") {
        setMessage("That email is already registered.");
      } else if (error.code === "auth/invalid-email") {
        setMessage("Please enter a valid email address.");
      } else {
        setMessage(error.message);
      }
    }

    setLoading(false);
  }

  return (
    <SafeAreaView style={styles.screen}>
      <Pressable onPress={() => router.back()}>
        <Text style={styles.backText}>← Back</Text>
      </Pressable>

      <View style={styles.content}>
        <Text style={styles.appName}>Kalakar</Text>
        <Text style={styles.subtitle}>Create your account</Text>

        <Text style={styles.label}>Full name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Your name"
          placeholderTextColor="#44A1A0"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="name@example.com"
          placeholderTextColor="#44A1A0"
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="At least 6 characters"
          placeholderTextColor="#44A1A0"
          secureTextEntry
        />

        <Text style={styles.label}>I am a</Text>
        <View style={styles.roleRow}>
          <Pressable
            style={[styles.roleButton, role === "Client" && styles.roleButtonActive]}
            onPress={() => setRole("Client")}
          >
            <Text style={[styles.roleText, role === "Client" && styles.roleTextActive]}>
              Client
            </Text>
          </Pressable>
          <Pressable
            style={[styles.roleButton, role === "Designer" && styles.roleButtonActive]}
            onPress={() => setRole("Designer")}
          >
            <Text style={[styles.roleText, role === "Designer" && styles.roleTextActive]}>
              Designer
            </Text>
          </Pressable>
        </View>

        {message !== "" && (
          <Text style={[styles.message, isError ? styles.messageError : styles.messageOk]}>
            {message}
          </Text>
        )}

        <Pressable style={styles.signUpButton} onPress={handleSignUp} disabled={loading}>
          <Text style={styles.signUpButtonText}>
            {loading ? "Creating account..." : "Sign Up"}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#FFFFFA", paddingHorizontal: 20 },
  backText: { color: "#247B7B", fontSize: 14, fontWeight: "600", paddingVertical: 12 },
  content: { flex: 1, justifyContent: "center", paddingBottom: 40 },
  appName: { fontSize: 30, fontWeight: "800", color: "#0D5C63" },
  subtitle: { fontSize: 14, color: "#247B7B", marginBottom: 24 },
  label: { fontSize: 13, color: "#0D5C63", fontWeight: "600", marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: "#78CDD7",
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
    color: "#0D5C63",
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
  },
  roleRow: { flexDirection: "row", gap: 10, marginBottom: 16 },
  roleButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#44A1A0",
    borderRadius: 999,
    paddingVertical: 10,
    alignItems: "center",
  },
  roleButtonActive: { backgroundColor: "#78CDD7", borderColor: "#78CDD7" },
  roleText: { color: "#44A1A0", fontWeight: "600", fontSize: 14 },
  roleTextActive: { color: "#0D5C63" },
  message: { fontSize: 13, marginBottom: 12 },
  messageError: { color: "#B3261E" },
  messageOk: { color: "#247B7B" },
  signUpButton: {
    backgroundColor: "#247B7B",
    borderRadius: 999,
    paddingVertical: 14,
    alignItems: "center",
  },
  signUpButtonText: { color: "#FFFFFA", fontWeight: "700", fontSize: 15 },
});
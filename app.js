import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        
        {/* Logo */}
        <Image
          source={require("./assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Title */}
        <Text style={styles.title}>FLOW</Text>

        {/* Icon */}
        <Text style={styles.icon}>🚦</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          MOVE SMART{"\n"}
          SAVE TIME{"\n"}
          WELCOME!
        </Text>

        {/* Button */}
        <TouchableOpacity style={styles.button} onPress={() => alert("Continue")}>
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A86C5",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    elevation: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 15,
  },
  logo: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 2,
    color: "#4A86C5",
    marginBottom: 15,
  },
  icon: {
    fontSize: 28,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 25,
  },
  button: {
    backgroundColor: "#4A86C5",
    paddingVertical: 12,
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
  },
});
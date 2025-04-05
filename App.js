import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import { getPoke } from "./lib/metacritic";
import { Main } from "./components/Main";
export default function App() {
  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Main/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
 
});

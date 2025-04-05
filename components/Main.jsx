import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { getPoke } from "../lib/metacritic";
import { Card } from "./Card";

export function Main() {
  const [poke, setPoke] = useState(null);

  useEffect(() => {
    getPoke().then((poke) => {
      setPoke(poke);
    });
  }, []);

  return (
    <View style={styles.container}>
{poke ? <Card poke={poke} /> : <Text>Loading...</Text>} 
      <Text>nah</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60
  },
  image: {
    width: 130,
    height: 167,
    borderRadius: 10,
  },
  
});

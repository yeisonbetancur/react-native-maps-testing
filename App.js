import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import { getPoke } from "./lib/metacritic";

export default function App() {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    getPoke().then((poke) => {
      setPoke(poke);
    });
  }, []);

  return (
    <View style={styles.container}>
   
        <View  style={styles.card}>
          <Image source={{ uri: poke.img }} style={styles.image}></Image>
          <Text style={styles.name}>{poke.name}</Text>
          <Text style={styles.name}>ability: {poke.abilities[0].ability.name}</Text>
          <Text style={styles.name}>moves:</Text>
          {poke.moves.slice(0,5).map((move)=>(
            <Text key={move.move.url} style={styles.name}>{move.move.name}</Text>
          ))}
        </View>
      

      <Text>{}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    width: 130,
    height: 167,
    borderRadius: 10,
  },
  card: {
    name: {
      fontSize: 30,
      fontWeight: "bold",
      marginBottom: 10,
      color: "#fff",
    },
    description: {
      fontSize: 16,
      color: "#000"
    },
    score:{
      fontSize: 16,
      color: "green",
      marginTop:10,
      fontWeight:"bold"
    }
  },
});

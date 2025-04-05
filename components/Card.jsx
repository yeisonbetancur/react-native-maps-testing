import { useEffect } from "react";
import { StyleSheet, Image, Text,View } from "react-native";



export function Card({ poke }) {

  useEffect(()=>{

  },[])

  if (!poke || !poke.abilities || !poke.moves) {
    return <Text>Loading card...</Text>;
  }

  return (
    <View style={styles.card}>
      <Image source={{ uri: poke.img }} style={styles.image}></Image>
      <Text style={styles.name}>{poke.name}</Text>
      <Text style={styles.name}>ability: {poke.abilities[0].ability.name}</Text>
      <Text style={styles.name}>moves:</Text>
      {poke.moves.slice(0, 5).map((move) => (
        <Text key={move.move.url} style={styles.name}>
          {move.move.name}
        </Text>
      ))}
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#f1f1f1',
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 16,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#000",
  },
  description: {
    fontSize: 16,
    color: "#000"
  },
  image: {
    width: 130,
    height: 167,
    borderRadius: 10,
  },
  score: {
    fontSize: 16,
    color: "green",
    marginTop: 10,
    fontWeight: "bold"
  }
})
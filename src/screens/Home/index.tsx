import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styles";


export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>React Native</Text>
      <Text style={styles.eventDate}>Nois aqui!</Text>
      <Text style={styles.eventDate}>Texto teste</Text>
    </View>
  );
}
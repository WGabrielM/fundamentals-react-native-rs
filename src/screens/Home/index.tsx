import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";

export function Home() {
  function handleParticipantAdd() {
    console.log("Deu bom ");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>React Native</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome sdo participante"
          placeholderTextColor="#6B6B6B"
          keyboardType="default"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

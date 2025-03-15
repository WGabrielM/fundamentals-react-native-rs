import {
  View,
  Text,
  Alert,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import Participant from "../../components/Participant";

export function Home() {
  const participants = [
    "Wellington",
    "Maria",
    "Elizabeth",
    "Miguel",
    "Aurora",
    "Rafael",
    "Rita",
    "Gabriel",
    "Érico",
    "Marta",
    "José",
    "João",
  ];

  function handleParticipantAdd() {

    if(participants.includes("Wellington")) {
      return Alert.alert("Participant already exists", "Please enter a different name");
    }
    
  }
  
  function handleParticipantRemove(name: string) {
    Alert.alert(
      "Remove", 
      `Remove the participant ${name}?`, 
      [
        {
          text: "Yes",
          style: "destructive",
          onPress: () => console.log(`Participant ${name} removed`)
        },
        {
          text: "No",
          style: "cancel"
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>React Native</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          keyboardType="default"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            {" "}
            No one arrives in the event? Add participants in your presence list.
          </Text>
        )}
      />
    </View>
  );
}
 
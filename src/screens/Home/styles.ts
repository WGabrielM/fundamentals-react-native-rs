import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#FDFCFE",
    fontSize: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#FFF',
    borderRadius: 5,
    backgroundColor: '#1F1E25',

    marginRight: 12,

    padding: 16,
    height: 56,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  form: {
    flexDirection: 'row',

    marginTop: 36,
    marginBottom: 42,

    width: '100%',
  },
  listEmptyText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center'
}
});
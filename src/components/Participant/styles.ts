import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',

        borderRadius: 5,
        backgroundColor: '#1F1E25',
        marginBottom: 10,

        width: '100%',
    },
    name: {
        flex: 1,
        color: '#FFF',
        fontSize: 16,
        marginLeft: 16,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24,
    },
})
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tela de Acesso Inicial  </Text>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Profile')}>
                <Text style={styles.buttonText}>Minha Conta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddGasto')}>
                <Text style={styles.buttonText}>Adicionar Meus Gasto</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Gastos')}>
                <Text style={styles.buttonText}>Ver Meus gastos</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 20
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#f7a33b',
        marginBottom: 12,
        width: '100%',
        borderRadius: 8
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 10,
        fontSize: 20
    }
});

import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { auth, db, collection, addDoc } from '../firebase';

export default function AddGastoScreen({ navigation }) {
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [date, setDate] = useState('');

    const handleAddGasto = async () => {
        const user = auth.currentUser;

        if (!user) {
            Alert.alert('Erro', 'Usuário não autenticado.');
            return;
        }

        if (!description || !value || !date) {
            Alert.alert('Erro', 'Preencha todos os campos.');
            return;
        }

        try {
            await addDoc(collection(db, 'Gastos'), {
                userId: user.uid,
                description,
                value: parseFloat(value),
                date: new Date(date)
            });
            Alert.alert('✅ Gasto adicionado com sucesso!');
            navigation.goBack();
        } catch (error) {
            Alert.alert('Erro ao adicionar gasto', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adicionar Gasto</Text>
            <TextInput
                style={styles.input}
                placeholder="Descrição"
                value={description}
                onChangeText={setDescription}
            />
            <TextInput
                style={styles.input}
                placeholder="Valor"
                keyboardType="numeric"
                value={value}
                onChangeText={setValue}
            />
            <TextInput
                style={styles.input}
                placeholder="Data (YYYY-MM-DD)"
                value={date}
                onChangeText={setDate}
            />

            <TouchableOpacity style={styles.button} onPress={handleAddGasto}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center' },
    title: { fontSize: 22, textAlign: 'center', marginBottom: 20 },
    input: { 
        borderWidth: 1, 
        padding: 10, 
        marginBottom: 12, 
        borderRadius: 5 
    },
    button: {
        backgroundColor: '#f7a33b',
        padding: 12,
        borderRadius: 6,
        alignItems: 'center',
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
});

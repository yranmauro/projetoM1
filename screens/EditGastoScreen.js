import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { db, doc, updateDoc } from '../firebase';

export default function EditGastoScreen({ route, navigation }) {
    const { id, description: initialDesc, value: initialValue, date: initialDate } = route.params;

    const [description, setDescription] = useState(initialDesc);
    const [value, setValue] = useState(String(initialValue));
    const [date, setDate] = useState(new Date(initialDate.seconds * 1000).toISOString().split('T')[0]);

    const handleUpdate = async () => {
        try {
            await updateDoc(doc(db, 'Gastos', id), {
                description,
                value: parseFloat(value),
                date: new Date(date)
            });

            Alert.alert('✅ Gasto atualizado!');
            navigation.goBack();
        } catch (error) {
            Alert.alert('Erro ao atualizar gasto', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Editar Gasto</Text>
            <TextInput
                style={styles.input}
                value={description}
                onChangeText={setDescription}
                placeholder="Descrição"
            />
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={setValue}
                placeholder="Valor"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                value={date}
                onChangeText={setDate}
                placeholder="Data (YYYY-MM-DD)"
            />

            <TouchableOpacity style={styles.button} onPress={handleUpdate}>
                <Text style={styles.buttonText}>Salvar Alterações</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    title: { fontSize: 24, textAlign: 'center', marginBottom: 20 },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
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

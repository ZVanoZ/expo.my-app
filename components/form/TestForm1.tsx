import React, {useState} from 'react';
import {View, TextInput, Button, Text, StyleSheet} from 'react-native';

import LabeledTextInput from '@/components/form/input/LabeledTextInput';

function TestForm1() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
    };

    return (
        <View style={styles.mainContainer.container}>
            <View style={styles.login.container}>
                <Text style={styles.login.label}>Имя пользователя:</Text>
                <TextInput
                    placeholder='Введите имя'
                    value={name}
                    onChangeText={setName}
                    style={{
                        borderWidth: 1,
                        marginBottom: 10,
                        padding: 5,
                        borderColor: '#ccc',
                    }}
                />
            </View>

            <LabeledTextInput
                label="Email:"
                placeholder="email@example.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address" // Специальная клавиатура для email
            />

            <LabeledTextInput
                label="Телефон:"
                placeholder="+380XXXXXXXXX"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad" // Специальная клавиатура для телефона
            />

            <Button title='Отправить' onPress={handleSubmit}/>
            {submitted && <Text>Привет, {name}!</Text>}
        </View>
    );
}

const styles = {
    mainContainer: StyleSheet.create({
        container: {
            padding: 15,
            width: '100%',
            backgroundColor: '#f0f0f0',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#ccc',
        },
    }),
    defaults :{
        labels: StyleSheet.create({
            // container: {
            //     marginBottom: 15, // Отступ между полями ввода
            //     width: '80%' // Ширина контейнера
            // },
            label: {
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: 5, // Отступ между меткой и полем ввода
                color: '#0d7409',
            },
        })
    },
    login: StyleSheet.create({
        container: {
            marginBottom: 15, // Отступ между полями ввода
            width: '80%' // Ширина контейнера
        },
        label: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 5, // Отступ между меткой и полем ввода
            color: '#506bcc',
        },
    })
};

export {TestForm1};
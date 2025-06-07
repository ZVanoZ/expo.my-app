import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';

// Определяем пропсы для нашего компонента LabeledTextInput
interface LabeledTextInputProps extends TextInputProps {
    label: string; // Обязательный пропс для текста метки
    // Мы расширяем TextInputProps, чтобы LabeledTextInput мог принимать все пропсы TextInput
    // Например: placeholder, value, onChangeText, keyboardType и т.д.
}

const LabeledTextInput: React.FC<LabeledTextInputProps> = ({ label, style, ...rest }) => {
    // ...rest собирает все остальные пропсы, переданные LabeledTextInput,
    // и передает их напрямую в TextInput
    return (
        <View style={styles.container}>
            {/* Компонент Text для метки */}
            <Text style={styles.label}>{label}</Text>

            {/* Компонент TextInput */}
            <TextInput
                style={[styles.textInput, style]} // Объединяем внутренние стили с переданными извне
                {...rest} // Передаем все остальные пропсы TextInput'у
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // Располагаем элементы в строку
        alignItems: 'center', // Выравниваем элементы по центру по вертикали
        width: '100%', // Контейнер занимает всю доступную ширину
        marginBottom: 10, // Небольшой отступ снизу для разделения полей
        // Можно добавить paddingHorizontal: 20, чтобы контент не прилипал к краям экрана
    },
    label: {
        width: 150, // Фиксированная ширина для метки
        fontSize: 16,
        marginRight: 10, // Отступ между меткой и полем ввода
        color: '#333',
        fontWeight: '500',
    },
    textInput: {
        flex: 1, // Занимает все оставшееся пространство
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,
        fontSize: 16,
        backgroundColor: '#f9f9f9', // Легкий серый фон для поля ввода
    },
});

export default LabeledTextInput;
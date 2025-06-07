import React from 'react'; // Добавил импорт React
import {TestForm1} from '@/components/form/TestForm1';
import {View, StyleSheet} from 'react-native'; // Добавил View и StyleSheet для обертки и стилей

export default function Form1() {
    return (
        <View style={styles.container}>
            <TestForm1/> {/* Компонент TestForm1 является самозакрывающимся */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        // borderStyle: '1px solid red',
    },
});
import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const Tag = ({ tag }: any) => {
    return <Text style={styles.text}>#{tag} </Text>;
};

const styles = StyleSheet.create({
    text: { fontStyle: "italic", fontWeight: "600" },
})
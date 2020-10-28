import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface IProps {
    name: string,
    artist: string,
    id?: string
}

export const TrackInfo = ({ item }: any) => {
    return (
        <>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.artist}>{item.artist}</Text>
        </>
    );
};

const styles = StyleSheet.create({
    name: { fontWeight: "600", fontSize: 16, margin: 10 },
    artist: { fontSize: 14, marginRight: 5, fontStyle: "italic" }
});

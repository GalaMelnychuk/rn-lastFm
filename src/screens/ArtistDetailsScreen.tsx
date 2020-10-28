import React from 'react';
import { useSelector } from 'react-redux';
import { Text, Image, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { Tag } from '../components/Tag';
import { RootState } from '../redux/reducers/rootReducer';

export const ArtistDetailsScreen = () => {
  const artist = useSelector((state: RootState) => state.artist);
  const tags = useSelector((state: RootState) => state.artist?.tags);

  return (
    <SafeAreaView>
      <Text style={styles.artistName}>{artist?.name}</Text>
      <Image
        style={styles.img}
        source={{
          uri: artist?.artistImg,
        }}
      />
      <Text style={{ fontSize: 16 }}>{artist?.summary}</Text>
      <FlatList
        data={tags}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => <Tag tag={item.name} />}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  artistName: { fontWeight: "600", fontSize: 16 },
  img: { width: 40, height: 40, margin: 10 },
  list: { margin: 10, flexDirection: "row" }
});
import React from 'react';
import { useSelector } from 'react-redux';
import { Text, Image, FlatList, ScrollView } from 'react-native';

export const ArtistDetailsScreen = () => {
  const artist = useSelector((state) => state.artist);
  const tags = useSelector((state) => state.artist.tags);

  const Tag = ({ tag }) => {
    return <Text>{tag}</Text>;
  };

  return (
    <>
      <Text>{artist.name}</Text>
      <Image
        style={{ width: 30, height: 30 }}
        source={{
          uri: artist.artistImg,
        }}
      />
      <Text>{artist.summary}</Text>
      <FlatList
        data={tags}
        renderItem={({ item }) => <Tag tag={item.name} />}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};

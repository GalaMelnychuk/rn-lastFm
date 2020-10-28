import React, { useState } from 'react';
import { TouchableOpacity, TextInput, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { searchTracks } from '../redux/actions/searchTrackActions';

export const SearchScreen = () => {
  const [track, setTrack] = useState('');
  const info = useSelector((state) => state.trackInfo);
  const dispatch = useDispatch();

  const onSearchTrack = (text: string) => {
    dispatch(searchTracks(text));
  };

  const TrackInfo = ({ item }) => {
    return (
      <View>
        <Text>{item.trackName}</Text>
        <Text>{item.author}</Text>
      </View>
    );
  };

  return (
    <>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={setTrack}
        value={track}
      />
      <TouchableOpacity onPress={() => onSearchTrack(track)}>
        <Text>SEARCH</Text>
      </TouchableOpacity>
      {info.length > 0 ? (
        <FlatList
          data={info}
          renderItem={({ item }) => <TrackInfo item={item} />}
          keyExtractor={(item) => item.id}
        />
      ) : null}
    </>
  );
};

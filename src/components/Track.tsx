import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Text, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { getArtistInfo } from '../redux/actions/artistInfoActions';

export const Track = ({ item }: any) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const goToArtistScreen = () => {
    navigation.navigate('ArtistDetails');
  };

  const showArtist = (artist: string) => {
    dispatch(getArtistInfo(artist, goToArtistScreen));
  };

  return (
    <>
      <Text>{item.trackName}</Text>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor='#DDDDDD'
        onPress={() => showArtist(item.artist)}>
        <Text style={styles.artist}>{item.artist}</Text>
      </TouchableHighlight>
      {item.img && (
        <Image
          style={styles.img}
          source={{
            uri: item?.img,
          }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  artist: { fontSize: 18, fontWeight: '700' },
  img: { width: 30, height: 30 }
});

import React, { useState, useEffect } from 'react';
import { TouchableOpacity, TextInput, Text, View, Alert, SafeAreaView, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { cleanSearchingTracks, searchTracks } from '../redux/actions/searchTrackActions';
import { TrackInfo } from '../components/TrackInfo';
import { RootState } from "../redux/reducers/rootReducer"

export const SearchScreen = () => {
  const [track, setTrack] = useState('');
  const info = useSelector((state: RootState) => state.trackInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(cleanSearchingTracks())
    };
  }, []);

  const onSearchTrack = (text: string) => {
    if (text.trim()) {
      dispatch(searchTracks(text));
      setTrack("")
    } else {
      Alert.alert(
        "Please, enter a track title",
        "",
        [
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }
  };


  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          placeholder={"Track title..."}
          onChangeText={(text) => setTrack(text)}
          value={track}
        />
      </View>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => onSearchTrack(track)} style={styles.btn}>
          <Text style={styles.textBtn}>SEARCH</Text>
        </TouchableOpacity>
      </View>

      {info.length ?
        <View style={styles.listCont}>
          <FlatList
            data={info}
            renderItem={({ item }) => <TrackInfo item={item} />}
            keyExtractor={(item: any) => item.id}
          />
        </View>
        : null}
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  wrapper: { padding: 20 },
  img: { width: 40, height: 40, margin: 10 },
  list: { margin: 10, flexDirection: "row" },
  btn: { backgroundColor: "#43b1f4", width: "100%", padding: 10, borderColor: "black", borderWidth: 1, borderRadius: 8, alignItems: "center", justifyContent: "center" },
  input: { height: 50, borderColor: 'gray', borderWidth: 1, marginTop: 40, padding: 10, borderRadius: 8 },
  textBtn: { color: "#000", fontWeight: "700" },
  listCont: { height: "70%" }
});
import React, { useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularTracksAction } from '../redux/actions/popularTracksActions';
import { Track } from '../components/Track';
import { RootState } from '../redux/reducers/rootReducer';

export const HomeScreen = () => {
  const tracks = useSelector((state: RootState) => state.tracks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularTracksAction());
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={tracks}
        renderItem={({ item }) => <Track item={item} />}
        keyExtractor={(item: any) => item.trackName}
      />
    </SafeAreaView>
  );
};
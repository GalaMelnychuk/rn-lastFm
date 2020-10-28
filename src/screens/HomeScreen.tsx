import React, { useEffect } from 'react';
import { Text, SafeAreaView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getPopularTracksAction } from '../redux/actions/popularTracksActions';
import { requests } from '../services/requests';
import { Track } from '../components/Track';

export const HomeScreen = () => {
  const tracks = useSelector((state) => state.tracks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularTracksAction());
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={tracks}
        renderItem={({ item }) => <Track item={item} />}
        keyExtractor={(item) => item.trackName}
      />
    </SafeAreaView>
  );
};

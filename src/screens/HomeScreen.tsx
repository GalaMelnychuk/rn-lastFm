import React, { FC, useEffect, useRef } from 'react';
import { Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import { getPopularTracksAction } from '../redux/actions/popularTracksActions';
import { requests } from '../services/requests';
import { Track } from '../components/Track';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const tracks = useSelector((state) => state.tracks);

  useEffect(() => {
    dispatch(getPopularTracksAction());
  }, []);

  return (
    <FlatList
      data={tracks}
      renderItem={({ item }) => <Track name={item.name} />}
      keyExtractor={(item) => item.name}
    />
  );
};

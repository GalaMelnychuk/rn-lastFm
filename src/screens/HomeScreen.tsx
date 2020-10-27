import React, { FC, useEffect, useRef } from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { getPopularTracksAction } from '../redux/actions/popularTracksActions';
import { requests } from '../services/requests';

export const HomeScreen = () => {
  const dispatch = useDispatch();

  return <Text onPress={() => dispatch(getPopularTracksAction())}>Home</Text>;
};

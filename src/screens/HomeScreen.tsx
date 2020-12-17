import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularTracksAction } from '../redux/actions/popularTracksActions';
import { Track } from '../components/Track';
import { RootState } from '../redux/reducers/rootReducer';

export const HomeScreen = () => {
  const [counter, setCounter] = useState(180);

  const formatTime = (time:number) => {
    return String(time).length === 1 ? `0${time}` : `${time}`;
  };
  
  const convertTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
  
    return `${formatTime(minutes)}:${formatTime(seconds)}`;
  };

  useEffect(() => {
    let timerId: any;
    if (counter > 0) {
      timerId = setTimeout(() => setCounter((value) => value - 1), 1000);
    }
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [counter]);

  return (
    <Text style={styles.time}>
      {counter === 0 ? 'Video permissions' : convertTime(counter)}
    </Text>
  );
};

const styles = StyleSheet.create({
  time: {
    fontSize: 13,
    fontWeight: '600',

    lineHeight: 19,
    marginLeft: 3,
    color: "blue",
  },
});
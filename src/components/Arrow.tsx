import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

export const Arrow = ({ navigation }: any) => {
  return (
    <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('Search')}>
      <Image style={{ width: 27, height: 29 }} source={require('../img/icons/right-arrow.png')} />
    </TouchableOpacity>
  );
};

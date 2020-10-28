import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export const Arrow = ({ navigation }: any) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Search')}>
      <Image style={styles.img} source={require('../img/icons/right-arrow.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: { marginRight: 20 },
  img: { width: 27, height: 29 }
})

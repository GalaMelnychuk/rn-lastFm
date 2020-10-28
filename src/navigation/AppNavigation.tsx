import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/HomeScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { ArtistDetailsScreen } from '../screens/ArtistDetailsScreen';
import { Arrow } from '../components/Arrow';

const Stack = createStackNavigator();

export const content = (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        options={({ navigation }) => ({
          title: 'Popular Tracks',
          headerStyle: {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
          headerTitleStyle: {
            fontSize: 24,
          },
          headerRight: () => <Arrow navigation={navigation} />,
        })}
        name='Home'
        component={HomeScreen}
      />

      <Stack.Screen
        options={{
          title: 'Search',
          headerStyle: {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
          headerTitleStyle: {
            fontSize: 24,
          },
        }}
        name='Search'
        component={SearchScreen}
      />
      <Stack.Screen
        options={{
          title: 'About Artist',
          headerStyle: {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
          },
          headerTitleStyle: {
            fontSize: 24,
          },
        }}
        name='ArtistDetails'
        component={ArtistDetailsScreen}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

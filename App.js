import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WorkoutListScreen from './screens/WorkoutListScreen';
import WorkoutDetailsScreen from './screens/WorkoutDetailsScreen';
import { Colors } from './constants/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WorkoutList"
        screenOptions={{
          headerShadowVisible: false,
          headerTintColor: Colors.textPrimary,
        }}
      >
        <Stack.Screen
          name="WorkoutList"
          component={WorkoutListScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WorkoutDetails"
          component={WorkoutDetailsScreen}
          options={({ route }) => ({
            title: route.params.workout.title,
            headerBackTitle: 'Back',
            headerTransparent: true,
            headerTintColor: Colors.textPrimary,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

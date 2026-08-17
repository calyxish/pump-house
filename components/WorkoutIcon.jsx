import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';

const workoutThemes = {
  'Full-Body Workout': { icon: 'body-outline', bg: '#FF5E7E', color: '#FFFFFF' },
  'Indoor Run': { icon: 'walk-outline', bg: '#FF8A65', color: '#FFFFFF' },
  'Outdoor Cycle': { icon: 'bicycle-outline', bg: '#7E57C2', color: '#FFFFFF' },
  'Yoga & Stretching': { icon: 'leaf-outline', bg: '#66BB6A', color: '#FFFFFF' },
  'Core Blast': { icon: 'flame-outline', bg: '#EF5350', color: '#FFFFFF' },
  'Upper Body Pump': { icon: 'barbell-outline', bg: '#42A5F5', color: '#FFFFFF' },
  'HIIT Cardio': { icon: 'flash-outline', bg: '#FFA726', color: '#FFFFFF' },
  'Lower Strength': { icon: 'fitness-outline', bg: '#26A69A', color: '#FFFFFF' },
};

const defaultTheme = { icon: 'barbell-outline', bg: Colors.primary, color: '#FFFFFF' };

export default function WorkoutIcon({ title, size = 64 }) {
  const theme = workoutThemes[title] || defaultTheme;
  const iconSize = size * 0.5;

  return (
    <View style={[styles.circle, { width: size, height: size, borderRadius: size / 2, backgroundColor: theme.bg }]}>
      <Ionicons name={theme.icon} size={iconSize} color={theme.color} />
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

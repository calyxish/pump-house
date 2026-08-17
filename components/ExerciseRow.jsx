import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { Spacing, BorderRadius } from '../constants/spacing';

export default function ExerciseRow({ name, icon }) {
  return (
    <TouchableOpacity style={styles.row} activeOpacity={0.7}>
      <View style={styles.iconCircle}>
        <Ionicons name={icon} size={22} color={Colors.textPrimary} />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Ionicons name="chevron-forward" size={20} color={Colors.textLight} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderLight,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primaryBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing.lg,
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: Colors.textPrimary,
  },
});

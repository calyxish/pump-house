import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { Spacing } from '../constants/spacing';

export default function Header({ name, date, profileImage }) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.userInfo}>
        <Image source={profileImage} style={styles.profileImage} />
        <View>
          <Text style={styles.greeting}>Hello {name}!</Text>
          <Text style={styles.dateText}>{date}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.calendarButton}>
        <Ionicons name="calendar-outline" size={22} color={Colors.textPrimary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Spacing.sm,
    marginBottom: Spacing.xxl,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: Spacing.md,
    backgroundColor: Colors.primaryBackground,
  },
  greeting: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
  },
  dateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  calendarButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: Colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

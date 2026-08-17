import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/colors';
import { Spacing, BorderRadius } from '../constants/spacing';
import WorkoutIcon from './WorkoutIcon';

export default function WorkoutCard({ title, duration, calories, difficulty, onPress }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'Easy': return Colors.success;
      case 'Hard': return Colors.primary;
      default: return '#FFA726';
    }
  };

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.iconWrapper}>
        <WorkoutIcon title={title} size={64} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.statsRow}>
          <View style={styles.statChip}>
            <Ionicons name="time-outline" size={14} color={Colors.textSecondary} />
            <Text style={styles.statText}>{duration}</Text>
          </View>
          <View style={styles.statChip}>
            <Ionicons name="flame-outline" size={14} color={Colors.primary} />
            <Text style={styles.statText}>{calories}</Text>
          </View>
        </View>

        <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor() + '18' }]}>
          <Text style={[styles.difficultyText, { color: getDifficultyColor() }]}>{difficulty}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => setIsFavorited(!isFavorited)}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <Ionicons
          name={isFavorited ? 'heart' : 'heart-outline'}
          size={24}
          color={isFavorited ? Colors.favorite : Colors.favoriteOutline}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.xl,
    padding: Spacing.lg,
    marginBottom: Spacing.md,
    alignItems: 'center',
    shadowColor: Colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 3,
  },
  iconWrapper: {
    marginRight: Spacing.lg,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xs,
  },
  statChip: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: Spacing.md,
  },
  statText: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginLeft: 4,
  },
  difficultyBadge: {
    alignSelf: 'flex-start',
    paddingVertical: 2,
    paddingHorizontal: Spacing.sm,
    borderRadius: BorderRadius.sm,
  },
  difficultyText: {
    fontSize: 11,
    fontWeight: '600',
  },
  favoriteButton: {
    padding: Spacing.sm,
  },
});

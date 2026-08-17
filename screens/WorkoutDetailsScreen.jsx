import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import StatPill from '../components/StatPill';
import ExerciseRow from '../components/ExerciseRow';
import WorkoutIcon from '../components/WorkoutIcon';
import { Colors } from '../constants/colors';
import { Spacing, BorderRadius } from '../constants/spacing';

export default function WorkoutDetailsScreen({ route }) {
  const { workout } = route.params;
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <View style={styles.mainWrapper}>
      <ScrollView style={styles.scrollView} bounces={false} showsVerticalScrollIndicator={false}>
        <View style={styles.heroSection}>
          <View style={styles.imageWrapper}>
            <WorkoutIcon title={workout.title} size={200} />
          </View>

          <View style={styles.pillContainer}>
            <StatPill label={workout.difficulty} />
            <StatPill label={workout.duration} />
          </View>

          <Text style={styles.title}>{workout.title}</Text>
          <Text style={styles.description}>{workout.description}</Text>

          <TouchableOpacity style={styles.playButton} activeOpacity={0.8}>
            <Ionicons name="play" size={28} color={Colors.surface} />
          </TouchableOpacity>
        </View>

        <View style={styles.exercisesSection}>
          <Text style={styles.exercisesTitle}>Exercises</Text>

          {workout.exercises && workout.exercises.map((exercise, index) => (
            <ExerciseRow key={index} name={exercise.name} icon={exercise.icon} />
          ))}
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.actionButton, isCompleted ? styles.completedButton : styles.startButton]}
          onPress={() => setIsCompleted(!isCompleted)}
          activeOpacity={0.8}
        >
          <Ionicons
            name={isCompleted ? 'checkmark-circle' : 'play-circle'}
            size={22}
            color={Colors.surface}
            style={styles.buttonIcon}
          />
          <Text style={styles.actionButtonText}>
            {isCompleted ? 'Completed' : 'Start Workout'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: Colors.primaryBackground,
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    alignItems: 'center',
    paddingHorizontal: Spacing.xxl,
    paddingTop: 100,
    paddingBottom: 40,
  },
  imageWrapper: {
    marginBottom: Spacing.xl,
  },
  pillContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: Spacing.xl,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: Spacing.md,
  },
  description: {
    fontSize: 15,
    color: Colors.textSecondary,
    lineHeight: 24,
    textAlign: 'center',
    paddingHorizontal: Spacing.lg,
  },
  playButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.xxl,
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
    paddingLeft: 3,
  },
  exercisesSection: {
    backgroundColor: Colors.surface,
    borderTopLeftRadius: BorderRadius.xxl + 6,
    borderTopRightRadius: BorderRadius.xxl + 6,
    paddingHorizontal: Spacing.xxl,
    paddingTop: Spacing.xxxl,
    paddingBottom: 120,
    minHeight: 300,
  },
  exercisesTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.textSecondary,
    marginBottom: Spacing.lg,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: Spacing.xxl,
    paddingBottom: 40,
    backgroundColor: Colors.surface,
  },
  actionButton: {
    flexDirection: 'row',
    paddingVertical: 18,
    borderRadius: BorderRadius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  startButton: {
    backgroundColor: Colors.primary,
  },
  completedButton: {
    backgroundColor: Colors.success,
  },
  buttonIcon: {
    marginRight: Spacing.sm,
  },
  actionButtonText: {
    color: Colors.surface,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import WorkoutCard from '../components/WorkoutCard';
import CategoryBadge from '../components/CategoryBadge';
import { workoutsData } from '../data/workouts';
import { Colors } from '../constants/colors';
import { Spacing } from '../constants/spacing';

const profileImage = require('../assets/Profile.png');

const categories = [
  { id: '1', label: 'Special', icon: 'star-outline' },
  { id: '2', label: 'Beach Ready', icon: 'sunny-outline' },
  { id: '3', label: 'Full-Body', icon: 'trophy-outline' },
  { id: '4', label: 'Challenge', icon: 'ribbon-outline' },
];

export default function WorkoutListScreen({ navigation }) {
  const renderWorkout = ({ item }) => (
    <WorkoutCard
      title={item.title}
      duration={item.duration}
      calories={item.calories}
      difficulty={item.difficulty}
      onPress={() => navigation.navigate('WorkoutDetails', { workout: item })}
    />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header
          name="Linh"
          date="Thursday, 08 July"
          profileImage={profileImage}
        />

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>Categories</Text>
            <Text style={styles.sectionSubtitle}>{categories.length} Categories</Text>
          </View>
          <Text style={styles.seeAllText}>See All</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
          contentContainerStyle={styles.categoryContent}
        >
          {categories.map((cat) => (
            <CategoryBadge key={cat.id} label={cat.label} icon={cat.icon} />
          ))}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <View>
            <Text style={styles.sectionTitle}>{workoutsData.length} Workouts</Text>
            <Text style={styles.sectionSubtitle}>Get ready for Workouts</Text>
          </View>
          <Text style={styles.seeAllText}>See All</Text>
        </View>

        <FlatList
          data={workoutsData}
          keyExtractor={(item) => item.id}
          renderItem={renderWorkout}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    paddingHorizontal: Spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: Spacing.sm,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
  sectionSubtitle: {
    fontSize: 13,
    color: Colors.textSecondary,
    marginTop: 2,
  },
  seeAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.primary,
    marginTop: 2,
  },
  categoryScroll: {
    marginBottom: Spacing.xxl,
  },
  categoryContent: {
    paddingRight: Spacing.xl,
  },
  listContent: {
    paddingBottom: 40,
  },
});

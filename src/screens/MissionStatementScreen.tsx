import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface MissionStatementScreenProps {
  onGetStarted?: () => void;
}

export const MissionStatementScreen: React.FC<MissionStatementScreenProps> = ({ onGetStarted }) => {
  return (
    <LinearGradient
      colors={['#F5F5DC', '#E6E6B8', '#F5F5DC']}
      locations={[0, 0.5, 1]}
      style={styles.container}
    >
      {/* Mission Statement Title */}
      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="heart" size={32} color="#32CD32" />
        </View>
        <Text style={styles.titleText}>MISSION</Text>
        <Text style={styles.titleText}>STATEMENT</Text>
        <View style={styles.decorativeLine} />
      </View>

      {/* Mission Content */}
      <View style={styles.contentContainer}>
        <View style={styles.missionBox}>
          <View style={styles.quoteContainer}>
            <Ionicons name="chatbubble-outline" size={24} color="#32CD32" style={styles.quoteIcon} />
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.missionText}>
              Our mission is to make essential services accessible for everyone in Oakland and Alameda County. Whether you're looking for free healthcare, affordable dental care, food assistance, insurance support, or literacy programs our app connects you to trusted local resources in one easy to use platform.
            </Text>
            <View style={styles.highlightContainer}>
              <Text style={styles.highlightText}>No logins, no confusion, just real help and fast.</Text>
            </View>
          </ScrollView>
          <View style={styles.featuresContainer}>
            <View style={styles.featureItem}>
              <Ionicons name="medical" size={16} color="#32CD32" />
              <Text style={styles.featureText}>Healthcare</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="restaurant" size={16} color="#32CD32" />
              <Text style={styles.featureText}>Food Assistance</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="school" size={16} color="#32CD32" />
              <Text style={styles.featureText}>Education</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Get Started Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.getStartedButton} onPress={onGetStarted}>
          <Text style={styles.buttonText}>LET'S GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingTop: 100,
    paddingBottom: 60,
    justifyContent: 'space-between',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  iconContainer: {
    marginBottom: 15,
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 50,
    shadowColor: '#32CD32',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  titleText: {
    fontSize: 32,
    fontWeight: '800',
    color: '#black',
    textAlign: 'center',
    lineHeight: 38,
    letterSpacing: 1,
  },
  decorativeLine: {
    width: 60,
    height: 3,
    backgroundColor: '#32CD32',
    marginTop: 10,
    borderRadius: 2,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  missionBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 25,
    padding: 30,
    width: '100%',
    maxHeight: 450,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(50, 205, 50, 0.1)',
  },
  quoteContainer: {
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  quoteIcon: {
    opacity: 0.7,
  },
  missionText: {
    fontSize: 16,
    lineHeight: 26,
    color: '#2C3E50',
    textAlign: 'center',
    fontWeight: '400',
    marginBottom: 20,
  },
  highlightContainer: {
    backgroundColor: 'rgba(50, 205, 50, 0.1)',
    padding: 15,
    borderRadius: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#32CD32',
    marginBottom: 20,
  },
  highlightText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1B4B73',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  featuresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(50, 205, 50, 0.2)',
  },
  featureItem: {
    alignItems: 'center',
    flex: 1,
  },
  featureText: {
    fontSize: 12,
    color: '#1B4B73',
    marginTop: 5,
    textAlign: 'center',
    fontWeight: '500',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  getStartedButton: {
    backgroundColor: '#32CD32',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default MissionStatementScreen;
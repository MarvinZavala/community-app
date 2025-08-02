import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface VideoScreenProps {
  onEnter?: () => void;
}

export const VideoScreen: React.FC<VideoScreenProps> = ({ onEnter }) => {
  return (
    <LinearGradient
      colors={['#F5F5DC', '#E6E6B8', '#F5F5DC']}
      locations={[0, 0.5, 1]}
      style={styles.container}
    >
      {/* Tutorial Title */}
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>Tutorial</Text>
        <Text style={styles.subtitleText}>Learn how to get the most out of Oasis Oakland</Text>
      </View>

      {/* Video Container - Placeholder */}
      <View style={styles.videoContainer}>
        <View style={styles.videoPlaceholder}>
          <Text style={styles.placeholderText}>Video Tutorial</Text>
          <Text style={styles.placeholderSubtext}>Coming Soon</Text>
        </View>
      </View>

      {/* Enter Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.enterButton} onPress={onEnter}>
          <Text style={styles.buttonText}>Enter</Text>
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
    marginBottom: 20,
  },
  titleText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1B4B73',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: '300',
    color: '#333333',
    textAlign: 'center',
    lineHeight: 24,
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  videoPlaceholder: {
    width: '100%',
    height: 250,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(27, 75, 115, 0.2)',
    borderStyle: 'dashed',
  },
  placeholderText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1B4B73',
    marginBottom: 8,
  },
  placeholderSubtext: {
    fontSize: 16,
    fontWeight: '300',
    color: '#666666',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  enterButton: {
    backgroundColor: '#32CD32',
    paddingVertical: 18,
    paddingHorizontal: 80,
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default VideoScreen;
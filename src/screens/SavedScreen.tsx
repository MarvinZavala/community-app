import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface SavedScreenProps {
  onContinue: () => void;
  onGoBack: () => void;
}

export const SavedScreen: React.FC<SavedScreenProps> = ({ 
  onContinue, 
  onGoBack
}) => {
  return (
    <LinearGradient
      colors={['#F5F5DC', '#F0F8E8', '#E8F5E8']}
      locations={[0, 0.5, 1]}
      style={styles.container}
    >
      {/* Logo Container */}
      <View style={styles.logoContainer}>
        {/* Logo Image */}
        <Image 
          source={require('../../assets/logooasis.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
        
        {/* Success Message */}
        <View style={styles.messageContainer}>
          <Ionicons name="checkmark-circle" size={60} color="#32CD32" />
          <Text style={styles.successText}>Successfully Saved!</Text>
          <Text style={styles.subText}>The clinic information has been saved</Text>
        </View>
      </View>

      {/* Buttons Container */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style={styles.continueButton}
          onPress={onContinue}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>CONTINUE</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.backButton}
          onPress={onGoBack}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>GO BACK</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 80,
    paddingBottom: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  logoImage: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  messageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C5282',
    marginTop: 15,
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: '#666666',
    marginTop: 10,
    textAlign: 'center',
    lineHeight: 22,
  },
  buttonsContainer: {
    width: '100%',
    gap: 20,
    paddingHorizontal: 20,
  },
  continueButton: {
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
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#2196F3',
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
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SavedScreen;
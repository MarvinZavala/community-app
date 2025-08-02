import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
interface WelcomeScreenProps {
  onContinue: () => void;
}



export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onContinue }) => {
  const handleContinue = () => {
    onContinue();
  };
  return (
    <LinearGradient
      colors={['#F5F5DC', '#E6E6B8', '#F5F5DC']}
      locations={[0, 0.5, 1]}
      style={styles.container}
    >
      {/* Welcome Text */}
      <View style={styles.headerContainer}>
        <Text style={styles.welcomeText}>Welcome to</Text>
      </View>

      {/* Logo and Brand Name */}
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../assets/logooasis.png')} 
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      {/* Continue Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
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
  welcomeText: {
    fontSize: 32,
    fontWeight: '300',
    color: '#333333',
    textAlign: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  logoImage: {
    width: 350,
    height: 350,
    marginBottom: 30,
  },
  brandName: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1B4B73', // Dark blue like in the image
    textAlign: 'center',
    marginBottom: -5,
  },
  brandLocation: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1B4B73', // Dark blue like in the image
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  continueButton: {
    backgroundColor: '#32CD32', // Bright green like in the image
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

export default WelcomeScreen;

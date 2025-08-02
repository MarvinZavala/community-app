import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface OasisOaklandScreenProps {
  onAddMore: () => void;
  onGoBack: () => void;
  onMainMenu: () => void;
}

export const OasisOaklandScreen: React.FC<OasisOaklandScreenProps> = ({ 
  onAddMore, 
  onGoBack, 
  onMainMenu 
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
      </View>

      {/* Buttons Container */}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={onAddMore}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>FIND MORE SERVICES</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={onGoBack}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>GO BACK</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={onMainMenu}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>MAIN MENU</Text>
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
    width: 250,
    height: 250,
    marginBottom: 40,
  },
  buttonsContainer: {
    width: '100%',
    gap: 20,
    paddingHorizontal: 20,
  },
  button: {
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
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default OasisOaklandScreen;
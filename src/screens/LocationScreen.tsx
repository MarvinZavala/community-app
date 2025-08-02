import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions, Alert, ActivityIndicator } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
const { width } = Dimensions.get('window');

interface LocationScreenProps {
  onLocation: (location: string) => void;
}

export const LocationScreen: React.FC<LocationScreenProps> = ({ onLocation }) => {
  const [location, setLocation] = useState('');
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [hasLocationPermission, setHasLocationPermission] = useState(false);

  useEffect(() => {
    checkLocationPermission();
  }, []);

  const checkLocationPermission = async () => {
    try {
      const { status } = await Location.getForegroundPermissionsAsync();
      setHasLocationPermission(status === 'granted');
    } catch (error) {
      console.log('Error checking location permission:', error);
    }
  };

  const requestLocationPermission = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      setHasLocationPermission(status === 'granted');
      return status === 'granted';
    } catch (error) {
      console.log('Error requesting location permission:', error);
      return false;
    }
  };

  const getCurrentLocation = async () => {
    setIsLoadingLocation(true);
    try {
      let hasPermission = hasLocationPermission;
      
      if (!hasPermission) {
        hasPermission = await requestLocationPermission();
      }

      if (!hasPermission) {
        Alert.alert(
          'Location Permission',
          'We need access to your location to find nearby businesses.',
          [{ text: 'OK' }]
        );
        setIsLoadingLocation(false);
        return;
      }

      const locationResult = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      const { latitude, longitude } = locationResult.coords;
      
      // Simular geocoding reverso
      const reverseGeocode = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      // Siempre establecer Oakland como ubicación
      setLocation('Oakland, California');
    } catch (error) {
      console.log('Error getting location:', error);
      Alert.alert(
        'Error',
        'Could not get your location. Please try again.',
        [{ text: 'OK' }]
      );
    } finally {
      setIsLoadingLocation(false);
    }
  };

  const handleContinue = () => {
    if (!location.trim()) {
      Alert.alert(
        'Location Required',
        'Please enter your location or use current location.',
        [{ text: 'OK' }]
      );
      return;
    }

    onLocation(location);
  };

  return (
    <LinearGradient
      colors={['#F5F5DC', '#F0F8E8', '#E8F5E8']}
      locations={[0, 0.5, 1]}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>Where are you located?</Text>
        <Text style={styles.subtitleText}>Find local resources near you</Text>
      </View>

      {/* Content */}
      <View style={styles.contentContainer}>
        {/* Location Input */}
        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.locationInput}
              placeholder="Oakland"
              placeholderTextColor="#999"
              value={location}
              onChangeText={setLocation}
            />
            <TouchableOpacity 
              style={styles.locationButton}
              onPress={getCurrentLocation}
              disabled={isLoadingLocation}
            >
              {isLoadingLocation ? (
                <ActivityIndicator size="small" color="#32CD32" />
              ) : (
                <Ionicons name="location" size={20} color="#32CD32" />
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.helperText}>
            Tap the location icon to use your current location
          </Text>
        </View>

        {/* Map Illustration */}
        <View style={styles.mapContainer}>
          <View style={styles.mapBase}>
            {/* Map layers */}
            <View style={[styles.mapLayer, styles.blueLayer]} />
            <View style={[styles.mapLayer, styles.greenLayer]} />
            <View style={[styles.mapLayer, styles.brownLayer]} />
            <View style={[styles.mapLayer, styles.yellowLayer]} />
            
            {/* Location pin */}
            <View style={styles.pinContainer}>
              <View style={styles.pin}>
                <View style={styles.pinInner} />
              </View>
              <View style={styles.pinShadow} />
            </View>
          </View>
        </View>
      </View>

      {/* Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.continueButton, !location.trim() && styles.disabledButton]} 
          onPress={handleContinue}
          disabled={!location.trim()}
        >
          <Text style={[styles.buttonText, !location.trim() && styles.disabledButtonText]}>
            Continue
          </Text>
          <Ionicons name="arrow-forward" size={20} color={!location.trim() ? "#999" : "#FFFFFF"} style={styles.buttonIcon} />
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
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 16,
    color: '#7F8C8D',
    textAlign: 'center',
    lineHeight: 22,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 60,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(50, 205, 50, 0.3)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  locationInput: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontSize: 16,
    color: '#2C3E50',
  },
  locationButton: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helperText: {
    fontSize: 12,
    color: '#95A5A6',
    textAlign: 'center',
    marginTop: 8,
    fontStyle: 'italic',
  },
  mapContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapBase: {
    width: 200,
    height: 150,
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden',
  },
  mapLayer: {
    position: 'absolute',
    borderRadius: 8,
  },
  blueLayer: {
    width: 80,
    height: 60,
    backgroundColor: '#4A90E2',
    bottom: 0,
    left: 20,
  },
  greenLayer: {
    width: 120,
    height: 80,
    backgroundColor: '#7ED321',
    top: 20,
    left: 40,
  },
  brownLayer: {
    width: 90,
    height: 70,
    backgroundColor: '#D0743C',
    bottom: 10,
    right: 20,
  },
  yellowLayer: {
    width: 60,
    height: 40,
    backgroundColor: '#F5A623',
    top: 40,
    left: 10,
  },
  pinContainer: {
    position: 'absolute',
    top: 30,
    left: '50%',
    marginLeft: -15,
    alignItems: 'center',
  },
  pin: {
    width: 30,
    height: 40,
    backgroundColor: '#E74C3C',
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transform: [{ rotate: '45deg' }],
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  pinInner: {
    width: 12,
    height: 12,
    backgroundColor: '#C0392B',
    borderRadius: 6,
    transform: [{ rotate: '-45deg' }],
  },
  pinShadow: {
    width: 20,
    height: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  continueButton: {
    backgroundColor: '#32CD32',
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
    minWidth: 160,
  },
  disabledButton: {
    backgroundColor: '#BDC3C7',
    shadowOpacity: 0.1,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  disabledButtonText: {
    color: '#999',
  },
  buttonIcon: {
    marginLeft: 8,
  },
});

export default LocationScreen;
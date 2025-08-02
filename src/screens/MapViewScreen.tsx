import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface MapViewScreenProps {
  onViewInfo: () => void;
}

export const MapViewScreen: React.FC<MapViewScreenProps> = ({ onViewInfo }) => {
  const [selectedPin, setSelectedPin] = useState<string | null>(null);

  const mapPins = [
    {
      id: 'freedom-clinic',
      name: 'Freedom Community Clinic',
      position: { top: 85, left: 65 },
      hasInfo: true,
      color: '#FF6B6B',
      category: 'health'
    },
    {
      id: 'community-center',
      name: 'Community Center',
      position: { top: 125, left: 145 },
      hasInfo: false,
      color: '#4ECDC4',
      category: 'community'
    },
    {
      id: 'food-bank',
      name: 'Food Bank',
      position: { top: 165, left: 105 },
      hasInfo: false,
      color: '#45B7D1',
      category: 'food'
    },
    {
      id: 'library',
      name: 'Public Library',
      position: { top: 205, left: 185 },
      hasInfo: false,
      color: '#96CEB4',
      category: 'education'
    },
    {
      id: 'shelter',
      name: 'Emergency Shelter',
      position: { top: 145, left: 205 },
      hasInfo: false,
      color: '#FFEAA7',
      category: 'shelter'
    }
  ];

  interface MapPin {
    id: string;
    name: string;
    position: { top: number; left: number };
    hasInfo: boolean;
    color: string;
    category: string;
  }

  const handlePinPress = (pin: MapPin) => {
    if (pin.hasInfo) {
      setSelectedPin(pin.id);
    }
  };

  return (
    <LinearGradient
      colors={['#F5F5DC', '#F0F8E8', '#E8F5E8']}
      locations={[0, 0.5, 1]}
      style={styles.container}
    >
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.titleText}>Community Resources</Text>
          <Text style={styles.subtitleText}>Find local resources near you</Text>
        </View>

        {/* Map Container */}
        <View style={styles.mapContainer}>
          <View style={styles.mapPlaceholder}>
            {/* Map Background */}
            <View style={styles.mapBackground}>
              {/* Streets */}
              <View style={[styles.street, styles.street1]} />
              <View style={[styles.street, styles.street2]} />
              <View style={[styles.street, styles.street3]} />
              <View style={[styles.street, styles.street4]} />
              <View style={[styles.street, styles.street5]} />
              
              {/* Green Areas */}
              <View style={[styles.greenArea, styles.green1]} />
              <View style={[styles.greenArea, styles.green2]} />
              <View style={[styles.greenArea, styles.green3]} />
              
              {/* Blue River */}
              <View style={styles.river} />
              
              {/* Map Pins */}
              {mapPins.map((pin) => (
                <TouchableOpacity
                  key={pin.id}
                  style={[
                    styles.mapPin,
                    {
                      top: pin.position.top,
                      left: pin.position.left,
                    },
                    pin.hasInfo && styles.activePin
                  ]}
                  onPress={() => handlePinPress(pin)}
                  activeOpacity={pin.hasInfo ? 0.7 : 0.9}
                >
                  <View style={[styles.pinContainer, { backgroundColor: pin.color }]}>
                    <Ionicons 
                      name={pin.hasInfo ? "medical" : "location"} 
                      size={pin.hasInfo ? 20 : 16} 
                      color="#FFFFFF" 
                    />
                  </View>
                  {pin.hasInfo && (
                    <View style={styles.pinPulse} />
                  )}
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Selected Pin Info */}
        {selectedPin === 'freedom-clinic' && (
          <View style={styles.infoContainer}>
            <View style={styles.infoCard}>
              <View style={styles.infoHeader}>
                <Ionicons name="medical" size={24} color="#E74C3C" />
                <Text style={styles.clinicName}>Freedom Community Clinic</Text>
              </View>
              
              <Text style={styles.clinicLocation}>
                3134 International Blvd, Oakland, CA 94601
              </Text>
              
              <Text style={styles.clinicDescription}>
                Community-based integrative health ecosystem providing comprehensive healthcare services.
              </Text>
              
              <TouchableOpacity 
                style={styles.viewInfoButton}
                onPress={onViewInfo}
                activeOpacity={0.8}
              >
                <Ionicons name="information-circle" size={20} color="#FFFFFF" />
                <Text style={styles.viewInfoButtonText}>VIEW INFORMATION</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Instructions */}
        <View style={styles.instructionsContainer}>
          <View style={styles.instructionCard}>
            <Ionicons name="information-circle-outline" size={20} color="#667eea" />
            <Text style={styles.instructionsText}>
              Tap on the health pin to view clinic information
            </Text>
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 30,
    paddingTop: 80,
    paddingBottom: 60,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  titleText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 16,
    fontWeight: '400',
    color: '#7F8C8D',
    textAlign: 'center',
  },
  mapContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  mapPlaceholder: {
    width: width - 40,
    height: width - 40,
    maxWidth: 320,
    maxHeight: 320,
    borderRadius: 25,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  mapBackground: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    position: 'relative',
  },
  street: {
    position: 'absolute',
    backgroundColor: '#E9ECEF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  street1: {
    width: '100%',
    height: 8,
    top: 60,
  },
  street2: {
    width: '100%',
    height: 6,
    top: 120,
  },
  street3: {
    width: '100%',
    height: 8,
    top: 180,
  },
  street4: {
    width: 6,
    height: '100%',
    left: 80,
  },
  street5: {
    width: 8,
    height: '100%',
    left: 200,
  },
  greenArea: {
    position: 'absolute',
    backgroundColor: '#52C41A',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  green1: {
    width: 50,
    height: 40,
    top: 30,
    right: 30,
  },
  green2: {
    width: 45,
    height: 35,
    bottom: 60,
    left: 30,
  },
  green3: {
    width: 40,
    height: 30,
    bottom: 30,
    right: 40,
  },
  river: {
    position: 'absolute',
    width: 40,
    height: 110,
    backgroundColor: '#1890FF',
    borderRadius: 20,
    bottom: 80,
    right: 80,
    transform: [{ rotate: '15deg' }],
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  mapPin: {
    position: 'absolute',
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activePin: {
    transform: [{ scale: 1.1 }],
  },
  pinContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  pinPulse: {
    position: 'absolute',
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255, 107, 107, 0.3)',
    top: -8,
    left: -8,
    zIndex: -1,
  },
  infoContainer: {
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.8)',
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  clinicName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A202C',
    flex: 1,
    lineHeight: 24,
  },
  clinicLocation: {
    fontSize: 15,
    color: '#718096',
    marginBottom: 12,
    lineHeight: 22,
    fontWeight: '500',
  },
  clinicDescription: {
    fontSize: 15,
    color: '#4A5568',
    lineHeight: 22,
    marginBottom: 24,
    fontWeight: '400',
  },
  viewInfoButton: {
    backgroundColor: '#FF6B6B',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    shadowColor: '#FF6B6B',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    transform: [{ scale: 1 }],
  },
  viewInfoButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  instructionsContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  instructionCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  instructionsText: {
    fontSize: 14,
    color: '#495057',
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default MapViewScreen;
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface ResultsScreenProps {
  onSave: () => void;
  onNext: () => void;
  onCall?: () => void;
  onDirections?: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({ onSave, onNext, onCall, onDirections }) => {

  const handleCall = () => {
    if (onCall) {
      onCall();
    } else {
      // Default behavior - open phone dialer
      console.log('Calling 510-768-5879');
    }
  };

  const handleDirections = () => {
    if (onDirections) {
      onDirections();
    } else {
      // Default behavior - open maps
      console.log('Opening directions to 3134 International Blvd, Oakland, CA 94601');
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
          <Text style={styles.titleText}>RESULTS</Text>
        </View>

        {/* Hospital Image Container */}
        <View style={styles.imageContainer}>
          <View style={styles.imagePlaceholder}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop' }}
              style={styles.hospitalImage}
              resizeMode="cover"
            />
            <View style={styles.imageOverlay}>
              <Ionicons name="medical" size={32} color="white" />
              <Text style={styles.overlayText}>Freedom Community Clinic</Text>
            </View>
          </View>
        </View>

        {/* Clinic Information */}
        <View style={styles.infoContainer}>
          <View style={styles.infoCard}>
            <Text style={styles.clinicName}>Name: Freedom Community Clinic</Text>
            
            <Text style={styles.clinicLocation}>
              Location: 3134 International Blvd,{"\n"}
              Oakland, CA 94601
            </Text>
            
            <Text style={styles.clinicPhone}>Phone number: 510-768-5879</Text>
            
            <Text style={styles.descriptionLabel}>Description: </Text>
            <Text style={styles.descriptionText}>
              Based in Oakland, CA, Freedom Community Clinic (FCC) is a community-based integrative health ecosystem.
            </Text>
            
            {/* Cost and Services Information */}
            <View style={styles.servicesContainer}>
              <Text style={styles.servicesTitle}>Services & Cost Information:</Text>
              
              <View style={styles.serviceItem}>
                <Ionicons name="checkmark-circle" size={16} color="#32CD32" />
                <Text style={styles.serviceText}>Low-cost medical consultations ($15-30)</Text>
              </View>
              
              <View style={styles.serviceItem}>
                <Ionicons name="checkmark-circle" size={16} color="#32CD32" />
                <Text style={styles.serviceText}>Free health screenings and vaccinations</Text>
              </View>
              
              <View style={styles.serviceItem}>
                <Ionicons name="checkmark-circle" size={16} color="#32CD32" />
                <Text style={styles.serviceText}>Sliding scale fees based on income</Text>
              </View>
              
              <View style={styles.serviceItem}>
                <Ionicons name="checkmark-circle" size={16} color="#32CD32" />
                <Text style={styles.serviceText}>No insurance required</Text>
              </View>
              
              <View style={styles.serviceItem}>
                <Ionicons name="checkmark-circle" size={16} color="#32CD32" />
                <Text style={styles.serviceText}>Mental health counseling available</Text>
              </View>
              
              <View style={styles.serviceItem}>
                <Ionicons name="checkmark-circle" size={16} color="#32CD32" />
                <Text style={styles.serviceText}>Prescription assistance program</Text>
              </View>
            </View>
            
            {/* Languages Section */}
            <View style={styles.languagesContainer}>
              <Text style={styles.languagesTitle}>Languages / Idiomas:</Text>
              
              <View style={styles.serviceItem}>
                <Ionicons name="language" size={16} color="#3498DB" />
                <Text style={styles.serviceText}>English - Full services available</Text>
              </View>
              
              <View style={styles.serviceItem}>
                <Ionicons name="language" size={16} color="#3498DB" />
                <Text style={styles.serviceText}>Español - Servicios completos disponibles</Text>
              </View>
              
              <View style={styles.serviceItem}>
                <Ionicons name="people" size={16} color="#3498DB" />
                <Text style={styles.serviceText}>Bilingual staff on-site</Text>
              </View>
              
              <View style={styles.serviceItem}>
                <Ionicons name="document-text" size={16} color="#3498DB" />
                <Text style={styles.serviceText}>Forms and materials in both languages</Text>
              </View>
            </View>
            
            {/* Action Buttons Row */}
            <View style={styles.actionButtonsRow}>
              <TouchableOpacity 
                style={styles.actionButton}
                onPress={handleCall}
                activeOpacity={0.8}
              >
                <Ionicons name="call" size={20} color="#FFFFFF" />
                <Text style={styles.actionButtonText}>CALL</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={styles.directionsButton}
                onPress={handleDirections}
                activeOpacity={0.8}
              >
                <Ionicons name="navigate" size={20} color="#FFFFFF" />
                <Text style={styles.actionButtonText}>GET DIRECTION</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity 
            style={styles.saveButton}
            onPress={onSave}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>SAVE</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.nextButton}
            onPress={onNext}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>NEXT</Text>
          </TouchableOpacity>
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
    fontSize: 24,
    fontWeight: '600',
    color: '#666666',
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  imagePlaceholder: {
    width: 200,
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    position: 'relative',
  },
  hospitalImage: {
    width: '100%',
    height: '100%',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  overlayText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
  },
  mapContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  mapPlaceholder: {
    width: 200,
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mapBackground: {
    flex: 1,
    backgroundColor: '#F5F5F0',
    position: 'relative',
  },
  street: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
  },
  street1: {
    width: '100%',
    height: 8,
    top: 40,
  },
  street2: {
    width: '100%',
    height: 6,
    top: 80,
  },
  street3: {
    width: '100%',
    height: 8,
    top: 120,
  },
  street4: {
    width: 6,
    height: '100%',
    left: 60,
  },
  street5: {
    width: 8,
    height: '100%',
    left: 140,
  },
  greenArea: {
    position: 'absolute',
    backgroundColor: '#4CAF50',
    borderRadius: 8,
  },
  green1: {
    width: 40,
    height: 30,
    top: 20,
    right: 20,
  },
  green2: {
    width: 35,
    height: 25,
    bottom: 40,
    left: 20,
  },
  green3: {
    width: 30,
    height: 20,
    bottom: 20,
    right: 30,
  },
  river: {
    position: 'absolute',
    width: 25,
    height: 80,
    backgroundColor: '#2196F3',
    borderRadius: 12,
    bottom: 60,
    right: 60,
    transform: [{ rotate: '15deg' }],
  },
  pinContainer: {
    position: 'absolute',
    top: 30,
    left: 30,
  },
  greenDot: {
    position: 'absolute',
    width: 12,
    height: 12,
    backgroundColor: '#4CAF50',
    borderRadius: 6,
    bottom: 80,
    right: 80,
  },
  infoContainer: {
    marginBottom: 30,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  clinicName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
  },
  clinicLocation: {
    fontSize: 14,
    color: '#2C3E50',
    marginBottom: 10,
    lineHeight: 20,
  },
  clinicPhone: {
    fontSize: 14,
    color: '#2C3E50',
    marginBottom: 15,
  },
  descriptionLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 5,
  },
  descriptionText: {
    fontSize: 14,
    color: '#2C3E50',
    lineHeight: 20,
    marginBottom: 20,
  },
  actionButtonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 15,
  },
  actionButton: {
    flex: 1,
    backgroundColor: '#E74C3C',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  directionsButton: {
    flex: 1,
    backgroundColor: '#3498DB',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    gap: 15,
  },
  saveButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 18,
    paddingHorizontal: 60,
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
  nextButton: {
    backgroundColor: '#32CD32',
    paddingVertical: 18,
    paddingHorizontal: 60,
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
  servicesContainer: {
    marginTop: 15,
    marginBottom: 15,
  },
  servicesTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    gap: 8,
  },
  serviceText: {
    fontSize: 13,
    color: '#2C3E50',
    flex: 1,
    lineHeight: 18,
  },
  languagesContainer: {
    marginTop: 15,
    marginBottom: 15,
  },
  languagesTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 10,
  },
});

export default ResultsScreen;
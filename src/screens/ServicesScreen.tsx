import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface ServicesScreenProps {
  onContinue: () => void;
}

export const ServicesScreen: React.FC<ServicesScreenProps> = ({ onContinue }) => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const services = [
    {
      id: 'health',
      title: 'HEALTH',
      iconName: 'medical' as const,
      backgroundColor: '#FFE5E5',
      iconColor: '#E74C3C'
    },
    {
      id: 'dental',
      title: 'DENTAL',
      iconName: 'document-text' as const,
      backgroundColor: '#E5F3FF',
      iconColor: '#3498DB'
    },
    {
      id: 'literacy',
      title: 'LITERACY',
      iconName: 'school' as const,
      backgroundColor: '#E5FFE5',
      iconColor: '#27AE60'
    },
    {
      id: 'food',
      title: 'FOOD',
      iconName: 'basket' as const,
      backgroundColor: '#FFF5E5',
      iconColor: '#F39C12'
    },
    {
      id: 'insurance',
      title: 'INSURANCE',
      iconName: 'shield-checkmark' as const,
      backgroundColor: '#F0E5FF',
      iconColor: '#9B59B6'
    }
  ];



  return (
    <LinearGradient
      colors={['#F5F5DC', '#F0F8E8', '#E8F5E8']}
      locations={[0, 0.5, 1]}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>What type of services are you looking for?</Text>
      </View>

      {/* Services Grid */}
      <View style={styles.contentContainer}>
        <View style={styles.servicesGrid}>
          {services.map((service, index) => {
            const isSelectable = service.id === 'health';
            const isSelected = selectedService === service.id;
            
            return (
              <TouchableOpacity
                key={service.id}
                style={[
                  styles.serviceCard,
                  { 
                    backgroundColor: isSelected ? '#E74C3C' : service.backgroundColor
                  },
                  index === services.length - 1 && styles.lastCard
                ]}
                activeOpacity={isSelectable ? 0.8 : 1}
                onPress={() => {
                  if (isSelectable) {
                    setSelectedService(service.id);
                  }
                }}
                disabled={!isSelectable}
              >
                <View style={styles.serviceContent}>
                  <View style={[
                    styles.iconContainer, 
                    { backgroundColor: isSelected ? '#FFFFFF20' : service.iconColor + '20' }
                  ]}>
                    <Ionicons 
                      name={service.iconName} 
                      size={32} 
                      color={isSelected ? '#FFFFFF' : service.iconColor} 
                    />
                  </View>
                  <Text style={[
                    styles.serviceTitle,
                    { color: isSelected ? '#FFFFFF' : '#2C3E50' }
                  ]}>
                    {service.title}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[
            styles.continueButton,
            { 
              backgroundColor: selectedService ? '#32CD32' : '#CCCCCC',
              opacity: selectedService ? 1 : 0.6
            }
          ]} 
          onPress={selectedService ? onContinue : undefined}
          activeOpacity={selectedService ? 0.8 : 1}
          disabled={!selectedService}
        >
          <Text style={[
            styles.buttonText,
            { color: selectedService ? '#FFFFFF' : '#999999' }
          ]}>Continue</Text>
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
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2C3E50',
    textAlign: 'center',
    lineHeight: 28,
    paddingHorizontal: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  servicesGrid: {
    width: '100%',
    maxWidth: 300,
  },
  serviceCard: {
    width: '100%',
    height: 100,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lastCard: {
    marginBottom: 0,
  },
  serviceContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingVertical: 20,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
  },

  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
    letterSpacing: 0.5,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  continueButton: {
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
    minWidth: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ServicesScreen;
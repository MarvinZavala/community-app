import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface FilterOptionsScreenProps {
  onNext: (selectedOption: string) => void;
}

export const FilterOptionsScreen: React.FC<FilterOptionsScreenProps> = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const filterOptions = [
    {
      id: 'free',
      title: 'FREE HEALTHCARE SERVICES',
      backgroundColor: '#FFFFFF',
      textColor: '#666666'
    },
    {
      id: 'payment',
      title: 'PAYMENT OPTIONS',
      backgroundColor: '#FFFFFF',
      textColor: '#666666'
    },
    {
      id: 'pay',
      title: 'PAY HEALTHCARE SERVICES',
      backgroundColor: '#FFFFFF',
      textColor: '#666666'
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
        <Text style={styles.titleText}>Filter Options</Text>
      </View>

      {/* Filter Options */}
      <View style={styles.contentContainer}>
        <View style={styles.optionsContainer}>
          {filterOptions.map((option, index) => {
            const isSelected = selectedOption === option.id;
            
            return (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.optionCard,
                  { 
                    backgroundColor: isSelected ? '#E74C3C' : option.backgroundColor,
                    borderColor: isSelected ? '#E74C3C' : '#E0E0E0',
                    borderWidth: isSelected ? 2 : 1
                  }
                ]}
                activeOpacity={0.8}
                onPress={() => setSelectedOption(option.id)}
              >
                <Text style={[
                  styles.optionText,
                  { color: isSelected ? '#FFFFFF' : option.textColor }
                ]}>
                  {option.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Medical Icon */}
        <View style={styles.iconContainer}>
          <View style={styles.iconBox}>
            <View style={styles.medicalBag}>
              <Ionicons name="medical" size={60} color="#FFFFFF" />
            </View>
          </View>
        </View>
      </View>

      {/* Next Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[
            styles.nextButton,
            { 
              backgroundColor: selectedOption ? '#32CD32' : '#CCCCCC',
              opacity: selectedOption ? 1 : 0.6
            }
          ]} 
          onPress={selectedOption ? () => onNext(selectedOption) : undefined}
          activeOpacity={selectedOption ? 0.8 : 1}
          disabled={!selectedOption}
        >
          <Text style={[
            styles.buttonText,
            { color: selectedOption ? '#FFFFFF' : '#999999' }
          ]}>Next</Text>
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
    fontSize: 24,
    fontWeight: '600',
    color: '#666666',
    textAlign: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsContainer: {
    width: '100%',
    maxWidth: 350,
    marginBottom: 40,
  },
  optionCard: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  iconContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  iconBox: {
    width: 150,
    height: 150,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#8B5CF6',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  medicalBag: {
    width: 100,
    height: 80,
    backgroundColor: '#E74C3C',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  nextButton: {
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
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default FilterOptionsScreen;
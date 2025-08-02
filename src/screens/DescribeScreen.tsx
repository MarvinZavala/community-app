import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface DescribeScreenProps {
  onEvaluation?: () => void;
}

interface DropdownOption {
  label: string;
  value: string;
}

export const DescribeScreen: React.FC<DescribeScreenProps> = ({ onEvaluation }) => {
  const [gender, setGender] = useState('');
  const [employment, setEmployment] = useState('');
  const [income, setIncome] = useState('');
  const [language, setLanguage] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const genderOptions: DropdownOption[] = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Non-binary', value: 'non-binary' },
    { label: 'Prefer not to say', value: 'prefer-not-to-say' }
  ];

  const employmentOptions: DropdownOption[] = [
    { label: 'Employed Full-time', value: 'employed-full' },
    { label: 'Employed Part-time', value: 'employed-part' },
    { label: 'Self-employed', value: 'self-employed' },
    { label: 'Unemployed', value: 'unemployed' },
    { label: 'Student', value: 'student' },
    { label: 'Retired', value: 'retired' }
  ];

  const incomeOptions: DropdownOption[] = [
    { label: 'Under $15,000', value: 'under-15k' },
    { label: '$15,000 - $25,000', value: '15k-25k' },
    { label: 'Over $25,000', value: 'over-25k' }
  ];

  const languageOptions: DropdownOption[] = [
    { label: 'English', value: 'english' },
    { label: 'Spanish', value: 'spanish' },
    { label: 'Chinese (Mandarin)', value: 'chinese' },
    { label: 'Vietnamese', value: 'vietnamese' },
    { label: 'Tagalog', value: 'tagalog' },
    { label: 'Other', value: 'other' }
  ];

  const getSelectedLabel = (value: string, options: DropdownOption[]) => {
    const option = options.find(opt => opt.value === value);
    return option ? option.label : 'Select an option';
  };

  const handleOptionSelect = (value: string, type: string) => {
    switch (type) {
      case 'gender':
        setGender(value);
        break;
      case 'employment':
        setEmployment(value);
        break;
      case 'income':
        setIncome(value);
        break;
      case 'language':
        setLanguage(value);
        break;
    }
    setActiveDropdown(null);
  };

  const renderDropdown = (type: string, value: string, options: DropdownOption[], placeholder: string) => {
    const isActive = activeDropdown === type;
    const isLastTwoDropdowns = type === 'income' || type === 'language';
    
    return (
      <View style={[styles.dropdownContainer, isActive && styles.dropdownContainerActive]}>
        <TouchableOpacity
          style={styles.dropdownButton}
          onPress={() => setActiveDropdown(activeDropdown === type ? null : type)}
        >
          <Text style={[styles.dropdownText, !value && styles.placeholderText]}>
            {value ? getSelectedLabel(value, options) : placeholder}
          </Text>
          <Ionicons 
            name={activeDropdown === type ? "chevron-up" : "chevron-down"} 
            size={20} 
            color="#32CD32" 
          />
        </TouchableOpacity>
        
        {activeDropdown === type && (
          <View style={[styles.dropdownList, isLastTwoDropdowns && styles.dropdownListUp]}>
            {options.map((item) => (
              <TouchableOpacity
                key={item.value}
                style={styles.dropdownItem}
                onPress={() => handleOptionSelect(item.value, type)}
              >
                <Text style={styles.dropdownItemText}>{item.label}</Text>
                {value === item.value && (
                  <Ionicons name="checkmark" size={20} color="#32CD32" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  };

  return (
    <LinearGradient
      colors={['#F5F5DC', '#E6E6B8', '#F5F5DC']}
      locations={[0, 0.5, 1]}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.iconContainer}>
          <Ionicons name="person" size={32} color="#32CD32" />
        </View>
        <Text style={styles.titleText}>Describe yourself </Text>
        <Text style={styles.titleText}>check boxes</Text>
        <View style={styles.decorativeLine} />
      </View>

      {/* Form Content */}
      <View style={styles.contentContainer}>
        <ScrollView showsVerticalScrollIndicator={false} style={styles.formContainer}>
          
          {/* Gender Dropdown */}
          <View>
            <Text style={styles.dropdownLabel}>Gender</Text>
            {renderDropdown('gender', gender, genderOptions, 'Select Gender')}
          </View>

          {/* Employment Dropdown */}
          <View>
            <Text style={styles.dropdownLabel}>Employe / unemployed</Text>
            {renderDropdown('employment', employment, employmentOptions, 'Select Employment Status')}
          </View>

          {/* Income Dropdown */}
          <View>
            <Text style={styles.dropdownLabel}>Income</Text>
            {renderDropdown('income', income, incomeOptions, 'Select Income Range')}
          </View>

          {/* Language Preferences Dropdown */}
          <View>
            <Text style={styles.dropdownLabel}>Language Preferences</Text>
            {renderDropdown('language', language, languageOptions, 'Select Language')}
          </View>

        </ScrollView>
      </View>

      {/* Evaluation Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.evaluationButton} onPress={onEvaluation}>
          <Text style={styles.buttonText}>Evaluation</Text>
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
    fontSize: 24,
    fontWeight: '800',
    color: '#black',
    textAlign: 'center',
    lineHeight: 30,
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
  formContainer: {
    width: '100%',
    maxHeight: 400,
  },
  dropdownContainer: {
    marginBottom: 20,
    width: '100%',
    position: 'relative',
    zIndex: 1,
  },
  dropdownContainerActive: {
    zIndex: 1000,
    elevation: 1000,
  },
  dropdownLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
    paddingLeft: 5,
  },
  dropdownButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(50, 205, 50, 0.3)',
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dropdownText: {
    fontSize: 16,
    color: '#2C3E50',
    flex: 1,
  },
  placeholderText: {
    color: '#999',
  },
  dropdownList: {
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(50, 205, 50, 0.3)',
    marginTop: 5,
    maxHeight: 200,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 1001,
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    zIndex: 1001,
  },
  dropdownListUp: {
    top: -200,
    marginTop: -5,
  },
  dropdownItem: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(50, 205, 50, 0.1)',
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#2C3E50',
    flex: 1,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  evaluationButton: {
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

export default DescribeScreen;
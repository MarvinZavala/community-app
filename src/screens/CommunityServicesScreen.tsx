import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface CommunityServicesScreenProps {
  onGoBack: () => void;
}

interface ServiceCategory {
  id: string;
  title: string;
  icon: string;
  services: string[];
  description: string;
  image: string;
  color: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    id: '1',
    title: 'Healthcare Services',
    icon: 'medical',
    description: 'Find medical care and health services near you',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop',
    color: '#FF6B6B',
    services: ['Oakland Community Health Center - 3023 International Blvd', 'LifeLong Medical Care - 2200 Adeline St', 'Highland Hospital Emergency - 1411 E 31st St', 'Alameda Health System Clinics']
  },
  {
    id: '2',
    title: 'Dental Care',
    icon: 'happy',
    description: 'Dental clinics and oral health services',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=400&h=300&fit=crop',
    color: '#4ECDC4',
    services: ['Oakland Dental Center - 1834 San Pablo Ave', 'Community Health for Asian Pacific - 310 8th St', 'Roots Community Health Center - 1750 Union St', 'West Oakland Health Council - 700 Adeline St']
  },
  {
    id: '3',
    title: 'Food Resources',
    icon: 'restaurant',
    description: 'Food assistance and nutrition programs',
    image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=400&h=300&fit=crop',
    color: '#45B7D1',
    services: ['Alameda County Food Bank - 7900 Edgewater Dr', 'Oakland Food Pantry - Multiple locations', 'St. Vincent de Paul - 2272 San Pablo Ave', 'Acta Non Verba Farm - 1025 78th Ave']
  },
  {
    id: '4',
    title: 'Literacy & Education',
    icon: 'library',
    description: 'Educational programs and literacy support',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop',
    color: '#96CEB4',
    services: ['Oakland Public Library - Main Branch', 'Literacy for Environmental Justice - 424 3rd St', 'Oakland Adult & Career Education - Multiple sites', 'Centro Legal de la Raza - 3400 E 12th St']
  },
  {
    id: '5',
    title: 'Insurance Help',
    icon: 'shield-checkmark',
    description: 'Health insurance enrollment and assistance',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    color: '#FECA57',
    services: ['Covered California Enrollment - City Hall', 'Health Consumer Center - 414 13th St', 'Asian Health Services - 818 Webster St', 'La Clínica de La Raza - Multiple locations']
  }
];

export const CommunityServicesScreen: React.FC<CommunityServicesScreenProps> = ({ onGoBack }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  return (
    <LinearGradient
      colors={['#F5F5DC', '#F0F8E8', '#E8F5E8']}
      locations={[0, 0.5, 1]}
      style={styles.container}
    >
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>Community Services</Text>
        <Text style={styles.subtitleText}>Available resources in your area</Text>
      </View>

      {/* Services Grid */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.gridContainer}>
          {serviceCategories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.gridItem}
              onPress={() => toggleCategory(category.id)}
              activeOpacity={0.8}
            >
              <View style={styles.imageContainer}>
                <Image 
                  source={{ uri: category.image }}
                  style={styles.categoryImage}
                  resizeMode="cover"
                />
                <View style={[styles.overlay, { backgroundColor: category.color + '80' }]}>
                  <Ionicons 
                    name={category.icon as any} 
                    size={32} 
                    color="white" 
                  />
                </View>
              </View>
              <View style={styles.gridItemContent}>
                <Text style={styles.gridTitle}>{category.title}</Text>
                <Text style={styles.gridDescription}>{category.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
        
        {/* Expanded Services */}
        {expandedCategory && (
          <View style={styles.expandedContainer}>
            <Text style={styles.expandedTitle}>
              {serviceCategories.find(cat => cat.id === expandedCategory)?.title}
            </Text>
            {serviceCategories.find(cat => cat.id === expandedCategory)?.services.map((service, index) => (
              <View key={index} style={styles.serviceItem}>
                <Ionicons name="location" size={16} color="#32CD32" />
                <Text style={styles.serviceText}>{service}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Back Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={onGoBack}
          activeOpacity={0.8}
        >
          <Ionicons name="arrow-back" size={20} color="#FFFFFF" style={styles.buttonIcon} />
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
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 16,
    color: '#7F8C8D',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  gridItem: {
    width: (width - 80) / 2,
    backgroundColor: '#FFFFFF',
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
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    height: 120,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItemContent: {
    padding: 12,
  },
  gridTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 4,
    textAlign: 'center',
  },
  gridDescription: {
    fontSize: 11,
    color: '#7F8C8D',
    textAlign: 'center',
    lineHeight: 14,
  },
  expandedContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  expandedTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 15,
    textAlign: 'center',
  },
  categoryContainer: {
    backgroundColor: '#FFFFFF',
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
    overflow: 'hidden',
  },
  categoryHeader: {
    padding: 20,
  },
  categoryTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryIcon: {
    marginRight: 15,
  },
  categoryTextContainer: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: 14,
    color: '#7F8C8D',
  },
  servicesContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#F8F9FA',
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingVertical: 4,
  },
  serviceText: {
    fontSize: 14,
    color: '#2C3E50',
    marginLeft: 10,
    flex: 1,
  },
  buttonContainer: {
    marginTop: 20,
  },
  backButton: {
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
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CommunityServicesScreen;
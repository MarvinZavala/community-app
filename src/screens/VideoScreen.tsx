import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

interface VideoScreenProps {
  onEnter?: () => void;
}

interface SlideData {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
}

const slides: SlideData[] = [
  {
    title: "Healthcare Services",
    subtitle: "Find Medical Care",
    description: "Connect with local healthcare providers, clinics, and medical professionals in your community.",
    icon: "⚕️",
    color: "#FF6B6B"
  },
  {
    title: "Dental Care",
    subtitle: "Oral Health Solutions",
    description: "Locate dental clinics, orthodontists, and oral health services near you.",
    icon: "🦷",
    color: "#4ECDC4"
  },
  {
    title: "Literacy Programs",
    subtitle: "Education & Learning",
    description: "Discover literacy programs, tutoring services, and educational resources in your area.",
    icon: "📚",
    color: "#45B7D1"
  },
  {
    title: "Insurance Services",
    subtitle: "Protection & Coverage",
    description: "Find insurance agents, compare policies, and get the coverage you need.",
    icon: "🛡️",
    color: "#96CEB4"
  },
  {
    title: "Food Assistance",
    subtitle: "Nutrition Support",
    description: "Access food banks, meal programs, and nutrition assistance in your community.",
    icon: "🍎",
    color: "#FFEAA7"
  }
];

export const VideoScreen: React.FC<VideoScreenProps> = ({ onEnter }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out current slide
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(slideAnim, {
          toValue: -width,
          duration: 500,
          useNativeDriver: true,
        })
      ]).start(() => {
        // Change slide
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        
        // Reset position and fade in new slide
        slideAnim.setValue(width);
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true,
          }),
          Animated.timing(slideAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          })
        ]).start();
      });
    }, 1800); // Change slide every 1.8 seconds

    return () => clearInterval(interval);
  }, [fadeAnim, slideAnim]);

  const currentSlideData = slides[currentSlide];

  return (
    <LinearGradient
      colors={['#F5F5DC', '#E6E6B8', '#F5F5DC']}
      locations={[0, 0.5, 1]}
      style={styles.container}
    >
      {/* Tutorial Title */}
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>Community App</Text>
        <Text style={styles.subtitleText}>Connecting you with essential community services</Text>
      </View>

      {/* Animated Content Container */}
      <View style={styles.contentContainer}>
        <Animated.View 
          style={[
            styles.slideContainer,
            {
              opacity: fadeAnim,
              transform: [{ translateX: slideAnim }]
            }
          ]}
        >
          <View style={[styles.iconContainer, { backgroundColor: currentSlideData.color }]}>
            <Text style={styles.iconText}>{currentSlideData.icon}</Text>
          </View>
          
          <Text style={styles.slideTitle}>{currentSlideData.title}</Text>
          <Text style={styles.slideSubtitle}>{currentSlideData.subtitle}</Text>
          <Text style={styles.slideDescription}>{currentSlideData.description}</Text>
          
          {/* Progress Indicators */}
          <View style={styles.progressContainer}>
            {slides.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.progressDot,
                  {
                    backgroundColor: index === currentSlide ? '#1B4B73' : 'rgba(27, 75, 115, 0.3)',
                    transform: [{ scale: index === currentSlide ? 1.2 : 1 }]
                  }
                ]}
              />
            ))}
          </View>
        </Animated.View>
      </View>

      {/* Enter Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.enterButton} onPress={onEnter}>
          <Text style={styles.buttonText}>Enter</Text>
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
  titleText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1B4B73',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: '300',
    color: '#333333',
    textAlign: 'center',
    lineHeight: 24,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  slideContainer: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 130,
    height: 130,
    borderRadius: 65,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  iconText: {
    fontSize: 55,
  },
  slideTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1B4B73',
    textAlign: 'center',
    marginBottom: 8,
  },
  slideSubtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#666666',
    textAlign: 'center',
    marginBottom: 16,
  },
  slideDescription: {
    fontSize: 16,
    fontWeight: '300',
    color: '#333333',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  progressDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  enterButton: {
    backgroundColor: '#32CD32',
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

export default VideoScreen;
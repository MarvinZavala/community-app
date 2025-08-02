import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LocationScreen from '../screens/LocationScreen';
import ServicesScreen from '../screens/ServicesScreen';

export type RootStackParamList = {
  Welcome: undefined;
  Location: undefined;
  Services: undefined;
};

type WelcomeScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'Welcome'>;
type LocationScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'Location'>;
type ServicesScreenNavigationProps = NativeStackScreenProps<RootStackParamList, 'Services'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const WelcomeScreenWrapper = ({ navigation }: WelcomeScreenNavigationProps) => {
  const handleContinue = () => {
    navigation.navigate('Location');
  };

  return <WelcomeScreen onContinue={handleContinue} />;
};

const LocationScreenWrapper = ({ navigation }: LocationScreenNavigationProps) => {
  const handleLocation = (location: string) => {
    navigation.navigate('Services');
  };

  return <LocationScreen onLocation={handleLocation} />;
};

const ServicesScreenWrapper = ({ navigation }: ServicesScreenNavigationProps) => {
  const handleContinue = () => {
    // Navigate to next screen or complete flow
    console.log('Services flow completed');
  };

  return <ServicesScreen onContinue={handleContinue} />;
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreenWrapper}
        />
        <Stack.Screen 
          name="Location" 
          component={LocationScreenWrapper}
        />
        <Stack.Screen 
          name="Services" 
          component={ServicesScreenWrapper}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

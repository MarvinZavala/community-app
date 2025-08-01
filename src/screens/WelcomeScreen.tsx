import React from 'react';
import { View, Text } from 'react-native';

interface WelcomeScreenProps {
  // Add props here if needed
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <Text>hola</Text>
    </View>
  );
};

export default WelcomeScreen;

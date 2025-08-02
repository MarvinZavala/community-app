import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen';
import VideoScreen from './src/screens/VideoScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');

  const handleContinue = () => {
    setCurrentScreen('video');
  };

  const handleEnter = () => {
    // TODO: Navigate to main app
    console.log('Enter button pressed');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onContinue={handleContinue} />;
      case 'video':
        return <VideoScreen onEnter={handleEnter} />;
      default:
        return <WelcomeScreen onContinue={handleContinue} />;
    }
  };

  return (
    <View style={styles.container}>
      {renderScreen()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

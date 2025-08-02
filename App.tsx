import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import WelcomeScreen from './src/screens/WelcomeScreen';
import VideoScreen from './src/screens/VideoScreen';
import MissionStatementScreen from './src/screens/MissionStatementScreen';
import DescribeScreen from './src/screens/DescribeScreen';
import LocationScreen from './src/screens/LocationScreen';
import ServicesScreen from './src/screens/ServicesScreen';
import FilterOptionsScreen from './src/screens/FilterOptionsScreen';
import ViewingOptionsScreen from './src/screens/ViewingOptionsScreen';
import MapViewScreen from './src/screens/MapViewScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import SavedScreen from './src/screens/SavedScreen';
import OasisOaklandScreen from './src/screens/OasisOaklandScreen';
import CommunityServicesScreen from './src/screens/CommunityServicesScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');

  const handleContinue = () => {
    setCurrentScreen('video');
  };

  const handleEnter = () => {
    setCurrentScreen('mission');
  };

  const handleGetStarted = () => {
    setCurrentScreen('describe');
  };

  const handleEvaluation = () => {
    setCurrentScreen('location');
  };

  const handleLocation = (location: string) => {
    console.log('Location set to:', location);
    setCurrentScreen('services');
  };

  const handleServices = () => {
    setCurrentScreen('filter');
  };

  const handleFilter = (selectedOption: string) => {
    console.log('Filter option selected:', selectedOption);
    if (selectedOption === 'free') {
      setCurrentScreen('viewing');
    }
  };

  const handleViewing = () => {
    setCurrentScreen('mapview');
  };

  const handleMapView = () => {
    setCurrentScreen('results');
  };

  const handleSave = () => {
    console.log('Clinic saved');
  };

  const handleResults = () => {
    setCurrentScreen('saved');
  };

  const handleSavedContinue = () => {
    setCurrentScreen('oasis');
  };

  const handleSavedGoBack = () => {
    setCurrentScreen('results');
  };

  const handleAddMore = () => {
    setCurrentScreen('community-services');
  };

  const handleCommunityServicesGoBack = () => {
    setCurrentScreen('oasis');
  };

  const handleGoBack = () => {
    setCurrentScreen('results');
  };

  const handleMainMenu = () => {
    setCurrentScreen('welcome');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onContinue={handleContinue} />;
      case 'video':
        return <VideoScreen onEnter={handleEnter} />;
      case 'mission':
        return <MissionStatementScreen onGetStarted={handleGetStarted} />;
      case 'describe':
        return <DescribeScreen onEvaluation={handleEvaluation} />;
      case 'location':
        return <LocationScreen onLocation={handleLocation} />;
      case 'services':
        return <ServicesScreen onContinue={handleServices} />;
      case 'filter':
        return <FilterOptionsScreen onNext={handleFilter} />;
      case 'viewing':
        return <ViewingOptionsScreen onNext={handleViewing} />;
      case 'mapview':
        return <MapViewScreen onViewInfo={handleMapView} />;
      case 'results':
        return <ResultsScreen onSave={handleSave} onNext={handleResults} />;
      case 'saved':
        return <SavedScreen onContinue={handleSavedContinue} onGoBack={handleSavedGoBack} />;
      case 'oasis':
        return <OasisOaklandScreen onAddMore={handleAddMore} onGoBack={handleGoBack} onMainMenu={handleMainMenu} />;
      case 'community-services':
        return <CommunityServicesScreen onGoBack={handleCommunityServicesGoBack} />;
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

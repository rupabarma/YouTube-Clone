import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from './Screens/HomeScreen';
// import HomeStack from './Navigation/HomeStack';
// import BottomTabNavigation from './Navigation/BottomTabNavigation';
import {StackNavigator} from './Navigation/StackNavigator';
import Navigation from './Navigation/Navigation';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
  <StatusBar   backgroundColor={'#000000'}/>
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

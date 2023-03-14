import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


// Screens
import HomeScreen from '../Screens/HomeScreen';
import ShortsScreen from '../Screens/ShortsScreen';
import CreateScreen from '../Screens/CreateScreen';
import SubscriptionScreen from '../Screens/SubscriptionsScreen';
import LibraryScreen from '../Screens/LibraryScreen';
import VideoPlayerScreen from '../Screens/videoPlayerScreen';
import SearchScreen from '../Screens/SearchScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import AccountScreen from '../Screens/AccountScreen';
import VideoMakersAccountScreen from '../Screens/VideoMakersAccountScreen';
import BottomTabNavigation from './BottomTabNavigation';

const Stack = createStackNavigator();


const HomeStack = () => {
  return (
    <Stack.Navigator>

        <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
            headerShown: false
        }}
        />
        <Stack.Screen
          name='NotificationScreen'
            component={NotificationScreen}
            options={{
            headerShown: false
        }}
        />
        <Stack.Screen
          name='SearchScreen'
            component={SearchScreen}
            options={{
            headerShown: false
        }}
        />
        <Stack.Screen
          name='AccountScreen'
            component={AccountScreen}
            options={{
            headerShown: false
        }}
        />
        <Stack.Screen
          name='VideoPlayerScreen'
            component={VideoPlayerScreen}
            options={{
            headerShown: false
        }}
        />
        <Stack.Screen
          name="Video Makers Account"
            component={VideoMakersAccountScreen}
            options={{
            headerShown: false
        }}
        />
        
        {/* <Stack.Screen
          name='NotificationScreen'
            component={NotificationScreen}
            options={{
            headerShown: false
        }}
        />
        <Stack.Screen
          name='SearchScreen'
            component={SearchScreen}
            options={{
            headerShown: false
        }}
        />
        <Stack.Screen
          name='AccountScreen'
            component={AccountScreen}
            options={{
            headerShown: false
        }}
        />
        <Stack.Screen
          name='VideoPlayerScreen'
            component={VideoPlayerScreen}
            options={{
            headerShown: false
        }}
        />
        <Stack.Screen
          name="Video Makers Account"
            component={VideoMakersAccountScreen}
            options={{
            headerShown: false
        }}
        />
        <Stack.Screen
            name='ShortsScreen'
            component={ShortsScreen}
            options={{
            headerShown: false
        }}
        />
        <Stack.Screen
            name='CreateScreen'
            component={CreateScreen}
            options={{
            headerShown: false
        }}
        />
        <Stack.Screen
            name='SubscriptionScreen'
            component={SubscriptionScreen}
            options={{
            headerShown: false
        }}
        />
        <Stack.Screen
            name='LibraryScreen'
            component={LibraryScreen}
            options={{
            headerShown: false
        }}
        /> */}
        {/* <Stack.Screen
            name='BottomTabNavigation'
            component={BottomTabNavigation}
            options={{
            headerShown: false
        }}
        /> */}
    </Stack.Navigator>
  )
}

export default HomeStack;

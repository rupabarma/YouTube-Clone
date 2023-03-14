import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


// Screens
import HomeScreen from '../Screens/homeScreen/HomeScreen';
import ShortsScreen from '../Screens/shortsScreen/ShortsScreen';
import CreateScreen from '../Screens/createScreen/CreateScreen';
import SubscriptionScreen from '../Screens/subscriptionScreen/SubscriptionsScreen';
import LibraryScreen from '../Screens/libraryScreen/LibraryScreen';
import VideoPlayerScreen from '../Screens/videoPlayerScreen/VideoPlayerScreen';
import SearchScreen from '../Screens/searchScreen/SearchScreen';
import NotificationScreen from '../Screens/notificationScreen/NotificationScreen';
import AccountScreen from '../Screens/accountScreen/AccountScreen';
import VideoMakersAccountScreen from '../Screens/videoMakersAccountScreen/VideoMakersAccountScreen';
import BottomTabNavigation from './BottomTabNavigation';
import RelatedVideos from '../Screens/relatedVideos/RelatedVideos';

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name='BottomTabNavigation'
            component={BottomTabNavigation}
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
            headerShown: false,
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
          name="RelatedVideos"
            component={RelatedVideos}
            options={{
            headerShown: false
        }}
        />
    </Stack.Navigator>
  )
}
const ShortsStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name='ShortsScreen'
            component={ShortsScreen}
            options={{
            headerShown: false
        }}
        />
    </Stack.Navigator>
  )
}
const CreateStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name='CreateScreen'
            component={CreateScreen}
            options={{
            headerShown: false
        }}
        />
    </Stack.Navigator>
  )
}
const SubscriptionStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name='SubscriptionScreen'
            component={SubscriptionScreen}
            options={{
            headerShown: false
        }}
        />
    </Stack.Navigator>
  )
}
const LibraryStackNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name='LibraryScreen'
            component={LibraryScreen}
            options={{
            headerShown: false
        }}
        />
    </Stack.Navigator>
  )
}

export {HomeStackNavigator,ShortsStackNavigator,
    CreateStackNavigator,SubscriptionStackNavigator,LibraryStackNavigator};


// const StackNavigator = () => {
//   return (
//     <Stack.Navigator>

//         <Stack.Screen
//             name='HomeScreen'
//             component={HomeScreen}
//             options={{
//             headerShown: false
//         }}
//         />
        
//         <Stack.Screen
//           name='NotificationScreen'
//             component={NotificationScreen}
//             options={{
//             headerShown: false
//         }}
//         />
//         <Stack.Screen
//           name='SearchScreen'
//             component={SearchScreen}
//             options={{
//             headerShown: false
//         }}
//         />
//         <Stack.Screen
//           name='AccountScreen'
//             component={AccountScreen}
//             options={{
//             headerShown: false
//         }}
//         />
//         <Stack.Screen
//           name='VideoPlayerScreen'
//             component={VideoPlayerScreen}
//             options={{
//             headerShown: false
//         }}
//         />
//         <Stack.Screen
//           name="Video Makers Account"
//             component={VideoMakersAccountScreen}
//             options={{
//             headerShown: false
//         }}
//         />
//         <Stack.Screen
//             name='ShortsScreen'
//             component={ShortsScreen}
//             options={{
//             headerShown: false
//         }}
//         />
//         <Stack.Screen
//             name='CreateScreen'
//             component={CreateScreen}
//             options={{
//             headerShown: false
//         }}
//         />
//         <Stack.Screen
//             name='SubscriptionScreen'
//             component={SubscriptionScreen}
//             options={{
//             headerShown: false
//         }}
//         />
//         <Stack.Screen
//             name='LibraryScreen'
//             component={LibraryScreen}
//             options={{
//             headerShown: false
//         }}
//         />
//         <Stack.Screen
//             name='BottomTabNavigation'
//             component={BottomTabNavigation}
//             options={{
//             headerShown: false
//         }}
//         />
//     </Stack.Navigator>
//   )
// }

// export default StackNavigator;

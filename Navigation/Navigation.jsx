import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native'
import React, { useCallback, useMemo, useRef } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icon  from 'react-native-vector-icons/Ionicons';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import  SimpleLineIcons  from 'react-native-vector-icons/SimpleLineIcons';
import  Feather  from 'react-native-vector-icons/Feather';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import  Octicons  from 'react-native-vector-icons/Octicons';
import youtubeShortsLogo from './youtubeShortsLogo.png';
import { useIsFocused } from '@react-navigation/native';
import Styles from '../Styles/Styles';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

//Screens
import HomeScreen from '../Screens/homeScreen/HomeScreen';
import ShortsScreen from '../Screens/shortsScreen/ShortsScreen';
import CreateScreen from '../Screens/createScreen/CreateScreen';
import SubscriptionScreen from '../Screens/subscriptionScreen/SubscriptionsScreen';
import LibraryScreen from '../Screens/libraryScreen/LibraryScreen';
import VideoMakersAccountScreen from '../Screens/videoMakersAccountScreen/VideoMakersAccountScreen';
import VideoPlayerScreen from '../Screens/videoPlayerScreen/VideoPlayerScreen';
import AccountScreen from '../Screens/accountScreen/AccountScreen';
import SearchScreen from '../Screens/searchScreen/SearchScreen';
import NotificationScreen from '../Screens/notificationScreen/NotificationScreen';
import RelatedVideos from '../Screens/relatedVideos/RelatedVideos';
import VideoInfo from '../Screens/videoInfo/VideoInfo';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNavigation = () =>{
  //ref
  const bottomSheetModalRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);
  return(
    <Tab.Navigator
    screenOptions={{
    tabBarStyle: { height: 50, backgroundColor: '#000000', paddingBottom: 2,width: '100%'},
    headerShown: false
  }}
    >
    <Tab.Screen
      name='Home'
      component={HomeScreen}
      options={{
      tabBarLabelStyle:{fontSize: 11,color: '#fff', },
      tabBarIcon: () =>  (
      <MaterialCommunityIcons
        name='home-variant'
        size={28}
        color='#fff'
      />
      // <Octicons
      //   name='home'
      //   size={28}
      //   color='#fff'
      // />
      ),
      
    }}
    />
    <Tab.Screen
      name='Shorts'
      component={ShortsScreen}
      options={{
      tabBarLabelStyle:{fontSize: 11,color: '#fff', },
      tabBarIcon: () => (
      // <MaterialCommunityIcons
      //   name='home-variant'
      //   size={28}
      //   color='#fff'
      // />
      <Image source={youtubeShortsLogo}/>
      ),  
      
    
    }}
    />
    <Tab.Screen
      name='Create'
      component={CreateScreen}
      options={{
      tabBarLabel: '',
      tabBarLabelStyle:{fontSize: 0, },
      tabBarIcon: () => (
        <BottomSheetModalProvider>
      <View>
        {/* <Button
          onPress={handlePresentModalPress}
          title="Present Modal"
          color="black"
        /> */}
        <TouchableOpacity
        // style={{
        //   width: 45,
        //   height: 45,
        //   position: 'absolute',
        //   // bottom:-10,
        //   zIndex: 1,
        //   elevation: 1,
        //   left: '45%',
        // }}
        onPress={handlePresentModalPress}
        >
        <SimpleLineIcons
        name='plus'
        size={40}
        color='#fff'
      />
        </TouchableOpacity>
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={Styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
      // <SimpleLineIcons
      //   name='plus'
      //   size={40}
      //   color='#fff'
      // />
      ), 
      tabBarIconStyle: {paddingBottom: 0,} 
    }}
    />
    <Tab.Screen
      name='Subscription'
      component={SubscriptionScreen}
      options={{
      tabBarLabelStyle:{fontSize: 11,color: '#fff', },
      tabBarIcon: () => (
      <MaterialCommunityIcons
        name='youtube-subscription'
        size={28}
        color='#fff'
      /> 

      ),  
    }}
    />
    <Tab.Screen
      name='Library'
      component={LibraryScreen}
      options={{
      tabBarLabelStyle:{fontSize: 11,color: '#fff', },
      tabBarIcon: () => (
      <MaterialIcons
        name='video-library'
        size={28}
        color='#fff'
      />
      ),  
    }}
    />
  </Tab.Navigator>
  )
}

const Navigation = () => {
  return (
   <Stack.Navigator
  //  screenOptions={
    
  //  }
   >
    {/* <Stack.Screen
      name='HomeScreen'
      component={HomeScreen}
    /> */}
    <Stack.Screen
            name='BottomTabNavigation'
            component={BottomTabNavigation}
            options={{
            headerShown: false
        }}
        />
        {/* <Stack.Screen
      name='Home'
      component={HomeScreen}
      options={{
            headerShown: false
        }}
    /> */}
        
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
        {/* <Stack.Screen
          name='VideoInfo'
            component={VideoInfo}
            options={{
            headerShown: false
        }}
        /> */}
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
        {/* <Stack.Screen
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
   </Stack.Navigator>
  )
}

export default Navigation;
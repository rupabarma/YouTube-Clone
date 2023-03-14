import React from 'react';
import { 
  View,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import  Icon  from 'react-native-vector-icons/Ionicons';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import  SimpleLineIcons  from 'react-native-vector-icons/SimpleLineIcons';
import  Feather  from 'react-native-vector-icons/Feather';
import  MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import  Octicons  from 'react-native-vector-icons/Octicons';
import youtubeShortsLogo from './youtubeShortsLogo.png';

// Screens
import { 
  HomeStackNavigator,
  ShortsStackNavigator, 
  CreateStackNavigator,
  SubscriptionStackNavigator, 
  LibraryStackNavigator 
} from './StackNavigator';
// import HomeScreen from '../Screens/HomeScreen';
// import ShortsScreen from '../Screens/ShortsScreen';
// import CreateScreen from '../Screens/CreateScreen';
// import SubscriptionScreen from '../Screens/SubscriptionsScreen';
// import LibraryScreen from '../Screens/LibraryScreen';
// import VideoPlayerScreen from '../Screens/VideoPlayerScreen';
import { Image } from 'react-native';
import Styles from '../Styles/Styles';
import { useIsFocused } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

enableScreens(true);


const BottomTabNavigation = ({navigation}) => {
  const isFocused = useIsFocused();
  return (
    <>
    <Tab.Navigator
    screenOptions={{
    tabBarStyle: { height: 50, backgroundColor: '#000000', paddingBottom: 2,},
    headerShown: false
  }}
    >
    <Tab.Screen 
    name="Home" 
    component={HomeStackNavigator} 
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
    name="Shorts" 
    component={ShortsStackNavigator}
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
    name="Create" 
    component={CreateStackNavigator} 
    options={{
      tabBarLabel: '',
      tabBarLabelStyle:{fontSize: 0, },
      tabBarIcon: () => (
      <SimpleLineIcons
        name='plus'
        size={40}
        color='#fff'
      />
      ), 
      tabBarIconStyle: {paddingBottom: 0,} 
    }}
    

    />
    <Tab.Screen 
    name="Subscription" 
    component={SubscriptionStackNavigator} 
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
    name="Library" 
    component={LibraryStackNavigator} 
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
  </>

)
}

export default BottomTabNavigation;

{/* <View style={Styles.BottomTabNavigationMainView}>
<Pressable 
onPress={() => navigation.navigate('HomeScreen') }
style={Styles.BottomTabNavComponentsView}
android_ripple={{borderless:true, radius:40,color: 'gray',}}
>
  <MaterialCommunityIcons
    name='home-variant'
    size={28}
    color='#fff'
  />
  <Text style={Styles.TabBarLable}>Home</Text>
  </Pressable>

<Pressable 
onPress={() => navigation.navigate('ShortsScreen') }
style={Styles.BottomTabNavComponentsView}
android_ripple={{borderless:true, radius:40,color: 'gray',}}
>
  {/* <MaterialCommunityIcons
    name='home-variant'
    size={35}
    color='#fff'
  /> */}
//   <Image source={youtubeShortsLogo} style={{width: 24, height: 24, marginTop: 4}}/>
//   <Text style={Styles.TabBarLable}>Shorts</Text>
//   </Pressable>

// <Pressable 
// onPress={() => navigation.navigate('CreateScreen') }
// style={Styles.BottomTabNavComponentsView}
// android_ripple={{borderless:true, radius:40,color: 'gray',}}
// >
// <SimpleLineIcons
//     name='plus'
//     size={38}
//     color='#fff'
//   />
//   </Pressable>

// <Pressable 
// onPress={() => navigation.navigate('SubscriptionScreen') }
// style={Styles.BottomTabNavComponentsView}
// android_ripple={{borderless:true, radius:40,color: 'gray',}}
// >
// <MaterialCommunityIcons
//     name='youtube-subscription'
//     size={28}
//     color='#fff'
//   />
//   <Text style={Styles.TabBarLable}>Subscription</Text>
//   </Pressable>

// <Pressable 
// onPress={() => navigation.navigate('LibraryScreen') }
// style={Styles.BottomTabNavComponentsView}
// android_ripple={{borderless:true, radius:40,color: 'gray',}}
// >
// <MaterialIcons
//     name='video-library'
//     size={28}
//     color='#fff'
//   />
//   <Text style={Styles.TabBarLable}>Library</Text>
//   </Pressable>
// </View> */}
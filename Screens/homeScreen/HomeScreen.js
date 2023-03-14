import React, { useCallback, useMemo, useRef } from 'react';
import { 
    View,
    Text,
    Image,
    SafeAreaView,
    ScrollView, 
    useColorScheme,
    FlatList,
    TouchableOpacity,
    Button,
} from 'react-native';
// import TopTabBar from '../Navigation/TopTabBar';
import Styles from './Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
// import Profile from './Profile.jpg';
import Video from 'react-native-video';
import VideosData from '../../Data/Videos';
// import Video1 from './Video1.mp4';
import BottomTabNavigation from '../../Navigation/BottomTabNavigation';
import RelatedVideos from '../relatedVideos/RelatedVideos';
import VideoPlayerScreen from '../videoPlayerScreen/VideoPlayerScreen'
import { useIsFocused } from '@react-navigation/native';
import VideoPlayer from 'react-native-video-player';
import { convertViewsToString } from '../../common/commonFunctions';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

const HomeScreen = ({navigation}) => {

  // const convertViewsToString = (views) => {

  //   let viewString = views
  //   if (views >= 1_000_000){
  //     if (parseInt((views / 1_000_000).toFixed(1)) == parseInt((views / 1_000_000).toFixed(0))) {
  //       return (views / 1_000_000).toFixed(0) + 'M'
  //     }
  //     viewString = (views / 1_000_000).toFixed(1) + 'M'
  //     return viewString
  //   } else if (views > 1_000 && views < 1_000_000){
  //     viewString = (views / 1_000).toFixed(1) + 'k'
  //     return viewString
  //   }return viewString
  // }
  // Math.floor(VideosData.duration / 60)
  // const seconds = VideosData.duration % 60

  // // ref
  // const bottomSheetModalRef = useRef(null);

  // // variables
  // const snapPoints = useMemo(() => ['25%', '50%'], []);

  // // callbacks
  // const handlePresentModalPress = useCallback(() => {
  //   bottomSheetModalRef.current?.present();
  // }, []);
  // const handleSheetChanges = useCallback((index) => {
  //   console.log('handleSheetChanges', index);
  // }, []);

  const navigateVideoMakersAccountScreen = (idName,thumbnail,desc,src,views,time,profile) => {
    navigation.navigate('Video Makers Account',{idName,thumbnail,desc,src,views,time,profile})
}
  const navigateVideoPlayerScreen = (desc,idName,views,createdAt,profile,thumbnail,subscribers) => {
    navigation.navigate('VideoPlayerScreen',{desc,idName,views,createdAt,profile,thumbnail,subscribers})
}

  return (
    // Maim page view
    <View style={Styles.HomeScreenView}>

      {/* Top tab Bar main view */}
      <View style={Styles.TopTabBar}>

      {/* App logo */}
    <View style={Styles.AppLogo}>
      <View style={Styles.YoutubeLogo}>
      <Ionicons name='md-logo-youtube' size={26} color='red'
        style={{position: 'absolute',top: -4}}
      />
      </View>
      <Text style={Styles.LogoText}>YouTube</Text>
    </View>

    {/* Top tab bar icons */}
    <View style={Styles.TopTabBarIconsIvew}>

      <TouchableOpacity>
      <Feather name='cast' size={25} color='#fff' />
      </TouchableOpacity>

      <TouchableOpacity 
      onPress={() => navigation.navigate('NotificationScreen')}
      >
      <Ionicons name='notifications-outline' size={25} color='#fff' />
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate('SearchScreen')}
      >
      <Ionicons name='search' size={25} color='#fff' />
      </TouchableOpacity>

    </View>

    <View style={Styles.idLogo}>
    <TouchableOpacity
      onPress={() => navigation.navigate('AccountScreen')}
    >
    <Ionicons name='person-circle-outline' size={28} color='#fff' />
    </TouchableOpacity>
    </View>
    </View>
      
      {/* Videos */}
      <FlatList
        data={VideosData}
        renderItem={({item}) => (
        <TouchableOpacity
        onPress={() => navigateVideoPlayerScreen(item.desc,item.idName,item.views,item.createdAt,item.profile,item.thumbnail,item.subscribers)}
        >
        <View>
        <View style={Styles.HomeScreenVideoBox}>
          {/* <Video
            source={Video1}
            style={{width: '100%', height: '100%'}}
          /> */}
          {/* <VideoPlayer
            video={{uri:item.src}}
            thumbnail={{uri: item.thumbnail}}
            endThumbnail={{uri: item.thumbnail}}
          /> */}
          <Image
            source={{uri: item.thumbnail}}
            style={{width: '100%', height: '100%'}}
          />
        <View style={Styles.DurationContainer}>
        <Text style={Styles.Duration}>{Math.floor(item.duration / 60)}:{(item.duration % 60) < 10 ? '0' : ''}{item.duration % 60}</Text>
        </View>
        </View>

          {/* About Video */}
        <View style={Styles.HomeScreenVideoInfoView}>

        <View style={Styles.MakersDpView}>
        <TouchableOpacity
        key={item.id}
        onPress={() => navigateVideoMakersAccountScreen(item.idName)}
        >
        <Image
          source={{uri: item.profile}}
          style={Styles.MakersDp}
        />
        </TouchableOpacity>
        </View>
          
        <View style={Styles.VideosDescriptionView}>

          <Text style={Styles.VideosDescriptionText} ellipsizeMode='tail' numberOfLines={2}>{item.desc}</Text>

          <View style={Styles.IdNameViewsAndPostedTime}>
          <Text style={{color: '#9c9a95'}}>{item.idName} . {convertViewsToString(item.views)} . {item.createdAt}</Text>
          </View>

        </View>

          <View>
          <TouchableOpacity style={{width: 35, height: 35, borderRadius: 15, marginTop: 5}}>
          <Feather
            name='more-vertical'
            size={25}
            color='#fff'
            style={{alignSelf: 'center'}}
          />
          </TouchableOpacity>
          </View>

        </View>
        </View>
        </TouchableOpacity>
        )}

      />
      {/* <BottomSheetModalProvider>
      <View>
        <Button
          onPress={handlePresentModalPress}
          title="Present Modal"
          color="black"
        />
        <TouchableOpacity
        style={{
          width: 45,
          height: 45,
          position: 'absolute',
          // bottom:-10,
          zIndex: 1,
          elevation: 1,
          left: '45%',
        }}
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
    </BottomSheetModalProvider> */}
    </View>
  ) 
}

export default HomeScreen;

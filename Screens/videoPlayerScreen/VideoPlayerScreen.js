import React, { useState } from 'react';
import { 
    View,
    Text,
    Button,
    Image,
    Pressable,
    TouchableOpacity,
    SafeAreaView,
    ScrollView, 
} from 'react-native';
import VideoPlayer from 'react-native-video-player';
// import Video1 from './Video1.mp4';
import YoutubePlayer from "react-native-youtube-iframe";
import Styles from './Styles';
import VideosData from '../../Data/Videos';
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

import VideoPlayerScreenMenu from '../videoPlayerScreenMenu/VideoPlayerScreenMenu';
import Comments from '../commentScreen/Comments';
import RelatedVideos from '../relatedVideos/RelatedVideos';
import { convertViewsToString } from '../../common/commonFunctions';
import VideoInfo from '../videoInfo/VideoInfo';


const VideoPlayerScreen = ({route,navigation},Clicked) => {
  

  const [subscribed,setSubscribed] = useState(false)
  const navigateVideoMakersAccountScreen = (idName,thumbnail,desc,src,views,createdAt,profile) => {
    navigation.navigate('Video Makers Account',{idName,thumbnail,desc,src,views,createdAt,profile})}
  
  // const [Unsubscribed,setUnsubscribed] = useState(false)  
  const Unsubscribe = () => {
    return(
      <Animatable.View style={Styles.UnsubscribeMainView} animation="fadeInUpBig">
        <Text style={{fontSize: 30, color: 'white'}}> hello world</Text>
      </Animatable.View>
      
    )
  }
    
  return (
    <View style={{flex: 1}}>
    
      {/* <VideoPlayer
            video={require('./Video1.mp4')}
            // thumbnail={{uri: item.thumbnail}}
            // endThumbnail={{uri: item.thumbnail}}
            autoplay
            showDuration={true}
            
          /> */}
          <View style={Styles.VideoPlayerScreenVideoBox}>
          <YoutubePlayer
            videoId='efCpzNZkITA'
            // play={true}
            width='100%'
            height={300}
            mute={true}
            style={{position: 'absolute'}}
          />
        </View>
        
        
        {/* <View style={Styles.VideoPlayerScreenVideoInfoView}>

        <View style={Styles.VideoPlayerScreenDescriptionView}>
          <Text style={{fontSize:20, color:'#fff', fontWeight: '700',}}>{route.params.desc}</Text>
        </View>

        <View style={{width:'100%', height:'30%', }}>
          <Text style={{color: '#9c9a95'}}>  {convertViewsToString(route.params.views)}  .  {route.params.createdAt}</Text>
          </View>

        </View>

        <Pressable
        android_ripple={{borderless: true, color: 'gray', width: '100%'}}
        onPress={() => navigateVideoMakersAccountScreen(route.params.idName)}
        style={Styles.idNameAndSubcribeButtonView}>
        <Image
          source={{uri: route.params.profile}}
          style={Styles.VideoPlayerScreenAvatar}
        />
          <Text style={Styles.CreatorIdName}>{route.params.idName}</Text>
          <Text style={{fontSize: 15, color:'#fff', marginLeft: 5}}>{convertViewsToString(route.params.subscribers)}</Text>

        <TouchableOpacity 
        onPress={() => {
          setSubscribed( true
            // (isSubscribed) => !isSubscribed
            )
            
        }}
        >
        { subscribed ? 
        
        <TouchableOpacity
        style={Styles.BellIconButton}
        onPress={Unsubscribe}
        >
          <Feather
            name='bell-off'
            size={22}
            color='#fff'
          />
          <MaterialIcons
            name='expand-more'
            size={25}
            color='#fff'
          />
           
        </TouchableOpacity>
        
          :
          <View style={Styles.SubscribeButton}>
          <Text style={{fontSize: 14,fontWeight: '600',color: '#1a1a1a'}} >Subscribe</Text>
          </View>
          
        }
        </TouchableOpacity>

        </Pressable> */}

        
        <RelatedVideos/>
    </View>
  )
}

export default VideoPlayerScreen;


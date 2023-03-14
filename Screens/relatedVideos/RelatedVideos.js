import { 
    View, 
    Text,
    FlatList,
    Image,
    TouchableOpacity, 
    SafeAreaView,
    ScrollView,
} from 'react-native';
import React from 'react';
import Styles from './Styles';
import VideosData from '../../Data/Videos';
import VideoPlayer from 'react-native-video-player';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import VideoPlayerScreenMenu from '../videoPlayerScreenMenu/VideoPlayerScreenMenu';
import Comments from '../commentScreen/Comments';
import VideoInfo from '../videoInfo/VideoInfo';
// import VideoPlayerScreen from './VideoPlayerScreen';

const RelatedVideos = ({navigation}) => {
    const navigateVideoMakersAccountScreen = (idName,thumbnail,desc,src,views,time,profile) => {
        navigation.navigate('Video Makers Account',{idName,thumbnail,desc,src,views,time,profile})
    }
      const navigateVideoPlayerScreen = (desc,idName,views,time,profile,thumbnail,subscribers) => {
        navigation.navigate('VideoPlayerScreen',{desc,idName,views,time,profile,thumbnail,subscribers})
    }
  return (
    <ScrollView style={{flex: 1}}>
        <VideoInfo/>
        <VideoPlayerScreenMenu/>  
        <Comments/>
      <FlatList
      scrollEnabled={false}
        data={VideosData}
        renderItem={({item}) => (
        <View>
        
        <TouchableOpacity
        // onPress={() => navigateVideoPlayerScreen(item.desc,item.idName,item.views,item.time,item.profile,item.thumbnail,item.subscribers)}
        >
        <View>
        <View style={Styles.HomeScreenVideoBox}>
          
          {/* <VideoPlayer
            video={{uri:item.src}}
            thumbnail={{uri: item.thumbnail}}
            endThumbnail={{uri: item.thumbnail}}
          /> */}
          <Image
            source={{uri: item.thumbnail}}
            style={{width: '100%', height: '100%'}}
          />
        </View>

          {/* About Video */}
        <View style={Styles.HomeScreenVideoInfoView}>

        <View style={Styles.MakersDpView}>
        <TouchableOpacity
        key={item.id}
        // onPress={() => navigateVideoMakersAccountScreen(item.idName)}
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
          <Text style={{color: '#9c9a95'}}>{item.idName} . {item.views} . {item.time}</Text>
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
        </View>
        )}
        // ListHeaderComponent={VideoPlayerScreen}
      />
    </ScrollView>
  )
}

export default RelatedVideos;
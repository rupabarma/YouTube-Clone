import { 
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import React,{useEffect, useState} from 'react';
import Video from 'react-native-video';
import Styles from './Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ShortVideosContent from './ShortVideosContent';

import ShortVideosData from '../../Data/ShortVideos';



const ShortsScreen = () => {
  
// const [paused,setPaused] = useState(false);
// const [isLiked,setIsLiked] = useState(false);

// const onPlayPausePress= () => {
//   setPaused(!paused)
// };

// const onLikePress= () => {
//   const likesToAdd = isLiked? -1 : 1;
//   setPost({
//     ...post,
//     likes: post.likes + likesToAdd
//   });
//   setIsLiked(!isLiked);
//   }

  return (
        <View>
        <FlatList
        data={ShortVideosData}
        renderItem={({item}) => <ShortVideosContent shorts = {item}/>}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get("window").height -48}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        
        />
       </View>
  )
}

export default ShortsScreen;

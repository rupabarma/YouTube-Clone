import { 
    View, 
    Text,
    TouchableOpacity,
    Pressable,
    Image,
 } from 'react-native'
import React, {useState} from 'react'
import Styles from './Styles'
import { convertViewsToString } from '../../common/commonFunctions';
import VideosData from '../../Data/Videos';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const VideoInfo = ({navigation,route}) => {

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
  const item = VideosData[0]

  return (
    <View>
      <View style={Styles.VideoPlayerScreenVideoInfoView}>

<View style={Styles.VideoPlayerScreenDescriptionView}>
  <Text style={{fontSize:20, color:'#fff', fontWeight: '700',}}>{item.desc}</Text>
</View>

<View style={{width:'100%', height:'30%', }}>
  <Text style={{color: '#9c9a95'}}>  {convertViewsToString(item.views)}  .  {item.createdAt}</Text>
  </View>

</View>

<Pressable
android_ripple={{borderless: true, color: 'gray', width: '100%'}}
onPress={() => navigateVideoMakersAccountScreen(item.idName)}
style={Styles.idNameAndSubcribeButtonView}>
<Image
  source={{uri: item.profile}}
  style={Styles.VideoPlayerScreenAvatar}
/>
  <Text style={Styles.CreatorIdName}>{item.idName}</Text>
  <Text style={{fontSize: 15, color:'#fff', marginLeft: 5}}>{convertViewsToString(item.subscribers)}</Text>

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

</Pressable>
    </View>
  )
}

export default VideoInfo
import React, { useState }  from 'react';
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
import Styles from './Styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const VideoPlayerScreenMenu = () => {
    const [liked,setLiked] = useState(false)
    const [disliked,setDisliked] = useState(false)
    const [likes,setLikes] = useState(0)
  return (
      <View style={Styles.LikeDownloadMenuView}>
      <SafeAreaView>
      <ScrollView horizontal>

          <View style={Styles.LikeAndDislikeMainView}>
          
          <View style={Styles.LikeButtonView}>
          <TouchableOpacity
          
          onPress={() => {
          setLiked((isLiked) => !isLiked)
          setLikes(liked ? 1-likes : likes+1 )
          }}
          
          >
          <AntDesign
            name={liked? 'like1' : 'like2'}
            size={22}
            color='#fff'
          />
          </TouchableOpacity>

          <Text style={{fontSize: 17,fontWeight: '900', color: '#fff', }}>{likes}</Text>
          </View>
          
          
          <Text style={{fontSize: 25,fontWeight: '900', color: '#4d4d4d', }}>|</Text>

          <View style={Styles.DislikeButtonView}>
          <TouchableOpacity
          onPress={() => {
          setDisliked((isDisliked) => !isDisliked)
          }}
          >
          <AntDesign
            name={disliked? 'dislike1' : 'dislike2'}
            size={22}
            color='#fff'
            style={{transform: [{rotateY:'180deg'}]}}
          />
          </TouchableOpacity>
          </View>
          </View>

          
          <TouchableOpacity
          style={Styles.ShareButtonMainView}
          >
            <MaterialCommunityIcons
              name='share-outline'
              size={24}
              color='#fff'
            />
            <Text style={{fontSize: 15,fontWeight: '700', color: '#fff', }}>
              Share
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={Styles.DownloadButtonMainView} 
          >
            <Octicons
              name='download'
              size={20}
              color='#fff'
            />
            <Text style={{fontSize: 15,fontWeight: '700', color: '#fff', }}>
              Download
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={Styles.ClipButtonMainView} 
          >
            <FontAwesome
              name='cut'
              size={20}
              color='#fff'
            />
            <Text style={{fontSize: 15,fontWeight: '700', color: '#fff', }}>
              Clip
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={Styles.SaveButtonMainView} 
          >
            <MaterialIcons
              name='my-library-add'
              size={20}
              color='#fff'
            />
            <Text style={{fontSize: 15,fontWeight: '700', color: '#fff', }}>
              Save
            </Text>
          </TouchableOpacity>

          </ScrollView>
        </SafeAreaView>
        </View>
  )
}

export default VideoPlayerScreenMenu;
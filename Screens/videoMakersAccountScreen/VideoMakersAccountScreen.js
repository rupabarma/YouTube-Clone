import { View, Text,TouchableOpacity } from 'react-native';
import React from 'react';
import Styles from '../../Styles/Styles';
import AntDesign from 'react-native-vector-icons/AntDesign'

const VideoMakersAccountScreen = ({route,navigation}) => {
  return (
    <View>
    <View style={Styles.TopTabBar}>
      <TouchableOpacity
      style={Styles.catelogStackIcon}
      onPress={()=> navigation.goBack()}
      >
      <AntDesign name="left" size={24} color="#fff" />
      </TouchableOpacity>
      <Text style={Styles.LogoText}>{route.params.idName}</Text>
    </View>
      <Text>Video Makers Account</Text>
    </View>
  )
}

export default VideoMakersAccountScreen;
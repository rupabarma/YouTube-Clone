import React from 'react';
import { 
    View,
    Image,
    TouchableOpacity,
    Text, 
} from 'react-native';
import Styles from '../Styles/Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import youtubeLogo from './youtubeLogo.png';

const TopTabBar = ({navigation}) => {
  return (
    <View style={Styles.TopTabBar}>
    <View style={Styles.AppLogo}>
      {/* <Image source={youtubeLogo} /> */}
      <View style={{width: 26, height: 20, backgroundColor: '#fff',marginTop: 8,borderRadius: 10,marginRight: 3}}>
      <Ionicons
        name='md-logo-youtube'
        size={26}
        color='red'
        style={{position: 'absolute',top: -4}}
      />
      </View>
      <Text style={Styles.LogoText}>YouTube</Text>
    </View>
    <View style={Styles.TopTabBarIconsIvew}>

      <TouchableOpacity>
      <Feather
        name='cast'
        size={25}
        color='#fff'
      />
      </TouchableOpacity>

      <TouchableOpacity>
      <Ionicons
        name='notifications-outline'
        size={25}
        color='#fff'
      />
      </TouchableOpacity>

      <TouchableOpacity
      onPress={() => navigation.navigate('SearchScreen')}
      >
      <Ionicons
        name='search'
        size={25}
        color='#fff'
      />
      </TouchableOpacity>

    </View>
    <View style={Styles.idLogo}>
    <Ionicons
        name='person-circle-outline'
        size={28}
        color='#fff'
      />
    </View>
    </View>
  )
}

export default TopTabBar;

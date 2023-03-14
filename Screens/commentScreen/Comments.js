import { 
    View, 
    Text,
    Image, 
} from 'react-native';
import React from 'react';
import Styles from '../../Styles/Styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Comments = () => {
  return (
    <View style={Styles.CommentsMainView}>
      <View style={Styles.CommentsSubView}>
        <Text style={{fontSize: 16, fontWeight: '700', color: '#fff' }}>
            Comments
        </Text>
        <View style={{width: '100%',height: '75%',flexDirection: 'row'}}>

        <View style={Styles.CommentTextAndDpMainView}>
        <View style={Styles.CommentDpMainView}>
        <Image
          source={{uri: 'https://mcdn.wallpapersafari.com/medium/40/46/CHiM6e.jpg'}}
          style={{
            width: 30,
            height: 30,
            borderRadius: 15,
            }}
        />
        </View>
        <Text ellipsizeMode='tail' numberOfLines={2} style={{fontSize: 12, color:'#fff', fontWeight: 'normal'}}>
          HELLO WORLD
        </Text>
        </View>

        <View style={{width: '7%', height: '100%',alignItems: 'center',justifyContent: 'center'}}>
        <MaterialIcons
            name='expand-more'
            size={20}
            color='#fff'
            // style={{}}
          />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Comments;
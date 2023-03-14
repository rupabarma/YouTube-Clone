import {
    View,
    Text,
    TouchableWithoutFeedback,
    Image,
    TouchableOpacity
} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Styles from './Styles';

const ShortVideosContent = (props) => {
    // const {shorts} = props;
    const [shorts, setShorts] = useState(props.shorts);
    const [paused, setPaused] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const onPlayPausePress = () => {
        setPaused(!paused)
    };
    

    const onLikePress = () => {
        const likesToAdd = isLiked ? -1 : 1;
        setShorts({
            ...shorts,
            likes: shorts.likes + likesToAdd
        });
        setIsLiked(!isLiked);
    }

    return (
        <View style={Styles.container}>
            <TouchableWithoutFeedback
                onPress={onPlayPausePress}
            >
                <Video
                    source={{ uri: shorts.sources }}
                    style={Styles.backgroundVideo}
                    resizeMode={'cover'}
                    repeat={true}
                    paused={paused}
                />
            </TouchableWithoutFeedback>



            <View style={Styles.sideContainer}>
                <View style={Styles.profilePictureContainer}>
                    <Image
                        source={{ uri: shorts.thumb }}
                        style={Styles.profilePicture}
                    />
                </View>

                <TouchableOpacity style={Styles.iconContainer} onPress={onLikePress}>
                    <AntDesign
                        name='heart'
                        size={45}
                        color={isLiked ? '#ff3333' : '#fff'}
                    />
                    <Text style={Styles.count}>{shorts.likes}</Text>
                </TouchableOpacity>

                <View style={Styles.iconContainer}>
                    <FontAwesome
                        name='commenting'
                        size={40}
                        color='#fff'
                    />
                    <Text style={Styles.count}>{shorts.comments}</Text>
                </View>

                <View style={Styles.iconContainer}>
                    <Fontisto
                        name='share-a'
                        size={30}
                        color='#fff'
                    />
                    <Text style={Styles.count}>{shorts.shares}</Text>
                </View>
            </View>

            {/* Bottom Container */}

            <View style={Styles.bottomContainer}>

                <View>
                    <Text style={Styles.userName}>@{shorts.userName}</Text>
                </View>

                <View style={Styles.descContainer}>
                    <Text style={Styles.description}>{shorts.title}</Text>
                </View>

                {/* <View style={Styles.songNameView}>
                <Ionicons
                name='md-musical-notes'
                size={22}
                color='#fff'
                />

              <Text style={Styles.songName}>{post.song.name}</Text>

              <View style={Styles.songImageView}>
              <Image
                source={{uri: post.song.imageUri}}
                style={Styles.songImage}
                />
              </View>
              </View> */}

            </View>

        </View>
    )
}

export default ShortVideosContent;
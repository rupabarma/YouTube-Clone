import React from "react";
import { StyleSheet } from "react-native";


const Styles = StyleSheet.create({ 
    // 1. Top Tab Bar
    TopTabBar:{
        width: '100%',
        aspectRatio: 7/1,
        backgroundColor: '#000',
        paddingHorizontal: 10,
        paddingVertical: 2,
        flexDirection: 'row',
        elevation: 4,
    },
    AppLogo:{
        flexDirection: 'row',
        width: 150,
        height: 68,
        paddingTop: 10,
        marginLeft: 5
    },
    YoutubeLogo:{
        width: 26, 
        height: 20, 
        backgroundColor: '#fff',
        marginTop: 8,
        borderRadius: 10,
        marginRight: 3
    },
    LogoText:{
        fontSize: 22,
        fontWeight: '900',
        fontFamily: 'sans-serif-medium',
        color: '#fff',
        
    },
    TopTabBarIconsIvew:{
        width: 130,
        // height: ,
        flexDirection: 'row',
        paddingTop: 12,
        // backgroundColor: '#fff',
        marginLeft: 25,
        justifyContent: 'space-between'
    },
    idLogo:{
        width: 50,
        paddingHorizontal: 12,
        paddingTop: 10,
        marginLeft: 15
    },
    // 2. Home Screen 
    contentContainer: {
        flex: 1,
        alignItems: 'center',
      },
    HomeScreenView:{
        flex: 1,
        backgroundColor: '#333333'
    },
    HomeScreenVideoBox:{
        width: '100%',
        aspectRatio: 16/8,
    },
    DurationContainer:{
        width: 50,
        height: 25,
        backgroundColor: '#00000099',
        borderRadius: 4,
        justifyContent: 'center',
        position: 'absolute',
        bottom: 5,
        right: 5,
        alignItems: 'center'
    },
    Duration:{
        fontWeight: 'bold',
        color:'#fff',
        fontSize: 15
    },
    HomeScreenVideoInfoView:{
        width: '100%',
        aspectRatio: 12/3,
        backgroundColor: '#000',
        flexDirection: 'row',
        paddingVertical: 10,
    },
    MakersDpView:{
        width: '20%',
        height: '100%',
        paddingLeft: 10,
    },
    MakersDp:{
        width: 60,
        height: 60,
        borderRadius: 30,
    }, 
    VideosDescriptionView:{
        width: '70%',
        height: '100%',
        paddingRight: 10,
    }, 
    VideosDescriptionText:{
        fontSize: 18,
        fontWeight: '700',
        width: '100%',
        height: '70%',
        color: '#fff',
    },
    IdNameViewsAndPostedTime:{
        width: '100%',
        height: '30%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    BottomTabNavigationMainView:{
        position: 'absolute',
        bottom: 0,
        // zIndex: 1,
        // elevation: 1,
        width:'100%',
        aspectRatio: 8/1,
        backgroundColor: '#000000',
        // paddingHorizontal:5,
        // paddingVertical: 2,
        paddingTop: -10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    BottomTabNavComponentsView:{
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        paddingVertical: 3,
        flexDirection: 'column',
    },
    TabBarLable:{
        fontSize: 12,
        color: '#fff',
        marginTop: -3  
    },
    //Video player screen
    VideoPlayerScreenDescriptionView:{
        width: '100%',
        height: '70%',
        paddingRight: 10,
    },
    VideoPlayerScreenVideoBox:{
        width: '100%',
        aspectRatio: 16/9,
        // position: 'absolute'
    },
    VideoPlayerScreenVideoInfoView:{
        width: '100%',
        aspectRatio: 12/3,
        backgroundColor: '#000000',
        flexDirection: 'column',
        // paddingVertical: 10
    },
    idNameAndSubcribeButtonView:{
        width: '100%',
        aspectRatio: 7/1,
        backgroundColor: '#000000',
        // borderTopWidth: 2,
        // borderTopColor:'#fff',
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    VideoPlayerScreenAvatar:{
        width: 35,
        height: 35,
        borderRadius: 35/2,

    },
    CreatorIdName:{
        fontSize: 15,
        fontWeight: '700',
        color: '#fff',
        marginLeft: 10,
    },
    SubscribeButton:{
        width: 80,
        height: 35,
        borderRadius:35/2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 80
    },
    LikeDownloadMenuView:{
        // width: '100%',
        aspectRatio: 7/1,
        backgroundColor: '#000000',
        // borderTopWidth: 2,
        // borderTopColor:'#fff',
        flexDirection: 'row',
        paddingHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    LikeAndDislikeMainView:{
        width: 120,
        height: 35,
        borderRadius:35/2,
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        // justifyContent: 'space-between',
        // position: "absolute",
        // right: 10,
        alignSelf: 'center',
        // paddingHorizontal: 15,
        flexDirection: 'row',
    },
    LikeButtonView:{
        width: '60%',
        height: '100%',
        borderRadius: 35/2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    DislikeButtonView:{
        width: '35%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // paddingHorizontal: 8,
        borderRadius: 35/2,
        
    },
    ShareButtonMainView:{
        width: 90,
        height: 35,
        borderRadius:35/2,
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'space-between',
        // position: "absolute",
        // right: 10,
        alignSelf: 'center',
        paddingHorizontal: 10,
        flexDirection: 'row',
        marginLeft: 10,
        // elevation:4,
        overflow: 'hidden'
    },
    DownloadButtonMainView:{
        width: 120,
        height: 35,
        borderRadius:35/2,
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'space-between',
        // position: "absolute",
        // right: 10,
        alignSelf: 'center',
        paddingHorizontal: 14,
        flexDirection: 'row',
        marginLeft: 10,
    },
    ClipButtonMainView:{
        width: 80,
        height: 35,
        borderRadius:35/2,
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'space-between',
        // position: "absolute",
        // right: 10,
        alignSelf: 'center',
        paddingHorizontal: 12,
        flexDirection: 'row',
        marginLeft: 10,
    },
    SaveButtonMainView:{
        width: 85,
        height: 35,
        borderRadius:35/2,
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'space-between',
        // position: "absolute",
        // right: 10,
        alignSelf: 'center',
        paddingHorizontal: 12,
        flexDirection: 'row',
        marginLeft: 10,
    },
    UnsubscribeMainView:{
        width: 900,
        height: 300,
        flexDirection: 'column',
        position: 'absolute',
        bottom: 0,
        left:0,
        backgroundColor: 'gray',
        // marginTop: 600
    },
    BellIconButton:{
        width: 70,
        height: 35,
        borderRadius:35/2,
        backgroundColor: '#1a1a1a',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 9,
        flexDirection: 'row',
        marginLeft: 80
    },
    //Comments component
    CommentsMainView:{
        width: '100%',
        aspectRatio: 6/2,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    CommentsSubView:{
        width: '97%',
        height: '80%',
        backgroundColor: '#1a1a1a',
        borderRadius: 15,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    CommentTextAndDpMainView:{
        width: '93%',
        height: '90%',
        // backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        paddingVertical: 4,
    },
    CommentDpMainView:{
        width: '11%',
        height: '100%',
        justifyContent: 'center',
    },
});

export default Styles;
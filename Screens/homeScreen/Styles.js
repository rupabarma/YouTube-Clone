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
});

export default Styles;
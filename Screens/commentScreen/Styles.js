import React from "react";
import { StyleSheet } from "react-native";


const Styles = StyleSheet.create({ 
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
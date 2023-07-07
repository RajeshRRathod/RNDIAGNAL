
import React from 'react';
import {
    Alert,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    BackHandler
} from 'react-native';

import back_arraw from '../../assets/images/Back.png';
import img_search from '../../assets/images/search.png';
import nav_bar from '../../assets/images/nav_bar.png';
import styles from './styles';


export const HeaderView = (props) => {

    function handleExitApp() {
        Alert.alert(
            'Exit App',
            'Are you sure you want to exit the app?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Exit',
                    onPress: () => BackHandler.exitApp(),
                    style: 'destructive',
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <ImageBackground style={styles.item_root}
            resizeMode='cover'
            source={nav_bar}>
            <View style={styles.toolbar_root} >
                <TouchableOpacity onPress={() => handleExitApp()}>
                    <Image
                        source={back_arraw}
                        style={styles.icon_size}
                    />
                </TouchableOpacity>
                <Text
                    numberOfLines={1}
                    style={styles.movie_category}>{props.title}</Text>
                <TouchableOpacity onPress={props.onPress}>
                    <Image
                        source={img_search}
                        style={styles.icon_size}
                    />
                </TouchableOpacity>
            </View>
        </ImageBackground>

    )
}
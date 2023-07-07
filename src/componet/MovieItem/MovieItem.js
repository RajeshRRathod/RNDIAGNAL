import React from 'react';
import { Image, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image'

import styles from './styles';

import missingImage from '../../assets/images/placeholder_for_missing_posters.png';

const MovieItem = (props) => {
    return (
        <View style={styles.itemContainer}>
            {/* <Image
                resizeMode='cover'
                source={props.url}
                style={styles.moviePoster}
            /> */}
            <FastImage
                defaultSource={missingImage}
                style={styles.moviePoster}
                source={props.url}
                resizeMode={FastImage.resizeMode.cover}
            />
            <Text
                style={styles.movie_name}
                numberOfLines={1}
                ellipsizeMode='tail'>
                {props.data.name}
            </Text>
        </View>
    );
}


export default MovieItem;

import React, { useState } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import FastImage from 'react-native-fast-image';
import Tooltip from 'react-native-walkthrough-tooltip';
import styles from './styles';
import missingImage from '../../assets/images/placeholder_for_missing_posters.png';
import { ALL_COLORS } from '../../utility/consts';

const MovieItem = (props) => {
    const [toolTipVisible, setToolTipVisible] = useState(false)
    return (
        <View style={styles.itemContainer}>
            <FastImage
                defaultSource={missingImage}
                style={styles.moviePoster}
                source={props.url}
                resizeMode={FastImage.resizeMode.cover}
            />
            <Tooltip
                isVisible={toolTipVisible}
                content={<Text style={{ color: ALL_COLORS.black }}>{props.data.name}</Text>}
                placement="top"
                onClose={() => setToolTipVisible(false)}
            >
                <TouchableHighlight onPress={() => setToolTipVisible(true)}>
                    <Text
                        style={styles.movie_name}
                        numberOfLines={1}
                        ellipsizeMode='tail'>
                        {props.data.name}
                    </Text>
                </TouchableHighlight>
            </Tooltip>
        </View >
    );
}


export default MovieItem;

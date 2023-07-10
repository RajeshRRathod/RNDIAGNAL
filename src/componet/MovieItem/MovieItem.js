import React, { useState } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import FastImage from 'react-native-fast-image';
import Tooltip from 'react-native-walkthrough-tooltip';
import styles from './styles';
import missingImage from '../../assets/images/placeholder_for_missing_posters.png';
import { ALL_COLORS } from '../../utility/consts';

const MovieItem = (props) => {
    const [toolTipVisible, setToolTipVisible] = useState(false)
    const [textWidth, setTextWidth] = useState(0);
    const [textWidt1, setTextWidt1] = useState(0);
    const [rootWidth, setRootWidth] = useState(0);
    return (
        <View style={styles.itemContainer}
            onLayout={e => {
                setRootWidth(e.nativeEvent.layout.width)
            }}
        >
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

                <TouchableHighlight onPress={() => {
                    if (textWidt1 >= rootWidth) {
                        setToolTipVisible(true)
                    } else {
                        setToolTipVisible(false)
                    }

                }} >
                    <View style={{ flexDirection: 'row' }}>

                        <Text
                            onLayout={e => {
                                setTextWidth(e.nativeEvent.layout.width);
                            }}
                            style={[styles.movie_name]}
                            numberOfLines={1}
                            ellipsizeMode='tail'>
                            {props.data.name}
                        </Text>

                        <Text
                            onLayout={e => {
                                setTextWidt1(e.nativeEvent.layout.width);
                            }}
                            numberOfLines={1}
                            style={styles.movie_name_transparent}
                        >
                            {props.data.name}
                        </Text>
                    </View>
                </TouchableHighlight>
            </Tooltip>
        </View >
    );
}


export default MovieItem;

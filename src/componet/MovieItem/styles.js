import { StyleSheet, } from 'react-native';
import { ALL_COLORS, CONST_VALUE, FONT } from '../../utility/consts';

export default StyleSheet.create({
    itemContainer: {
        marginBottom: CONST_VALUE.TWO_ROW_SPACE
    },
    moviePoster: {
        height: 200,
        width: "100%",
        marginBottom: CONST_VALUE.BEWEEN_POSTER_AND_MOVIE_NAME_SPACE
    },
    movie_name: {
        color: ALL_COLORS.white,
        fontSize: 16,
        fontFamily: FONT.TITILLIUM_WEB,

    }
});

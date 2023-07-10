import { StyleSheet, } from 'react-native';
import { ALL_COLORS, CONST_VALUE, FONT } from '../../utility/consts';

export default StyleSheet.create({

    item_root: {
        height: CONST_VALUE.HEADER_HEIGHT,
        marginHorizontal: 15,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,

    },
    toolbar_root: {
        flexDirection: "row",
        alignItems: 'center',
        backgroundColor: 'black'
    },
    icon_size:
    {
        height: 24,
        width: 24
    },
    movie_category: {
        flex: 1,
        color: ALL_COLORS.white,
        fontSize: 16,
        fontFamily: FONT.TITILLIUM_WEB,
        marginHorizontal: 10
    },
});

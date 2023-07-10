import { StyleSheet, } from 'react-native';
import { ALL_COLORS, CONST_VALUE, FONT } from '../../utility/consts';

export default StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        backgroundColor: ALL_COLORS.black,
    },
    marginHorizontal: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0)'

    },
    search_root: {
        height: CONST_VALUE.SEACH_BOX_HEIGHT,
        marginHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60,
    },
    search_input: {
        color: ALL_COLORS.white,
        flex: 1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: ALL_COLORS.white,
        padding: 10,
        fontSize: 16,
        fontFamily: FONT.TITILLIUM_WEB,
    },
    searc_cancel: {
        fontSize: 16,
        color: ALL_COLORS.white,
        paddingVertical: 10,
        textAlign: 'center',
        fontFamily: FONT.TITILLIUM_WEB,
    },
    movie_list_container:
    {
        paddingBottom: 60
    },

    emptyView: {
        flex: 1,
        marginTop: 200,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyText: {
        fontSize: 18,
    },

});

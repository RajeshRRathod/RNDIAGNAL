import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    StatusBar,
    Text,
    TextInput,
    View,
} from 'react-native';


import MovieItem from '../../componet/MovieItem/MovieItem';
import { FlatGrid } from 'react-native-super-grid';
import { Dimensions } from 'react-native';

// local images for movie list 
import poster1 from '../../assets/images/poster1.jpg';
import poster2 from '../../assets/images/poster2.jpg';
import poster3 from '../../assets/images/poster3.jpg';
import poster4 from '../../assets/images/poster4.jpg';
import poster5 from '../../assets/images/poster5.jpg';
import poster6 from '../../assets/images/poster6.jpg';
import poster7 from '../../assets/images/poster7.jpg';
import poster8 from '../../assets/images/poster8.jpg';
import poster9 from '../../assets/images/poster9.jpg';
import missingImage from '../../assets/images/placeholder_for_missing_posters.png';

import { ALL_IMAGES, CONST_VALUE, STRINGS_DATA } from '../../utility/consts';
import { HeaderView } from '../../componet/HeaderView/HeaderView';
import styles from './styles';

const windowWidth = Dimensions.get('window').width;

const MovieListScreen = () => {


    const [movieList, setMovieList] = useState([]);
    const [movieSearchList, setMovieSearchList] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [movieTitle, setMovieTitle] = useState('');
    const [nextPageAvailable, setNextPageAvailable] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    const [searchMovie, setSearchMovie] = useState('');

    const page1Token = 'https://json.extendsclass.com/bin/32ce8e3c929b';
    const page2Token = 'https://json.extendsclass.com/bin/09bb55c41aa6';
    const page3Token = 'https://json.extendsclass.com/bin/7393dde2ad00';

    useEffect(() => {
        getMoviesFromCloud(page1Token);
    }, []);

    const updateFilteredData = (query) => {
        if (query.length > 0) {
            const filtered = movieSearchList.filter(item =>
                item.name.trim().toLowerCase().includes(query.trim().toLowerCase())
            );
            setMovieList(filtered);
        } else {
            setMovieList(movieSearchList);
        }
    };

    const getImage = (item) => {
        switch (item) {
            case ALL_IMAGES.poster1:
                return poster1;
            case ALL_IMAGES.poster2:
                return poster2;
            case ALL_IMAGES.poster3:
                return poster3;
            case ALL_IMAGES.poster4:
                return poster4;
            case ALL_IMAGES.poster5:
                return poster5;
            case ALL_IMAGES.poster6:
                return poster6;
            case ALL_IMAGES.poster7:
                return poster7;
            case ALL_IMAGES.poster8:
                return poster8;
            case ALL_IMAGES.poster9:
                return poster9;
            default:
                return missingImage;
        }
    }

    const handleLoadMore = () => {

        if (!isSearchVisible) {
            if (nextPageAvailable) {
                let storageFileToken = null;
                if (currentPage == 2) {
                    storageFileToken = page2Token;
                } else if (currentPage == 3) {
                    storageFileToken = page3Token;
                }

                if (storageFileToken != null) {
                    getMoviesFromCloud(storageFileToken)
                }
            }
        }

    };

    const getMoviesFromCloud = async (publicUrl) => {
        if (isLoading) {
            return;
        }
        setIsLoading(true);
        try {
            if (currentPage <= 3) {
                const response = await fetch(publicUrl)
                    .then(response => response.json())
                    .then(json => {
                        return json;
                    })
                    .catch(error => {
                        console.error(error);
                        return null;
                    });

                if (response != null) {
                    const { page } = response;
                    setMovieTitle(page.title);
                    if (page['page-size-returned'] < page['page-size-requested']) {
                        setNextPageAvailable(false)
                    } else {
                        setNextPageAvailable(true)
                    }
                    if (currentPage == 1) {
                        setMovieList((page['content-items'].content));
                    } else {
                        setMovieList([...movieList, ...page['content-items'].content]);
                    }
                    setCurrentPage(currentPage + 1);
                }
            }

        } catch (error) {
        } finally {
            setIsLoading(false);
        }

    }

    const searchVisibility = () => {
        if (movieList.length > 0) {
            setIsSearchVisible(true);
            setMovieSearchList(movieList);
        }
    }

    const cancelSearch = () => {
        setSearchMovie('');
        setIsSearchVisible(false);
        setMovieList(movieSearchList);
    }


    const renderEmptyView = () => (
        <View style={styles.emptyView}>
            <Text style={styles.emptyText}>{STRINGS_DATA.NO_DATA}</Text>
        </View>
    );

    const renderFooter = () => (
        <View style={{ minHeight: 20 }} />
    );

    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <StatusBar
                hidden
            />
            <View style={styles.marginHorizontal}>



                <View style={{ flex: 1 }}>
                    {isSearchVisible && <View style={styles.search_root}>
                        <TextInput
                            placeholder={STRINGS_DATA.SEARCH_PLAHOLDER}
                            value={searchMovie}
                            style={styles.search_input}
                            onChangeText={text => {
                                setSearchMovie(text);
                                updateFilteredData(text);
                            }}
                        />
                        <Text style={styles.searc_cancel} onPress={cancelSearch}> {STRINGS_DATA.CANCEL}</Text>
                    </View>
                    }
                    <FlatGrid
                        itemDimension={windowWidth / 3 - CONST_VALUE.LEFT_RIGHT_SIDE_SPACE}
                        extraData={movieList}
                        data={movieList}
                        style={{
                            flex: 1,
                            paddingTop: isSearchVisible ? 20 : (CONST_VALUE.HEADER_HEIGHT - 20),

                        }}
                        keyExtractor={(item, index) => item.name + index + Math.random()}
                        spacing={15}
                        renderItem={({ item }) =>
                            <MovieItem data={item} url={getImage(item['poster-image'])} />
                        }
                        showsVerticalScrollIndicator={false}
                        onEndReached={handleLoadMore}
                        onEndReachedThreshold={0.1}
                        ListEmptyComponent={renderEmptyView}
                        ListFooterComponent={renderFooter}
                    />
                    <HeaderView title={movieTitle} onPress={searchVisibility} />
                </View>
            </View>
        </SafeAreaView>
    );
}
export default MovieListScreen

import React, { useEffect } from 'react';
import { Row, Col } from 'antd';

import AlbumCard from '../../Common/AlbumCard';

import ShowResult from '../../Common/Result';
import SongCards from '../../Common/Loading/SongCards';
import ScrollPagination from '../../Common/ScrollPagination';
import { isEmpty } from '../../../utils/commonUtils';



const FollowedAlbums = (props) => {

    const {
        fetchFavoriteAlbums,
        favoriteAlbums,
        favoriteAlbumsList,
        favoriteAlbumsLoading,
        favoriteAlbumsMeta,
        favoriteAlbumsHasMore,
        favoriteAlbumsLoadingMore,
        setCurrentPlaySong,
        isPlayerPlaying,
        setIsPlayerPlaying,
        currentPlayReferrerId,
        currentPlayReferrer,
        currentPlayKey,
        addSongToCurrentAudioQueue,
    } = props

    let { current_page } = favoriteAlbumsMeta || {};

    useEffect(() => {
                   
            fetchFavoriteAlbums();
        
    }, [])// eslint-disable-line

    const setAlbumToFavourite = (formdata, id) => {
        props.actions.setFavouriteAlbum(formdata, id)
    }


    const setBulkSongsToPlay = (songData) => {
        setCurrentPlaySong(songData);
    }

    return (
        <div className='section'>
            <Row className='section-body no-slick-cards'>
                {
                    favoriteAlbumsLoading ?
                        <SongCards />
                        :
                        !isEmpty(favoriteAlbums) ?

                            favoriteAlbumsList.map((album, index) => {
                                return (
                                    <Col key={album.id}>

                                        <AlbumCard
                                            className='recent-card'
                                            albumDetails={album}
                                            setIsPlayerPlaying={setIsPlayerPlaying}
                                            setBulkSongsToPlay={setBulkSongsToPlay}
                                            currentPlayKey={currentPlayKey}
                                            currentPlayReferrerId={currentPlayReferrerId}
                                            currentPlayReferrer={currentPlayReferrer}
                                            isPlayerPlaying={isPlayerPlaying}
                                            setAlbumToFavourite={setAlbumToFavourite}
                                            addSongToCurrentAudioQueue={addSongToCurrentAudioQueue}
                                            {...props}
                                        />
                                    </Col>
                                )
                            }
                            )
                            :
                            <ShowResult msg="You have no favorite album yet!" home={true} />
                }
            </Row>
            <Row>
                <Col span={24}>
                    {
                        !favoriteAlbumsLoading &&
                        <ScrollPagination
                            current_page={current_page}
                            pagination={fetchFavoriteAlbums}
                            HasMore={favoriteAlbumsHasMore}
                            loadingMore={favoriteAlbumsLoadingMore}
                            data={favoriteAlbums}
                        />
                    }
                </Col>

            </Row>
        </div>
    );
};

export default FollowedAlbums;
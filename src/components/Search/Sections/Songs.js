import React from 'react';
import { Typography, Button } from 'antd';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

import Card from '../../Common/Card';
import { CarsouelSettings } from '../../../utils/carouselSettings'
import { isEmpty } from '../../../utils/commonUtils';
import ShowResult from '../../Common/Result';

const { Title } = Typography;

const Songs = ({
    data,
    setCurrentPlaySong,
    currentPlayKey,
    setIsPlayerPlaying,
    isPlayerPlaying,

    fetchFavoriteButton,
    favoriteButton,
    favoriteButtonLoading,
    favoriteButtonLoadingId,

    fetchUserAllPlaylists,
    userAllPlaylists,
    userAllPlaylistsLoading,
    userAllPlaylistsErrors,
    addSongToPlaylist,
    createAndAddToPlaylist,
    createdUserPlaylist,
    createUserPlaylistLoading,
    createUserPlaylistErrors,
    addSongToCurrentAudioQueue

}) => {

    const setSongToPlay = (song, key) => {
        setCurrentPlaySong(song, key);
    }

    const settings = CarsouelSettings(1, 5)

    return (
        <div className='section'>
            <div className='section-header'>
                <Title level={4}>Songs </Title>
                <span className='section-link'>
                  {!isEmpty(data)? 
                  <Link to="/search/song">
                    <Button type="text">See All</Button>
                  </Link> 
                  :""} 
                </span>
            </div>


            <div className='section-body custom-slick'>
                {isEmpty(data) ? (<ShowResult msg='No result for songs' home={true} />) :
                    <Slider {...settings}>
                        {data.map((song) => {
                            return (
                                <div key={song.id}>
                                    <Card
                                        currentPlayKey={currentPlayKey}
                                        songDetails={song}
                                        isPlayerPlaying={isPlayerPlaying}
                                        setSongToPlay={setSongToPlay}
                                        setIsPlayerPlaying={setIsPlayerPlaying}
                                        fetchFavoriteButton={fetchFavoriteButton}
                                        favoriteButton={favoriteButton}
                                        favoriteButtonLoading={favoriteButtonLoading}
                                        favoriteButtonLoadingId={favoriteButtonLoadingId}

                                        fetchUserAllPlaylists={fetchUserAllPlaylists}
                                        userAllPlaylists={userAllPlaylists}
                                        userAllPlaylistsLoading={userAllPlaylistsLoading}
                                        userAllPlaylistsErrors={userAllPlaylistsErrors}
                                        addSongToPlaylist={addSongToPlaylist}
                                        createAndAddToPlaylist={createAndAddToPlaylist}
                                        createdUserPlaylist={createdUserPlaylist}
                                        createUserPlaylistLoading={createUserPlaylistLoading}
                                        createUserPlaylistErrors={createUserPlaylistErrors}
                                        addSongToCurrentAudioQueue={addSongToCurrentAudioQueue}
                                    />
                                </div>
                            )
                        })}
                    </Slider>
                }
            </div>
        </div>
    );
};

export default Songs;
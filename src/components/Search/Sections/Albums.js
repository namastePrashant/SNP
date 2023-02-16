import React from 'react';
import { Typography, Button, Row } from 'antd';

import AlbumCard from '../../Common/AlbumCard';
import ShowResult from '../../Common/Result'; 
import {Link} from 'react-router-dom'


const { Title } = Typography;

const Albums = (props) => {

  const {
    data,
    setCurrentPlaySong,

    setIsPlayerPlaying,
    currentPlayKey,
    currentPlayReferrerId,
    currentPlayReferrer,
    isPlayerPlaying,
    addSongToCurrentAudioQueue,

    fetchUserAllPlaylists,
    userAllPlaylists,
    userAllPlaylistsLoading,
    userAllPlaylistsErrors,
    addSongToPlaylist,
    createAndAddToPlaylist,
    createdUserPlaylist,
    createUserPlaylistLoading,
    createUserPlaylistErrors,

  } = props

    const setBulkSongsToPlay = (songData)=>{      
        setCurrentPlaySong(songData);     
    }

    const setAlbumToFavourite = (formdata,id)=>{
      props.actions.setFavouriteAlbum(formdata,id)
    }
    
    return (
        <div className='section'>
            <div className='section-header'>
                <Title level={4}>Albums</Title>
                <span className='section-link'><Button type="text">
                {data.length? <Link to='/search/album'>See All</Link> :""} </Button></span>
            </div>

            <div className=''>
                <Row className='section-body no-slick-cards search-album-list'>
                  {
                    !data.length? (<ShowResult  msg='No search result for albums' home={true}/>):
                    data.map((album) => (
                      
                          <AlbumCard                               
                              key={album.id}
                              albumDetails={album}   
                              setIsPlayerPlaying={setIsPlayerPlaying}     
                              setBulkSongsToPlay={setBulkSongsToPlay}                                    
                              currentPlayKey={currentPlayKey}
                              currentPlayReferrerId={currentPlayReferrerId}
                              currentPlayReferrer={currentPlayReferrer}
                              isPlayerPlaying={isPlayerPlaying}
                              setAlbumToFavourite={setAlbumToFavourite}
                              addSongToCurrentAudioQueue={addSongToCurrentAudioQueue}
                              fetchUserAllPlaylists={fetchUserAllPlaylists}
                              userAllPlaylists={userAllPlaylists}
                              userAllPlaylistsLoading={userAllPlaylistsLoading}
                              userAllPlaylistsErrors={userAllPlaylistsErrors}
                              addSongToPlaylist={addSongToPlaylist}
                              createAndAddToPlaylist={createAndAddToPlaylist}
                              createdUserPlaylist={createdUserPlaylist}
                              createUserPlaylistLoading={createUserPlaylistLoading}
                              createUserPlaylistErrors={createUserPlaylistErrors}                                                                                                                     
                              {...props}
                          />
                     
                    ))
                  }
                </Row>
            </div>
        </div>
    );
};

export default Albums;
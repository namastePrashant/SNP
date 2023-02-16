import React from 'react'
import ScrollPagination from '../../../../Common/ScrollPagination';
import { Row, Col, Typography } from 'antd'
import { Redirect } from 'react-router-dom'
import AlbumCard from '../../../../Common/AlbumCard'
const { Title } = Typography;


const SearchedArtist = props => {
  const {
    LoadMoreSearchResults,
    searchAlbums,
    loadMore,
    hasMoreAlbums,
    currentPage,
    searchedKey,
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

  const setBulkSongsToPlay = (songData) => {
    setCurrentPlaySong(songData);
  }

  const setAlbumToFavourite = (formdata, id) => {
    props.actions.setFavouriteAlbum(formdata, id)
  }

  return (
    <>
      {
        searchAlbums.length ? (
          <div className='section'>
            <div className='section-header'>
              <Title level={4}>Search results for Songs </Title>
            </div>

            <div className="section-body">
              <Row className="section-body col__centered__items grid-view">
                {
                  searchAlbums.map((album, index) => (
                    <Col key={album.id}>
                      <AlbumCard
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
                    </Col>
                  ))
                }
              </Row>
              {searchAlbums.length ? (
                <div>
                  <ScrollPagination
                    current_page={currentPage}
                    pagination={LoadMoreSearchResults}
                    HasMore={hasMoreAlbums}
                    loadingMore={loadMore}
                    data={searchAlbums}
                    searchKey={searchedKey}
                  />
                </div>

              ) : ""}
            </div>


          </div>
        ) : (
            <Redirect to='/search' />
          )
      }
    </>
  )

}


export default SearchedArtist
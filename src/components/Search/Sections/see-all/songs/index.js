import React from 'react'
import Card from '../../../../Common/Card';
import ScrollPagination from '../../../../Common/ScrollPagination';
import { Row, Col, Typography } from 'antd'
import { Redirect } from 'react-router-dom'

const { Title } = Typography;

const SearchedSongs = props => {

  const {
    LoadMoreSearchResults,
    searchSongs,
    loadMore,
    hasMoreSongs,
    currentPage,
    searchedKey,
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
  } = props

  const setSongToPlay = (song, key) => {
    setCurrentPlaySong(song, key);
  }


  return (
    <>
      {
        searchSongs.length ? (
          <div className='section'>
            <div className='section-header'>
              <Title level={4}>Search results for Songs </Title>
            </div>

            <div className="section-body">
              <Row className="section-body col__centered__items grid-view">
                {
                  searchSongs.map((song, index) => (
                    <Col key={index}>
                      <Card
                        songDetails={song}
                        currentPlayKey={currentPlayKey}
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
                    </Col>
                  ))
                }
              </Row>
              {searchSongs.length ? (
                <div>
                  <ScrollPagination
                    current_page={currentPage}
                    pagination={LoadMoreSearchResults}
                    HasMore={hasMoreSongs}
                    loadingMore={loadMore}
                    data={searchSongs}
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

export default SearchedSongs;

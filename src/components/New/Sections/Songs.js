import React, { useEffect } from "react";
import { Row, Col } from "antd";

import Card from "../../Common/Card";
import SongCards from "../../Common/Loading/SongCards";
import ShowResult from "../../Common/Result";
import { isEmpty } from "../../../utils/commonUtils";
import ScrollPagination from '../../Common/ScrollPagination';

const Songs = (props) => {
  const {
    latestSongsAll,
    fetchLatestSongsAll,
    latestSongsAllLoading,
    latestSongsAllLoadingMore,
    latestSongsAllMeta,
    latestSongsAllHasMore,
    setCurrentPlaySong,
    currentPlayKey,
    isPlayerPlaying,
    setIsPlayerPlaying,
    fetchFavoriteButton,
    favoriteButton,
    favoriteButtonLoading,
    favoriteButtonLoadingId,
    fetchUserAllPlaylists,
    userAllPlaylists,
    userAllPlaylistsLoading,
    userAllPlaylistsErrors,
    createdUserPlaylist,
    createUserPlaylistLoading,
    createUserPlaylistErrors,
    addSongToPlaylist,
    createAndAddToPlaylist,
    addSongToCurrentAudioQueue,
  } = props;

  const {current_page}= latestSongsAllMeta || {};

  useEffect(() => {
    if (latestSongsAll.length === 0) {
      fetchLatestSongsAll();
    }
  }, []);// eslint-disable-line


  const setSongToPlay = (songData) => {
    setCurrentPlaySong(songData);
  };

  return (
    <div className="section">
      <Row className="section-body no-slick-cards grid-view">
        {latestSongsAllLoading ? (
          <SongCards />
        ) : !isEmpty(latestSongsAll) ? (
          latestSongsAll.map((song, index) => {
            return (
              <Col key={song.id}>
                <Card
                  className="recent-card"
                  songDetails={song}
                  setSongToPlay={setSongToPlay}
                  currentPlayKey={currentPlayKey}
                  isPlayerPlaying={isPlayerPlaying}
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
            );
          })
        ) : (
              <ShowResult msg="No songs found!" home={true} />
            )}
      </Row>

      <ScrollPagination 
        current_page={current_page} 
        pagination={fetchLatestSongsAll} 
        HasMore={latestSongsAllHasMore} 
        loadingMore={latestSongsAllLoadingMore} 
        data={latestSongsAll}/>

    </div>
  );
};

export default Songs;

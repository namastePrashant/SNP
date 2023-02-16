import React, { useEffect } from "react";
import { Row, Col } from "antd";
import ScrollPagination from '../../Common/ScrollPagination'
import Card from "../../Common/Card";
import SongCards from "../../Common/Loading/SongCards";
import ShowResult from "../../Common/Result";
import { isEmpty } from "../../../utils/commonUtils";

const Recents = (props) => {
  const {
    fetchRecentlyPlayedAll,
    loadMoreRecentlyPlayedSongs,
    recentlyPlayedAllHasMoreData,
    recentlyPlayedAll,
    recentlyPlayedAllMeta,
    recentlyPlayedAllLoading,
    recentlyPlayedMoreLoading,
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

  const { current_page } = recentlyPlayedAllMeta || {};

  useEffect(() => {
    if (recentlyPlayedAll.length === 0) {
      fetchRecentlyPlayedAll();
    }
  }, []);//eslint-disable-line

  const setSongToPlay = (songData) => {
    setCurrentPlaySong(songData);
  };

  return (
    <div className="section">
      <Row className="section-body col__centered__items grid-view">
        {recentlyPlayedAllLoading ? (
          <SongCards />
        ) : !isEmpty(recentlyPlayedAll) ? (
          recentlyPlayedAll.map((song, index) => {
            return (
              <Col key={song.id}>
                <Card
                  // key={song.id}
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
              <ShowResult msg="Songs Not Found!" home={true} />
            )}
      </Row>
      {
        !recentlyPlayedAllLoading  && <ScrollPagination
          current_page={current_page}
          pagination={loadMoreRecentlyPlayedSongs}
          HasMore={recentlyPlayedAllHasMoreData}
          loadingMore={recentlyPlayedMoreLoading}
          data={recentlyPlayedAll} /> 
      }

    </div>
  );
};

export default Recents;

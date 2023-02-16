import React, { useEffect} from "react";
import { Row, Col} from "antd";
import { useParams } from "react-router-dom";

import Card from "../../Common/Card";
import ScrollPagination from '../../Common/ScrollPagination'
import SongCards from "../../Common/Loading/SongCards";
import ShowResult from "../../Common/Result";
import { isEmpty } from "../../../utils/commonUtils";

const Songs = (props) => {
  const {
    individualGenreSongs,
    fetchIndividualGenreSongs,
    individualGenreSongsLoading,
    individualGenreSongsLoadingMore,
    individualGenreSongsMetaInfo,
    individualGenreSongsHasMore,
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
  const { id } = useParams();
  
  const {current_page}= individualGenreSongsMetaInfo || {};
  
  useEffect(() => {
    fetchIndividualGenreSongs(id);
  }, []);// eslint-disable-line


 
  const setSongToPlay = (songData) => {
    setCurrentPlaySong(songData);
  };

  return (
    <div className="section">
      <Row className="section-body grid-view">
        {individualGenreSongsLoading ? (
          <SongCards />
        ) : !isEmpty(individualGenreSongs) ? (
          individualGenreSongs.map((song, index) => {
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
              <ShowResult msg="Songs Not Found!" home={true} />
            )}
            
        
      
      </Row>
      <ScrollPagination 
        current_page={current_page} 
        pagination={fetchIndividualGenreSongs} 
        HasMore={individualGenreSongsHasMore} 
        loadingMore={individualGenreSongsLoadingMore} 
        data={individualGenreSongs}
        id={id}/>
     
    </div>
  );
};

export default Songs;

import React from "react";

import { Typography, Button } from "antd";
import Slider from "react-slick";

import Card from "../../Common/Card";
import {CarsouelSettings} from "../../../utils/carouselSettings";
import ShowResult from "../../Common/Result";
import SongCards from "../../Common/Loading/SongCards";

import { isEmpty } from "../../../utils/commonUtils";

const { Title } = Typography;

const GenreSongs = ({
  songs,
  loading,
  genre,
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
  setActiveKey,
}) => {
  const setSongToPlay = (songData) => {
    setCurrentPlaySong(songData);
  };

  const settings = CarsouelSettings(2,5)

  return (
    <div className="section">
      <div className="section-header">
        <Title level={4}>Songs</Title>
        <span className="section-link">
          <Button type="text" onClick={()=>setActiveKey("2")}>See All</Button>
        </span>
      </div>

      <div className="section-body custom-slick">
        {loading ? (
          <SongCards />
        ) : !isEmpty(songs) ? (
          <Slider {...settings}>
            {songs.map((song, index) => {
              return (
                <div key={index}>
                  <Card
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
                </div>
              );
            })}
          </Slider>
        ) : (
              <ShowResult msg="Songs Not Found!" home={true} />
            )}
      </div>
    </div>
  );
};

export default GenreSongs;

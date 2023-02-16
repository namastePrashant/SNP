import React, { useEffect } from "react";
import { Typography, Button } from "antd";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import Card from "../../Common/Card";

import {CarsouelSettings} from "../../../utils/carouselSettings";
import SongCards from "../../Common/Loading/SongCards";
import ShowResult from "../../Common/Result";

import { isEmpty } from "../../../utils/commonUtils";

const { Title } = Typography;

const TopSongs = (props) => {
  const {
    topSongs,
    fetchTopSongs,
    topSongsLoading,
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

  useEffect(() => {
    fetchTopSongs();
  }, []);//eslint-disable-line

  const setSongToPlay = (songData) => {
    setCurrentPlaySong(songData);
  };

  const settings = CarsouelSettings(2,5);

  return (
    <div className="section">
      <div className="section-header">
        <Title level={4}>Top Songs</Title>
        <span className="section-link">
          <Link to="top-songs">
            <Button type="text">See All</Button>
          </Link>
        </span>
      </div>

      <div className="section-body custom-slick">
        {topSongsLoading ? (
          <SongCards />
        ) : !isEmpty(topSongs) ? (
          <Slider {...settings}>
            {topSongs.map((song, index) => {
              return (
                <div key={song.id}>
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
          <ShowResult msg="Top Songs Not Found!" />
        )}
      </div>
    </div>
  );
};

export default TopSongs;

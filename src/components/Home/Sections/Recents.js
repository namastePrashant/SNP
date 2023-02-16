import React, { useEffect } from "react";
import { Typography, Button } from "antd";
import { Link } from "react-router-dom";

import Card from "../../Common/Card";
import { isEmpty } from "../../../utils/commonUtils";

import Slider from "react-slick";

import {CarsouelSettings} from "../../../utils/carouselSettings";
import SongCards from "../../Common/Loading/SongCards";
import ShowResult from "../../Common/Result";


 

const { Title } = Typography;

const Recents = (props) => {
  const {
    fetchRecentlyPlayed,
    recentlyPlayed,
    recentlyPlayedLoading,
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
    fetchRecentlyPlayed();
  }, []);//eslint-disable-line

  const setSongToPlay = (songData) => {
    setCurrentPlaySong(songData);
  };

  const sliderSetting = CarsouelSettings(1,3);

  return (
    <div className="section">
      <div className="section-header">
        <Title level={4}>Recently Played</Title>
        <span className="section-link">
          <Link to="/recent">
            <Button type="text">See All</Button>
          </Link>
        </span>
      </div>

      <div className="section-body custom-slick">
        {recentlyPlayedLoading ? (
          <SongCards />
        ) : !isEmpty(recentlyPlayed) ? (
          <Slider {...sliderSetting}>
            {recentlyPlayed.map((song, index) => {
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
          <ShowResult msg="RecentlyPlayed Songs Not Found!" />
        )}
      </div>
    </div>
  );
};

export default Recents;

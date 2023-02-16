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

const Fresh = (props) => {
  const {
    fetchFresh,
    fresh,
    freshLoading,
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
    fetchFresh();
  }, []);//eslint-disable-line

  const setSongToPlay = (songData) => {
    setCurrentPlaySong(songData);
  };

  const settings = CarsouelSettings(1,3)

  return (
    <div className="section loading-cards">
      <div className="section-header">
        <Title level={4}>Fresh Out In The Market</Title>
        <span className="section-link">
          <Link to="/new">
            <Button type="text">See All</Button>
          </Link>
        </span>
      </div>

      <div className="section-body custom-slick">
        {freshLoading ? (
          <SongCards />
        ) : !isEmpty(fresh) ? (
          <Slider {...settings}>
            {fresh.map((song, index) => {
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
          <ShowResult msg="Fresh Songs Not Found!" />
        )}
      </div>
    </div>
  );
};

export default Fresh;

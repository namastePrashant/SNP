import React, { useEffect } from "react";
import { Typography, Button } from "antd";
import Slider from "react-slick";

import Card from "../../Common/Card";
import SongCards from "../../Common/Loading/SongCards";
import {CarsouelSettings} from "../../../utils/carouselSettings";

import ShowResult from "../../Common/Result";
import { isEmpty } from "../../../utils/commonUtils";

const { Title } = Typography;

const LatestSongs = (props) => {
  const {
    latestSongs,
    fetchLatestSongs,
    latestSongsLoading,
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
    setActiveKey
  } = props;
console.log(props)
  useEffect(() => {
    if (latestSongs.length === 0) {
      fetchLatestSongs();
    }
  }, []);//eslint-disable-line

  const setSongToPlay = (songData) => {
    setCurrentPlaySong(songData);
  };

  const settings = CarsouelSettings(2,5);

  return (
    <div className="section">
      <div className="section-header">
        <Title level={4}>Latest Songs</Title>
        <span className="section-link">
          <Button type="text" onClick={()=>setActiveKey("2")}>See All</Button>
        </span>
      </div>

      <div className="section-body custom-slick">
        {latestSongsLoading ? (
          <SongCards />
        ) : !isEmpty(latestSongs) ? (
          <Slider {...settings}>
            {latestSongs.map((song, index) => {
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
              <ShowResult msg="Songs Not Found!" home={true} />
            )}
      </div>
    </div>
  );
};

export default LatestSongs;

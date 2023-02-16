import React, { useEffect } from "react";
import { Typography, Button, Col } from "antd";
import Slider from "react-slick";

import Card from "../../Common/Card";
import {CarsouelSettings} from "../../../utils/carouselSettings";

import SongCards from "../../Common/Loading/SongCards";
import ShowResult from "../../Common/Result";

import { Link } from "react-router-dom";

import { isEmpty } from "../../../utils/commonUtils";


import ScrollPagination from '../../Common/ScrollPagination'

const { Title } = Typography;

const ExploreSongs = (props) => {
  const {
    exploreSongs,
    exploreSongsLoading,
    fetchExploreSongs,
    exploreSongsMeta,
    exploreSongsHasMore,
    exploreSongsLoadingMore,
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

  const { current_page } = exploreSongsMeta || {};
  
  useEffect(() => {
    if (exploreSongs.length === 0) {
      fetchExploreSongs();
    }
  }, []);// eslint-disable-line


 const settings = CarsouelSettings(1,5)
  const setSongToPlay = (songData) => {
    setCurrentPlaySong(songData);
  };

  const layout = {
    full: {
      xxl: { span: 24 },
      xl: { span: 24 },
      lg: { span: 24 },
      md: { span: 24 },
      sm: { span: 24 },
      xs: { span: 24 },
    },
  };

  return (
    <>
      {exploreSongsLoading ? (
        <SongCards />
      ) : !isEmpty(exploreSongs) ? (
        exploreSongs.map((songsByGenre) => {
                    
          return (
            <>
            <Col {...layout.full} key={songsByGenre.id} >
              {!isEmpty(songsByGenre.songs.data) ? (
                <>
                  <div className="section" >
                    <div className="section-header">
                      <Title level={4}> {songsByGenre.title} </Title>
                      <span className="section-link">
                        <Link to={`/genre/${songsByGenre.id}/songs`}>
                          <Button type="text">See All</Button>
                        </Link>
                      </span>
                    </div>

                    <div className="section-body custom-slick">
                      {!isEmpty(songsByGenre.songs.data) ? (
                        <Slider {...settings} >
                          {songsByGenre.songs.data.map((song) => {
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
                </>
              ) : (
                  ""
                )}
            </Col>
          </>
          );
        })
       
      ) : (
            <ShowResult msg="Songs by Genre Not Found!" home={true} />
          )}


       
        <ScrollPagination 
        current_page={current_page} 
        pagination={fetchExploreSongs} 
        HasMore={exploreSongsHasMore} 
        loadingMore={exploreSongsLoadingMore} 
        data={exploreSongs}/>
    </>
  );
};

export default ExploreSongs;

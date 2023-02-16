import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Button, Col, Row, Typography} from "antd";
import {CaretRightFilled, MoreOutlined, PauseOutlined,} from "@ant-design/icons";

import Ben from "../../assets/Images/dummySN.png";
import Dot from "../../assets/Icons/Dot.png";

import SimilarPlaylist from "./Sections/SimilarPlaylist";
import RelatedArtists from "./Sections/RelatedArtists";
import {getTotalTracksTime, isEmpty, secondsToMinutes,} from "../../utils/commonUtils";

import CustomSpin from "../Common/CustomSpin";
import ShowResult from "../../components/Common/Result";
import SidebarLoading from "../Common/Loading/Sidebar";
import SingleImageCard from "../Common/Loading/SingleImageCard";

import DropdownMenu from '../Common/DropdownMenu';
import SongPlayingAnimation from '../Common/song/isPlayingAnimation';



const {Title} = Typography;

const layout = {
  full: {
    xxl: {span: 24},
    xl: {span: 24},
    lg: {span: 24},
    md: {span: 24},
    sm: {span: 24},
    xs: {span: 24},
  },
  main: {
    xxl: {span: 16},
    xl: {span: 12},
    lg: {span: 24},
    md: {span: 24},
    sm: {span: 24},
    xs: {span: 24},
  },
  side: {
    xxl: {span: 8},
    xl: {span: 12},
    lg: {span: 24},
    md: {span: 24},
    sm: {span: 24},
    xs: {span: 24},
  },
};

const Playlist = (props) => {
  const referrer = "playlist";
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSinglePlaying, setIsSinglePlaying] = useState(false);
  const [playlistTracksCount, setPlaylistTracksCount] = useState(undefined);
  const [isSongsEmpty, setIsSongsEmpty] = useState(false);
  const [isBulkPlaying, setIsBulkPlaying] = useState(false);
  const [tracksTotalTime, setTracksTotalTime] = useState(undefined);
  // const [isShareVisible, setIsShareVisible] = useState(false);

  const {
    fetchIndividualPlaylist,
    individualPlaylist,
    individualPlaylistLoading,
    individualPlaylistErrors,
    setCurrentPlaySong,
    isPlayerPlaying,
    setIsPlayerPlaying,
    currentPlayReferrerId,
    currentPlayReferrer,
    // advertisements,
    // advertisementLoading,
    fetchAdvertisements,
    fetchUserAllPlaylists,
    userAllPlaylists,
    userAllPlaylistsLoading,
    // userAllPlaylistsErrors,
    createdUserPlaylist,
    createUserPlaylistLoading,
    // createUserPlaylistErrors,
    addSongToPlaylist,
    createAndAddToPlaylist,
    addSongToCurrentAudioQueue,
  } = props;

  const {id} = useParams();

  // const toggleShareModal = () => {
  //   setIsShareVisible(!isShareVisible)
  // }

  const isBulkListPlaying = () => {
    if (
      (isBulkPlaying || !isSinglePlaying) &&
      referrer === currentPlayReferrer &&
      parseInt(id) === currentPlayReferrerId
    ) {
      setIsBulkPlaying(isPlayerPlaying);
      setIsPlaying(isPlayerPlaying);
    } else {
      setIsBulkPlaying(false);
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    console.log('isPlayerPlayingChanged', id, isPlayerPlaying);
    isBulkListPlaying();
  }, [id, isPlayerPlaying]); //eslint-disable-line

  const resetIsPlaying = () => {
    if (parseInt(id) !== currentPlayReferrerId) {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    fetchIndividualPlaylist(id);
    resetIsPlaying();
  }, [id]); //eslint-disable-line

  const setTotalTrackTime = () => {
    let time = 0;
    individualPlaylist.songs.forEach((song) => {
      time += song.duration;
    });

    let totalFormattedTime = time ? getTotalTracksTime(time) : "N/A";
    setTracksTotalTime(totalFormattedTime);
  };

  useEffect(() => {
    if (!isEmpty(individualPlaylist) && !isEmpty(individualPlaylist.songs)) {
      let track_count = individualPlaylist.songs.length;
      setPlaylistTracksCount(track_count);
      setIsSongsEmpty(false);
      setTotalTrackTime();
    } else if (
      isEmpty(individualPlaylist) &&
      isEmpty(individualPlaylist.songs)
    ) {
      let track_count = "0";
      setPlaylistTracksCount(track_count);
      setIsSongsEmpty(true);
    }
  }, [individualPlaylist]);//eslint-disable-line

  useEffect(() => {
    fetchAdvertisements();
  }, []);//eslint-disable-line


  const setBulkSongsToPlay = (songDetails, songId) => {

    if (songId) {
      setIsPlaying(true);
      setIsPlayerPlaying(true);
      let songData = {
        songData: songDetails,
        referrer: referrer,
        // isPlaying: !isPlaying,
        referrerId: individualPlaylist.id,
        isSystemGenerated: individualPlaylist.system_generated,
        songId: songId,
      };
      setCurrentPlaySong(songData);
      setIsBulkPlaying(true);
      setIsSinglePlaying(false);
    } else {
      setIsPlaying(!isPlaying);
      setIsPlayerPlaying(!isPlaying);
      let songData = {
        songData: songDetails,
        referrer: referrer,
        // isPlaying: !isPlaying,
        referrerId: individualPlaylist.id,
        isSystemGenerated: individualPlaylist.system_generated,
      };
      setCurrentPlaySong(songData);
      setIsBulkPlaying(!isPlaying);
      setIsSinglePlaying(false);
    }
  };



  const [playlistSongs,setPlaylistSong] = useState(null);
  useEffect(() => {
    if(individualPlaylist && individualPlaylist.songs){
      setPlaylistSong(individualPlaylist.songs);
    }
  }, [individualPlaylist.songs]);// eslint-disable-line



  

  return (
    <Row className="row-main single-album-main single-playlist-main">
      <Col {...layout.full} className="page-header overlay">
        <div className="explore-main">
          {individualPlaylistErrors?.message ? (
            <>
              <ShowResult
                msg="Some error occured while fetching this album"
                home={true}
              />
            </>
          ) : (
            <>
              <div className="artist-info">
                <div className="header__single__item">
                  {individualPlaylistLoading ? (
                    <SingleImageCard/>
                  ) : (
                    <img src={individualPlaylist.cover_image || Ben} alt=""/>
                  )}
                </div>
                <div className="single-album-meta">
                  <Title level={5}>Playlist</Title>
                  <Title level={1} className="single-album-title">
                    {individualPlaylistLoading ? (
                      <CustomSpin/>
                    ) : (
                      <>
                        {individualPlaylist
                          ? individualPlaylist.title
                          : "Artist name not found"}
                      </>
                    )}
                  </Title>
                  <div className="favorite-info">
                      <span>
                        {individualPlaylistLoading ? (
                          <CustomSpin/>
                        ) : playlistTracksCount ? (
                          playlistTracksCount + " Tracks"
                        ) : (
                          ""
                        )}
                      </span>{" "}
                    <span>
                        <img src={Dot} alt="Dot"/>
                      </span>{" "}
                    <span>
                        {individualPlaylistLoading ? (
                          <CustomSpin/>
                        ) : !isEmpty(individualPlaylist.songs) &&
                        tracksTotalTime ? (
                          tracksTotalTime
                        ) : (
                          "0hrs 0mins"
                        )}
                      </span>
                  </div>
                  <div className="links">
                    <Button
                      shape="round"
                      size="large"
                      className="btn-gradient"
                      disabled={
                        !isEmpty(individualPlaylist.songs) ? false : true
                      }
                      onClick={() => {
                        setBulkSongsToPlay(individualPlaylist.songs);
                      }}
                    >
                      {!isSinglePlaying &&
                      !isSongsEmpty &&
                      isPlaying &&
                      isBulkPlaying ? (
                        <>
                          <PauseOutlined/> Pause
                        </>
                      ) : (
                        <>
                          <CaretRightFilled/> Play
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              <Row className="padding-col row--album-content">
                <Col {...layout.main}>
                  <div className="single-album-songs songList__wrapper">
                    {individualPlaylistLoading ? (
                      <div className="section-padding-2">
                        <SidebarLoading/>
                      </div>
                    ) : !isEmpty(playlistSongs) ? (
                      <>
                        {playlistSongs.map((song, i) => {
                          return (
                            <Row className="song-list list-card list-item song-list--nobg" key={song.id}>
                            <div className="song-index list-item__index"
                                onClick={() => setBulkSongsToPlay(individualPlaylist.songs, song.id)}>
                              {i < 9 ? "0" + (i + 1) : i + 1}
                            </div>
                            <div className="song-info list-item__info"
                                onClick={() => setBulkSongsToPlay(individualPlaylist.songs, song.id)}>
                              <div className="song-name">
                                <div>
                                  {song.title}
                                </div>
                                <SongPlayingAnimation songId={song?.id}/>
                      
                              </div>
                              <div className="play-count"
                                  onClick={() => setBulkSongsToPlay(individualPlaylist.songs, song.id)}>
                                <span>{song?.total_play_count} listens</span>
                              </div>
                            </div>
                      
                            <div className="songs-more list-item__more list-item--dot">
                              <span className="album-song-time">{secondsToMinutes(song.duration)}</span>
                              <DropdownMenu
                                addSongToCurrentAudioQueue={addSongToCurrentAudioQueue}
                                userAllPlaylistsLoading={userAllPlaylistsLoading}
                                userAllPlaylists={userAllPlaylists}
                                createAndAddToPlaylist={createAndAddToPlaylist}
                                songDetails={song}
                                createUserPlaylistLoading={createUserPlaylistLoading}
                                addSongToPlaylist={addSongToPlaylist}
                                fetchUserAllPlaylists={fetchUserAllPlaylists}
                                createdUserPlaylist={createdUserPlaylist}
                                userPlaylist={true}
                                playlistId={id}
                              >
                                <MoreOutlined className="more"/>
                              </DropdownMenu>
                            </div>
                          </Row>
                          );
                        })}
                  
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </Col>
                <Col {...layout.side} className="artist-side">
                  <RelatedArtists {...props} />


                </Col>
                <Col {...layout.full} className="extra-bottom-pad section-break-2">
                  <SimilarPlaylist {...props} />
                </Col>

              </Row>
            </>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Playlist;

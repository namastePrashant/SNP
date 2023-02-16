import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Typography, Button } from "antd";
import {
  MoreOutlined,
} from "@ant-design/icons";

import Apple from "../../assets/Images/Apple.png";
import DummyImage from "../../assets/Images/dummySN.png";
import Dot from "../../assets/Icons/Dot.png";
import Free from "../../assets/Images/spotify-free-trial.png";

import RelatedArtists from "./Sections/RelatedArtists";
import RelatedAlbum from "./Sections/RelatedAlbum";

import CustomSpin from "../Common/CustomSpin";
import ShowResult from "../../components/Common/Result";
import SidebarLoading from "../Common/Loading/Sidebar";
import moment from 'moment';

import { isEmpty, getTotalTracksTime, secondsToMinutes } from "../../utils/commonUtils";
import DropdownMenu from '../Common/DropdownMenu';
import SingleImageCard from "../Common/Loading/SingleImageCard";
import FavAlbumBtn from '../Common/favouriteAlbumButton';
import BulkPlay from '../Common/song/bulkSong';
import SongPlayingAnimation from '../Common/song/isPlayingAnimation'
const { Title } = Typography;

const layout = {
  full: {
    xxl: { span: 24 },
    xl: { span: 24 },
    lg: { span: 24 },
    md: { span: 24 },
    sm: { span: 24 },
    xs: { span: 24 },
  },
  main: {
    xxl: { span: 16 },
    xl: { span: 12 },
    lg: { span: 24 },
    md: { span: 24 },
    sm: { span: 24 },
    xs: { span: 24 },
  },
  side: {
    xxl: { span: 8 },
    xl: { span: 12 },
    lg: { span: 24 },
    md: { span: 24 },
    sm: { span: 24 },
    xs: { span: 24 },
  },
};

const Album = (props) => {
  const referrer = "album";
  const [isPlaying, setIsPlaying] = useState(false);//eslint-disable-line
  const [isSinglePlaying, setIsSinglePlaying] = useState(false);//eslint-disable-line
  const [isSongsEmpty, setIsSongsEmpty] = useState(false);//eslint-disable-line
  const [isBulkPlaying, setIsBulkPlaying] = useState(false);//eslint-disable-line
  const [tracksTotalTime, setTracksTotalTime] = useState(undefined);

  const {
    fetchIndividualAlbum,
    individualAlbum,
    individualAlbumLoading,
    individualAlbumErrors,
    // setCurrentPlaySong,
    isPlayerPlaying,
    // setIsPlayerPlaying,
    currentPlayReferrerId,
    currentPlayReferrer,
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
  const { id } = useParams();

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
    isBulkListPlaying();
  }, [id, isPlayerPlaying]);//eslint-disable-line

  // since when page changes the player should not be playing
  const resetIsPlaying = () => {
    if (parseInt(id) !== currentPlayReferrerId) {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    fetchIndividualAlbum(id);
    resetIsPlaying();
  }, [id]);//eslint-disable-line

  const setTotalTrackTime = () => {
    let time = 0;
    individualAlbum.songs.forEach((song) => {
      time += song.duration;
    });


    let totalFormattedTime = time ? getTotalTracksTime(time) : "N/A";
    setTracksTotalTime(totalFormattedTime);
  }

  useEffect(() => {
    if (!isEmpty(individualAlbum.songs)) {
      setIsSongsEmpty(false);
      setTotalTrackTime();
    } else {
      setIsSongsEmpty(true);
    }
  }, [individualAlbum]);//eslint-disable-line

  // const setSingleSongToPlay = (songDetails) => {

  //   setIsPlaying(false);
  //   setIsPlayerPlaying(true);
  //   let songData = {
  //     songData: songDetails,
  //     referrer: referrer,
  //     // isPlaying: false,
  //     referrerId: individualAlbum.id,
  //   };
  //   setCurrentPlaySong(songData);
  //   setIsSinglePlaying(true);
  //   setIsBulkPlaying(false);
  // };

  // const setBulkSongsToPlay = (songDetails) => {

  //   setIsPlaying(!isPlaying);
  //   setIsPlayerPlaying(!isPlaying);
  //   let songData = {
  //     songData: songDetails,
  //     referrer: referrer,
  //     // isPlaying: !isPlaying,
  //     referrerId: individualAlbum.id,
  //   };
  //   setCurrentPlaySong(songData);
  //   setIsBulkPlaying(!isPlaying);
  //   setIsSinglePlaying(false);
  // };

  // new bulkplay component implementating now

  //artist background image
  const backgroundImg = (
    individualAlbumLoading ? '' :
    !isEmpty(individualAlbum.artists) && individualAlbum.artists.length ? individualAlbum.artists[0].profile.profile_picture:""
  )
  //end artist background image fixes


  const artistNames = !isEmpty(individualAlbum.artists) ? (
    individualAlbum.artists.map((artist, index) => {
      let artistsCount = individualAlbum.artists.length;
      if (index === artistsCount - 1)
        return <span key={artist.id}> {artist.profile.name}</span>;
      else {
        return <span key={artist.id}> {artist.profile.name}, </span>;
      }
    })
  ) : (
      <span></span>
    );

  return (
    <>
      {/* <Row className="row-main single-album-main single-album-page">
        <Col
          {...layout.full}
          className="page-header page-header--singleAlbum overlay"
        >
          <div className="explore-main">
           
          </div>
        </Col>
      </Row> */}
      <Row className="artist-banner single-album-main single-album-page">               
        <Col span={10}>
          <div className="artist-banner__info page-header--singleAlbum">
          {individualAlbumErrors?.message ? (
              <>
                <ShowResult
                  msg="Some error occured while fetching this album"
                  home={true}
                />
              </>
            ) : (
                <>
                  {individualAlbum ? (
                    <>
                      <div className="album-info">
                        <div className="album-info__img ">
                          {individualAlbumLoading ? (
                            <SingleImageCard />
                          ) : (
                              <img src={individualAlbum.cover_image || DummyImage} alt="" />
                            )}
                        </div>
                        <div className="album-info__meta">
                          <Title
                            level={5}
                            className="single-album-category-title"
                          >
                         {individualAlbumLoading ? <CustomSpin /> : individualAlbum.created_at ? moment(individualAlbum.created_at).format('YYYY') : "[created date n/a]"}

                        </Title>
                          <Title level={1} className="single-album-title">
                            {individualAlbumLoading ? (
                              <CustomSpin />
                            ) : (
                                <>
                                  {individualAlbum
                                    ? individualAlbum.title
                                    : "Album name not found"}
                                </>
                              )}
                          </Title>
                          <div className="single-album-artist-info">
                            <span>{!individualAlbumLoading && !isEmpty(individualAlbum.artists) ? "By" : ""}</span>
                            <span className="single-album-artist-names">
                              {individualAlbumLoading ? (
                                <CustomSpin />
                              ) : (
                                  artistNames
                                )}
                            </span>                           
                          </div>
                          <div className="favorite-info">
                            <span>{individualAlbumLoading ? <CustomSpin /> : !isEmpty(individualAlbum.songs) ? (individualAlbum.songs.length + " Tracks") : "0 Tracks"} </span>{" "}
                            <span className="divider--dot">
                              <img src={Dot} alt="Dot" />
                            </span>{" "}
                            <span>
                              {individualAlbumLoading ? <CustomSpin /> : !isEmpty(individualAlbum.songs) && tracksTotalTime ? tracksTotalTime : "0hrs 0mins"}
                            </span>
                          </div>
                          <div className="single-album-record-label">
                            <span> &#169; 2013 Columbia Records</span>
                          </div>
                          <div className="links">                                                     
                            <Button
                              shape="round"
                              size="large"
                              className="btn-gradient"
                              disabled={
                                !isEmpty(individualAlbum.songs) ? false : true
                              }
                          
                            >
                              <BulkPlay albumSongs={!isEmpty(individualAlbum.songs)?individualAlbum.songs:[]} albumId={individualAlbum.id} />
                            </Button>
                            <FavAlbumBtn albumDetails={individualAlbum} {...props} title={"Save"} />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                      ""
                    )}
                </>
              )}
          </div>
        </Col>
        <Col span={14} >
          <div className="artist-banner__img">
            <img src={backgroundImg} alt=""/>
          </div>
        </Col>
      </Row>
      <Row className="padding-col row--album-content">
        <Col {...layout.main}>
          <div className="single-album-songs songList__wrapper">
            {individualAlbumLoading ? (
              <div className="section-padding-2">
              <SidebarLoading />
              </div>
            ) : !isEmpty(individualAlbum.songs) ? (
              individualAlbum.songs.map((song, index) => (
                <Row className="song-list list-card list-item song-list--nobg" key={song.id}>
                 <div className="song-index list-item__index">
                    {index < 9 ? "0" + (index + 1) : index + 1}
                    </div>
                    <div className="song-info list-item__info">
                      <div className="song-name">                     
                        <BulkPlay 
                          albumSongs={!isEmpty(individualAlbum.songs)?individualAlbum.songs:[]} 
                          albumId={individualAlbum.id} 
                          // fromAlbumListSong={song}
                          fromAlbumListSongId={song.id}
                        >
                          {song.title}
                        </BulkPlay>
                        <SongPlayingAnimation songId = {song?.id}/>
                                                  
                      </div>
                      <div className="play-count">
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
                    >
                      <MoreOutlined className="more" />
                    </DropdownMenu>
                  </div>
                </Row>
              ))
            ) : (
                  <ShowResult msg="Songs Not Found!" home={true} />
                )}
          </div>
        </Col>
        <Col {...layout.side} className="artist-side">
          <RelatedArtists {...props} />
          <img
            className="resp-img"
            src={Apple}
            alt="Ad"
            style={{ padding: "20px", margin: "1.5rem 0" }}
          />
        </Col>

        <Col {...layout.full}>
          {/* <SimilarPlaylist /> */}
          <RelatedAlbum {...props} />
        </Col>
        <div className="ad-banner2">
          <img src={Free} alt="Free" />
        </div>
      </Row>
    </>
  );
};

export default Album;

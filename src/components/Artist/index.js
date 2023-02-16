import React, { useEffect, useState } from "react";
import { Row, Col, Typography, Button, Tabs } from "antd";
import { Helmet } from 'react-helmet'


import {IoHeartOutline,IoHeart} from 'react-icons/io5';
import {FiMoreVertical} from 'react-icons/fi';

import CustomSpin from "../Common/CustomSpin";
import { useParams } from "react-router-dom";

import Fb from "../../assets/Icons/facebook.png";
import Twitter from "../../assets/Icons/twitter.png";
import Insta from "../../assets/Icons/Insta.png";
import Youtube from "../../assets/Icons/youtube.png";
import FavoriteBtn from "../Common/Favorite";
import DummyImage from '../../assets/Images/dummySN.png';
import SongPlayingAnimation from '../Common/song/isPlayingAnimation';

import Latest from "./Sections/Latest";
import Popular from "./Sections/Popular";

import SidebarLoading from "../Common/Loading/Sidebar";
import SingleImageCard from "../Common/Loading/SingleImageCard";

import ShowResult from "../../components/Common/Result";
import RelatedArtists from "./Sections/RelatedArtists";
import { isEmpty, secondsToMinutes, getTotalTracksTime } from "../../utils/commonUtils";
import moment from 'moment';
import { returnLimitedWords } from '../../utils/commonUtils'

import Advertisement from '../Advertisments';
import DropdownMenu from '../Common/DropdownMenu';

import BulkPlay from '../Common/song/bulkSong';
import Single from './Sections/singles'

const { Title } = Typography;
const { TabPane } = Tabs;

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

const Artist = (props) => {
  const referrer = "artist";
  const [isPlaying, setIsPlaying] = useState(false);//eslint-disable-line
  const [isSinglePlaying, setIsSinglePlaying] = useState(false);
  const [isSongsEmpty, setIsSongsEmpty] = useState(false);//eslint-disable-line
  const [isBulkPlaying, setIsBulkPlaying] = useState(false);
  const [prevBulkPlayAlbumId, setPrevBulkPlayAlbumId] = useState(undefined);//eslint-disable-line
  const [isSameAlbumPlaying, setIsSameAlbumPlaying] = useState(false);//eslint-disable-line
  const [tracksTotalTime, setTracksTotalTime] = useState(undefined);
  const [seeFullBio, setSeeFullBio] = useState(false);
  const [isFavouriteAlbum, setIsFavouriteAlbum] = useState(undefined);
  const [isFavouriteArtist, setIsFavouriteArtist] = useState(false);

  const [selectedAlbumSongsList, setSelectedAlbumSongsList] = useState([]);//eslint-disable-line
  // const [favoriteChangedSong, setFavoriteChangedSong] = useState(undefined);
  const [isShareVisible, setIsShareVisible] = useState(false);



  const {
    fetchIndividualArtist,
    individualArtist,
    individualArtistLoading,
    individualArtistErrors,
    setCurrentPlaySong,
    artistLatestReleasedAlbum,
    artistLatestReleasedAlbumLoading,
    artistLatestReleases,
    isPlayerPlaying,
    setIsPlayerPlaying,
    currentPlayReferrer,
    currentPlayReferrerId,
    fetchFavoriteButton,
    favoriteButton,
    favoriteButtonLoading,
    favoriteButtonLoadingId,
    setAlbumToFavourite,
    followArtist,
    recentlyFavouriteAlbum,
    userFavouriteArtistFollowLoading,
    userRecentlyFollowedArtist,
    fetchAdvertisementByLocation,
    addSongToCurrentAudioQueue,
    fetchIndividualAlbum,
    individualAlbum,
    individualAlbumLoading,
    individualAlbumErrors,
    // fetchArtistSingleSong,
  } = props;
  const { id } = useParams();


  // const noSongNotification = () => {
  //   notification.info({
  //     message: `We are extremely sorry!!!`,
  //     description: `No songs available in  ${artistLatestReleasedAlbum.title} album`,
  //     icon: <FrownOutlined style={{ color: '#8c61fe' }} />,
  //     duration: 3,
  //     bottom: 70,
  //     placement: 'bottomRight',
  //   });
  // };

  const isBulkListPlaying = () => {
    if (
      (isBulkPlaying || !isSinglePlaying) &&
      referrer === currentPlayReferrer &&
      parseInt(id) === currentPlayReferrerId
      // && 
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
    setIsPlaying(isPlayerPlaying);
  }, [id, isPlayerPlaying]);//eslint-disable-line

  useEffect(() => {

    if (artistLatestReleasedAlbum.id === prevBulkPlayAlbumId) {
      setIsSameAlbumPlaying(true);
    } else {
      setIsSameAlbumPlaying(false)
    }
  }, [artistLatestReleasedAlbum, prevBulkPlayAlbumId])//eslint-disable-line

  const resetIsPlaying = () => {
    if (parseInt(id) !== currentPlayReferrerId) {
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    fetchIndividualArtist(id);

    resetIsPlaying();
  }, [id]);//eslint-disable-line


  const setTotalTrackTime = () => {
    let time = 0;
    artistLatestReleasedAlbum.songs.forEach((song) => {
      time += song.duration;
    });


    let totalFormattedTime = time ? getTotalTracksTime(time) : "N/A";
    setTracksTotalTime(totalFormattedTime);
  }

  useEffect(() => {
    if (!isEmpty(artistLatestReleasedAlbum.songs)) {
      setIsSongsEmpty(false);
      setTotalTrackTime();
    } else {
      setIsSongsEmpty(true);
    }
  }, [artistLatestReleasedAlbum]);//eslint-disable-line


  const setSingleSongToPlay = (songDetails) => {

    setIsPlaying(true);
    setIsPlayerPlaying(true);
    let songData = {
      songData: songDetails,
      referrer: referrer,
      // isPlaying: false,
      referrerId: individualArtist.id,
    };
    setCurrentPlaySong(songData);
    setIsSinglePlaying(true);
    setIsBulkPlaying(false);
  };

  // const setBulkSongsToPlay = (songDetails) => {

  //   setIsPlaying(!isPlaying);
  //   setIsPlayerPlaying(!isPlaying);
  //   let songData = {
  //     songData: songDetails,
  //     referrer: referrer,
  //     // isPlaying: !isPlaying,
  //     referrerId: individualArtist.id,
  //   };
  //   setCurrentPlaySong(songData);
  //   setIsBulkPlaying(!isPlaying);
  //   setIsSinglePlaying(false);

  //   setPrevBulkPlayAlbumId(artistLatestReleasedAlbum.id);
  // };



  const setSongsData = (songsData) => {

    let songs;

    if (favoriteButton) {
      songs = songsData.map((song) => {
        if (favoriteButton.id === song.id) {
          song.favourited = favoriteButton.favourited
        }
        return song;
      });
    } else {
      songs = songsData;
    }

    setSelectedAlbumSongsList(songs);

  }

  useEffect(() => {
    if (!isEmpty(artistLatestReleasedAlbum.songs)) {
      setSongsData(artistLatestReleasedAlbum.songs);
    } else if (!isEmpty(artistLatestReleasedAlbum.songs)) {
      setSongsData(artistLatestReleasedAlbum.songs);
    }
  }, [artistLatestReleasedAlbum.id, favoriteButton])//eslint-disable-line





  //  follow unfollow artist function

  useEffect(() => {
    if (!isEmpty(userRecentlyFollowedArtist)) {
      if (userRecentlyFollowedArtist.id === individualArtist.id) {
        setIsFavouriteArtist(userRecentlyFollowedArtist.favourited);
      }
    } else if (individualArtist) {
      setIsFavouriteArtist(individualArtist.favourited);
    }
  }, [individualArtist, userRecentlyFollowedArtist])//eslint-disable-line



  const followUnfollowArtist = async () => {
    const formData = {
      artist: {
        artist_id: individualArtist.id
      }
    }
    await followArtist(formData);
    individualArtist.favourited = !individualArtist.favourited
  }
  // end follow unfollow artist


  //full bio toggle
  const fullBioToggle = () => {
    setSeeFullBio(!seeFullBio)
  }
  //end full bio toggle

  const fullbioToggleBtn = (
    <span onClick={fullBioToggle} className='artist-bio-toggle'>see {seeFullBio ? "less" : "more"}</span>
  )

  //artist background image
  const backgroundImg = (
    individualArtistLoading ? '' :
     individualArtist?.profile?.profile_picture
  )
  //end artist background image fixes


  //favourite unfavourite album
  useEffect(() => {

    if (artistLatestReleasedAlbum) {
      setIsFavouriteAlbum(artistLatestReleasedAlbum.favourited);
    }

    if (!isEmpty(recentlyFavouriteAlbum)) {
      if (recentlyFavouriteAlbum.id === artistLatestReleasedAlbum.id) {
        setIsFavouriteAlbum(recentlyFavouriteAlbum.favourited);
      }
    }
  }, [artistLatestReleasedAlbum, recentlyFavouriteAlbum])//eslint-disable-line


  const favouriteUnfavouriteAlbum = () => {
    const formData = {
      album: {
        album_id: artistLatestReleasedAlbum.id
      }
    }
    setAlbumToFavourite(formData, artistLatestReleasedAlbum.id);
    //artistLatestReleasedAlbum.favourited = !artistLatestReleasedAlbum.favourited
  }

  // end favourite un favourite album


  // fetch advertisement
  const advertisementFetch = () => {
    let locations = "aftercurrenttophits"
    let formData = {
      location: locations,
      platform: 'web'
    };
    fetchAdvertisementByLocation(formData)
  }

  useEffect(() => {
    advertisementFetch();
  }, []);//eslint-disable-line

  // fetch advertisement

  const toggleShareModal = () => {
    setIsShareVisible(!isShareVisible)
  }


  return (
    <>
      {!individualArtistLoading ? (
        <Helmet>
          <meta property="og:title" content={individualArtist.profile?.name} />
          <meta property="og:image" content={individualArtist?.profile?.profile_picture || DummyImage} />
        </Helmet>
      ) : ""}

      <Row className="artist-banner">               
        <Col span={10}>
          <div className="artist-banner__info">
            {individualArtistErrors?.message ? (
              <>
                <ShowResult
                  msg="Some error occured while fetching this artist"
                  home={true}
                />
              </>
            ) : (
                <>
                  {individualArtist ? (
                    <>                      
                        <div className="artist-info__desc">
                          <Title level={1} className="artist-info__desc__name">
                            {individualArtistLoading ? (
                              <CustomSpin />
                            ) : (
                                <>
                                  {individualArtist
                                    ? individualArtist.profile?.name
                                    : "Artist not found"}
                                </>
                              )}
                          </Title>
                          <Title level={5} className="artist-info__desc__text">

                            {individualArtistLoading ? (
                              <CustomSpin />
                            ) : (
                                <>
                                  {individualArtist?.profile?.bio
                                    ? seeFullBio ?
                                      <>
                                        {individualArtist?.profile?.bio}
                                        {fullbioToggleBtn}
                                      </>
                                      :
                                      <>
                                      {
                                        individualArtist?.profile?.bio.length<400 && individualArtist?.profile?.bio.endsWith('.')?<> {individualArtist?.profile?.bio}</>:
                                        <>
                                          {returnLimitedWords(individualArtist?.profile?.bio, 400)}
                                        {fullbioToggleBtn}
                                        </>
                                      }
                                        
                                      </>
                                    : ""}
                                </>
                              )}
                          </Title>
                        </div>
                        <div className="links">
                            <Button
                              shape="round"
                              size="large"
                              className="btn-outline btn-playpause-outline mr-3"
                              disabled={
                                !isEmpty(artistLatestReleasedAlbum.songs)
                                  ? false
                                  : true
                              }
                            >
                              <BulkPlay albumSongs={!isEmpty(artistLatestReleasedAlbum.songs) ? artistLatestReleasedAlbum.songs : []} albumId={artistLatestReleasedAlbum.id} />
                            </Button>

                            {
                              individualArtistLoading ? <Button
                                shape="round"
                                size="large"
                                className="btn-gradient"
                                disabled={true}
                              // ghost={true}
                              >
                                FOLLOW
                              </Button>
                                :
                                <Button
                                  shape="round"
                                  size="large"
                                  className="btn-gradient btn--follow"
                                  onClick={followUnfollowArtist}
                                  loading={userFavouriteArtistFollowLoading || individualArtistLoading ? true : false}
                                // disabled={userFavouriteArtistFollowLoading || individualArtistLoading ? true : false}
                                // ghost={userFavouriteArtistFollowLoading || individualArtistLoading ? true : false}
                                >
                                  {isFavouriteArtist ? 'UNFOLLOW' : 'FOLLOW'}

                                </Button>
                            }

                            <div className="social-links">
                                <a
                                  href={individualArtist?.profile?.facebook || "#"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {" "}
                                  <img src={Fb} alt="facebook" />
                                </a>
                                <a
                                  href={individualArtist?.profile?.twitter || "#"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {" "}
                                  <img src={Twitter} alt="twitter" />
                                </a>
                                <a
                                  href={individualArtist?.profile?.instagram || "#"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {" "}
                                  <img src={Insta} alt="instagram" />
                                </a>
                                <a
                                  href={individualArtist?.profile?.youtube || "#"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {" "}
                                  <img src={Youtube} alt="youtube" />
                                </a>
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
      <Row className="padding-col">
        <Col {...layout.main}>
          <Latest {...props} />
          {!isEmpty(artistLatestReleases.albums) && artistLatestReleasedAlbum &&
            Object.keys(artistLatestReleasedAlbum).length !== 0 ? (
              <>
                <div className="artist-songs">
                  {artistLatestReleasedAlbumLoading ? (
                    <SingleImageCard height={120} width={120} />
                  ) : (
                      <img
                        src={artistLatestReleasedAlbum.cover_image || DummyImage}
                        alt="Tame Impala"
                      />
                    )}

                  <div>
                    <div className="album-year">{moment(artistLatestReleasedAlbum.created_at).format('YYYY')}</div>
                    <div>
                      <Title level={2}>

                        {artistLatestReleasedAlbumLoading ? (
                          <CustomSpin />
                        ) : (
                            artistLatestReleasedAlbum.title
                          )}
                      </Title>
                    </div>
                    <div className="album-min">{tracksTotalTime}</div>
                    <div className="artist-album-btn">
                      <span>
                        <BulkPlay albumSongs={!isEmpty(artistLatestReleasedAlbum.songs) ? artistLatestReleasedAlbum.songs : []} albumId={artistLatestReleasedAlbum.id} isIcon={true} />
                      </span>
                      <span>
                        {
                          props.favouriteAlbumLoading && props.favouriteAlbumLoadingId === artistLatestReleasedAlbum.id ?
                            <CustomSpin size="small" customStyle={{ fontSize: '1.5rem' }} />
                            :
                            isFavouriteAlbum ?
                              <IoHeart className="card__options-favorite" onClick={favouriteUnfavouriteAlbum} />
                              : <IoHeartOutline className="card__options-favorite"
                                onClick={favouriteUnfavouriteAlbum}
                              />
                        }
                      </span>
                      <span>
                        <DropdownMenu
                          addSongToCurrentAudioQueue={addSongToCurrentAudioQueue}
                          // userAllPlaylistsLoading={userAllPlaylistsLoading}
                          // userAllPlaylists={userAllPlaylists}
                          // createAndAddToPlaylist={createAndAddToPlaylist}
                          songDetails={artistLatestReleasedAlbum.songs}
                          albumDetails={artistLatestReleasedAlbum}
                          // createUserPlaylistLoading={createUserPlaylistLoading}
                          // addSongToPlaylist={addSongToPlaylist}
                          // fetchUserAllPlaylists={fetchUserAllPlaylists}
                          // createdUserPlaylist={createdUserPlaylist}
                          fetchIndividualAlbum={fetchIndividualAlbum}
                          individualAlbum={individualAlbum}
                          individualAlbumLoading={individualAlbumLoading}
                          individualAlbumErrors={individualAlbumErrors}
                          toggleShareModal={toggleShareModal}
                          isFromAlbum={true}
                        >
                          <FiMoreVertical
                            className="card__options-more"
                          />
                        </DropdownMenu>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="album-songs songList__wrapper">
                  {artistLatestReleasedAlbumLoading ? (
                    <SidebarLoading />
                  ) : artistLatestReleasedAlbum?.songs.length !== 0 ? (
                    artistLatestReleasedAlbum?.songs.map((song, index) => (
                      <Row className="song-list list-card list-card__highlighted song__item__box list-item" key={song.id}>
                        <div className="song-index list-item__index">
                          {index < 9 ? "0" + (index + 1) : index + 1}
                        </div>
                        <div className="song-info list-item__info">
                          <BulkPlay
                            albumSongs={!isEmpty(artistLatestReleasedAlbum.songs) ? artistLatestReleasedAlbum.songs : []}
                            albumId={artistLatestReleasedAlbum.id}
                            fromAlbumListSongId={song.id}
                          >
                            <div >
                              <div className="song-name">

                                {song.title}

                                <SongPlayingAnimation songId={song?.id} />
                              </div>
                              <div className="play-count">
                                <span>{song?.total_play_count} listens</span>
                              </div>
                            </div>
                          </BulkPlay>
                        </div>
                        <div className="songs-more list-item__more">
                          <div className="popular-time song__list__time ">{secondsToMinutes(song.duration)}</div>

                          {
                            favoriteButtonLoading && (favoriteButtonLoadingId === song.id) ? <CustomSpin size="small" customStyle={{ fontSize: '1.5rem' }} />
                              :
                              <FavoriteBtn
                                favorite={song.favourited}
                                id={song.id}
                                index={index}
                                fetchFavorite={fetchFavoriteButton}
                              />
                          }
                        </div>
                      </Row>
                    ))
                  ) : (
                        <div>No songs available in the album!</div>
                      )}
                </div>
              </>
            ) : (
              <ShowResult msg="Album Not Found!" home={true} />
            )}
        </Col>

        <Col {...layout.side} className="artist-side ">
          <Tabs defaultActiveKey="1" className="artist-tab">
            <TabPane tab="Popular" key="1">
              <Popular {...props} setSingleSongToPlay={setSingleSongToPlay} />
            </TabPane>
            <TabPane tab="Singles" key="2">
              <Single {...props} setSingleSongToPlay={setSingleSongToPlay} userId={id}/>
            </TabPane>
            <TabPane tab="About" key="3">
              {individualArtist?.profile?.bio ? (
                individualArtist?.profile?.bio
              ) : (
                  <ShowResult msg="Data Not Found!" home={true} />
                )}
            </TabPane>
            <TabPane tab="Related Artists" key="4">
              <RelatedArtists {...props} />
            </TabPane>
          </Tabs>

          <Advertisement name="aftercurrenttophits" />
        </Col>
      </Row>
    </>
  );
};

export default Artist;

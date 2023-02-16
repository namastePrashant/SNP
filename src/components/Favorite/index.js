import React, { useState, useEffect } from "react";
import { Row, Col, Typography, Button } from "antd";

import TableList from "../Common/Table";
import CustomSpin from "../Common/CustomSpin";
import BulkPlay from '../Common/song/bulkSong'
import Dot from "../../assets/Icons/Dot.png";
// import Free from "../../assets/Images/spotify-free-trial.png";
import ShowResult from "../Common/Result";
import { isEmpty, secondsToMinutes, getTotalTracksTime } from "../../utils/commonUtils";
import moment from 'moment';
import Advertisement from '../Advertisments'
import ScrollPagination from '../Common/ScrollPagination'

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
};

const Favorite = (props) => {
  const referrer = "single";
  const [isPlaying, setIsPlaying] = useState(false);//eslint-disable-line
  const [isSinglePlaying, setIsSinglePlaying] = useState(false);
  const [dataSource, setDataSource] = useState(undefined);
  const [tracksTotalTime, setTracksTotalTime] = useState(undefined);
  const [favoriteChangedSongs, setFavoriteChangedSongs] = useState([]);//eslint-disable-line
  const [favoriteChangedSong, setFavoriteChangedSong] = useState(undefined);//eslint-disable-line

  const [favoriteSongsList, setFavoriteSongsList] = useState(undefined);//eslint-disable-line


  const {
    favoriteSongsAll,
    fetchFavoriteSongsAll,
    favoriteSongsAllLoading,
    favoriteSongsLoadingMore,
    // loadMoreFavoriteSongs,
    favoriteSongsAllHasMoreData,
    favoriteSongsAllMeta,
    fetchFavoriteButton,
    favoriteButton,
    setCurrentPlaySong,
    // isPlayerPlaying,
    fetchAdvertisementByLocation,
    totalFavouriteSongsDuration,
    totalFavouriteSongs
  } = props;


  const { current_page } = favoriteSongsAllMeta || {};




  useEffect(() => {

    fetchAds();
    fetchFavoriteSongsAll();

  }, []);//eslint-disable-line

  const setSongToPlay = (songDetails) => {
    let songData = {
      songData: songDetails,
      referrer: referrer,
      isPlaying: false,
    };
    setCurrentPlaySong(songData);
    setIsPlaying(false);
    setIsSinglePlaying(true);
  };

  const setIsSinglePlayingStatus = (isPlaying) => {
    setIsSinglePlaying(isPlaying)
  }



  useEffect(() => {
    if (!isEmpty(favoriteButton)) {
      let changedSong = favoriteButton;
      setFavoriteChangedSong(changedSong);
      let changedSongs = [...favoriteChangedSongs, changedSong];
      setFavoriteChangedSongs(changedSongs);
    }
  }, [favoriteButton])//eslint-disable-line





  useEffect(() => {
    if (!isEmpty(favoriteSongsAll)) {

      setFavoriteSongsList(favoriteSongsAll);
    }
  }, [favoriteSongsAll])//eslint-disable-line



  const setTableData = (songsData) => {


    let dataSource = songsData.map((song) => {
      let allData = song;

      return {
        title: {
          name: song.title,
          listens: song.total_play_count,
          setSongToPlay,
          allData,
        },
        artists: song.artists,
        album: !isEmpty(song.album) ? song.album.title : "N/A",
        dateAdded: moment(song.created_at).format('YYYY-MM-DD'),
        heartTime: {
          time: secondsToMinutes(song.duration),
          loved: song.favourited,
          id: song.id,
          service: fetchFavoriteSongsAll,
          fetchFavorite: fetchFavoriteButton,
        },
      };
    });

    setDataSource(dataSource);

  }

  useEffect(() => {


    setTableData(favoriteSongsAll);

  }, [favoriteSongsAll]);//eslint-disable-line


  useEffect(() => {
    let totalFormattedTime = getTotalTracksTime(totalFavouriteSongsDuration)
    setTracksTotalTime(totalFormattedTime);
  }, [totalFavouriteSongsDuration])//eslint-disable-line



  const fetchAds = () => {
    const location = 'explore-footer'
    const formData = {
      location: location,
      platform: 'web'
    }
    fetchAdvertisementByLocation(formData)
  }




  return (
    <Row className="row-main artist">
      <Col {...layout.full} className="page-header overlay">
        <div className="explore-main explore-main--favorite">
          <div className="artist-info">
            <Title level={1} >My Favorite Songs</Title>
            <div className="favorite-info">
              <span>
                {favoriteSongsAllLoading ? <CustomSpin /> : totalFavouriteSongs} Tracks
              </span>{" "}
              <span>
                <img src={Dot} alt="Dot" />
              </span>{" "}
              <span>
                {tracksTotalTime ? tracksTotalTime : <CustomSpin />}
              </span>
            </div>
            <div className="links">
              <Button
                shape="round"
                size="large"
                className="btn-gradient"
                onClick={() => {
                  if (isSinglePlaying) {
                    setIsSinglePlayingStatus(false)
                  }
                }}
              >
                <BulkPlay
                  songs={favoriteSongsAll.length ? favoriteSongsAll : []}
                  isBulkPlayClicked={true}
                  isSinglePlaying={isSinglePlaying}
                />

              </Button>
            </div>
          </div>

          <Row className="extra-bottom-pad">
            <Col {...layout.full}>
              {favoriteSongsAllLoading ? (
                <CustomSpin />
              ) : !isEmpty(favoriteSongsAll) ? (
                <TableList dataSource={dataSource} {...props} />
              ) : (
                    <ShowResult msg="Favorite Song Not Found!" home={true} />
                  )}
              {
                !favoriteSongsAllLoading &&
                <ScrollPagination
                  current_page={current_page}
                  pagination={fetchFavoriteSongsAll}
                  HasMore={favoriteSongsAllHasMoreData}
                  loadingMore={favoriteSongsLoadingMore}
                  data={favoriteSongsAll} />
              }


              <Advertisement name='explore-footer' />
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default Favorite;

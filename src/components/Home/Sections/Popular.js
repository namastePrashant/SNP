import React, { useEffect, useState } from "react";
import { Row, Col, Card, Typography } from "antd";
import { Link } from "react-router-dom";

import Music from "../../../assets/Icons/Music.svg";
import Sidebar from "../../Common/Loading/Sidebar";
import FavoriteBtn from "../../Common/Favorite";
import { secondsToMinutes } from "../../../utils/commonUtils";
import ShowResult from "../../Common/Result";
import { isEmpty } from "../../../utils/commonUtils";
import CustomSpin from "../../Common/CustomSpin";

const { Title } = Typography;

const Popular = (props) => {
  const {
    fetchPopularSongs,
    popularSongs,
    popularSongsLoading,
    setCurrentPlaySong,
    fetchFavoriteButton,
    favoriteButton,
    favoriteButtonLoading,
    favoriteButtonLoadingId,
  } = props;

  const [popularSongsList, setPopularSongsList] = useState([]);
  const [favoriteChangedSong, setFavoriteChangedSong] = useState(undefined);

  useEffect(() => {
    fetchPopularSongs();
  }, []);//eslint-disable-line





  const setSongToPlay = (songDetails) => {
    let songData = {
      songData: songDetails,
      referrer: "single",
      isPlaying: false,
    };

    setCurrentPlaySong(songData);
  };

  useEffect(() => {
    if (!isEmpty(popularSongs)) {
      setPopularSongsList(popularSongs);
    }
  }, [popularSongs])//eslint-disable-line

  useEffect(() => {
    if (!isEmpty(favoriteButton)) {
      let changedSong = favoriteButton;
      setFavoriteChangedSong(changedSong);
    }
  }, [favoriteButton])//eslint-disable-line

  const setSongsData = (songsData) => {

    let songs;

    if (favoriteChangedSong) {
      songs = songsData.map((song) => {
        if (favoriteChangedSong.id === song.id) {
          song.favourited = favoriteChangedSong.favourited
        }
        return song;
      });
    } else {
      songs = songsData;
    }

    setPopularSongsList(songs);

  }

  useEffect(() => {
    if (!isEmpty(popularSongsList)) {
      setSongsData(popularSongsList);
    } else if (!isEmpty(popularSongs)) {
      setSongsData(popularSongs);
    }
  }, [popularSongs, favoriteChangedSong])//eslint-disable-line

  const className = "sidebarComponent-padding";

  return (
    <div className="side-card-main">
      <Title level={4}>Popular on Songs Nepal</Title>
      <Card className="side-card popular list-card">
        {popularSongsLoading ? (
          <Sidebar className={className} />
        ) : !isEmpty(popularSongsList) ? (
          popularSongsList.map((song, index) => (
            <Row
              className="popular-song list-card list-card__highlighted"
              key={song.id}
            >
              <Col span={2}>
                <img src={Music} alt="Music" className="music-icon" />
              </Col>
              <Col span={19} className="song-info list-card__info">
                <div>
                  <div className="song-name">
                    <span
                      className="list-card__info-title--nocolor"
                      title={song.title}
                      onClick={() => {
                        setSongToPlay(song);
                      }}
                    >
                      {

                        song.title
                      }
                    </span>
                  </div>
                  <div className="song-artist popular-artist">
                    <span className="list-card__info-item--highlight">
                      {
                        song.artists.map((artist, index) => {
                          let id = artist.id;
                          return (
                            <Link key={id} to={`/artist/${id}`}>
                              {artist.profile.name}
                              {(song.artists.length - 1) === index ? "" : ", "}
                            </Link>
                          );
                        })
                      }
                    </span>
                    {song?.album ? <span className="album-divider">-</span> : ""}

                    <span className="list-card__info-item--highlight">
                      <Link to="album">{song?.album?.title}</Link>
                    </span>
                  </div>
                </div>
              </Col>
              <Col span={2} offset={1} className="songs-more">
                <div className="popular-time">
                  {secondsToMinutes(song.duration)}
                </div>
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
              </Col>
            </Row>
          ))
        ) : (
              <ShowResult msg="Sorry, Popular Songs Not Found!" />
            )}
      </Card>
    </div>
  );
};

export default Popular;

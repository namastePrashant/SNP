import React from 'react'
import Sidebar from "../../../Common/Loading/Sidebar";
import { Row, Card, Typography } from "antd";
import { Link } from 'react-router-dom'
import DummyImage from '../../../../assets/Images/dummySN.png';
import ShowResult from "../../../Common/Result";

const { Title } = Typography

const PopularSongs = props => {

  const {
    loadingPopularSongs,
    popularSongs,
    setCurrentPlaySong,
    // setIsPlayerPlaying,
  } = props

  const setSongToPlay = (songDetails) => {
    let songData = {
      songData: songDetails,
      referrer: "single",
      isPlaying: false,
    };

    setCurrentPlaySong(songData);
  };

  return (
    <div className="side-card-main m-0">
      <h4 className="text-18-black-medium">Popular songs</h4>

      <Card className="side-card list-card">
        {loadingPopularSongs ? (
          <div className="section-padding-2">
             <Sidebar />
          </div>
        ) : popularSongs && popularSongs.length ? (
          popularSongs.map((song, index) => (
            <Row className="top-song " key={song.id}>

              <Title level={4} className="position song-position list-card__index secondary_text">
                {index < 9 ? "0" + (index + 1) : index + 1} </Title>


              <div className="song-info top-song__info">
                <img src={song?.cover_image ? song.cover_image : DummyImage} alt={song.artist}
                  className="resp-img list-card__img song-thumb" />

                <div className="song-name-wrapper">
                  <span className="list-card__info-title song-name" title={song?.title}
                    onClick={() => {
                      setSongToPlay(song);
                    }}
                  >
                    {song.title}
                  </span>
                  <div className="song-artist ">
                    <span className="list-card__info-item">
                      <Link to={`/artist/${song?.artists[0]?.id}`}> {song?.artists[0]?.profile.name} </Link> </span>
                    {song?.album?.title ? <span className="album-divider">-</span> : ""}

                    <span className="list-card__info-item">
                      <Link to={"/album/" + song?.album?.id}>{song?.album?.title}</Link>
                    </span>
                  </div>
                </div>
                <div className="songs-more text-12-grey">
                  {song?.total_play_count} listens
            </div>

              </div>

            </Row>))) :
          (<ShowResult msg="Sorry! Your songs hasn't been listened yet." />)}
      </Card>
    </div>
  )

}

export default PopularSongs
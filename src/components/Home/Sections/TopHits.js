import React, { useEffect } from "react";
import { Row, Card, Typography } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import DummyImage from '../../../assets/Images/dummySN.png';
import ShowResult from "../../Common/Result";
import Sidebar from "../../Common/Loading/Sidebar";
import { isEmpty } from "../../../utils/commonUtils";
import DropdownMenu from '../../Common/DropdownMenu';

const { Title } = Typography;

const TopHits = (props) => {
const {
fetchCurrentTopHits,
currentTopHits,
currentTopHitsLoading,
setCurrentPlaySong,
addSongToCurrentAudioQueue,
userAllPlaylistsLoading,
userAllPlaylists,
createAndAddToPlaylist,
createUserPlaylistLoading,
addSongToPlaylist,
fetchUserAllPlaylists,
createdUserPlaylist,
} = props;

useEffect(() => {
fetchCurrentTopHits();
}, []);// eslint-disable-line

const setSongToPlay = (songDetails) => {
let songData = {
songData: songDetails,
referrer: "single",
isPlaying: false,
};

setCurrentPlaySong(songData);
};

return (
<div className="side-card-main">
  <Title level={4}>Current Top Hits</Title>
  <Card className="side-card list-card">
    {currentTopHitsLoading ? (
    <div className="section-padding-2">
      <Sidebar />
    </div>
    ) : !isEmpty(currentTopHits) ? (
    currentTopHits.map((song, index) => (
    <Row className="top-song " key={song.id}>

      <Title level={4} className="position song-position list-card__index secondary_text">
        {index < 9 ? "0" + (index + 1) : index + 1} </Title>

               
          <div className="song-info top-song__info">
              <img src={song?.cover_image ? song.cover_image : DummyImage} alt={song.artist}
                className="resp-img list-card__img song-thumb" />

              <div className="song-name-wrapper">
                    <span className="list-card__info-title song-name" title={song?.title} onClick={()=> {
                      // setSongToPlay(song,'single', false,);
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
              <div className="songs-more">
                <DropdownMenu addSongToCurrentAudioQueue={addSongToCurrentAudioQueue}
                  userAllPlaylistsLoading={userAllPlaylistsLoading} userAllPlaylists={userAllPlaylists}
                  createAndAddToPlaylist={createAndAddToPlaylist} songDetails={song}
                  createUserPlaylistLoading={createUserPlaylistLoading} addSongToPlaylist={addSongToPlaylist}
                  fetchUserAllPlaylists={fetchUserAllPlaylists} createdUserPlaylist={createdUserPlaylist} song={song}>
                  <MoreOutlined />
                </DropdownMenu>
              </div>
           
          </div>        
        
</Row>
))
) : (
<ShowResult msg="Top Hits Not Found!" />
)}
</Card>
</div>
);
};

export default TopHits;
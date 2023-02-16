import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { Row, Card, Typography } from "antd";
import {FiMoreVertical} from 'react-icons/fi';

import DummyImage from '../../../assets/Images/dummySN.png';
import ShowResult from "../../Common/Result";
import SidebarLoading from "../../Common/Loading/Sidebar";
import { isEmpty } from "../../../utils/commonUtils";
import DropdownMenu from '../../Common/DropdownMenu';
import {secondsToMinutes} from '../../../utils/commonUtils'


const { Title } = Typography;

const Popular = (props) => {
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [isSinglePlaying, setIsSinglePlaying] = useState(false);

  const {
    fetchPopularSongsByArtist,
    popularSongsByArtist,
    popularSongsByArtistLoading,
    // setCurrentPlaySong,
    // individualArtist,
    setSingleSongToPlay,
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

  useEffect(() => {
    fetchPopularSongsByArtist(id);
  }, [id]);//eslint-disable-line

  return (
    <div>
      <Card className="side-card artist-side-card artist-popular-song-card ">
        {popularSongsByArtistLoading ? (
          <SidebarLoading />
        ) : !isEmpty(popularSongsByArtist) ? (
          <>
            {popularSongsByArtist.map((song, index) => {
              return (
                <Row className="top-song list-item popular-songs-list" key={song.id}>
                  
                    <Title level={4} className="position song-index list-item__index">
                      {index < 9 ? "0" + (index + 1) : index + 1}
                    </Title>
                  
                  <div className="list-item__info list-item__info-img">
                    <img
                      src={song.cover_image || DummyImage}
                      alt={song.artists[0].profile.name}
                      className="resp-img list-card__img"
                      onClick={() => {
                        // setSongToPlay(song, 'artist', isPlaying, individualArtist.id);
                        // setIsPlaying(!isPlaying);
                        // setIsSinglePlaying(false);
                        setSingleSongToPlay(song);
                      }}
                    />                  
                  <div className="song-info">                   
                      <div className="song-name">
                        <span
                          className="list-card__info-title"
                          title={song?.title}
                          onClick={() => {
                            // setSongToPlay(song, 'artist', isPlaying, individualArtist.id);
                            // setIsPlaying(!isPlaying);
                            // setIsSinglePlaying(false);
                            setSingleSongToPlay(song);
                          }}
                        >
                          {song.title}
                        </span>
                      </div>
                      <div className="song-artist">           
                        <span className="list-card__info-item">
                        <Link to={"/album/"+song?.album?.id}>{song.album.title}</Link>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="list-item__more">
                  <span className="list-card__song_time">
                  {secondsToMinutes(song.duration)}
                  </span>                
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
                      <FiMoreVertical />
                    </DropdownMenu>
                
                  </div>
                </Row>
              );
            })}
          </>
        ) : (
              <ShowResult msg="Popular Songs Not Found!" home={true} />
            )}
      </Card>
    </div>
  );
};

export default Popular;

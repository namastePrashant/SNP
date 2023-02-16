import React, { useEffect } from "react";

import { Row, Card,Typography } from "antd";
import {FiMoreVertical} from 'react-icons/fi';

import DummyImage from '../../../assets/Images/dummySN.png';
import ShowResult from "../../Common/Result";
import SidebarLoading from "../../Common/Loading/Sidebar";
import { isEmpty } from "../../../utils/commonUtils";
import DropdownMenu from '../../Common/DropdownMenu';
import {secondsToMinutes} from '../../../utils/commonUtils'


const { Title } = Typography;

const Single = (props) => {
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [isSinglePlaying, setIsSinglePlaying] = useState(false);

  const {
    userId,
    artistSingleSongs,
    artistSingleSongLoading,
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
    fetchArtistSingleSong
  } = props;

  


  useEffect(() => {
    if(userId) fetchArtistSingleSong(userId);
  }, [userId]);// eslint-disable-line

  return (
    <div>
      <Card className="side-card artist-side-card artist-popular-song-card ">
        {artistSingleSongLoading ? (
          <SidebarLoading />
        ) : !isEmpty(artistSingleSongs) ? (
          <>
            {artistSingleSongs.map((song, index) => {
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
                        <span className="list-card__song_time">
                      {secondsToMinutes(song.duration)}
                      </span>                       
                        </span>
                      </div>
                    
                    </div>
                    </div>
                 
                  <div className="list-item__more">
                                   
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

export default Single;

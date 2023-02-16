import React, {useEffect, useState} from 'react';
import {Button, Row, Typography} from 'antd';

import PlaylistCard from '../../Common/PlaylistCard';

import SongCards from '../../Common/Loading/SongCards';

// import DummyImage from '../../../assets/Images/dummySN.png';
import ShowResult from '../../Common/Result';
import {isEmpty} from '../../../utils/commonUtils';
import EditPlayList from "./EditPlaylist";

const {Title} = Typography;

const MyPlaylists = (props) => {

  const {userAllPlaylists, fetchUserAllPlaylists, userAllPlaylistsLoading, setActiveKey,setCurrentPlaySong} = props

  useEffect(() => {
    // if (userAllPlaylists.length === 0) {
    fetchUserAllPlaylists();
    // }
  }, [])//eslint-disable-line


    // user playlist edit
    const [currentEdit,setCurrentEdit] = useState(null);
    const [showEditModel,setShowEditModel] = useState(false);

    const openModal = (playlist)=>{
        setCurrentEdit(playlist);
        setShowEditModel(true);
    }

    const closeModal = ()=>{
        setCurrentEdit(null);
        setShowEditModel(false);
    }
    // end user play list

  return (
    <>
      {isEmpty(userAllPlaylists) ? null : (<div className='section'>

        <div className='section-header'>
          <Title level={4}>My Playlists</Title>
          <span className='section-link'><Button type="text" onClick={() => {
            setActiveKey("my-playlists")
          }}>See All</Button></span>
        </div>

        <Row className='section-body no-slick-cards playList__card'>

          {
            userAllPlaylistsLoading ?
              <SongCards/>
              :
              Array.isArray(userAllPlaylists) && userAllPlaylists.length !== 0 ?
                (
                  userAllPlaylists.map((playlist, index) => {

                      return (
                        <div key={playlist.id}>
                          <PlaylistCard
                            playlistDetails={playlist}
                            editable={true}
                            openEditModal={openModal}
                          />
                        </div>
                      )
                    }
                  )
                )
                : <ShowResult msg="Playlist Empty!"/>
          }

        </Row>
      </div>)}

        {currentEdit?
          <EditPlayList
            showModel={showEditModel}
            closeModel={closeModal}
            playlist = {currentEdit}
            setCurrentPlaySong={setCurrentPlaySong}
          />:''}

    </>
  );
};

export default MyPlaylists;
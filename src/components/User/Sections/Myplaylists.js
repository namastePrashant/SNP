import React, {useState} from 'react';
import { Row} from 'antd';

import PlaylistCard from '../../Common/PlaylistCard';

import SongCards from '../../Common/Loading/SongCards';

// import DummyImage from '../../../assets/Images/dummySN.png';
import ShowResult from '../../Common/Result';
import EditPlayList from "./EditPlaylist";


const MyPlaylists = (props) => {

  const {
    userAllPlaylists,
    userAllPlaylistsLoading,
    setCurrentPlaySong
  } = props

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
    <div className=''>

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
      {currentEdit?
        <EditPlayList
          showModel={showEditModel}
          closeModel={closeModal}
          playlist = {currentEdit}
          setCurrentPlaySong={setCurrentPlaySong}
        />:''}

    </div>
  );
}
;

export default MyPlaylists;
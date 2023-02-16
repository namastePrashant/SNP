import React, {useEffect, useState} from 'react';
import {
  // Avatar, 
  // Button,
   Col, Form, Input, Modal, Row, 
  // Upload
} from "antd";
// import {FileImageOutlined} from '@ant-design/icons'
// import CameraIcon from "../../../assets/Icons/camera.svg";
import SpinButton from "../../Common/SpinButton";
import {updatePlaylist} from '../../../services/userAllPlaylistsService';
import {useDispatch, useSelector} from "react-redux";
import {fetchIndividualPlaylist} from '../../../services/playlistService';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import DropdownMenu from '../../Common/DropdownMenu';
import SongPlayingAnimation from '../../Common/song/isPlayingAnimation';
import {secondsToMinutes} from "../../../utils/commonUtils";
import {MoreOutlined} from "@ant-design/icons";
import {addSongToCurrentAudioQueue} from '../../../actions/addToQueueAction';
import SidebarLoading from "../../Common/Loading/Sidebar";

const EditPlayList = (props) => {
  const {
    showModel,
    closeModel,
    playlist,
    setCurrentPlaySong

  } = props;

  const dispatch = useDispatch();

  // add to quea and play song functions
  const addSongToQueue = (song) =>{
    dispatch(addSongToCurrentAudioQueue(song));
  }

  const setSongToPlay = (songDetails) => {
    let songData = {
      songData: songDetails,
      referrer: "playlist",
      isPlaying: false,
    };

    setCurrentPlaySong(songData);
  };


  // / update handler
  const [playlistFile, setPlaylistFile] = useState(null);
  const loading = useSelector(state=>state.userAllPlaylists.uploading)
  // const uploadSetting = {
  //   beforeUpload: file => {
  //     setPlaylistFile({
  //       url: URL.createObjectURL(file),
  //       file: file
  //     });
  //   }
  // }

  useEffect(()=>{
      if(playlist && playlist.cover_image){
        setPlaylistFile({url:playlist.cover_image,file:playlist.cover_image});
      }
  },[playlist]);

  const onFormSubmit = (value)=>{
    const formData = new FormData();
    formData.append('id',playlist?.id);
    formData.append('playlist[title]',value.title);
    if(playlistFile && playlistFile.file){
      formData.append('playlist[cover_image]',playlistFile.file);
    }
    if(songsList && songsList.length){
      songsList.forEach((song,i)=>{
        formData.append(`playlist[songs][${i}]`,`{"id":${song?.id},"position":${song?.position}}`);
      });
    }
    dispatch(updatePlaylist(formData,closeModel));
  }

  // end update handler


  //playlist song list
  const [songsList,setSongList] = useState([]);
  const songs = useSelector(state=>state.individualPlaylist.payload?.songs);
  const songsLoading = useSelector(state=>state.individualPlaylist?.loading);

  useEffect(()=>{
    dispatch(fetchIndividualPlaylist(playlist?.id));
  },[dispatch])// eslint-disable-line


  useEffect(()=>{
    if(songs && songs.length){
      songs.forEach((song,i)=>{
        song.position = i++;
      })
      setSongList(songs);
    }
  },[songs]) // eslint-disable-line


  // drag and drop sort
  const SortableItem = SortableElement(({song,number}) => (
    <Row className="song-list list-card list-item song-list--nobg" key={song.id} 
      style={{
        marginBottom:'0.5em',
        position:'relative',
        zIndex:10001,
      }}
    >
      <div className="song-index list-item__index" onClick={() => setSongToPlay(song)}>
        {number < 9 ? "0" + (number + 1) : number + 1}
      </div>
      <div className="song-info list-item__info" onClick={() => setSongToPlay(song)}>
        <div className="song-name">
          <div>
            {song.title}
          </div>
          <SongPlayingAnimation songId={song?.id}/>

        </div>
        <div className="play-count" onClick={() => setSongToPlay(song)}>
          <span>{song?.total_play_count} listens</span>
        </div>
      </div>

      <div className="songs-more list-item__more list-item--dot">
        <span className="album-song-time">{secondsToMinutes(song.duration)}</span>
        <DropdownMenu
          addSongToCurrentAudioQueue={addSongToQueue}
          songDetails={song}
          userPlaylist={true}
          playlistId={playlist.id}
          removeable={true}
        >
          <MoreOutlined className="more"/>
        </DropdownMenu>
      </div>
    </Row>
  ));

  const SortableList = SortableContainer(({songs}) => {
    return (
      <div>
        {songs.map((song, i) => {
          return (
            <SortableItem key={song.id} index={i} song={song} number={i}/>
          );
        })}
      </div>
    );
  });


  const handleSelectedListSort = ({oldIndex, newIndex}) => {
    let array = arrayMove(songsList, oldIndex, newIndex);
    array.forEach((item,i) => {
      item.position = i
    });
    setSongList(array);
  };

  // end playlist song



  return (
    <Modal title={"Edit Playlist"}
           visible={showModel}
           onCancel={closeModel}
           width={650}
      footer={false} className={"songs-nepal-edit-playlist-model"}>
      <div className={"section-padding-2"}>
        <Form
          className="custom-form"
          layout={'vertical'}
          onFinish={onFormSubmit}
          initialValues={{ remember: false }}
        >
          <Row>
            {/* <Col span={24} className={'display-flex-ac-jc'}>
              {
                playlistFile && playlistFile.url ?
                  <Avatar size={128} src={playlistFile.url}/> :
                  <Avatar size={128} icon={<FileImageOutlined/>}/>
              }
              <Upload {...uploadSetting}>
                <Button className="button-style ml-1 mt-1" >
                  <img className="icon-style" src={CameraIcon} alt="icon"/>
                  {playlistFile && playlistFile.url ? "Change":"Add"} playlist image
                </Button>
              </Upload>
            </Col> */}
            <Col span={24}>
              <Form.Item
                name={"title"}
                label={"Title"}
                initialValue={
                  playlist && playlist.title
                }
                rules={
                  [
                    {required:true, message:'The title is required!'}
                  ]
                }
              >
                <Input  placeholder={"Playlist title"}/>
              </Form.Item>
            </Col>
          </Row>
          <Row className="row--album-content section-break-2">
            <Row>
              <h1 className="text-18-primary">Playlist Songs</h1>
            </Row>
            <Col span={24} className="section-break-1">
              <div className="single-album-songs songList__wrapper">
                {!songsLoading?
                  songsList && songsList.length?
                  <SortableList songs={songsList}
                  onSortEnd={handleSelectedListSort}
                  pressDelay={200}/>
                  :'Sorry, the playlist has no songs.':
                  <SidebarLoading/>
                }
              </div>
            </Col>
          </Row>
          <Row className={'justify-content-center'}><SpinButton loading={loading} text={'Update Playlist'}/></Row>
        </Form>
      </div>
    </Modal>
  );
}

export default EditPlayList;
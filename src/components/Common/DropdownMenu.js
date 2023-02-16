import React, {useEffect, useState} from "react";
import {Button, Dropdown, Form, Input, Menu, Popconfirm, Spin} from "antd";
import {DeleteOutlined, OrderedListOutlined, PlusOutlined} from '@ant-design/icons';
import {connect, useDispatch} from "react-redux";

import ListLoading from "./Loading/ListLoading";
import {isEmpty} from "../../utils/commonUtils";
import ShareButton from './ShareButton/ShareButtonSubMenu'
import {removeSongFromPlayList} from "../../services/userAllPlaylistsService";
// import * as addToPlaylistAction from '../../actions/addToPlaylistAction';


const {SubMenu} = Menu;

const DropdownMenu = (props) => {
  const [form] = Form.useForm();
  const {
    addToPlaylistId,
    addToPlaylistLoading,
    addSongToCurrentAudioQueue,
    userAllPlaylistsLoading,
    userAllPlaylists,
    createAndAddToPlaylist,
    songDetails,
    albumDetails,
    fetchIndividualAlbum,
    individualAlbumLoading,
    individualAlbum,
    // individualAlbumError,
    createUserPlaylistLoading,
    addSongToPlaylist,
    fetchUserAllPlaylists,
    createdUserPlaylist,
    // toggleShareModal,
    isFromPlayer,
    isFromAlbum,
    userPlaylist,
    playlistId,
    removeable
  } = props;

  /**remove from play list**/
  const dispatch = useDispatch();
  const rmFromPlaylist = () => {
    dispatch(removeSongFromPlayList(songDetails.id, playlistId));
  }
  /**remove from play list**/

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);
  const [showCreateNewForm, setShowCreateNewForm] = useState(false);
  const [updatedUserPlaylist, setUpdatedUserPlaylist] = useState([]);


  const addToPlaylist = (playlistId, songId) => {

    let formData = {
      playlistId,
      songId,
      addToPlaylistCallBack,
    };
    addSongToPlaylist(formData);
  }

  useEffect(() => {

    if (createdUserPlaylist) {
      let newUpdatedPlaylist = [...updatedUserPlaylist, createdUserPlaylist];

      setUpdatedUserPlaylist(newUpdatedPlaylist);
    }
  }, [createdUserPlaylist])//eslint-disable-line

  useEffect(() => {
    if (!isEmpty(userAllPlaylists)) {
      setUpdatedUserPlaylist([...userAllPlaylists]);
    }
  }, [userAllPlaylists])//eslint-disable-line

  const fetchRequiredDatas = () => {
    if (fetchUserAllPlaylists && isEmpty(userAllPlaylists)) {
      fetchUserAllPlaylists();
    }
    if (albumDetails) {
      console.log('albumDetails', albumDetails);
    }
  }


  const handleDropdownVisibleChange = (flag) => {
    setIsDropdownVisible(flag)
  }

  const handleDropdownMenuClick = (e) => {
    // console.log(e);
    if (e.key === "1") {
      setIsDropdownVisible(false);
    } else if (e.key === "3") {
      setIsDropdownVisible(false);
    }
  };

  const changeSubMenuOpen = (openKeys) => {
    setOpenKeys(openKeys)
  }

  const addAlbumSongsToQueue = (albumData) => {

    let {songs: songData, id: albumId} = albumData;
    let songDetails = {
      referrer: "album",
      referrerId: albumId,
      songData
    }
    addSongToCurrentAudioQueue(songDetails);
  }

  const addSongToQueue = () => {
    if (!albumDetails) {


      let songInfo = {
        referrer: "single",
        songData: songDetails,
      }
      addSongToCurrentAudioQueue(songInfo);
    } else if (albumDetails) {

      // call fetch individualAlbum then at callback add to Queue
      if (albumDetails && albumDetails.songs) {
        addAlbumSongsToQueue(albumDetails)
      } else if (albumDetails.id !== individualAlbum.id) {
        let {id: albumId} = albumDetails;
        fetchIndividualAlbum(albumId, addAlbumSongsToQueue)
      } else if (albumDetails.id === individualAlbum.id) {

        addAlbumSongsToQueue(individualAlbum)
      }

    }
  }

  const addToPlaylistCallBack = () => {
    setOpenKeys([]);
    setShowCreateNewForm(false);
    setIsDropdownVisible(false);
  }

  const createAndAddToPlaylistCallBack = () => {
    addToPlaylistCallBack();
    form.resetFields();
  }

  const createNewPlaylistWithSong = (values) => {
    let playlistTitle = values.title;
    let songId = songDetails.id
    createAndAddToPlaylist({playlistTitle, songId, createAndAddToPlaylistCallBack});
  }


  const menu = (
    <>
      <Menu
        onClick={handleDropdownMenuClick}
        triggerSubMenuAction="click"
        openKeys={openKeys}
        onOpenChange={changeSubMenuOpen}
      >
        {
          !isFromPlayer &&
          <Menu.Item
            key="1"
            icon={<OrderedListOutlined/>}
            onClick={addSongToQueue}
          >
            <span>Add to Queue <span>{individualAlbumLoading && <Spin/>}</span></span>
          </Menu.Item>
        }

        {
          userPlaylist ?
            removeable?
            !props.removing ?
              <Menu.Item
                key="18"
                className="menu__item__create__playlist"
              >
                <Popconfirm placement="top" title={"Are you sure you wanna remove this song?"} onConfirm={rmFromPlaylist} okText="Yes" cancelText="No">
                  <DeleteOutlined/>
                  Remove from playList
                </Popconfirm>

              </Menu.Item> :
              <Menu.Item key="18">
                <Spin size="small"/>
              </Menu.Item>:'' :
            isFromAlbum ? null
              : userAllPlaylistsLoading ? (
                <SubMenu title="Add To Playlist" key="2" icon={<PlusOutlined/>}>
                  <Menu.Item key="3">
                    <ListLoading className="listLoadingBox"/>
                  </Menu.Item>
                </SubMenu>
              ) : !isEmpty(userAllPlaylists) && !isEmpty(updatedUserPlaylist) && !isFromPlayer ? (
                <SubMenu
                  title="Add To Playlist"
                  key="4"
                  icon={<PlusOutlined/>}
                  popupClassName="addToPlaylist__submenu"
                >
                  {!showCreateNewForm && (
                    <Menu.Item
                      key="0"
                      onClick={() => {
                        setShowCreateNewForm(true);
                      }}
                      className="menu__item__create__playlist"
                    >
                      <PlusOutlined/>
                    </Menu.Item>)}


                  {showCreateNewForm && (
                    <Menu.Item key="5">
                      <Form
                        form={form}
                        layout="inline"
                        name="createPlaylist"
                        onFinish={createNewPlaylistWithSong}
                      >
                        <Form.Item
                          name="title"
                          rules={[
                            {required: true, message: "Please enter a title for new playlist!"},
                          ]}>
                          <Input placeholder="create new playlist"/>
                        </Form.Item>
                        <Form.Item>
                          <Button
                            type="primary"
                            htmlType="submit"
                            loading={createUserPlaylistLoading}
                          >
                            Save
                          </Button>
                        </Form.Item>
                      </Form>
                    </Menu.Item>)}
                  {updatedUserPlaylist.map((playlist, index) => {
                    return (
                      <Menu.Item key={playlist.id}>
                        <div
                          onClick={() => {
                            addToPlaylist(playlist.id, songDetails.id);
                          }}>
                          <label>{playlist.title}</label>
                          {
                            addToPlaylistLoading && (playlist.id === addToPlaylistId) ?
                              <span className="ml-1">
                            <Spin size="small"/>
                        </span> : null
                          }
                        </div>
                      </Menu.Item>);
                  })}
                </SubMenu>) :

              isFromPlayer !== true ?
                <SubMenu title="Add To Playlist" key="6" icon={<PlusOutlined/>}>
                  <Menu.Item key="7">
                    <Form
                      form={form}
                      layout="inline"
                      name="createPlaylist"
                      onFinish={createNewPlaylistWithSong}
                    >
                      <Form.Item
                        name="title"
                        rules={[
                          {required: true, message: "Please input your username!"},
                        ]}
                      >
                        <Input placeholder="create new playlist"/>
                      </Form.Item>
                      <Form.Item>
                        <Button type="primary" htmlType="submit">
                          Save
                        </Button>
                      </Form.Item>
                    </Form>
                  </Menu.Item>
                </SubMenu> : ""}
      </Menu>

      {/* // share Dropdown */}

      {albumDetails?.id ? (
        <ShareButton
          title={albumDetails?.name}
          url={'/album/' + albumDetails?.id}
        />) : (
        <ShareButton
          title={songDetails?.name}
          url={'/song/' + songDetails?.id}
        />)}
      {/* end share drop down */}
    </>
  )


  return (
    <>
      <Dropdown
        overlay={menu}
        trigger={['click']}
        placement="bottomCenter"
        onClick={fetchRequiredDatas}
        onVisibleChange={handleDropdownVisibleChange}
        visible={isDropdownVisible}
      >
        {props.children}
      </Dropdown>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    addToPlaylistId: state.addToPlaylist.id,
    addToPlaylistLoading: state.addToPlaylist.loading,
    removing: state.userAllPlaylists.uploading
  }

}

export default connect(mapStateToProps)(DropdownMenu);

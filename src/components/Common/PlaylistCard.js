import React from 'react';
import {Link} from "react-router-dom";
import DummyImage from '../../assets/Images/dummySN.png';
import {BarsOutlined, DeleteOutlined, EditOutlined,ExclamationCircleOutlined} from '@ant-design/icons';
import {Menu, Modal} from "antd";
import {useDispatch} from "react-redux";
import {deletePlaylist} from "../../services/userAllPlaylistsService";

const {SubMenu} = Menu;

const PlaylistCard = (props, ref) => {

  const {
    playlistDetails,
    editable,
    openEditModal,
  } = props;

  const dispatch = useDispatch();


  let playlistInfo = {
    name: playlistDetails?.title ? playlistDetails?.title : "",
    cover: playlistDetails?.cover_image ? playlistDetails?.cover_image : DummyImage,
  }

  let playlistId = playlistDetails?.id;


  // delete playlist
  function confirm() {
    Modal.confirm({
      title: false,
      icon: <ExclamationCircleOutlined />,
      content: 'Do you really wanna delete this playlist?',
      okText: 'delete',
      cancelText: 'cancle',
      onOk:DeletePlaylist
    });
  }
  const DeletePlaylist = () => {
    dispatch(deletePlaylist(playlistDetails?.id));
  }


  return (
    <div className='card__wrapper' ref={ref}>
      <div className='card__image-wrapper playlist-card-img' style={{position: 'relative'}}>
        <Link
          to={`/playlist/${playlistId}`}
        >
          {
            playlistInfo.cover !== '' ?
              <img src={playlistInfo.cover} alt={playlistInfo.artist} className="image--gradient-bordered card__image"/>
              : ''
          }
        </Link>
        {editable ?
          <div className={'overlay'}>
            <Menu
              className={'songnepal-playlist-options'}
              triggerSubMenuAction={"click"}
              subMenuCloseDelay={200}
            >
              <SubMenu
                key="4"
                style={{paddingTop:'0px'}}
                icon={<BarsOutlined className={'m-0'}/>}
              >
                <Menu.Item
                  key="18"
                  onClick={() => openEditModal(playlistDetails)}
                >
                  <EditOutlined title={'Edit Playlist'}/>
                  Edit playlist
                </Menu.Item>
                <Menu.Item
                  key="19"
                  onClick={confirm}
                >
                  <DeleteOutlined/>
                  Delete playList
                </Menu.Item>
              </SubMenu>
            </Menu>
          </div> :
          ''}
      </div>
      <div className='section-card-info'>
        <div className='section-song'>
          <Link
            to={`/playlist/${playlistId}`}
          >
            <span>
                {/* {props.playlist.name} */}
              {
                playlistInfo.name && playlistInfo.name.length > 20 ?
                  playlistInfo.name.substring(0, 18) + '...'
                  :
                  playlistInfo.name
              }
            </span>
          </Link>
        </div>
        <div className='section-artist'>
          {playlistInfo.favourites_count > 1 ? playlistInfo.favourites_count : '0'} Followers
        </div>
      </div>
    </div>
  );
};

const forwardedPlaylistCard = React.forwardRef(PlaylistCard);

export default forwardedPlaylistCard;

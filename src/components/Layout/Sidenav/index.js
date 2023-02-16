import React, { useEffect,useState } from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";
import MenuRoute from "../../../constants/menuRoute";
import { connect } from "react-redux";
import { fetchFeaturedPlaylist } from "../../../services/playlistService";
import { isEmpty } from '../../../utils/commonUtils';
import PlaylistImage from '../../../assets/Icons/playlist.svg';
import ListLoading from '../../../components/Common/Loading/ListLoading';
import  {SyncOutlined,TeamOutlined,AudioOutlined} from '@ant-design/icons'


const { Sider } = Layout;

const SideNav = (props) => {
  const { featuredPlaylists,
    //  featuredPlaylistsError, 
     featuredPlaylistsLoading } = props;


  useEffect(() => {
    // if(!isEmpty(featuredPlaylists)){
    props.dispatch(fetchFeaturedPlaylist());
    // }
  }, [])//eslint-disable-line


  const [isArtist,setIsArtist] = useState(false)



  /**
   * get user rle from redux
   */
  //end redux hooks

  // check is artist
  const isRoleArtist = ()=>{
    const userRole = localStorage.getItem('role')
    if(userRole==="artist") return true
    else return false
  }

  useEffect(()=>{
    const userRole = localStorage.getItem('role')
    if(userRole !== "artist") setIsArtist(false)
    else setIsArtist(true)
    isRoleArtist()
  },[localStorage.getItem('role')])//eslint-disable-line


  return (
    <Sider className="side-layout" breakpoint="lg" collapsedWidth="0">
        <>
  
        {/* // button to switch the artist dashboard */}
        {isRoleArtist()?
         <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
          >
            <Menu.Item className="main-menu-items switch-dashboard">
              <button className="btn-switch-dashboard-button" onClick={()=>setIsArtist(!isArtist)}>
              <SyncOutlined className={isArtist?"spin":"spin-before"}/>  
              {isArtist? (<>User<TeamOutlined className="ml-1" /></>):
              (<>Artist<AudioOutlined className="ml-1"/></>)
              }</button>
            </Menu.Item>
          </Menu>
          :""}
        {/* // end button to switch the artist dashboard */}
  
        {isArtist?
        // artist dashboard
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
        >
          <div className="menu-divider mt-1">ACCOUNT</div>
            {MenuRoute[0].map((item) => (
              <Menu.Item key={item.key} className="main-menu-items grow">
                <NavLink exact to={item.path} activeStyle={{color: "#8c61fe"}}>
                  {item.icon?<img src={item.icon} alt={item.key} className="menu-items-icon" />:""}
                  <span>{item.menuName}</span>
                </NavLink>
              </Menu.Item>
            ))}
        </Menu>
        
        // end artist-dashboard
        :
        <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        >
        {/* // user dashboard  */}
          {MenuRoute[1].map((item) => (
            <Menu.Item key={item.key} className="main-menu-items grow">
              <NavLink exact to={item.path} activeStyle={{color: "#8c61fe"}}>
                {item.icon?<img src={item.icon} alt={item.key} className="menu-items-icon" />:""}
                <span>{item.menuName}</span>
              </NavLink>
            </Menu.Item>
          ))}
          <div className="menu-divider">YOUR LIBRARY</div>
          {MenuRoute[2].map((item) => (
            <Menu.Item key={item.key} className="library-items grow">
              <NavLink exact to={item.path} activeStyle={{color: "#8c61fe"}}>
              {item.icon?<img src={item.icon} alt={item.key} className="menu-items-icon" />:""}
                <span>{item.menuName}</span>
              </NavLink>
            </Menu.Item>
          ))}
  
          <div className="menu-divider">PLAYLIST</div>
          {
            // if empty keep skeleton for loading
            featuredPlaylistsLoading && <ListLoading className="sidebar__playlist__skeleton" hasIcon={true}/>
          }
          {
            !isEmpty(featuredPlaylists) && featuredPlaylists.map((featuredPlaylist) => (
              <Menu.Item key={featuredPlaylist.id} className="library-items grow library-items--playlist">
                <NavLink exact to={`/playlist/${featuredPlaylist.id}`} title={featuredPlaylist.title} activeStyle={{color: "#8c61fe"}}>
                  <img
                    src={featuredPlaylist.cover_image || PlaylistImage}
                    alt={featuredPlaylist.title}
                    className="sidebar__icons__small"
                  />
                  <span className="sidebar__label__title" >{featuredPlaylist.title}</span>
                </NavLink>
              </Menu.Item>
            ))
          }
        </Menu>
  
        // end user Dashboard
        }
  
        </>
        {/* :
        <SMLskeleton item={12}/> */}
      {/* } */}
     
    </Sider>
  );
};

const mapStateToProps = (state) => {

  return {
    featuredPlaylists: state.featuredPlaylists.payload,
    featuredPlaylistsLoading: state.featuredPlaylists.loading,
    featuredPlaylistsError: state.featuredPlaylists.error,
  }
}

export default connect(mapStateToProps,)(SideNav);

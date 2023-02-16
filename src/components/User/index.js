import React, {useEffect, useState,} from 'react';
import {Button, Card, Col, Row, Tabs, Typography} from 'antd';
import {Link, useHistory} from 'react-router-dom';
import {userImage, userJoinedDate} from '../../utils/userSettings';
// import Free from '../../assets/Images/spotify-free-trial.png'
// import PremiumMini from '../../assets/Images/premium-mini.png'
// import Dot from '../../assets/Icons/Dot.png'
import LikedSongs from './Sections/LikedSongs';
// import FollowingPlaylists from './Sections/FollowingPlaylists';
import Songs from './Sections/Songs';
// import Albums from './Sections/Albums';
import Artists from './Sections/Artists';
import FollowingArtists from './Sections/FollowingArtists';
// import FollowedPlaylists from './Sections/FollowedPlaylists';
import CustomSpin from '../Common/CustomSpin'
import MyPlaylists from './Sections/Myplaylists';
import OverviewPlaylist from './Sections/myPlaylistOverview';
import Advertisement from '../Advertisments';


const {TabPane} = Tabs;
const {Title} = Typography;

const layout = {
  full: {
    xxl: {span: 24},
    xl: {span: 24},
    lg: {span: 24},
    md: {span: 24},
    sm: {span: 24},
    xs: {span: 24},
  },
};

const User = props => {

  let history = useHistory();

  const {
    fetchUserProfile,
    userProfile,
    userProfileLoading,
    fetchUserData,
    userData,
    userDataLoading,
    fetchAdvertisementByLocation,
    slug,
  } = props

  const [activeTabKey, setActiveTabKey] = useState("overview");


  useEffect(() => {
    fetchUserProfile();
    fetchUserData();
    fetchAds();
  }, [])//eslint-disable-line

  const fetchAds = () => {
    const location = 'userprofileheader,afterrecommendedartists,explore-footer'
    const formData = {
      location: location,
      platform: 'web'
    }
    fetchAdvertisementByLocation(formData)
  }

  const tabs = [
    "overview",
    "liked-songs",
    "my-playlists",
    // "followed-playlists",
    "followed-artists"
  ];


  useEffect(() => {
    let activeKey;
    activeKey = slug;

    if (slug === undefined) {
      setActiveTabKey("overview");
    } else {
      setActiveTabKey(activeKey);
    }
  }, [slug])


  const setActiveKey = (key) => {

    let slugKey;

    tabs.forEach((tabKey) => {

      if (tabKey === key) {
        slugKey = tabKey;
      } else if (key === "overview") {
        slugKey = null;
      }
    })


    history.replace(slugKey ? `/user/${slugKey}` : `/user`);
    // setActiveTabKey(key);
  }

  return (
    <Row className='row-main user-main '>
      <Col {...layout.full} className='page-header'>
        <div className='explore-main'>
          <div className='user-banner'>
            {userProfileLoading ? <CustomSpin/> :
              <>
                <div className="user-info-wrapper">
                  <div className='header-user'>
                    {userImage(userProfile)}
                  </div>
                  <div className='user-meta'>
                    <Title level={1} className='user-title'>{userProfile.profile && userProfile.profile.name}</Title>
                    <div className='user-info-text'>
                      <span className="email">{userProfile.email}</span>
                      <span className="date"><strong>Joined On: </strong> {userJoinedDate(userProfile)}</span>
                    </div>
                  </div>

                  <div className='links'>
                    <Link to='/user/edit'>
                      <Button shape="round" size='large' className='btn-outline'>
                        Edit Profile
                      </Button>
                    </Link>
                  </div>
                </div>

              </>
            }

            <div>

              <Advertisement name='userprofileheader' type='no-layout'/>

            </div>
          </div>

          <Tabs activeKey={activeTabKey} onChange={setActiveKey} className="user-tab">
            <TabPane tab="Overview" key="overview">
              <Row className=''>
                <div className='user-cards'>
                  <Card style={{width: 300}} className='liked'>
                    {
                      userDataLoading ? <CustomSpin/> :
                        <div>
                          {userData.favoritedsongcount}
                        </div>
                    }
                    <div>liked songs</div>
                  </Card>
                  <Card style={{width: 300}} className='followed'>
                    {
                      userDataLoading ? <CustomSpin/> :
                        <div>
                          {userData.favoritedartistcount}
                        </div>
                    }
                    <div>artist followed</div>
                  </Card>
                </div>
                <Col {...layout.full}>
                  <LikedSongs {...props} setActiveKey={setActiveKey}/>
                </Col>
                <Col {...layout.full}>
                  <OverviewPlaylist {...props} setActiveKey={setActiveKey}/>
                </Col>
                {/* <Col {...layout.full}>
                                    <FollowingPlaylists {...props} setActiveKey={setActiveKey} />
                                </Col> */}
                <Col {...layout.full}>
                  <FollowingArtists {...props} setActiveKey={setActiveKey}/>
                </Col>

                <Col {...layout.full}>
                  <Advertisement name='afterrecommendedartists'/>
                </Col>

              </Row>
            </TabPane>
            <TabPane tab="Liked Songs" key="liked-songs">
              <Row className=''>
                <Col {...layout.full}>
                  <Songs {...props} />
                </Col>
                <Col {...layout.full}>
                  <Advertisement name='explore-footer'/>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="My Playlists" key="my-playlists">
              <Row className=''>
                <Col {...layout.full}>
                  <MyPlaylists {...props} />
                </Col>
                <Col {...layout.full}>
                  <Advertisement name='afterrecommendedartists'/>
                </Col>
              </Row>
            </TabPane>
            {/* !!!Don't Remove!!! followed playlist might me used in near future.  */}
            {/*
                        <TabPane tab="Followed Playlists" key="followed-playlists">
                            <Row className='extra-bottom-pad'>
                                <Col {...layout.full}>
                                    <FollowedPlaylists {...props} />
                                </Col>
                                <Col {...layout.full}>
                                    <Advertisement name='explore-footer' />
                                </Col>
                            </Row>
                        </TabPane>
                         */}
            <TabPane tab="Followed Artists" key="followed-artists">
              <Row className='extra-bottom-pad'>
                <Col {...layout.full}>
                  <Artists {...props} />
                </Col>
                <Col {...layout.full}>
                  <Advertisement name='afterrecommendedartists'/>
                </Col>
              </Row>
            </TabPane>
          </Tabs>

        </div>
      </Col>
    </Row>
  );
};

export default User;
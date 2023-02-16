import React, { useEffect, useCallback } from "react";
import { Link, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile } from '../../../services/userProfileService';
import { userImage } from '../../../utils/userSettings';
import {FiChevronDown,FiBell} from 'react-icons/fi';
import {
  Layout,
  Row,
  Col,
  Badge,
  Menu,
  Dropdown,
  Skeleton,
} from "antd";
import {
  BellOutlined,
  ProfileOutlined,
  LoginOutlined,
  MenuOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

import Logo from "../../../assets/Logo/logo.png";
// import Profile from "../../../assets/Images/profile.png";

import { logout } from "../../../services/authService";
import SearchInput from "../../Common/SearchInput";
// import CustomSpin from '../../Common/CustomSpin';
import { isEmpty } from "../../../utils/commonUtils";
import Song from "../../../assets/Icons/Recent.svg";
import Album from "../../../assets/Icons/Explore.svg";
// import authReducer from "../../../reducers/authReducer";
import { notificationSeenStatus, clearAllNotification } from '../../../services/notificationService'

const { Header } = Layout;
const { SubMenu } = Menu;
const layout = {
  logoLayout: {
    xxl: { span: 2 },
    xl: { span: 2 },
    lg: { span: 2 },
    md: { span: 6 },
    sm: { span: 6 },
    xs: { span: 6 },
  },
  searchLayout: {
    xxl: { span: 15, offset: 2 },
    xl: { span: 14, offset: 2 },
    lg: { span: 12, offset: 3 },
    md: { span: 13, offset: 2 },
    sm: { span: 13, offset: 2 },
    xs: { span: 0 },
  },
  itemLayout: {
    xxl: { span: 4, offset: 1 },
    xl: { span: 5, offset: 1 },
    lg: { span: 6, offset: 1 },
    md: { span: 0 },
    sm: { span: 0 },
    xs: { span: 0 },
  },
  respLayout: {
    xxl: { span: 0 },
    xl: { span: 0 },
    lg: { span: 0 },
    md: { span: 1, offset: 2 },
    sm: { span: 1, offset: 2 },
    xs: { span: 1, offset: 17 },
  },
};

const App = (props) => {
  const {
    searchService,
    fetchNotification,
    notifications,
    notificationLoading,
  } = props;

  const handleNotification = () => {
    fetchNotification();
  };


  // redux function



  // end redux function

  useEffect(() => {
    fetchNotification();
    fetchUserProfiledata();
  }, []);//eslint-disable-line


  /*
   * Redux Hooks Functions
   * 
   */
  // clear notification function
  const dispatch = useDispatch()
  const clearNotificationById = useCallback((id) => {
    dispatch(notificationSeenStatus(id))
  }, [dispatch])// clear notification by id 
  // clear notifications function


  const fetchUserProfiledata = useCallback(() => {
    dispatch(fetchUserProfile())
  }, [dispatch])
  //fetch user profile data and store in redux

  const clearNotifications = useCallback(() => {
    dispatch(clearAllNotification())
  }, [dispatch]) // clear all notifications

  const handleLogout = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  // redux state
  const user = useSelector(state => state.userProfile.payload)
  const userProfileLoading = useSelector(state => state.userProfile.loading)
  /*
   * End  Redux Hooks Functions
   * 
  */





  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/user">
          <ProfileOutlined /> <span className="header-menu-item">Profile</span>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/login" onClick={handleLogout}>
          <LoginOutlined /> <span className="header-menu-item">Logout</span>
        </Link>
      </Menu.Item>
    </Menu>
  );


  const notificationItems = (
    <span>
      <Menu className="notification-menu">
        {notificationLoading ? (
          <Skeleton active rows={3} title={false} />
        ) : isEmpty(notifications) ? (
          <Menu.Item className="no-notification">
            <span>You have no new notificaitons!</span>
          </Menu.Item>
        ) : (
              <>
                {notifications.length ? (
                  <Menu.Item className="clear-notification-button">
                    <Row>
                      <div className="text-right w-100 clear-btn" onClick={clearNotifications}>
                        clear All
                </div>
                    </Row>
                  </Menu.Item>
                ) : ""}
                {
                  notifications.map((item) => (
                    <Menu.Item key={item.id}>
                      <Link to={
                        item.notifiable_type === "Album" ? '/album/' + item?.album?.id :
                          item.notifiable_type === "Song" ? '/song/' + item?.song?.id : ""
                      }
                        onClick={() => { clearNotificationById(item.id) }} // clear notification on click
                      >
                        <Row>
                          <Col span={3} className="icon">
                            <img
                              src={item.notifiable_type === "Album" ? Album : Song}
                              alt={item.notifiable_type}
                            />
                          </Col>
                          <Col span={21}>
                            <p className="notification-message" title={item.message}>{item.message}</p>
                          </Col>
                        </Row>
                      </Link>
                    </Menu.Item>
                  ))
                }
              </>
            )}
      </Menu>
    </span>
  );
  const resMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/user">
          <ProfileOutlined /> <span className="header-menu-item">Profile</span>
        </Link>
      </Menu.Item>
      <SubMenu icon={<BellOutlined />} title="Notifications">
        <Menu.Item >{notificationItems}</Menu.Item>
      </SubMenu>
      <Menu.Item>
        <Link to="/login" onClick={handleLogout}>
          <LoginOutlined /> <span className="header-menu-item">Logout</span>
        </Link>
      </Menu.Item>

    </Menu>
  )



  return (
    <Header className="app-layout-header">
      <Row>
        <Col {...layout.logoLayout}>
          <Link to="/" className="logo">
            <img src={Logo} alt="Songs Nepal" className="logo" />{" "}
            <span>BETA</span>
          </Link>
        </Col>
        <Col {...layout.searchLayout} className="search-main">
          <SearchInput searchService={searchService} />
        </Col>
        <Col {...layout.itemLayout}>
          <div className="header-items">
            {/* <Link to='/upgrade'>
                            <Button shape="round" size='large' className='btn-gradient'>
                                UPGRADE
                        </Button>
                        </Link> */}

            <Dropdown
              overlay={notificationItems}
              trigger={["click"]}
              className="header-dropdown"
              placement="bottomCenter"
            >
              <Badge
                count={
                  notificationLoading ? (
                    <LoadingOutlined />
                  ) : notifications.length ? (
                    notifications.length
                  ) : null
                }
                showZero
                className="badge"
                onClick={handleNotification}
              >
                <FiBell title={!notifications.length && "You have no new notifications"} />
              </Badge>
            </Dropdown>

            <Dropdown
              overlay={menu}
              trigger={[`click`]}
              className="header-dropdown "
            >
              {userProfileLoading ? <Skeleton active title={false} /> :
                <div className="profile-wrapper">
                  <span>
                    {userImage(user, "profile-img nav-profile-img")}
                  </span>
                  <span className="profile-name">
                    {
                      isEmpty(localStorage.getItem("username"))
                        ? "User"
                        : (
                          // returnLimitedWords(localStorage.getItem("username"), 12)}
                          localStorage.getItem("username")

                        )
                    }
                  </span>

                  <FiChevronDown className="option__caret" />
                </div>
              }
            </Dropdown>
          </div>
        </Col>
        <Col {...layout.respLayout}>
          <Dropdown
            overlay={resMenu}
            trigger={[`click`]}
            className="header-dropdown"
            placement="bottomCenter"
          >

            <MenuOutlined />


          </Dropdown>

        </Col>
      </Row>
    </Header>
  );
};



export default withRouter(App);

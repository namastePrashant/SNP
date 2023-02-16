import React, {useEffect} from 'react';
import {Col, Row, Tabs, Typography} from 'antd';

// import PremiumMini from '../../assets/Images/Premium.png'
import UserEditForm from './Section/UserEditForm';
import CustomSpin from '../Common/CustomSpin';
import PasswordForm from './Section/PasswordForm';

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

const UserEdit = props => {

  const {
    updateUserProfileImage,
    fetchUserProfile,
    userProfile,
    userProfileLoading,
    updateUserProfile,
    updateUserPassword,
    userProfileUpdateLoading,
    userPasswordUpdateLoading
  } = props

  useEffect(() => {
    fetchUserProfile()
  }, [])//eslint-disable-line
  return (
    <Row className='row-main user-main'>
      <Col {...layout.full} className='page-header'>
        <div className='explore-main'>
          <div className='user-info'>
            <div className='user-edit'>
              <Title level={5}>Account</Title>
              <Title level={1} className='user-title'>Your Profile</Title>
            </div>

          </div>

          <Tabs defaultActiveKey="1">
            <TabPane tab="User Profile" key="1">
              {
                userProfileLoading ? <CustomSpin/> :
                  <UserEditForm
                    userProfile={userProfile && userProfile}
                    updateUserProfile={updateUserProfile}
                    userProfileUpdateLoading={userProfileUpdateLoading}
                    updateUserProfileImage={updateUserProfileImage}
                  />
              }

            </TabPane>
            <TabPane tab="Password & Security" key="2">
              <PasswordForm updateUserPassword={updateUserPassword}
                            userPasswordUpdateLoading={userPasswordUpdateLoading}/>
            </TabPane>
          </Tabs>

        </div>
      </Col>
    </Row>
  );
};

export default UserEdit;
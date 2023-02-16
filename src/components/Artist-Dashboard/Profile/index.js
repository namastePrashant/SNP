import React from 'react'
import { Row, Col, Tabs } from 'antd'
import UserProfile from './user-profile'
import UserTransactions from './user-profile/user-transactions';
import BankingDetail from './bankingDetails'
import Advertisement from '../../Advertisments'

const { TabPane } = Tabs; // tab plane

const Profile = (props) => {

  const {
    updateUserProfileImage,
    updateUserProfile,
    updateUserPassword,

    // genre related
    fetchGenres,
    searchGenre,

    fetchBankingDetails,
    updateBankingDetails,

    totalAnalyticsCount,
    loadingAnalyticsCount,
    fetchAnalyticsCounts,
  } = props

  const [showAF, setShowAf] = React.useState(false);

  React.useEffect(() => {
    const role = localStorage.getItem('role')
    if (role === 'artist') setShowAf(true)
    else setShowAf(false)
  }, [localStorage.getItem('role')])//eslint-disable-line


  return (
    <section className="row-main home-layout">

      {/* header */}
      <Row gutter={[16, 16]} className="align-items-center">
        <Col lg={12} xl={12} xs={24}>
          <p className="text-14-grey">Account</p>
          <h4 className="text-36-black-medium">Your Profile</h4>
        </Col>
        <Col lg={12} xl={12} xs={24}>
          <Advertisement name="userprofileheade" type='no-layout' />
        </Col>
      </Row>
      {/* header */}


      {/* tabpanel for editing user details */}
      <section className="section-break-1">
        <Tabs defaultActiveKey="1" className="tabs-user-profile">

          <TabPane tab="User Profile" key="1">
            <UserProfile
              updateUserProfileImage={updateUserProfileImage}
              updateUserProfile={updateUserProfile}
              updateUserPassword={updateUserPassword}
              fetchGenres={fetchGenres}
              searchGenre={searchGenre}
            />  {/* change user uprofile and password */}
          </TabPane>
          {showAF ?
            <TabPane tab="Banking Details" key="2">
              <BankingDetail
                fetchBankingDetails={fetchBankingDetails}
                updateBankingDetails={updateBankingDetails}
              />
            </TabPane> : ""
          }
          {showAF ?
          <TabPane tab="Transactions" key="3">
            <UserTransactions
              totalAnalyticsCount={totalAnalyticsCount}
              loadingAnalyticsCount={loadingAnalyticsCount}
              fetchAnalyticsCounts={fetchAnalyticsCounts}
            />
          </TabPane> : ""
          }
        </Tabs>
      </section>

    </section>
  )
}


export default Profile
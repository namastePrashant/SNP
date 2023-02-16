import React, { useEffect } from 'react'
import { Row, Col, Card, Skeleton } from 'antd'
import { getMessageByTimeStamp, getUserFirstName } from '../../../utils/commonUtils';
// import moment from 'moment';

// dashboard sections
import PopularSongs from './sections/popularsongs'
import InfoSummary from './sections/info-summary'
import EarningGraphs from './sections/earningGraph'
// import UploadedSongs from './sections/uploadedSongs'
// import UploadedAlbums from './sections/uploadedAlbums'
import PlayCount from './sections/playsChart'
import FollowersChart from './sections/followersCount'
// import { AnalyticsCountFetchFail } from '../../../actions/artist-dashboard';
//end dashboard sections



const Dashboard = props => {

  const {
    // analytics count related
    totalAnalyticsCount,
    fetchAnalyticsCounts,
    loadingAnalyticsCount,
    //totalearnings
    fetchTotalEarnings,
    totalEarning,
    LoadingTotalEarnings,
    // user profile related
    userProfile,
    loadingUserProfile,
    //popular songs
    fetchPopularSongs,
    loadingPopularSongs,
    popularSongs,

    // fetch Followers
    fetchTotalFollowers,
    totalFollowers,
    loadingTotalFollowers,

    // total play counts
    fetchTotalPlayCounts,
    loadingTotalPlayCounts,
    totalPlayCounts,

    // set Song play and analytics
    setCurrentPlaySong,
    setIsPlayerPlaying,

  } = props

  useEffect(() => {
    fetchAnalyticsCounts();
    fetchPopularSongs();
  }, [])// eslint-disable-line



  
  return (
    <section className="row-main home-layout">

      {loadingUserProfile && loadingAnalyticsCount ?
        <>
          <Skeleton active paragraph={false} width={200} />
          <Skeleton active paragraph={false} width={400} />
          <Skeleton active paragraph={false} width={400} />
        </>
        :
        <Row>
          <div>
            {/* <p className="text-16-grey">Dashboard</p> */}
            <h4 className="text-28-dg-medium">{getMessageByTimeStamp() + getUserFirstName(userProfile?.profile?.name || "")}</h4>
            <p className="text-16-grey">Here's What happening with your Song's Nepal account today</p>
          </div>

          <div className="ml-auto">
            {/* <div className="transferable-card">
              <h4 className="text-13-black-medium">Transferable Amount : <span className="text-13-primary-medium">Rs {totalAnalyticsCount?.transferableamount}</span></h4>
              <p className="text-13-grey">will be transfered on 3/06/2021</p>
              <p className="transferable-card__viewTransactions" onClick={openViewTransactionsModal}>View all transactions</p>
            </div> */}
          </div>
        </Row>
      }



      {/* // dashboard info summary */}
      <InfoSummary
        totalAnalyticsCount={totalAnalyticsCount}
        loadingAnalyticsCount={loadingAnalyticsCount}
      />
      {/* // dashboard info summary */}


      {/* {// popular songs and user earning graphs} */}
      <section className='section-break-1'>
        <Row gutter={[16, 16]}>
          {/* // section popular songs */}
          <Col xs={24} md={12} lg={10} >
            <PopularSongs
              loadingPopularSongs={loadingPopularSongs}
              popularSongs={popularSongs}
              setCurrentPlaySong={setCurrentPlaySong}
              setIsPlayerPlaying={setIsPlayerPlaying}
            />
          </Col>
          {/* end section popular songs */}
          {/* section user earning graph */}
          <Col xs={24} md={12} lg={14}>
            <h4 className="text-18-black-medium">Amount earned</h4>
            <Card className="side-card list-card height-auto">
              <EarningGraphs
                fetchTotalEarnings={fetchTotalEarnings}
                totalEarning={totalEarning}
                LoadingTotalEarnings={LoadingTotalEarnings}
              />
            </Card>
          </Col>
          {/* end user earning graph/ */}
        </Row>
      </section>
      {/* {// popular songs and user earning graphs} */}

      <section className='section-break-1'>
        <Row gutter={[16, 16]}>
          {/* followers count */}
          <Col xs={24} md={12} lg={12} >
            <h4 className="text-18-black-medium">Followers Summary</h4>
            <Card className="side-card list-card height-auto">
              <FollowersChart
                fetchTotalFollowers={fetchTotalFollowers}
                totalFollowers={totalFollowers}
                loadingTotalFollowers={loadingTotalFollowers}
              />
            </Card>
          </Col>
          {/* // Play counts */}
          <Col xs={24} md={12} lg={12} >
            <h4 className="text-18-black-medium">Play Counts</h4>
            <Card className="side-card list-card height-auto">
              <PlayCount
                fetchTotalPlayCounts={fetchTotalPlayCounts}
                totalPlayCounts={totalPlayCounts}
                loadingTotalPlayCounts={loadingTotalPlayCounts}
              />
            </Card>
          </Col>
        </Row>
      </section>


      {/* user uploaded songs */}
      {/* <UploadedSongs/> */}
      {/* end user uploaded songs */}

      {/* user uploaded albums */}
      {/* <UploadedAlbums/> */}
      {/* end user uploaded albums */}

      {/* <Modal
        title="Transactions history"
        visible={isTransactionModalVisible}
        // onOk={handleOk}
        onCancel={handleModalCancel}
        footer={null}

      >
        {
          totalAnalyticsCount && (
            <Table
              dataSource={totalAnalyticsCount ? totalAnalyticsCount?.balance?.transaction_logs : null}
              columns={columns}
              pagination={
                {
                  pageSize: 10,
                }
              } />)
        }
      </Modal> */}

    </section>
  )
}

export default Dashboard
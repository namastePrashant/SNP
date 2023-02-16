import React from 'react';
import Song from '../../../../assets/Images/song.svg'
import Dollar from '../../../../assets/Images/dollar.svg'
import Followers from '../../../../assets/Images/followers.svg'
import Headphone from '../../../../assets/Images/headphones.svg'
import InfoCard from '../../card/info'
import { Row, Col } from 'antd'
import DIskeleton from '../../../Common/skeletons/dashboardInfoCard'

const InfoSummary = props => {

  const { totalAnalyticsCount, loadingAnalyticsCount } = props
  return (
    <>
      <section className="section-break-3-1">
        <Row gutter={[16, 16]}>
          {
            loadingAnalyticsCount ?
              <DIskeleton item={4} /> :
              <>
                <Col xs={24} md={12} lg={6}
                  className="info-summary__col"
                >
                  <InfoCard
                    title="My songs"
                    count={totalAnalyticsCount?.songscount}
                    icon={Song}
                  />
                </Col>
                <Col xs={24} md={12} lg={6}
                  className="info-summary__col"
                >
                  <InfoCard
                    title="Total songs listens"
                    count={totalAnalyticsCount?.songsListened}
                    icon={Headphone}
                  />
                </Col>
                <Col xs={24} md={12} lg={6}
                  className="info-summary__col"
                >
                  <InfoCard
                    title="My followers"
                    count={totalAnalyticsCount?.followerscount}
                    icon={Followers}
                  />
                </Col>
                <Col xs={24} md={12} lg={6}
                  className="info-summary__col"
                >
                  <InfoCard
                    title="Total amount earned "
                    secondaryTitle="till now"
                    count={totalAnalyticsCount?.totalearned}
                    icon={Dollar}
                  />
                </Col>
              </>
          }
        </Row>
      </section>
    </>
  )
}

export default InfoSummary
import React, { useEffect, useState } from 'react';
import { Row, Col, Progress, DatePicker } from 'antd';
import { NepaliNS,
  //  getYearMonth,
    disableFutureTimeDateSelect } from '../../../../utils/commonUtils';
import AOSkeleton from '../../../Common/skeletons/analyticsInfoCard';
import { calculatePercentage } from '../../../../utils/commonUtils';
import moment from 'moment';

const Overview = props => {


  const {
    loadingAnalyticsCounts,
    analyticsCounts,
    fetchAnalyticsCounts,
  } = props



  const [analytics, setAnalytics] = useState({
    followers: { percent: 0, improvement: false },
    direct_play_count: { percent: 0, improvement: false },
    list_play_count: { percent: 0, improvement: false },
    total_earn_count: { percent: 0, improvement: false },
  })

  useEffect(() => {
    // console.log("analyticsCounts",analyticsCounts)
    if (analyticsCounts) {
      const data = analyticsCounts?.analytics
      setAnalytics({
        followers: calculatePercentage(data?.previous_month?.followers_count, data?.current_month?.followers_count),
        direct_play_count: calculatePercentage(data?.previous_month?.direct_play_count, data?.current_month?.direct_play_count),
        list_play_count: calculatePercentage(data?.previous_month?.list_play_count, data?.current_month?.list_play_count),
        total_earn_count: calculatePercentage(data?.previous_month?.total_earn_count, data?.current_month?.total_earn_count),
      })
    }
  }, [analyticsCounts])


  const onDateChange = (date, dateString) => {
    fetchAnalyticsCounts(dateString)
  }

  useEffect(() => {

  }, [])

  // const getPercentChange = (prevMonthData, currentMonthData) => {

  //   // let prevMonth=0;
  //   // let currentMonth=9;

  //   //  if previous month data is 0, percentage change is infinity. Hence the total change is shown as percentage change
  //   if (prevMonthData === 0) {

  //     let changeInData = currentMonthData;
  //     return (changeInData >= 100) ? "+ 100%" : "+ " + changeInData + "%";

  //   } else if (currentMonthData < prevMonthData) {

  //     let difference = prevMonthData - currentMonthData;
  //     let changePercentage = (difference / prevMonthData) * 100;

  //     return "-" + changePercentage + "%";

  //   } else if (currentMonthData > prevMonthData) {

  //     let difference = currentMonthData - prevMonthData;
  //     let changePercentage = (difference / prevMonthData) * 100;

  //     return "+" + changePercentage + "%";
  //   }
  // }

  return (
    <>
      <h4 className="text-20-black">Overview
      <span className='float-right'>
          <DatePicker
            className="sn-datapicker  sn-datapicker--large"
            onChange={onDateChange}
            disabledDate={disableFutureTimeDateSelect}
            picker="month"
            defaultValue={moment(new Date(), 'yyyy-mm')}
          />
        </span>
      </h4>
      <div className="section-break-1">

        {
          !loadingAnalyticsCounts && analyticsCounts ?
            <Row gutter={[16, 16]} className='w-100'>
              <Col lg={12} xl={6} md={12} sm={12} xs={24}
                className="info-summary__col"
              >
                <div className="info-summary-card">
                  <div className="info-summary-card__details">
                    <Row gutter={[8, 8]} className="info-summary-card__details__row">
                      <Col span={18} className="info-summary-card__details__counts">
                        <p className='text-13'>Followed Users 
                        {/* ({getYearMonth(analyticsCounts?.analytics?.current_month.date)}) */}
                        </p>
                        <h4 className='text-28-black-medium'>{NepaliNS(analyticsCounts?.analytics?.current_month?.followers_count)}</h4>
                      </Col>
                      <Col span={6}>
                        <p className='text-13-grey'>Total</p>
                        <p className='text-15-green'>

                          {analytics?.followers?.improvement ? '+' : '-'}
                          {analytics?.followers?.percent}%
                          {
                            // getPercentChange(analyticsCounts?.analytics.previous_month?.followers_count, analyticsCounts?.analytics.current_month?.followers_count)
                          }

                        </p>
                      </Col>
                    </Row>
                    <Row gutter={[8, 8]} className="info-summary-card__details__row">
                      <Col span={24}>
                        <Progress percent={analytics?.direct_play_count?.percent} />
                        <p className='text-13-grey'>Total plays</p>
                      </Col>
                    </Row>
                    {/* <Progress percent={analytics?.followers?.percent} />
                    <p className='text-13-grey'>Total followed users</p> */}
                  </div>
                </div>
              </Col>


              <Col lg={12} xl={6} md={12} sm={12} xs={24}
                className="info-summary__col"
              >
                <div className="info-summary-card">
                  <div className="info-summary-card__details">
                    <Row gutter={[8, 8]} className="info-summary-card__details__row" >
                      <Col span={18} className="info-summary-card__details__counts">
                        <p className='text-13'>Direct Plays</p>
                        <h4 className='text-28-black-medium'>{NepaliNS(analyticsCounts?.analytics?.current_month?.direct_play_count)}</h4>
                      </Col>
                      <Col span={6}>
                        <p className='text-13-grey'>Total</p>
                        <p className='text-15-green'>
                          {analytics?.direct_play_count?.improvement ? '+' : '-'}{analytics?.direct_play_count?.percent}%
                          {
                            // getPercentChange(analyticsCounts?.analytics.previous_month?.direct_play_count, analyticsCounts?.analytics.current_month?.direct_play_count)
                          }
                        </p>
                      </Col>
                    </Row>

                    <Row gutter={[8, 8]} className="info-summary-card__details__row">
                      <Col span={24}>
                        <Progress percent={analytics?.direct_play_count?.percent} />
                        <p className='text-13-grey'>Total plays</p>
                      </Col>
                    </Row>

                    {/* <Progress percent={analytics?.direct_play_count?.percent} />
                    <p className='text-13-grey'>Total plays</p> */}
                  </div>
                </div>
              </Col>


              <Col lg={12} xl={6} md={12} sm={12} xs={24}
                className="info-summary__col"
              >
                <div className="info-summary-card">
                  <div className="info-summary-card__details">
                    <Row gutter={[8, 8]} className="info-summary-card__details__row">
                      <Col span={18} className="info-summary-card__details__counts">
                        <p className='text-13'>Playlist Plays</p>
                        <h4 className='text-28-black-medium'>{NepaliNS(analyticsCounts?.analytics?.current_month?.list_play_count)}</h4>
                      </Col>
                      <Col span={6}>
                        <p className='text-13-grey'>Total</p>
                        <p className='text-15-green'>

                          {analytics?.list_play_count?.improvement ? '+' : '-'}{analytics?.list_play_count?.percent}%
                          {
                            // getPercentChange(analyticsCounts?.analytics.previous_month?.list_play_count, analyticsCounts?.analytics.current_month?.list_play_count)
                          }
                        </p>
                      </Col>
                    </Row>
                    <Row gutter={[8, 8]} className="info-summary-card__details__row">
                      <Col span={24}>
                        <Progress percent={analytics?.direct_play_count?.percent} />
                        <p className='text-13-grey'>Total plays</p>
                      </Col>
                    </Row>
                    {/* <Progress percent={analytics?.list_play_count?.percent} />
                    <p className='text-13-grey'>Total plays</p> */}
                  </div>
                </div>
              </Col>


              <Col lg={12} xl={6} md={12} sm={12} xs={24}
                className="info-summary__col"
              >
                <div className="info-summary-card">
                  <div className="info-summary-card__details">
                    <Row gutter={[8, 8]} className="info-summary-card__details__row">
                      <Col span={18} className="info-summary-card__details__counts">
                        <p className='text-13'>Amount Earned
                        {/* ({getYearMonth(analyticsCounts?.analytics?.current_month.date)})  */}
                        </p>
                        <h4 className='text-28-black-medium'>{NepaliNS(analyticsCounts?.analytics?.current_month?.total_earn_count)}</h4>
                      </Col>
                      <Col span={6}>
                        <p className='text-13-grey'>Total</p>
                        <p className='text-15-green'>
                          {analytics?.direct_play_count?.improvement ? '+' : '-'}{analytics?.total_earn_count?.percent}%
                          {
                            // getPercentChange(analyticsCounts?.analytics.previous_month?.total_earn_count, analyticsCounts?.analytics.current_month?.total_earn_count)
                          }
                        </p>
                      </Col>
                    </Row>
                    <Row gutter={[8, 8]} className="info-summary-card__details__row">
                      <Col span={24}>
                        <Progress percent={analytics?.direct_play_count?.percent} />
                        <p className='text-13-grey'>Total plays</p>
                      </Col>
                    </Row>
                    {/* <Progress percent={analytics?.total_earn_count?.percent} />
                    <p className='text-13-grey'>Total Earned</p> */}
                  </div>
                </div>
              </Col>
            </Row>
            :
            <Row gutter={[16, 16]} className='w-100'>
              <AOSkeleton items={4} />
            </Row>
        }

      </div>
    </>
  )
}

export default Overview
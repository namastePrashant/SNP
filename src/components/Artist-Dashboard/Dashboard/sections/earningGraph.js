import React, { useEffect} from 'react'
import { Row, Col, DatePicker } from 'antd'
import { Line } from 'react-chartjs-2'
import { ChartSetting } from '../../../../utils/chartSetting'
// import { getMonth, thousand } from '../../../../utils/commonUtils'
import NoTransactions from '../../../../assets/Images/no-tansactions.svg'
import LoadingSVG from '../../../../assets/Images/loadMore.svg';
import moment from "moment";

const EarningGraphs = props => {

  const {
    fetchTotalEarnings,
    totalEarning,
    LoadingTotalEarnings,
  } = props


  // fetch the total earnings when components mounts
  useEffect(() => {
    fetchTotalEarnings()
  }, [])//eslint-disable-line


  //calculate the total earning sum for the current year
  // const [totalEarningSum, setTotalEarningSum] = useState(undefined);
  // useEffect(() => {
  //   if (Object.keys(totalEarning).length) {
  //     let totalEarningSum = totalEarning.total_earn.reduce((sum, earningPerMonth) => {
  //       return sum += earningPerMonth;
  //     }, 0);
  //     // console.log(totalEarningSum)
  //     setTotalEarningSum(totalEarningSum);
  //   }
  // }, [totalEarning])
  //end calculate the total earning sum for the current year


  //chart settings 
  const settings = ChartSetting(totalEarning.months, totalEarning.total_earn, `Amount earned Rs`, "k","Rs")

  // on year change
  const loadEarningByYear = (date, dateString) => {
    fetchTotalEarnings(dateString)
  }

  const disabledDate = (current) => {
    return current && current > moment().endOf("year");
  }

  return (
    <>
      <div className="col-md-6 mb-1 float-right custom-form">
        <DatePicker
          picker="year"
          onChange={loadEarningByYear}
          disabledDate={disabledDate}
        />
      </div>

      {!LoadingTotalEarnings ?
        totalEarning && Object.keys(totalEarning).length !== 0 ?
          <Line data={settings.data} options={settings.options} />
          :
          <Row className="section-break-2 justify-content-center" style={{ width: "100%" }}>
            <Col span={14}>
              <img src={NoTransactions} alt="" style={{ width: "100%" }} />
            </Col>
            <Col span={24}>
              <p className="text-20-primary-medium text-center">Sorry no transactions found !!</p>
            </Col>
          </Row>
        :
        <Row className="section-break-2 justify-content-center" style={{ width: "100%" }}>
          <Col span={20} className="text-center">
            <img src={LoadingSVG} alt="" />
          </Col>
        </Row>
      }
    </>
  )
}

export default EarningGraphs
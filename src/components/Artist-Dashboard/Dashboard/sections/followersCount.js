import React, { useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { ChartSetting } from '../../../../utils/chartSetting'
import { DatePicker } from 'antd';
import moment from 'moment';


const FollowersChart = props => {

  const {
    fetchTotalFollowers,
    totalFollowers,
    // loadingTotalFollowers,
  } = props;

  useEffect(() => {
    fetchTotalFollowers();
  }, [])//eslint-disable-line

  // const [totalFollowersSum, setTotalFollowersSum] = useState(undefined);

  // useEffect(() => {
  //   if (Object.keys(totalFollowers).length) {
  //     let totalFollowersSum = totalFollowers.followers_count.reduce((sum, earningPerMonth) => {
  //       return sum += earningPerMonth;
  //     }, 0);
  //     console.log(totalFollowersSum)
  //     setTotalFollowersSum(totalFollowersSum);
  //   }
  // }, [totalFollowers])

  const getFollowersByDate = (value, dateString)=>{
    console.log("value, dateString",value, dateString)
    // let year = event.target.value
    fetchTotalFollowers(dateString);
  }
  // const settings = ChartSetting(['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'],[100,2,1,300,350,320,400,455,480,500,500,5500],"followers","k")
  const settings = ChartSetting(totalFollowers.months, totalFollowers.followers_count, `Followers `, "k")

  const disabledDate = (current)=>{    
    return current && current> moment().endOf("year");
  }

  return (
    <>
      <div className="col-md-6 mb-1 float-right custom-form">
        <DatePicker
          picker="year"
          onChange={getFollowersByDate}
          disabledDate={disabledDate}          
        />
      </div>
      <Line data={settings.data} options={settings.options} />
    </>
  )
}

export default FollowersChart
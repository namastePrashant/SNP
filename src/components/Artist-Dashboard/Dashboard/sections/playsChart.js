import React, { useEffect, useState } from 'react';
import { DatePicker,Col,Row } from 'antd';
import { Doughnut } from 'react-chartjs-2';
import moment from 'moment';
import { disableFutureTimeDateSelect } from '../../../../utils/commonUtils';
import NoTransactions from '../../../../assets/Images/no-tansactions.svg';
import LoadingSVG from '../../../../assets/Images/loadMore.svg';



const { RangePicker } = DatePicker

const PlaysChart = props => {

  const {
    fetchTotalPlayCounts,
    totalPlayCounts,
    loadingTotalPlayCounts,
  }=props;

  const [directPlays, setDirectPlays] = useState(undefined);
  const [playlistPlays, setPlaylistPlays] = useState(undefined);

  useEffect(() => {
    if (Object.keys(totalPlayCounts).length) {
      
      setDirectPlays(totalPlayCounts.single_counts);
      setPlaylistPlays(totalPlayCounts.playlist_counts);
    }
  }, [totalPlayCounts])//eslint-disable-line

  // console.log("totalPlayCounts", totalPlayCounts);

  const data = {
    labels: [`Direct Plays: ${directPlays}`, `Playlist plays: ${playlistPlays}`],
    datasets: [
      {
        label: 'k',
        // label: '',
        data: [totalPlayCounts.single_counts, totalPlayCounts.playlist_counts],
        // data: [1,1],
        backgroundColor: [
          '#8c61fe',
          '#d9cef5',
        ],
        borderColor: [
          '#8c61fe',
          '#d9cef5',
        ],
        borderWidth: 1,
      },
    ],
  }

  useEffect(()=>{
    fetchTotalPlayCounts();
  },[])//eslint-disable-line


  const options = {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          //get the concerned dataset
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var currentValue = dataset.data[tooltipItem.index];

          // return currentValue + "k listens";
          return currentValue + " listens";
        }
      }
    }
  }

  const getPlayCounts = (startEndDate,  dateStrings)=>{
    console.log("startDate, endDate, dateStrings", startEndDate, dateStrings);

    let startDate= dateStrings[0];
    let endDate= dateStrings[1];

    fetchTotalPlayCounts(startDate, endDate);    
  }

  return (
    <>
      <div className=" col-md-8  mb-1  custom-form float-right">
        <RangePicker
          ranges={{
            Today: [moment(), moment()],
            'This Week': [moment().startOf('week'), moment().endOf('week')],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
          }}

          className="sn-datapicker"
          onChange={getPlayCounts}
          disabledDate={disableFutureTimeDateSelect}
        />
      </div>
      {
        !loadingTotalPlayCounts?
        totalPlayCounts && totalPlayCounts.single_counts === 0 && totalPlayCounts.playlist_counts ===0 ? 
        <Row className="section-break-2 justify-content-center" style={{ width: "100%" }}>
          <Col span={14}>
            <img src={NoTransactions} alt="" style={{ width: "100%" }} />
          </Col>
          <Col span={24}>
            <p className="text-20-primary-medium text-center">Sorry, your songs hasn't been played yet!</p>
          </Col>
        </Row>:
        <Doughnut data={data} options={options} />:
        <Row className="section-break-2 justify-content-center" style={{ width: "100%" }}>
          <Col span={20} className="text-center">
            <img src={LoadingSVG} alt="" />
          </Col>
        </Row>
      }
     
    </>
  )
}

export default PlaysChart;
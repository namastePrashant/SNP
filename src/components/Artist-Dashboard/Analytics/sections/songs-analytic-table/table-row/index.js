import React, { useState, useEffect } from 'react'
import Dummy from '../../../../../../assets/Images/dummySN.png'
import AngleDown from '../../../../../../assets/Images/angle-down.png'
import { Col, Row, Tabs } from 'antd'
import { Line } from 'react-chartjs-2'

import { CSSTransition } from 'react-transition-group'; // ES6
import { formatDate } from '../../../../../../utils/dateFormats'
import { disableFutureTimeDateSelect, NepaliNS } from '../../../../../../utils/commonUtils'
import { Link } from 'react-router-dom';
import LoadingSVG from '../../../../../../assets/Images/loadMore.svg';
import { DatePicker } from 'antd';
import { useSelector } from 'react-redux'
import {IoCaretForwardCircleOutline,IoPauseCircleOutline} from 'react-icons/io5';


const { TabPane } = Tabs;

const TableRow = props => {

  const {
    song,
    index,
    fetchPlayCount,

    totalSingleSongPlayCount,
    loadingTotalSingleSongPlayCount,
    // loadingTotalSingleSongPlayCountId,

    loadingActiveSongAnalyticsId,

    fetchAmountEarned,
    loadingTotalSingleSongEarning,
    // loadingTotalSingleSongEarningId,
    totalSingleSongEarning,
    // currentSongId,

    // set Song play and analytics
    setCurrentPlaySong,
    // setIsPlayerPlaying,
  } = props

  const [collapsable, setCollapsable] = useState(false) // collapsable for chart

  const [fetchKey, setFetchKey] = useState("listen_count");

  const [totalDirectPlayCount, setTotalDirectPlayCount] = useState(undefined);
  const [totalPlaylistPlayCount, setTotalPlaylistPlayCount] = useState(undefined);

  const [totalDirectEarn, setTotalDirectEarn] = useState(undefined);
  const [totalPlaylistEarn, setTotalPlaylistEarn] = useState(undefined);

  const getArrayToSum=(arrayToSum)=>{
    let totalSum = arrayToSum.reduce((sum, arrayValue) => {
      return sum += arrayValue;
    }, 0);
    return totalSum;
  }

  useEffect(() => {
    if (Object.keys(totalSingleSongPlayCount).length) {
      let totalDirectPlayCountSum= getArrayToSum(totalSingleSongPlayCount.single_count);
      let totalPlaylistPlayCountSum= getArrayToSum(totalSingleSongPlayCount.playlist_count);
      setTotalDirectPlayCount(totalDirectPlayCountSum);
      setTotalPlaylistPlayCount(totalPlaylistPlayCountSum);
    }
  }, [totalSingleSongPlayCount]) //eslint-disable-line

  useEffect(() => {
    if (Object.keys(totalSingleSongEarning).length) {
      let totalDirectPlayEarnSum= getArrayToSum(totalSingleSongEarning.single_count);
      let totalPlaylistPlayEarnSum= getArrayToSum(totalSingleSongEarning.playlist_count);
      setTotalDirectEarn(totalDirectPlayEarnSum);
      setTotalPlaylistEarn(totalPlaylistPlayEarnSum);
    }
  }, [totalSingleSongEarning])//eslint-disable-line

  // show graph
  const showGraph = () => {
    setCollapsable(!collapsable);

    // getPlayCount only when opened
    // check if current song id and is the value of count or earning is already there 
    // if (!collapsable) {
    //   fetchPlayCount("listen_count", song.id)
    //   setCurrentSongId(song.id);
    // }

    // check if empty or same song analytics and is collapsed
    if ((Object.keys(totalSingleSongPlayCount).length === 0 || totalSingleSongPlayCount.song_id !== song.id) && !collapsable) {
      fetchPlayCount("listen_count", song.id)
    }
  }

  useEffect(() => {
    if (loadingActiveSongAnalyticsId !== song.id) {
      setCollapsable(false);
    }
  }, [loadingActiveSongAnalyticsId])//eslint-disable-line



  const getSongAnalyticsByYear = (data, dateString) => {
    // check current type of analytics
    if (fetchKey === "listen_count") {
      fetchPlayCount(fetchKey, song.id, dateString)
    } else if (fetchKey === "amount") {
      fetchAmountEarned(fetchKey, song.id, dateString)
    }

  }

  const handleAnalyticsTabChange = (key) => {
    if (key === "playCount") {
      // fetch play Count
      // check if current song id and is the value of count or earning is already there 
      if (Object.keys(totalSingleSongPlayCount).length === 0 || totalSingleSongPlayCount.song_id !== song.id) {
        fetchPlayCount("listen_count", song.id)
        setFetchKey("listen_count");
      }

    } else if (key === "amountEarned") {
      //fetch amountEarned
      // check if current song id and is the value of count or earning is already there 
      if (Object.keys(totalSingleSongEarning).length === 0 || totalSingleSongEarning.song_id !== song.id) {
        fetchAmountEarned("amount", song.id);
        setFetchKey("amount")
      }
    }
  }


  // chart js settings
  const data = {
    // labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
    labels: totalSingleSongPlayCount.months,
    datasets: [
      {
        label: `Direct plays: ${totalDirectPlayCount} `,
        // data: [15000, 62000, 54000, 25000, 31000, 25000, 11000, 14000, 23000, 32000, 32000, 40000],
        data: totalSingleSongPlayCount.single_count,
        fill: false,
        backgroundColor: '#406EE0',
        borderColor: '#406EE0',
        yAxisID: 'y-axis-1',
        lineTension: 0,
      },
      {
        label: `Playlist plays:  ${totalPlaylistPlayCount}`,
        // data: [11000, 14000, 23000, 32000, 32000, 40000, 25000, 31000, 25000, 31000, 31000, 25000],
        data: totalSingleSongPlayCount.playlist_count,
        fill: false,
        backgroundColor: '#6ACBFF',
        borderColor: '#6ACBFF',
        // yAxisID: 'y-axis-2',
        yAxisID: 'y-axis-1',
        lineTension: 0,
      },
    ],
  }

  const options = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,

          position: 'left',
          id: 'y-axis-1',
          gridLines: {
            lineWidth: 0,
            zeroLineWidth: 1,
            // display: false,
            // drawBorder: false,
          },
          ticks: {
            beginAtZero: true,
            callback: function (value, index, values) {
              // return value + 'k';
              // return value;
              if (value % 1 === 0) {return value;}
            },
            fontSize: 14,
            fontFamily: 'poppins'
          },
        },

        // {
        //   type: 'linear',
        //   display: true,
        //   position: 'right',
        //   id: 'y-axis-2',
        //   gridLines: {
        //     lineWidth: 0,
        //     zeroLineWidth: 1,
        //     // display: false,
        //     // drawBorder: false,
        //   },
        //   ticks: {
        //     beginAtZero: true,
        //     callback: function (value, index, values) {
        //       // return value + ' k';
        //       return value;
        //     },
        //     fontSize: 14,
        //     fontFamily: 'poppins'
        //   },
        // },
      ],
      xAxes: [
        {
          id: 'x-axis-1',
          gridLines: {
            lineWidth: 0,
            zeroLineWidth: 1
          },
          ticks: {
            fontFamily: 'poppins'
          }
        },
        {
          display: false,
          id: 'x-axis-2',
          gridLines: {
            lineWidth: 0,
            zeroLineWidth: 1
          },
          ticks: {
            fontFamily: 'poppins'
          }
        }
      ],
    },
    tooltips: {
      callbacks: {
        label: (tooltipItems, data) => {
          // return data.datasets[tooltipItems.datasetIndex].label + " " + tooltipItems.yLabel + "k"
          return data.datasets[tooltipItems.datasetIndex].label + " " + tooltipItems.yLabel
        }
      }
    },
    legend: {
      labels: {
        fontFamily: "poppins"
      }
    }
  }


  const data2 = {
    // labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
    labels: totalSingleSongEarning.months,
    datasets: [
      {
        label: `Direct play earns: Rs. ${totalDirectEarn}`,
        // data: [15, 62, 54, 25, 31, 25, 11, 10, 23, 32, 32, 40],
        data: totalSingleSongEarning.single_count,
        fill: false,
        backgroundColor: '#406EE0',
        borderColor: '#406EE0',
        yAxisID: 'y-axis-1',
        lineTension: 0,
      },
      {
        label: `Playlist play earns: Rs. ${totalPlaylistEarn}`,
        // data: [11, 14, 23, 32, 32, 40, 25, 31, 25, 31, 31, 25],
        data: totalSingleSongEarning.playlist_count,
        fill: false,
        backgroundColor: '#6ACBFF',
        borderColor: '#6ACBFF',
        // yAxisID: 'y-axis-2',
        yAxisID: 'y-axis-1',
        lineTension: 0,
      },
    ],
  }

  const options2 = {
    scales: {
      yAxes: [
        {
          type: 'linear',
          display: true,

          position: 'left',
          id: 'y-axis-1',
          gridLines: {
            lineWidth: 0,
            zeroLineWidth: 1
          },
          ticks: {
            beginAtZero: true,
            callback: function (value, index, values) {
              // return "Rs" + value + 'k';
              // return "Rs" + value;              
              if (value % 1 === 0) {return "Rs" + value;}
            },
            fontSize: 14,
            fontFamily: 'poppins'
          },
        },

        //   {
        //     type: 'linear',
        //     display: false,
        //     position: 'right',
        //     id: 'y-axis-2',
        //     gridLines: {
        //       lineWidth: 0,
        //       zeroLineWidth: 1
        //     },
        //     ticks: {
        //       beginAtZero: true,
        //       callback: function (value, index, values) {
        //         // return "Rs" + value + ' k';
        //         return "Rs" + value;
        //       },
        //       fontSize: 14,
        //       fontFamily: 'poppins'
        //     },
        //   },
      ],
      xAxes: [
        {
          id: 'x-axis-1',
          gridLines: {
            lineWidth: 0,
            zeroLineWidth: 1
          },
          ticks: {
            fontFamily: 'poppins'
          }
        },
        {
          display: false,
          id: 'x-axis-2',
          gridLines: {
            lineWidth: 0,
            zeroLineWidth: 1
          },
          ticks: {
            fontFamily: 'poppins'
          }
        }
      ],
    },
    tooltips: {
      callbacks: {
        label: (tooltipItems, data) => {
          // return data.datasets[tooltipItems.datasetIndex].label + " Rs" + tooltipItems.yLabel + "k"
          return data.datasets[tooltipItems.datasetIndex].label + " Rs" + tooltipItems.yLabel
        }
      }
    },
    legend: {
      labels: {
        fontFamily: "poppins"
      }
    }
  }

  const setSongToPlay = (songDetails) => {
    let songData = {
      songData: songDetails,
      referrer: "single",
      isPlaying: false,
    };

    setCurrentPlaySong(songData);
  };


   // state
   const state = useSelector(state=>{
    const {currentPlay} = state;
    return currentPlay;
  });
  const {songId,isPlayerPlaying}  = state;
  // end redux state

  return (
    <>
      <tbody>
        <tr onClick={showGraph}>
          <td className='text-20-grey-medium'>{index < 9 ? "0" + (index + 1) : index + 1}</td>
          <td>
            <Row gutter={[10, 10]} className="top-song mb-0 display-flex-ac">
              <Col xl={3} sm={24} xs={24} className="mw-none">
                <img
                  src={song.cover_image || Dummy}
                  alt="cover-img"
                  className="resp-img list-card__img"
                  onClick={(e) => {
                    setSongToPlay(song);
                    e.stopPropagation();
                  }}
                />
              </Col>
              <Col xl={16} sm={22} className="song-info list-card__info">
                <div>
                  <div className="song-name-wrapper">
                    <span className="list-card__info-title song-name"
                      
                      onClick={(e) => {
                        setSongToPlay(song);
                        e.stopPropagation();
                      }}
                    >
                      {song.title}

                      {
                        isPlayerPlaying && songId === song?.id ?
                        <IoPauseCircleOutline className="ml-1"/>:
                        <IoCaretForwardCircleOutline className="ml-1"/>
                      }
                    </span>
                  </div>

                  <div className="song-artist ">
                    <span className="list-card__info-item text-11-grey">
                      {
                        song.album && song?.album?.title
                          ?
                          (
                            <Link to={`/album/${song?.album?.id}`}>
                              {song?.album?.title}
                            </Link>
                          )
                          :
                          ("Singles")
                      }
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
          </td>
          <td>{NepaliNS(song.playcountdetails.direct_play) || 0} plays</td>
          <td>{NepaliNS(song.playcountdetails.playlist_play) || 0} plays</td>
          <td>{song.favourites_count || 0}</td>
          <td>{formatDate(song.created_at, "MMM DD, YYYY")}</td>
          <td className="text-14-primary-medium">
            {/* NRS 52,000             */}

            NRS {song.transationdetails.direct_earn + song.transationdetails.playlist_earn}
          </td>
          <td>
            <img src={AngleDown} className={collapsable ? "" : "rotate-180"} alt="angle-down" />
          </td>
        </tr>

        <CSSTransition in={collapsable} unmountOnExit timeout={300}
          classNames="song-single-graph">
          <tr >
            <td colSpan="8" >

              <h4 className="text-20-black-medium text-center dashboard-analytics__song-row">
                {song.title} - {song.album && song?.album?.title ? song?.album?.title : "Singles"}

                <DatePicker
                  onChange={getSongAnalyticsByYear}
                  picker="year"
                  className="dashboard-analytics__song-row__datePicker sn-datapicker"
                  disabledDate={disableFutureTimeDateSelect}
                />
              </h4>

              <Tabs defaultActiveKey="1" tabPosition={'right'} onChange={handleAnalyticsTabChange}>
                <TabPane
                  tab="Play count"
                  key="playCount"
                >
                  <Row className="section-break-1 justify-content-center">

                    {
                      loadingTotalSingleSongPlayCount
                        ?
                        (
                          <Col span={18} className="text-center">
                            <img src={LoadingSVG} alt="" />
                          </Col>
                        )
                        :
                        (
                          <Col span={18}>
                            <Line data={data} options={options} />
                          </Col>
                        )
                    }

                  </Row>
                </TabPane>

                <TabPane
                  tab="Amount Earned"
                  key="amountEarned"
                >
                  <Row className="section-break-1 justify-content-center">

                    {
                      loadingTotalSingleSongEarning
                        ?
                        (
                          <Col span={18} className="text-center">
                            <img src={LoadingSVG} alt="" />
                          </Col>
                        )
                        :
                        (
                          <Col span={18}>
                            <Line data={data2} options={options2} />
                          </Col>
                        )
                    }

                  </Row>
                </TabPane>
              </Tabs>

            </td>
          </tr>
        </CSSTransition>


      </tbody>
    </>
  )
}

export default TableRow
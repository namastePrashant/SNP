import React from 'react'
import { Row, DatePicker, Input } from 'antd'
import TableRow from './table-row'
import SLskeleton from '../../../../Common/skeletons/albumTableList'
import moment from 'moment'
import ScrollPagination from '../../../../Common/ScrollPagination'
import { disableFutureTimeDateSelect } from '../../../../../utils/commonUtils'
const { RangePicker } = DatePicker

const SongsAnalyticTable = (props) => {

  const {
    //songs related
    loadingMySongs,
    mySongs,
    fetchMySongs,
    hasMoreSongs,
    loadingMoreSongs,
    currentSongPage,
    fetchMoreSongs,

    fetchPlayCount,
    totalSingleSongPlayCount,
    loadingTotalSingleSongPlayCount,
    // loadingTotalSingleSongPlayCountId,

    loadingActiveSongAnalyticsId,

    fetchAmountEarned,
    loadingTotalSingleSongEarning,
    // loadingTotalSingleSongEarningId,
    totalSingleSongEarning,

    setCurrentPlaySong,
    setIsPlayerPlaying,
  } = props


  const [dateRange, setDateRange] = React.useState({ start: "", end: "" })
  const [searchKey, setSearchKey] = React.useState('')


  const onRangeSelected = (date, dateString) => {
    fetchMySongs({ start: dateString[0], end: dateString[1] })
    if (dateString.length) setDateRange({ start: dateString[0], end: dateString[1] })
    else setDateRange({ start: "", end: "" })
  }


  const searchMySong = (e) => {
    setSearchKey(e.target.value)
    fetchMySongs(dateRange, e.target.value)
  }


  return (
    <>
      <section className="section-break-1 dashboard-analytics__songs-list">
        <Row>
          <span className="ml-auto">
            <span className="ml-auto">
              <Row>
                <span
                  className="custom-form  dashboard-analytics__songs-list__filter "
                >
                  <Input placeholder="Search Songs" onChange={searchMySong} />
                </span>
                <span
                  className="custom-form dashboard-analytics__songs-list__filter"
                >
                  <RangePicker
                    ranges={{
                      Today: [moment(), moment()],
                      'This Week': [moment().startOf('week'), moment().endOf('week')],
                      'This Month': [moment().startOf('month'), moment().endOf('month')],
                    }}

                    className="sn-datapicker" onChange={onRangeSelected}
                    disabledDate={disableFutureTimeDateSelect}
                  />
                </span>
              </Row>
            </span>
          </span>
        </Row>

        <Row className="section-break-1 overflow-auto overflow-scrollbar-small">
          <table className="songs-table">
            <thead>
              <tr className='th-wrapper'>
                <th>S.N.</th>
                <th>Title</th>
                <th>Direct Plays</th>
                <th>Playlist Plays</th>
                <th>Favourite</th>
                <th>Day Added</th>
                <th>Income</th>
                <th></th>
              </tr>
            </thead>
            {
              loadingMySongs ?
                <SLskeleton items={5} cols={8}/> :
                mySongs.length ?
                  mySongs.map((song, index) => (
                    <TableRow
                      song={song}
                      key={song.id}
                      index={index}
                      // currentSongId
                      totalSingleSongPlayCount={totalSingleSongPlayCount}
                      loadingTotalSingleSongPlayCount={loadingTotalSingleSongPlayCount}
                      // loadingTotalSingleSongPlayCountId={loadingTotalSingleSongPlayCountId}

                      loadingActiveSongAnalyticsId={loadingActiveSongAnalyticsId}

                      loadingTotalSingleSongEarning={loadingTotalSingleSongEarning}
                      // loadingTotalSingleSongEarningId={loadingTotalSingleSongEarningId}
                      totalSingleSongEarning={totalSingleSongEarning}

                      fetchPlayCount={fetchPlayCount}
                      fetchAmountEarned={fetchAmountEarned}

                      // set Song play and analytics
                      setCurrentPlaySong={setCurrentPlaySong}
                      setIsPlayerPlaying={setIsPlayerPlaying}

                    />
                  ))
                  :
                  <tbody>
                    <tr>
                      <td colSpan={7} className="text-center"> Sorry no songs Found</td>
                    </tr>
                  </tbody>
            }

          </table>
          {hasMoreSongs ?
            <ScrollPagination
              current_page={currentSongPage}
              pagination={fetchMoreSongs}
              hasDate={true}
              DateRange={dateRange}
              HasMore={hasMoreSongs}
              loadingMore={loadingMoreSongs}
              searchKey={searchKey}
            /> : ""
          }
        </Row>

      </section>
    </>
  )
}

export default SongsAnalyticTable
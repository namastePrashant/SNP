import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, DatePicker, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import SongListTable from './songLists'
import SongSkeleton from '../../Common/skeletons/albumTableList'
import moment from 'moment'
import ScrollPagination from '../../Common/ScrollPagination'
import {rmEditSong} from '../../../services/artist-dashboard'
import { useDispatch } from 'react-redux'

const { RangePicker } = DatePicker

const MySongs = props => {

  const {
    // album related
    mySongs,
    loadingMySongs,
    fetchMySongs,

    hasMoreSongs,
    loadingMoreSongs,
    currentSongPage,
    fetchMoreSongs,

    setCurrentPlaySong,
    setIsPlayerPlaying,
  } = props

  const [dateRange, setDateRange] = React.useState({ start: "", end: "" })
  const [searchKey, setSearchKey] = React.useState('')

  const onRangeSelected = (date, dateString) => {
    fetchMySongs({ start: dateString[0], end: dateString[1] }, searchKey)
    if (dateString.length) setDateRange({ start: dateString[0], end: dateString[1] })
    else setDateRange({ start: "", end: "" })
  }

  const disabledDate = (current) => {
    return current && current > moment().endOf("day");
  }

  const searchMySong = (e) => {
    setSearchKey(e.target.value)
    fetchMySongs(dateRange, e.target.value)
  }

  //redux
  const dispatch = useDispatch();
  const setCreateMode = () =>{
    dispatch(rmEditSong());
  }

  return (
    <section className='row-main home-layout'>

      <div className="section-break-1 display-flex-ac">
        <h4 className="text-34-black-medium-mb0">My Songs</h4>
        <Link to="/upload-song" className='ml-auto' onClick={setCreateMode}>
          <Button className="btn-gradient" shape="round" icon={<PlusOutlined />} size={'large'}>Add a new Song</Button>
        </Link>
      </div>

      <section className="section-break-1">
        <Row>
          <span className="ml-auto">
            <Row>
              <span className="custom-form custom-form--margin-1 mr-1 ">
                <Input placeholder="Search Songs" onChange={searchMySong} />
              </span>
              <span className="custom-form custom-form--margin-1">
                <RangePicker
                  ranges={{
                    Today: [moment(), moment()],
                    'This Week': [moment().startOf('week'), moment().endOf('week')],
                    'This Month': [moment().startOf('month'), moment().endOf('month')],
                  }}
                  className="sn-datapicker" onChange={onRangeSelected}
                  disabledDate={disabledDate}
                />
              </span>
            </Row>
          </span>
        </Row>

        <Row className="section-break-1 overflow-auto">
          <table className="songs-table">
            <thead>
              <tr className="th-wrapper">
                <th>S.No.</th>
                <th>Title</th>
                <th>Duration</th>
                <th>Listens</th>
                <th>Favourited</th>
                <th>Released date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            {!loadingMySongs ?
              mySongs && mySongs.length ?
                mySongs.map((song, index) => (
                  <SongListTable
                    song={song}
                    index={index}
                    key={song.id}
                    setCurrentPlaySong={setCurrentPlaySong}
                    setIsPlayerPlaying={setIsPlayerPlaying}
                  />
                )) :
                <tbody>
                  <tr>
                    <td colSpan='8' className="text-center" style={{ padding: "1em" }}>Sorry no songs found!!</td>
                  </tr>
                </tbody>
              :
              <SongSkeleton item={5} cols={8} />
            }


          </table>

          {
            !loadingMySongs &&
              hasMoreSongs ?
              (
                <>
                  <ScrollPagination
                    current_page={currentSongPage}
                    pagination={fetchMoreSongs}
                    hasDate={true}
                    DateRange={dateRange}
                    HasMore={hasMoreSongs}
                    loadingMore={loadingMoreSongs}
                    searchKey={searchKey}
                  />

                </>
              ) : ""
          }
        </Row>

      </section>



    </section>
  )
}


export default MySongs
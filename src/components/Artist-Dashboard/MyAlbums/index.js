import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment';
import { Button, Row, DatePicker, Input } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import AlbumList from './albumlist'
import ATSkeleton from '../../Common/skeletons/albumTableList'
import ScrollPagination from '../../Common/ScrollPagination'
import { useDispatch } from 'react-redux';
import {rmEditAlbum} from '../../../services/artist-dashboard';

const { RangePicker } = DatePicker

const MyAlbums = props => {

  const dispatch = useDispatch();
  const {
    myAlbumsLoading,
    myAlbums,
    fetchMyalbums,
    hasMoreAlbums,
    loadingMoreAlbums,
    currentAlbumPage,
    fetchMoreAlbums
  } = props

  const [dateRange, setDateRange] = React.useState({ start: "", end: "" })
  const [searchKey, setSearchKey] = React.useState('')


  const onRangeSelected = (date, dateString) => {
    fetchMyalbums({ start: dateString[0], end: dateString[1] }, searchKey)
    if (dateString.length) setDateRange({ start: dateString[0], end: dateString[1] })
    else setDateRange({ start: "", end: "" })
  }

  useEffect(() => {
    fetchMyalbums()
  }, [])//eslint-disable-line

  const searchMyAlbum = (e) => {
    setSearchKey(e.target.value)
    fetchMyalbums(dateRange, e.target.value)
  }

  const disabledDate = (current) => {
    return current && current > moment().endOf("day");
  }



  const setCreateMode = () =>{
    dispatch(rmEditAlbum());
  }


  return (
    <section className='row-main home-layout'>

      <div className="section-break-1 display-flex-ac">
        <h4 className="text-34-black-medium-mb0">My Albums</h4>
        <Link to="/create-album" className='ml-auto' onClick={setCreateMode}>
          <Button className="btn-gradient" shape="round" icon={<PlusOutlined />} size={'large'}>Create new album</Button>
        </Link>
      </div>

      <section className="section-break-1">
        <Row>
          <span className="ml-auto">
            <Row>
              <span className="custom-form custom-form--margin-1 mr-1 mb-1">
                <Input placeholder="Search Albums" onChange={searchMyAlbum} />
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
                <th>Songs</th>
                <th>Durations</th>
                <th>Genre</th>
                <th>Created at</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            {
              myAlbumsLoading ?
                <ATSkeleton item={5} cols={8} />
                :
                myAlbums && myAlbums.length ?
                  <>
                    {myAlbums.map((album, index) => (
                      <AlbumList key={album.id} album={album} index={index} />
                    ))}

                  </>
                  :
                  <tbody>
                    <tr>
                      <td colSpan='8' className="text-center" style={{ padding: "1em" }}>Sorry no album found!!</td>
                    </tr>
                  </tbody>

            }


          </table>
          {hasMoreAlbums ?
            <ScrollPagination
              current_page={currentAlbumPage}
              pagination={fetchMoreAlbums}
              hasDate={true}
              DateRange={dateRange}
              HasMore={hasMoreAlbums}
              loadingMore={loadingMoreAlbums}
              searchKey={searchKey}
            /> : ""
          }

        </Row>

      </section>



    </section>
  )
}


export default MyAlbums
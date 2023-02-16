import React from 'react'
import { Row, Col, Popover } from 'antd'
import { useDispatch } from 'react-redux'
import Dummy from '../../../assets/Images/dummySN.png'
import { formatDate } from '../../../utils/dateFormats'
import { secondsToMinutes , firstCap} from '../../../utils/commonUtils'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
// import CircularLoader from '../../Common/skeletons/circularLoader'
import { editAlbum} from '../../../services/artist-dashboard'
// import { destroy } from '../../../utils/httpUtil'

const AlbumTableList = (props) => {
  const { album, index } = props





  /**
   * 
   * redux function
  */
  const dispatch = useDispatch()
  // const refreshAlbum = useCallback(() => {
  //   dispatch(fetchMyAlbums())
  // }, [dispatch])


  const setEditAlbum = (album)=>{
    dispatch(editAlbum(album))
  }
  /**
   * end redux function
   */

  // const deleteAlbum = async (id) => {
  //   setLoading(true)
  //   try {
  //     await destroy('api/v1/albums/' + id)
  //     setLoading(false)
  //     refreshAlbum()
  //     message.success("Album deleted Successfully")
  //   } catch (e) {
  //     console.log(e.response)
  //     setLoading(false)
  //     message.error("There was some problem deleting the album")
  //   }
  // }

  return (
    <tbody>
      <tr>
        <td>{index + 1}</td>
        <td>
          <Row gutter={[12, 12]} className="top-song mb-0">
            <Col xl={3} sm={24} xs={24} className="mw-none">
              <img src={album?.cover_image || Dummy} alt="" className="resp-img list-card__img" />
            </Col>
            <Col xl={16} sm={22} className="song-info list-card__info display-flex align-items-center">
              <Link to={`/album/${album?.id}`} style={{color:"black"}}>
                <div className="song-name-wrapper">
                  <span className="list-card__info-title song-name">
                    {album?.title}
                  </span>
                </div>
              </Link>
            </Col>
          </Row>
        </td>
        <td>{album?.songs?.length}</td>
        <td>{secondsToMinutes(album?.duration || 0)}</td>
        <td>{album?.genre?.title}</td>
        <td>{formatDate(album?.created_at, 'YYYY MMM DD')}</td>
        <td>
          <div>
            {
              (album?.status === "active")
                ?
                <span className="status__tag status__tag--active">{firstCap(album?.status)}</span>
                :
                <span className="status__tag status__tag--inactive">{firstCap(album?.status)}</span>
            }
          </div>
        </td>
        <td
        // className="display-flex-ac"
        >
          <div className="display-flex-ac">
            <Link to={"/edit-album"} className="display-flex-ac" onClick={()=>setEditAlbum(album)}>
              <FiEdit className="text-20 mr-1" title="Edit" />
            </Link>

           
              <Popover placement="top"
               title={false} content="Please contact administration to perform this action.">
                <FiTrash2 className="text-20" title="Delete" />
              </Popover>
        
          </div>
        </td>
      </tr>
    </tbody>
  )
}

export default AlbumTableList
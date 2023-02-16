import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { Row, Col ,Modal, Form,Input} from 'antd';
import Dummy from '../../../assets/Images/dummySN.png';
import { formatDate } from '../../../utils/dateFormats';
import { secondsToMinutes,firstCap, SetFormData } from '../../../utils/commonUtils';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
// import { destroy } from '../../../utils/httpUtil';
// import CircularLoader from '../../Common/skeletons/circularLoader';
import { editSong,songDeleteRequest } from '../../../services/artist-dashboard';
import {IoCaretForwardCircleOutline,IoPauseCircleOutline} from 'react-icons/io5';
import SpinButton from '../../Common/SpinButton';

const {TextArea} = Input;

const SongListTable = props => {
  const {
    song,
    index,
    // setIsPlayerPlaying,
    setCurrentPlaySong,
  } = props


  const[form] = Form.useForm();


  // const [loading, setLoading] = React.useState(false);

  const setSongToPlay = (songDetails) => {
    let songData = {
      songData: songDetails,
      referrer: "single",
      isPlaying: false,
    };

    setCurrentPlaySong(songData);
  };

  /**
   * 
   * redux function
  */
  const dispatch = useDispatch()
  // // const refreshSongs = useCallback(() => {
  // //   dispatch(fetchMySongs())
  // // }, [dispatch])

  const setEditSong = (song)=>{
    dispatch(editSong(song))
  }
  /**
   * end redux function
   */


  // const deleteSong = async (id) => {
  //   setLoading(true)
  //   try {
  //     await destroy('api/v1/songs/' + id)
  //     setLoading(false)
  //     refreshSongs()
  //     message.success("Song deleted Successfully")
  //   } catch (e) {
  //     console.log(e.response)
  //     setLoading(false)
  //     message.error("There was some problem deleting the song")
  //   }
  // }


  // state
  const state = useSelector(state=>{
    const {currentPlay} = state;
    return currentPlay;
  });
  const {songId,isPlayerPlaying}  = state;
  // end redux state




  // song delete modal
  const [visible,setVisible] = useState(false);
  const [deleteReqSong,setDeleteReqSong] = useState(null);
  const [deleteReqesting,setDeleteReqesting] = useState(false);
  const openModal = (song) =>{
    setDeleteReqSong(song);
    setVisible(true);
  }
  const closeModal = ()=>{
    setDeleteReqSong(null);
    setVisible(false);
    form.resetFields();
  }

  const onSubmit = (value) =>{
    const form = SetFormData({
      id:deleteReqSong.id,
      reason:value.reason
    })
    songDeleteRequest(form,setDeleteReqesting,closeModal);
  }
  
  // end song delete modal

  return (
    <>
      <tbody>
        <tr>
          <td>{index + 1}</td>
          <td >
            <Row gutter={[16, 8]} className="top-song mb-0 display-flex-ac">
                <Col xl={3} sm={24} xs={24} className="mw-none" onClick={()=>{setSongToPlay(song)}}>
                <img src={song?.cover_image ? song?.cover_image : Dummy} alt="" className="resp-img list-card__img" />
              </Col>
              <Col xl={16} sm={22} className="song-info list-card__info">
                <div>
                  <div className="song-name-wrapper">
                    <span onClick={()=>{setSongToPlay(song)}}
                      className="list-card__info-title song-name"
                    >
                      {song?.title} 

                      {
                        isPlayerPlaying && songId === song?.id ?
                        <IoPauseCircleOutline className="ml-1"/>:
                        <IoCaretForwardCircleOutline className="ml-1"/>
                      }
                    </span>
                    <div className="song-artist ">
                      {song.album.title ?
                        <Link to={`/album/${song.album?.id}`} style={{color:"black"}}>
                          <span className="list-card__info-item text-11-grey">
                            {song.album.title ? song.album && song.album.title : "Singles"}
                          </span>
                        </Link>:
                        <span className="list-card__info-item text-11-grey">Singles</span>
                      }
                      
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </td>
          <td>

            {secondsToMinutes(song?.duration || 0)}
          </td>
          <td onClick={()=>{setSongToPlay(song)}}>
            {song?.total_play_count || 0}
          </td>
          <td onClick={()=>{setSongToPlay(song)}}>
            {song?.favourites_count}
          </td>
          <td onClick={()=>{setSongToPlay(song)}}>
            {formatDate(song?.created_at, 'MMM DD, YYYY')}
          </td>
          <td onClick={()=>{setSongToPlay(song)}}>
            <div>
              {
                (song?.status==="published")
                ?
                <span className="status__tag status__tag--active">{firstCap(song?.status)}</span> 
                :
                <span className="status__tag status__tag--inactive">{firstCap(song?.status)}</span> 
              }
            </div>
          </td>
          <td
          // className="display-flex-ac"
          >
            <div
              className="display-flex-ac"
            >

              <Link to={'/edit-song'} className="display-flex-ac" onClick={()=>setEditSong(song)}>
                <FiEdit className="text-20 mr-1" title="Edit" />
              </Link>
          
           
              <FiTrash2 className="text-20" title="Delete" onClick={()=>openModal(song)}/>

              <Modal 
                visible={visible}
                footer={false}
                title={`Delete request for song "${deleteReqSong?.title}"`}
                onCancel={closeModal}
              >
                <Form
                  layout='vertical'
                  onFinish={onSubmit}
                  form={form}
                  id={`song-delete-model-${song.id}`}
                >
                  <Form.Item
                    name='reason'
                    label="Please specify a reason!"
                    className="custom-form"
                    rules={
                      [
                        {required:true,message:"Please specify your reason"}
                      ]
                    }
                  >
                    <TextArea rows="7" placeholder="Your reason ... "/>
                  </Form.Item>
                    
                    <SpinButton loading={deleteReqesting} text={'submit'} />
                  </Form>
              </Modal>
              
            </div>

          </td>
        </tr>
      </tbody>
    </>
  )
}

export default SongListTable
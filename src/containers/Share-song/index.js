import React,{useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {currentPlaySong,isPlayerPlaying} from '../../actions/currentPlayAction'
import {fetch} from '../../utils/httpUtil' 
import history from '../../utils/history'
import CustomSpin from '../../components/Common/CustomSpin'
import SN from '../../assets/Logo/logo@2x.png'
import {notification} from 'antd'
import {FrownOutlined } from "@ant-design/icons";




const ShareSongs = () =>{
 
  const {id} = useParams()

  const dispatch = useDispatch()

  const setSongsToPlay = (songData)=>{
    dispatch(currentPlaySong(songData))
    dispatch(isPlayerPlaying(false))
  }



  const fetchSongByID = () =>{
    const url = 'api/v1/songs/'+id
    fetch(url).then(response=>{
      history.push('/')
      let songData = {
        songData: response.data.data.song,
        referrer: 'single',
        isFromShareSong:true,
      }
      setSongsToPlay(songData)
    }).catch(()=>{
      history.push('/')
      notification.info({
        message: `We are extremely sorry!!!`,
        description: `Current song is not available`,
        icon: <FrownOutlined style={{ color: '#8c61fe' }} />,
        duration: 3,
        bottom: 70,
        placement: 'bottomRight',
      });
    })
  }

  useEffect(()=>{
    fetchSongByID()
  },[]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
    <div className="fallback-container">
        <img src={SN} alt='Songs Nepal' />
        <CustomSpin />
    </div>
    </>
  )
}

export default ShareSongs
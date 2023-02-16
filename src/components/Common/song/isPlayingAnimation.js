import React,{useEffect}from 'react'
import {useSelector}  from 'react-redux'
import songPlayingImage from '../../../assets/Images/musicPlaying.png'


const PlayerPlayingAnimation = props =>{

  const {songId} = props

  /**
   * REDUX STATES USING HOOKS
  */
  const currentPlayingSongID = useSelector(state=>state.currentPlay.songId)
  const isPlayerPlaying = useSelector(state=>state.currentPlay.isPlayerPlaying)
  /**
   * END REDUX STATES USING HOOKS
  */

  useEffect(()=>{
    console.log(currentPlayingSongID)
  },[currentPlayingSongID])

  return(
    <>
    {
      currentPlayingSongID === songId && isPlayerPlaying ? 
      <div className="song-playing-image">
        <img src={songPlayingImage} alt=""/>
      </div>:
      ""
    }
    </>
  )
}

export default PlayerPlayingAnimation
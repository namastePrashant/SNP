import React,{useState} from 'react';
import * as currentPlayAction from '../../../actions/currentPlayAction'; 
import {notification} from 'antd'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import CustomSpin from '../CustomSpin';
import {fetch} from '../../../utils/httpUtil'
import {FrownOutlined} from "@ant-design/icons";
import {FiPauseCircle} from "react-icons/fi";
import {FaPlay} from "react-icons/fa";
import Loader from '../../../assets/Images/loaderWhite.png'

const BulkSongPlay = props => {

  const {artistId} = props

 
  const [isBulkPlaying, setIsBulkPlaying] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [loading,setLoading] = useState(false)
      /**
     * Set Song.
     *
     */
  const setCurrentPlaySong = (songData) => {
    props.actions.currentPlaySong(songData);
  }


  const setIsPlayerPlaying=(isPlayerPlaying)=>{        
    props.actions.isPlayerPlaying(isPlayerPlaying)
  }

  const noSongNotification = () => {
    notification.info({
      message: `We are extremely sorry!!!`,
      description: `No songs available`,
      icon: <FrownOutlined style={{ color: '#8c61fe' }} />,
      duration: 3,
      bottom: 70,
      placement: 'bottomRight',
    });
  };

  const PlaySong = (songs)=>{
    // console.log(songs)
    if(!songs.length){
      noSongNotification()
    }else{

      let songData = {
        songData: songs,
        referrer: "artist",
        referrerId: artistId,
      };

      setIsPlaying(!isPlaying) 
      setIsPlayerPlaying(!isPlaying) 
      setCurrentPlaySong(songData)
      setIsBulkPlaying(!isPlaying)

    }
  }

  const setBulkSongsToPlay = async () =>{
    if(!isPlaying){
      // setPlayingArtistId(artistId) 
      try{
        const url ='api/v1/analytics/popular_songs_from_artist?artist_id='+artistId
        const singlesUrl='api/v1/artists/singles/?id='+artistId
        setLoading(true)
       const [popularResponse, singlesResponse]= await Promise.all([
         fetch(url),
         fetch(singlesUrl)]
       )
       if (popularResponse.status===200 && singlesResponse.status===200){
        let popularSongs = popularResponse.data.data?.popular_songs_from_artist
        let singlesSongs = singlesResponse.data.data
        let combinedSongs=singlesSongs.concat(popularSongs)
        PlaySong(combinedSongs)
        setLoading(false)
       } 
       
       } catch (error){
          console.log(error)
      }
      
    }else{
      setIsPlaying(!isPlaying) 
      setIsPlayerPlaying(!isPlaying)
      setIsBulkPlaying(!isPlaying)
    }
  } 

 

  return ( <>
  {
  !loading? isBulkPlaying && props.currentArtist===artistId? (<FiPauseCircle onClick={setBulkSongsToPlay} className="icon-playpause"/>) : 
  (<FaPlay onClick={setBulkSongsToPlay} className="icon-playpause" />):(<img src={Loader} alt="loader" style={{width:"30px",height:"30px"}}/>)
  }
  </>
  )

}


const mapStateToprops = state =>{
  return{

    isPlayerPlaying:state.currentPlay.isPlayerPlaying,
    currentPlayReferrerId: state.currentPlay.payload.referrerId,
    currentPlayReferrer: state.currentPlay.payload.referrer,
    popularSongsloading:state.popularSongsByArtist.loading,
    popularSongs:state.popularSongsByArtist.payload,
    currentArtist:state.popularSongsByArtist.id

  }
}

const mapDispatchToprops = dispatch =>{
  return {
    actions: bindActionCreators(
        Object.assign(
            {},
            currentPlayAction,            
        ),
        dispatch
    ),
};
}

export default connect(mapStateToprops,mapDispatchToprops)(BulkSongPlay);
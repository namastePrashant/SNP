import React, { useEffect, useState } from 'react'
import ReactJinkeMusicPlayer from 'react-jinke-music-player' // music player library
import {useSelector,UseDispatch} from 'react-redux' // redux hooks
import options from '../../utils/musicSettings'
import {isEmpty} from '../../utils/commonUtils'
import DummyImage from '../../assets/Images/dummySN.png'

const TestMusicPlayer = ()=>{

  /**
   * Redux functions
   */
  // get state data for current playing player
  const playingSongsData = useSelector(state=>state.currentPlay.payload)
  const playingSongs = useSelector(state=>state.currentPlay.payload.songData)
  const isPlayerPlaying = useSelector(state=>state.currentPlay.isPlayerPlaying) 
  /**
   * End Redux functions
   * 
  */

 const audioList1 = [{
   key:1,
  name:'Linkin Park - In The End from audio list 1',
  singer:"Linkin Park",
  cover:DummyImage,
  lyric:'[00:05.00]linkin park from audiolist 1',
  musicSrc:'https://songs-nepal-api-prod.s3.amazonaws.com/uploads/songs/song_files/2020/08/Coldplay_-_Paradise__Official_Video_.mp3',
},]

const audioList2 = [{
  key:2,
  name:'Linkin Park - In The End from audio list 2',
  singer:"Linkin Park",
  cover:DummyImage,
  lyric:'[00:03.00] from audio list 2',
  musicSrc:'https://songs-nepal-api-prod.s3.amazonaws.com/uploads/songs/song_files/2020/08/Coldplay_-_Paradise__Official_Video_.mp3',
},]

  // internal state components 
  const [playerAudioLists,setPlayerAudioList] = useState([])

  const [testAudioList,setTestAudioList] = useState(audioList1)
  // end internal state components

 
  const changeDemoAudioList = ()=>{
    setTestAudioList(audioList2)
  }


  // set audio lists for the plaayer
  useEffect(()=>{
    if(playingSongs){
      if(Array.isArray(playingSongs)){ // incase of bulk musics
        if(playingSongs.length){
          let audios = playingSongs.map(song=>{
            return{
              name:song?.title,
              singer:song?.artists ? song.artists[0]?.profile?.name : "",
              cover:song?.cover_image ? song.cover_image : DummyImage,
              lyric:song.lyric,
              musicSrc: () => {
                return Promise.resolve(song?.url)
              },
            }
          })
          setPlayerAudioList(audios)
        }
      }else if(!isEmpty(playingSongs)){ //in case of single songs
        let audio = [
          {
            name:playingSongs?.title,
            singer:playingSongs?.artists ? playingSongs.artists[0]?.profile?.name : "",
            cover:playingSongs?.cover_image ? playingSongs.cover_image : DummyImage,
            lyric:playingSongs.lyric,
            musicSrc:playingSongs?.url,
          },
        ]
        setPlayerAudioList(audio)
      }
    }
  },[playingSongs])
  // end set audio lists for the plaayer

  // set player options on audio data changed
  // useEffect(()=>{
  //   if(playingSongs!==null){
  //     let AdditionalOptions = {
  //       ...options,
  //       audioLists:playerAudioLists,
  //     }
  //     setPlayerOptions(AdditionalOptions)
  //   }
  // },[playerAudioLists])
  // end set player options on audio data changed

  const onAudioListsChange = (currentPlayId,audioLists,audioInfo) =>{
    console.log(audioInfo)
    // console.log(audioLists)
    // console.log(currentPlayId)
  }

  return(
    <>
    {
     playingSongs && playerAudioLists.length?
      <>
      <button onClick={changeDemoAudioList} style={{zIndex:"99999",position:"relative"}}>test audio change</button>

        <ReactJinkeMusicPlayer
          audioLists={testAudioList}
          {...options}
          onAudioListsChange={onAudioListsChange}
        />
        </>
      :""
    }
    </>
  )
}

export default TestMusicPlayer
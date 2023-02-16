import React, { useState, useEffect } from 'react';
import * as currentPlayAction from '../../../actions/currentPlayAction';
import { notification } from 'antd'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import {
  PauseOutlined,
  FrownOutlined,
} from '@ant-design/icons';

import {IoPlay} from 'react-icons/io5'

const BulkSongPlay = props => {

  const {
    songs,
    albumSongs,
    albumId,
    isPlayerPlaying,
    fromAlbumListSongId,
    isIcon,
    isBulkPlayClicked,
    isSinglePlaying,    
  } = props
  const [isBulkPlaying, setIsBulkPlaying] = useState(false)
  
  useEffect(() => {

    // check if the same album/artist/playlist songs is playing using currentPlay referrerId
    // currentPlayReferrerId is passed when an album/playlist is played in bulk    
    // isBulkPlayedClicked={true} is passed from moods and favorites songs components since there is no currentReferredId for single songs in them 
    // also add other conditions for playlist and others   
    if ((albumId && albumId !== props.currentPlayReferrerId)|| (!props.currentPlayReferrerId && !isBulkPlayClicked) || (isSinglePlaying)) {
      setIsBulkPlaying(false);      
    }else {
      setIsBulkPlaying(props.isPlayerPlaying)
    }
  }, [props.isPlayerPlaying, albumId, props.currentPlayReferrerId, isSinglePlaying])// eslint-disable-line

  /**
 * Set Song.
 *
 */
  const setCurrentPlaySong = (songData) => {
    props.actions.currentPlaySong(songData);
  }


  const setIsPlayerPlaying = (isPlayerPlaying) => {
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

  const setBulkSongsToPlay = () => {

    if ((songs && !songs.length) || (albumSongs && !albumSongs.length)) {
      noSongNotification()
    } else if (songs) {

      let songData = {
        songData: songs,
        // referrer: "artist",
      };
      setCurrentPlaySong(songData)
      setIsBulkPlaying(true)
      setIsPlayerPlaying(true)
    } else if (albumSongs) {

      let songData = {
        songData: albumSongs,
        referrer: 'album',
        referrerId: albumId,
        songId: fromAlbumListSongId ? fromAlbumListSongId : undefined,
      };
      setCurrentPlaySong(songData)
      setIsBulkPlaying(true)
      setIsPlayerPlaying(true)
    }

  }

  const pause = () => {
    setIsBulkPlaying(false)
    setIsPlayerPlaying(false)
  }



  if (fromAlbumListSongId) {
    return (
      <>
        <span onClick={setBulkSongsToPlay}>
          {props.children}
        </span>
      </>
    )
  } else if (isIcon) {
    return (
      <>

        {/*  also check the album id and current referrer Id  */}
        {
          isBulkPlaying && isPlayerPlaying ?
            (<PauseOutlined className="mr-5px" onClick={pause} />)
            :
            (<IoPlay className="mr-5px" onClick={setBulkSongsToPlay} />)
        }
      </>
    )
  } else {
    return (
      <>

        {/*  also check the album id and current referrer Id  */}
        {
          isBulkPlaying && isPlayerPlaying ?
            (<div onClick={pause}><PauseOutlined className="mr-5px" /><span>Pause </span> </div>)
            :
            (<div onClick={setBulkSongsToPlay}> <IoPlay className="mr-5px" /><span>Play All</span> </div>)
        }
      </>
    )
  }


}


const mapStateToprops = state => {
  return {

    isPlayerPlaying: state.currentPlay.isPlayerPlaying,
    currentPlayReferrerId: state.currentPlay.payload.referrerId,
    currentPlayReferrer: state.currentPlay.payload.referrer,
    popularSongsloading: state.popularSongsByArtist.loading,
    popularSongs: state.popularSongsByArtist.payload

  }
}

const mapDispatchToprops = dispatch => {
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

export default connect(mapStateToprops, mapDispatchToprops)(BulkSongPlay);

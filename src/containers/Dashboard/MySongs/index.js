import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import MySongs from '../../../components/Artist-Dashboard/MySongs'
import * as ADServices from '../../../services/artist-dashboard'

import * as currentPlayAction from '../../../actions/currentPlayAction';


class MySongsContainer extends React.Component {



  fetchMySongs = (dateRange = { start: "", end: "" }, search = "") => { // fetch current logged in artist's songs
    this.props.actions.fetchMySongs(dateRange, search)
  }

  fetchMoreSongs = (dateRange, page, search) => {
    this.props.actions.fetchMoreSongs(dateRange, page, search)
  }

  setCurrentPlaySong = (songData) => {
    this.props.actions.currentPlaySong(songData);
  }

  setIsPlayerPlaying = (isPlayerPlaying) => {
    this.props.actions.isPlayerPlaying(isPlayerPlaying)
  }

  componentDidMount() {
    this.fetchMySongs()
  }

  render() {
    const {
      // song
      mySongs,
      loadingMySongs,
      hasMoreSongs,
      loadingMoreSongs,
      currentSongPage

    } = this.props

    return (
      <>
        <MySongs
          // songs related
          mySongs={mySongs}
          loadingMySongs={loadingMySongs}
          fetchMySongs={this.fetchMySongs}
          hasMoreSongs={hasMoreSongs}
          loadingMoreSongs={loadingMoreSongs}
          currentSongPage={currentSongPage}
          fetchMoreSongs={this.fetchMoreSongs}

          setCurrentPlaySong={this.setCurrentPlaySong}
          setIsPlayerPlaying={this.setIsPlayerPlaying}
        />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    //my songs
    mySongs: state.artistDashboard.mySongs,
    loadingMySongs: state.artistDashboard.loadingMySongs,
    hasMoreSongs: state.artistDashboard.hasMoreSongs,
    loadingMoreSongs: state.artistDashboard.loadingMoreSongs,
    currentSongPage: state.artistDashboard.currentSongPage,

    currentPlayKey: state.currentPlay.songId,
    isPlayerPlaying: state.currentPlay.isPlayerPlaying,

    currentPlayReferrerId: state.currentPlay.payload.referrerId,
    currentPlayReferrer: state.currentPlay.payload.referrer,
  }
}

const mapDispatchToprops = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        ADServices, // artist dashboard services
        currentPlayAction,
      ),
      dispatch
    )
  }
}

export default connect(mapStateToProps, mapDispatchToprops)(MySongsContainer)



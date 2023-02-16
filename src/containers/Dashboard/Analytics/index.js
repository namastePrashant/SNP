import React from 'react'
import Analytics from '../../../components/Artist-Dashboard/Analytics'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ADservice from '../../../services/artist-dashboard';
import * as currentPlayAction from '../../../actions/currentPlayAction';

class AnalyticsContainer extends React.Component {



  /**
   *  fetch analytics count 
  */
  fetchAnalyticsCounts = (date = "") => {
    this.props.actions.fetchAnalyticsCounts(date) //artistDashboardServices
  }

  fetchMySongs = (dateRange = { start: "", end: "" }, search = "") => { // fetch current logged in artist's songs
    this.props.actions.fetchMySongs(dateRange, search)
  }

  fetchMoreSongs = (dateRange, page, search) => {
    this.props.actions.fetchMoreSongs(dateRange, page, search)
  }

  fetchPlayCount = (type, song_id, year) => {
    this.props.actions.fetchSingleSongPlayCount(type, song_id, year)
  }

  fetchAmountEarned = (type, song_id, year) => {
    this.props.actions.fetchSingleSongEarning(type, song_id, year)
  }


  setCurrentPlaySong = (songData) => {
    this.props.actions.currentPlaySong(songData);
  }

  setIsPlayerPlaying = (isPlayerPlaying) => {
    this.props.actions.isPlayerPlaying(isPlayerPlaying)
  }

  componentDidMount() {
    this.fetchAnalyticsCounts()
    this.fetchMySongs()
  }

  render() {
    return (
      <>
        <Analytics
          loadingAnalyticsCounts={this.props.loadingAnalyticsCount}
          analyticsCounts={this.props.totalAnalyicsCount}
          fetchAnalyticsCounts={this.fetchAnalyticsCounts}
          //songs related

          loadingMySongs={this.props.loadingMySongs}
          mySongs={this.props.mySongs}
          hasMoreSongs={this.props.hasMoreSongs}
          currentSongPage={this.props.currentSongPage}
          loadingMoreSongs={this.props.loadingMoreSongs}
          fetchMySongs={this.fetchMySongs}
          fetchMoreSongs={this.fetchMoreSongs}

          fetchPlayCount={this.fetchPlayCount}
          totalSingleSongPlayCount={this.props.totalSingleSongPlayCount}
          loadingTotalSingleSongPlayCount={this.props.loadingTotalSingleSongPlayCount}
          // loadingTotalSingleSongPlayCountId={this.props.loadingTotalSingleSongPlayCountId}

          // loading song id of single song for both count and earning
          loadingActiveSongAnalyticsId={this.props.loadingActiveSongAnalyticsId}

          fetchAmountEarned={this.fetchAmountEarned}
          loadingTotalSingleSongEarning={this.props.loadingTotalSingleSongEarning}
          // loadingTotalSingleSongEarningId={this.props.loadingTotalSingleSongEarningId}
          totalSingleSongEarning={this.props.totalSingleSongEarning}

          setCurrentPlaySong={this.setCurrentPlaySong}
          setIsPlayerPlaying={this.setIsPlayerPlaying}
        />
      </>
    )
  }
}


const mapSateToProps = state => {
  return {
    // analytics count
    totalAnalyicsCount: state.artistDashboard.analyticsCounts,
    loadingAnalyticsCount: state.artistDashboard.loadingAnalyticsCounts,

    // songs play count
    totalSingleSongPlayCount: state.artistDashboard.totalSingleSongPlayCount,
    loadingTotalSingleSongPlayCount: state.artistDashboard.loadingTotalSingleSongPlayCount,
    // loadingTotalSingleSongPlayCountId: state.artistDashboard.loadingTotalSingleSongPlayCountId,

    // song play count / earning loading Id
    loadingActiveSongAnalyticsId: state.artistDashboard.loadingActiveSongAnalyticsId,

    // amount earned
    totalSingleSongEarning: state.artistDashboard.totalSingleSongEarning,
    loadingTotalSingleSongEarning: state.artistDashboard.loadingTotalSingleSongEarning,
    // loadingTotalSingleSongE1arningId: state.artistDashboard.loadingTotalSingleSongEarningId,

    // songs
    loadingMySongs: state.artistDashboard.loadingMySongs,
    mySongs: state.artistDashboard.mySongs,
    hasMoreSongs: state.artistDashboard.hasMoreSongs,
    loadingMoreSongs: state.artistDashboard.loadingMoreSongs,
    currentSongPage: state.artistDashboard.currentSongPage,

    currentPlayKey: state.currentPlay.songId,
    isPlayerPlaying: state.currentPlay.isPlayerPlaying,

    currentPlayReferrerId: state.currentPlay.payload.referrerId,
    currentPlayReferrer: state.currentPlay.payload.referrer,

  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(
      Object.assign(
        {},
        ADservice,
        currentPlayAction,
      )
      , dispatch)
  }
}

export default connect(mapSateToProps, mapDispatchToProps)(AnalyticsContainer)
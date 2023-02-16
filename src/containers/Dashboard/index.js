import React from 'react'
import { connect } from 'react-redux'
import Dashboard from '../../components/Artist-Dashboard/Dashboard'
import { bindActionCreators } from 'redux'
import * as artistDashboardServices from '../../services/artist-dashboard';

import * as currentPlayAction from '../../actions/currentPlayAction';
class DashboardContainer extends React.Component {

  /**
   *  fetch analytics count 
  */
  fetchAnalyticsCounts = () => {
    this.props.actions.fetchAnalyticsCounts() //artistDashboardServices
  }

  /**
    * fetch artist total earned for graph
  */
  fetchTotalEarnings = (year = '') => {
    this.props.actions.fetchTotalEarnings(year)
  }


  fetchPopularSongs = () => {
    this.props.actions.fetchPopularSongs();
  }


  fetchTotalFollowers = (year) => {
    this.props.actions.fetchTotalFollowers(year);
  }

  fetchTotalPlayCounts = (startDate, endDate) => {
    this.props.actions.fetchTotalPlayCounts(startDate, endDate);
  }

  setCurrentPlaySong = (songData) => {
    this.props.actions.currentPlaySong(songData);
  }

  setIsPlayerPlaying = (isPlayerPlaying) => {
    this.props.actions.isPlayerPlaying(isPlayerPlaying)
  }



  render() {

    const {
      // analytics
      totalAnalyticsCount,
      loadingAnalyticsCount,

      //total earning
      totalEarning,
      LoadingTotalEarnings,

      //total followers      
      totalFollowers,
      loadingTotalFollowers,

      //total play counts      
      totalPlayCounts,
      loadingTotalPlayCounts,

      //userProfile
      userProfile,
      loadingUserProfile,


      // popular songs
      loadingPopularSongs,
      popularSongs

    } = this.props // array destructring

    return (
      <Dashboard
        // analytics count related
        totalAnalyticsCount={totalAnalyticsCount}
        fetchAnalyticsCounts={this.fetchAnalyticsCounts}
        loadingAnalyticsCount={loadingAnalyticsCount}

        // popular songs
        fetchPopularSongs={this.fetchPopularSongs}
        loadingPopularSongs={loadingPopularSongs}
        popularSongs={popularSongs}

        // total earning graph data
        fetchTotalEarnings={this.fetchTotalEarnings}
        totalEarning={totalEarning}
        LoadingTotalEarnings={LoadingTotalEarnings}

        // total followers graph data
        fetchTotalFollowers={this.fetchTotalFollowers}
        totalFollowers={totalFollowers}
        loadingTotalFollowers={loadingTotalFollowers}

        // total play counts
        fetchTotalPlayCounts={this.fetchTotalPlayCounts}
        totalPlayCounts={totalPlayCounts}
        loadingTotalPlayCounts={loadingTotalPlayCounts}

        // user profile related
        userProfile={userProfile}
        loadingUserProfile={loadingUserProfile}

        setCurrentPlaySong={this.setCurrentPlaySong}
        setIsPlayerPlaying={this.setIsPlayerPlaying}

      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // analytics count
    totalAnalyticsCount: state.artistDashboard.analyticsCounts,
    loadingAnalyticsCount: state.artistDashboard.loadingAnalyticsCounts,
    //end analytics count

    // total earning graph data
    totalEarning: state.artistDashboard.totalEarnings,
    LoadingTotalEarnings: state.artistDashboard.loadingTotalEarnings,

    // total followers graph data
    totalFollowers: state.artistDashboard.totalFollowers,
    loadingTotalFollowers: state.artistDashboard.loadingTotalFollowers,

    // total play counts
    totalPlayCounts: state.artistDashboard.totalPlayCounts,
    loadingTotalPlayCounts: state.artistDashboard.loadingTotalPlayCounts,

    // userprofile related
    userProfile: state.userProfile.payload,
    loadingUserProfile: state.userProfile.loading,

    // popular songs
    loadingPopularSongs: state.artistDashboard.loadingPopularSongs,
    popularSongs: state.artistDashboard.popularSongs,

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
        artistDashboardServices,
        currentPlayAction,
      ), dispatch
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)
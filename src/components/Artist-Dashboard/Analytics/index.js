import React from 'react'
import Overview from './sections/overview'
import SongAnalytics from './sections/songs-analytic-table'

const Analytics = props => {

  const {
    loadingAnalyticsCounts,
    analyticsCounts,
    fetchAnalyticsCounts,

    //songs related
    loadingMySongs,
    mySongs,
    fetchMySongs,
    hasMoreSongs,
    loadingMoreSongs,
    currentSongPage,
    fetchMoreSongs,

    fetchPlayCount,
    totalSingleSongPlayCount,
    loadingTotalSingleSongPlayCount,
    // loadingTotalSingleSongPlayCountId,

    loadingActiveSongAnalyticsId,

    fetchAmountEarned,
    loadingTotalSingleSongEarning,
    // loadingTotalSingleSongEarningId,
    totalSingleSongEarning,


    // set Song play and analytics
    setCurrentPlaySong,
    setIsPlayerPlaying,

  } = props


  return (
    <section className="row-main home-layout">
      {/* <p className="text-14-grey">Dashboard</p> */}
      <h4 className="text-36-black-medium">Analytics</h4>

      {/**section analytics overview */}
      <Overview
        loadingAnalyticsCounts={loadingAnalyticsCounts}
        analyticsCounts={analyticsCounts}
        fetchAnalyticsCounts={fetchAnalyticsCounts}
      />
      {/**section analytics overview */}

      {/**Songs anlytics table */}
      <SongAnalytics
        loadingMySongs={loadingMySongs}
        mySongs={mySongs}
        fetchMySongs={fetchMySongs}
        hasMoreSongs={hasMoreSongs}
        loadingMoreSongs={loadingMoreSongs}
        currentSongPage={currentSongPage}
        fetchMoreSongs={fetchMoreSongs}
        fetchPlayCount={fetchPlayCount}
        totalSingleSongPlayCount={totalSingleSongPlayCount}
        loadingTotalSingleSongPlayCount={loadingTotalSingleSongPlayCount}
        // loadingTotalSingleSongPlayCountId={loadingTotalSingleSongPlayCountId}

        loadingActiveSongAnalyticsId={loadingActiveSongAnalyticsId}

        fetchAmountEarned={fetchAmountEarned}
        loadingTotalSingleSongEarning={loadingTotalSingleSongEarning}
        // loadingTotalSingleSongEarningId={loadingTotalSingleSongEarningId}
        totalSingleSongEarning={totalSingleSongEarning}

        // set Song play and analytics
        setCurrentPlaySong={setCurrentPlaySong}
        setIsPlayerPlaying={setIsPlayerPlaying}

      />
      {/**Songs anlytics table */}

    </section>
  )
}

export default Analytics
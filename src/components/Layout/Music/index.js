import React from 'react';
import MusicOverlay from '../../Common/MusicOverlay';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as currentPlayAction from '../../../actions/currentPlayAction';
import * as addToQueueAction from '../../../actions/addToQueueAction';

// import * as analyticsAction from '../../../actions/analyticsAction';
import * as setAnalyticsAndRecentService from '../../../services/analyticsAndRecentService';

import * as userAllPlaylistsService from '../../../services/userAllPlaylistsService';
import * as addToPlaylistService from '../../../services/addToPlaylistService';
import * as createUserPlaylistAction from '../../../actions/createUserPlaylistAction';


const index = (props) => {


    const setCurrentPlaySongId = (songId) => {

        props.actions.currentPlaySongId(songId);
    }

    const setCurrentPlaySong = (songData) => {

        props.actions.currentPlaySong(songData);
    }

    const setIsPlayerPlaying = (isPlayerPlaying) => {

        props.actions.isPlayerPlaying(isPlayerPlaying);
    }

    const setAnalyticsAndRecent = (analyticsData) => {
        props.actions.setAnalyticsAndRecent(analyticsData);
    }

    const updateAnalytics = (analyticsUpdateData) => {
        props.actions.updateAnalytics(analyticsUpdateData);
    }

    const cleanAddSongToQueue = () => {
        props.actions.addSongToCurrentAudioQueueCleanRequest();
    }

    const fetchUserAllPlaylists = () => {
        props.actions.fetchUserAllPlaylists();
    }

    const addSongToPlaylist = (formData) => {
        props.actions.addSongToPlaylist(formData);
    }

    const createAndAddToPlaylist = (formData) => {
        props.actions.createAndAddToPlaylist(formData);
    }

    console.log("artistProfile", props.artistProfile);

    return (
        <div className='music-player'>
            <MusicOverlay
                {...props}
                setCurrentPlaySongId={setCurrentPlaySongId}
                setCurrentPlaySong={setCurrentPlaySong}
                setIsPlayerPlaying={setIsPlayerPlaying}
                setAnalyticsAndRecent={setAnalyticsAndRecent}
                updateAnalytics={updateAnalytics}
                cleanAddSongToQueue={cleanAddSongToQueue}
                fetchUserAllPlaylists={fetchUserAllPlaylists}
                addSongToPlaylist={addSongToPlaylist}
                createAndAddToPlaylist={createAndAddToPlaylist}
                
            />
        </div>
    );
};



const mapStateToProps = (state) => {

    return {
        currentPlaySongs: state.currentPlay.payload.songData,
        isFromShareSong: state.currentPlay.payload.isFromShareSong,
        currentPlayReferrer: state.currentPlay.payload.referrer,
        isPlaylistSystemGenerated: state.currentPlay.payload.isSystemGenerated,
        isPlaying: state.currentPlay.payload.isPlaying,
        currentPlayReferrerId: state.currentPlay.payload.referrerId,
        fromListSongId: state.currentPlay.payload.songId,
        isPlayerPlaying: state.currentPlay.isPlayerPlaying,
        currentPlaySongId: state.currentPlay.songId,
        analyticsId: state.analytics.payload.id,
        analyticsSongId: state.analytics.payload.song_id,
        addToQueueSongData: state.addToQueue.payload.songData,
        addToQueueReferrer: state.addToQueue.payload.referrer,
        addToQueueReferrerId: state.addToQueue.payload.referrerId,

        userAllPlaylists: state.userAllPlaylists.payload,
        userAllPlaylistsErrors: state.userAllPlaylists.errors,
        userAllPlaylistsLoading: state.userAllPlaylists.loading,

        createdUserPlaylist: state.createUserPlaylist.payload,
        createUserPlaylistErrors: state.createUserPlaylist.errors,
        createUserPlaylistLoading: state.createUserPlaylist.loading,

        artistProfile:state.userProfile.payload.artist,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(
            Object.assign({},
                currentPlayAction,
                setAnalyticsAndRecentService,
                addToQueueAction,
                userAllPlaylistsService,
                addToPlaylistService,
                createUserPlaylistAction,
            ),
            dispatch
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(index);

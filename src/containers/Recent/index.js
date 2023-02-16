import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Recent from '../../components/Recent';

import * as recentlyPlayedAllService from '../../services/recentlyPlayedAllService';
import * as recentlyPlayedAllAction from '../../actions/recentlyPlayedAllAction';

import * as currentPlayAction from '../../actions/currentPlayAction';
import * as addToQueueAction from '../../actions/addToQueueAction';
import * as createUserPlaylistAction from '../../actions/createUserPlaylistAction';
import * as addToPlaylistService from '../../services/addToPlaylistService';
import * as userAllPlaylistsService from '../../services/userAllPlaylistsService';

import * as favoriteButtonAction from '../../actions/favoriteButtonAction';
import * as favoriteService from '../../services/favoriteService';
import * as adsService from '../../services/advertisementService';

export class RecentContainer extends React.Component {

    /**
     * Fetch recently played all.
     *
     */
    fetchRecentlyPlayedAll = () => {
        this.props.actions.fetchRecentlyPlayedAll();
    };

    loadMoreRecentlyPlayedSongs = (page_meta) => {
        this.props.actions.fetchRecentlyPlayedAllMore(page_meta);
    };

    /**
     * Set Song.
     *
     */
    setCurrentPlaySong = (songData) => {
        this.props.actions.currentPlaySong(songData);
    }

    setIsPlayerPlaying=(isPlayerPlaying)=>{        
        this.props.actions.isPlayerPlaying(isPlayerPlaying)
    }

    /**
    * Set Favorite.
    *
    */
    fetchFavoriteButton = (formData, id) => {
        this.props.actions.fetchFavoriteButton(formData, id);
    }

    fetchUserAllPlaylists = ()=>{
        this.props.actions.fetchUserAllPlaylists();
    }
    
    addSongToPlaylist = (formData)=>{
        this.props.actions.addSongToPlaylist(formData);
    }

    createAndAddToPlaylist = (formData)=>{
        this.props.actions.createAndAddToPlaylist(formData);
    }

    addSongToCurrentAudioQueue = (songData)=>{
        this.props.actions.addSongToCurrentAudioQueue(songData);
    }

    /**
     * fetch ads by locations
     */
    fetchAdvertisementByLocation= (formData) =>{
        this.props.actions.fetchAdvertisementByLocation(formData)
    }

    render() {
        return (
            <Recent
                fetchAdvertisementByLocation={this.fetchAdvertisementByLocation}
                fetchRecentlyPlayedAll={this.fetchRecentlyPlayedAll}
                loadMoreRecentlyPlayedSongs={this.loadMoreRecentlyPlayedSongs}
                setCurrentPlaySong={this.setCurrentPlaySong}
                fetchFavoriteButton={this.fetchFavoriteButton}
                fetchUserAllPlaylists={this.fetchUserAllPlaylists}
                addSongToPlaylist={this.addSongToPlaylist}
                createAndAddToPlaylist={this.createAndAddToPlaylist}
                addSongToCurrentAudioQueue={this.addSongToCurrentAudioQueue}
                setIsPlayerPlaying={this.setIsPlayerPlaying}
                {...this.props}
            />
        )
    }
}


/**
 * Map the state to props.
 */
const mapStateToProps = state => {
    return {
        currentPlayKey: state.currentPlay.songId,
        isPlayerPlaying: state.currentPlay.isPlayerPlaying,

        recentlyPlayedAll: state.recentlyPlayedAll.payload,
        recentlyPlayedAllErrors: state.recentlyPlayedAll.errors,
        recentlyPlayedAllLoading: state.recentlyPlayedAll.loading,
        recentlyPlayedMoreLoading: state.recentlyPlayedAll.loadMoreLoading,
        recentlyPlayedAllMeta: state.recentlyPlayedAll.meta,
        recentlyPlayedAllHasMoreData: state.recentlyPlayedAll.hasMore,

        favoriteButton: state.favoriteButton.payload,
        favoriteButtonErrors: state.favoriteButton.errors,
        favoriteButtonLoading: state.favoriteButton.loading,
        favoriteButtonLoadingId: state.favoriteButton.id,

        userAllPlaylists:state.userAllPlaylists.payload,
        userAllPlaylistsErrors:state.userAllPlaylists.errors,
        userAllPlaylistsLoading:state.userAllPlaylists.loading,
        
        createdUserPlaylist:state.createUserPlaylist.payload,
        createUserPlaylistErrors:state.createUserPlaylist.errors,
        createUserPlaylistLoading:state.createUserPlaylist.loading,
    }
};

/**
 * Map the actions to props.
 */
const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            Object.assign(
                {},
                recentlyPlayedAllAction,
                recentlyPlayedAllService,
                currentPlayAction,
                favoriteButtonAction,
                favoriteService,
                userAllPlaylistsService,
                addToPlaylistService,
                createUserPlaylistAction,
                addToQueueAction,
                adsService
            ),
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecentContainer);
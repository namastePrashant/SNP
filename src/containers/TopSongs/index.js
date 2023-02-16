import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TopSongs from '../../components/TopSongs';

import * as topSongsAction from '../../actions/topSongsAction';
import * as topSongsService from '../../services/topSongsService';

import * as currentPlayAction from '../../actions/currentPlayAction';
import * as addToQueueAction from '../../actions/addToQueueAction';
import * as createUserPlaylistAction from '../../actions/createUserPlaylistAction';
import * as addToPlaylistService from '../../services/addToPlaylistService';
import * as userAllPlaylistsService from '../../services/userAllPlaylistsService';

import * as favoriteButtonAction from '../../actions/favoriteButtonAction';
import * as favoriteService from '../../services/favoriteService';
import * as adsService from '../../services/advertisementService';



export class TopSongsContainer extends React.Component {


    /**
     * Fetch all top songs.
     *
     */
    fetchAllTopSongs = (page) => {
        console.log('page', page);
        this.props.actions.fetchTopSongs(page);
    };

    // // load more top songs 
    // loadMoreTopSongs = (page_meta) => {
    //     this.props.actions.fetchTopSongsMore(page_meta);
    // };


    /**
     * Set Song.
     *
     */
    setCurrentPlaySong = (songData) => {
        this.props.actions.currentPlaySong(songData);
    }

    setIsPlayerPlaying = (isPlayerPlaying) => {
        this.props.actions.isPlayerPlaying(isPlayerPlaying)
    }

    /**
    * Set Favorite.
    *
    */
    fetchFavoriteButton = (formData, id) => {
        this.props.actions.fetchFavoriteButton(formData, id);
    }

    fetchUserAllPlaylists = () => {
        this.props.actions.fetchUserAllPlaylists();
    }

    addSongToPlaylist = (formData) => {
        this.props.actions.addSongToPlaylist(formData);
    }

    createAndAddToPlaylist = (formData) => {
        this.props.actions.createAndAddToPlaylist(formData);
    }

    addSongToCurrentAudioQueue = (songData) => {
        this.props.actions.addSongToCurrentAudioQueue(songData);
    }

    /**
     * fetch ads by locations
     */
    fetchAdvertisementByLocation = (formData) => {
        this.props.actions.fetchAdvertisementByLocation(formData)
    }

    render() {
        return (
            <TopSongs
                pageTitle="Top Songs"
                fetchAdvertisementByLocation={this.fetchAdvertisementByLocation}
                fetchAllTopSongs={this.fetchAllTopSongs}
                loadMoreTopSongs={this.loadMoreTopSongs}
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

        topSongs: state.topSongs.payload,
        topSongsErrors: state.topSongs.errors,
        topSongsLoading: state.topSongs.loading,

        // need load more props for top songs 
        topSongsMoreLoading: state.topSongs.loadingMore,
        topSongsMeta: state.topSongs.meta,
        topSongsHasMoreData: state.topSongs.hasMore,

        favoriteButton: state.favoriteButton.payload,
        favoriteButtonErrors: state.favoriteButton.errors,
        favoriteButtonLoading: state.favoriteButton.loading,
        favoriteButtonLoadingId: state.favoriteButton.id,

        userAllPlaylists: state.userAllPlaylists.payload,
        userAllPlaylistsErrors: state.userAllPlaylists.errors,
        userAllPlaylistsLoading: state.userAllPlaylists.loading,

        createdUserPlaylist: state.createUserPlaylist.payload,
        createUserPlaylistErrors: state.createUserPlaylist.errors,
        createUserPlaylistLoading: state.createUserPlaylist.loading,
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
                topSongsAction,
                topSongsService,
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

export default connect(mapStateToProps, mapDispatchToProps)(TopSongsContainer);
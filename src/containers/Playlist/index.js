import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import Album from '../../components/Album';
import Playlist from '../../components/Playlist';


import * as playlistService from '../../services/playlistService';

import * as individualPlaylistAction from '../../actions/individualPlaylistAction';
import * as similarPlaylistsByPlaylistAction from '../../actions/similarPlaylistsByPlaylistAction';

import * as currentPlayAction from '../../actions/currentPlayAction';

import * as advertisementService from '../../services/advertisementService';
import * as advertisementAction from '../../actions/advertisementAction';

import * as userAllPlaylistsService from '../../services/userAllPlaylistsService';
import * as addToPlaylistService from '../../services/addToPlaylistService';

import * as createUserPlaylistAction from '../../actions/createUserPlaylistAction';
import * as addToQueueAction from '../../actions/addToQueueAction';
import * as favouriteArtistSevice from '../../services/favoriteArtistsService';
export class SinglePlaylistContainer extends React.Component {

    /**
     * Fetch individual artist.
     *
     */
    fetchIndividualPlaylist = id => {
        this.props.actions.fetchIndividualPlaylist(id);
    };

    /**
    * Fetch advertisements.
    *
    */
    fetchAdvertisements = () => {
        this.props.actions.fetchAdvertisements();
    }

    /**
     * Fetch similar playlists by playlist
     *
     */
    fetchSimilarPlaylistsByPlaylist = id => {
        this.props.actions.fetchSimilarPlaylistsByPlaylist(id);
    };

    /**
     * Fetch similar playlists by playlist
     *
     */
    fetchRelatedArtistsByPlaylist = id => {
        this.props.actions.fetchRelatedArtistsByPlaylist(id);
    };


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

    setFavouriteArtist = (formData, id) => {
        this.props.actions.setFavouriteArtist(formData, id);
    }

    render() {
        return (
            <Playlist
                fetchIndividualPlaylist={this.fetchIndividualPlaylist}
                fetchSimilarPlaylistsByPlaylist={this.fetchSimilarPlaylistsByPlaylist}
                fetchRelatedArtistsByPlaylist={this.fetchRelatedArtistsByPlaylist}
                setCurrentPlaySong={this.setCurrentPlaySong}
                fetchAdvertisements={this.fetchAdvertisements}
                setIsPlayerPlaying={this.setIsPlayerPlaying}
                fetchUserAllPlaylists={this.fetchUserAllPlaylists}
                addSongToPlaylist={this.addSongToPlaylist}
                createAndAddToPlaylist={this.createAndAddToPlaylist}
                addSongToCurrentAudioQueue={this.addSongToCurrentAudioQueue}
                setFavouriteArtist={this.setFavouriteArtist}
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
        isPlayerPlaying: state.currentPlay.isPlayerPlaying,
        currentPlayReferrerId: state.currentPlay.payload.referrerId,
        currentPlayReferrer: state.currentPlay.payload.referrer,
        individualPlaylist: state.individualPlaylist.payload,
        individualPlaylistErrors: state.individualPlaylist.errors,
        individualPlaylistLoading: state.individualPlaylist.loading,
        similarPlaylistsByPlaylist: state.similarPlaylistsByPlaylist.payload,
        similarPlaylistsByPlaylistErrors: state.similarPlaylistsByPlaylist.errors,
        similarPlaylistsByPlaylistLoading: state.similarPlaylistsByPlaylist.loading,
        relatedArtistsByPlaylist: state.relatedArtistsByPlaylist.payload,
        relatedArtistsByPlaylistErrors: state.relatedArtistsByPlaylist.errors,
        relatedArtistsByPlaylistLoading: state.relatedArtistsByPlaylist.loading,
        advertisements: state.advertisements.payload,
        advertisementErrors: state.advertisements.errors,
        advertisementLoading: state.advertisements.loading,

        userAllPlaylists: state.userAllPlaylists.payload,
        userAllPlaylistsErrors: state.userAllPlaylists.errors,
        userAllPlaylistsLoading: state.userAllPlaylists.loading,

        createdUserPlaylist: state.createUserPlaylist.payload,
        createUserPlaylistErrors: state.createUserPlaylist.errors,
        
        favouriteArtistFollowLoading: state.favoriteArtists.followLoading,
        RecentlyFavouriteArtist: state.favoriteArtists.recentlyFollowed,
        favouriteArtistLoadingId: state.favoriteArtists.id,
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
                playlistService,
                individualPlaylistAction,
                similarPlaylistsByPlaylistAction,
                currentPlayAction,
                advertisementAction,
                advertisementService,
                userAllPlaylistsService,
                addToPlaylistService,
                createUserPlaylistAction,
                addToQueueAction,
                favouriteArtistSevice,
            ),
            dispatch
        ),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SinglePlaylistContainer);
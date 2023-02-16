import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import New from '../../components/New';


import * as latestSongsService from '../../services/latestSongsService';
import * as latestSongsAction from '../../actions/latestSongsAction';

import * as latestSongsAllService from '../../services/latestSongsAllService';
import * as latestSongsAllAction from '../../actions/latestSongsAllAction';

import * as latestAlbumsService from '../../services/latestAlbumsService';
import * as latestAlbumsAction from '../../actions/latestAlbumsAction';

import * as latestAlbumsAllService from '../../services/latestAlbumsAllService';
import * as latestAlbumsAllAction from '../../actions/latestAlbumsAllAction';

import * as latestArtistsService from '../../services/latestArtistsService';
import * as latestArtistsAction from '../../actions/latestArtistsAction';

import * as latestArtistsAllService from '../../services/latestArtistsAllService';
import * as latestArtistsAllAction from '../../actions/latestArtistsAllAction';

import * as currentPlayAction from '../../actions/currentPlayAction';
import * as addToQueueAction from '../../actions/addToQueueAction';
import * as createUserPlaylistAction from '../../actions/createUserPlaylistAction';
import * as addToPlaylistService from '../../services/addToPlaylistService';
import * as userAllPlaylistsService from '../../services/userAllPlaylistsService';

import * as favoriteButtonAction from '../../actions/favoriteButtonAction';
import * as favoriteService from '../../services/favoriteService';
import * as advertisementService from '../../services/advertisementService';
import * as favoriteArtistsService from '../../services/favoriteArtistsService';


export class ExploreContainer extends React.Component {



    /**
     * Fetch latestSongs.
     *
     */
    fetchLatestSongs = () => {
        this.props.actions.fetchLatestSongs();
    };


    /**
     * Fetch latestSongsAll.
     *
     */
    fetchLatestSongsAll = (page) => {
        this.props.actions.fetchLatestSongsAll(page);
    };

    /**
     * Fetch latestAlbums.
     *
     */
    fetchLatestAlbums = () => {
        this.props.actions.fetchLatestAlbums();
    };

    /**
     * Fetch latestAlbumsAll
     *
     */
    fetchLatestAlbumsAll = (page) => {
        this.props.actions.fetchLatestAlbumsAll(page);
    };

    /**
     * Fetch latestArtists.
     *
     */
    fetchLatestArtists = () => {
        this.props.actions.fetchLatestArtists();
    };

    /**
    * Fetch latestArtistsAll.
    *
    */
    fetchLatestArtistsAll = (page) => {
        this.props.actions.fetchLatestArtistsAll(page);
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


    fetchAdvertisementByLocation= (formData) =>{
        this.props.actions.fetchAdvertisementByLocation(formData)
    }


    /**
     * follow artist .
     *
    */
   setFavouriteArtist = (formData,id) =>{
    this.props.actions.setFavouriteArtist(formData,id);
    }

    render() {
        return (
            <New
                fetchLatestSongs={this.fetchLatestSongs}
                fetchLatestSongsAll={this.fetchLatestSongsAll}
                fetchLatestAlbums={this.fetchLatestAlbums}
                fetchLatestArtists={this.fetchLatestArtists}
                fetchLatestAlbumsAll={this.fetchLatestAlbumsAll}
                fetchLatestArtistsAll={this.fetchLatestArtistsAll}
                setCurrentPlaySong={this.setCurrentPlaySong}
                fetchFavoriteButton={this.fetchFavoriteButton}
                fetchUserAllPlaylists={this.fetchUserAllPlaylists}
                addSongToPlaylist={this.addSongToPlaylist}
                createAndAddToPlaylist={this.createAndAddToPlaylist}
                addSongToCurrentAudioQueue={this.addSongToCurrentAudioQueue}
                setIsPlayerPlaying={this.setIsPlayerPlaying}  
                fetchAdvertisementByLocation={this.fetchAdvertisementByLocation}  
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
        currentPlayKey: state.currentPlay.songId,
        isPlayerPlaying: state.currentPlay.isPlayerPlaying,

        currentPlayReferrerId: state.currentPlay.payload.referrerId,
        currentPlayReferrer: state.currentPlay.payload.referrer,

        latestSongs: state.latestSongs.payload,
        latestSongsErrors: state.latestSongs.errors,
        latestSongsLoading: state.latestSongs.loading,

        latestSongsAll: state.latestSongsAll.payload,
        latestSongsAllErrors: state.latestSongsAll.errors,
        latestSongsAllLoading: state.latestSongsAll.loading,        
        latestSongsAllLoadingMore: state.latestSongsAll.loadingMore,        
        latestSongsAllMeta: state.latestSongsAll.meta,        
        latestSongsAllHasMore: state.latestSongsAll.hasMore,        
        
        latestAlbums: state.latestAlbums.payload,
        latestAlbumsErrors: state.latestAlbums.errors,
        latestAlbumsLoading: state.latestAlbums.loading,

        latestAlbumsAll: state.latestAlbumsAll.payload,
        latestAlbumsAllErrors: state.latestAlbumsAll.errors,
        latestAlbumsAllLoading: state.latestAlbumsAll.loading,
        latestAlbumsAllLoadingMore: state.latestAlbumsAll.loadingMore,        
        latestAlbumsAllMeta: state.latestAlbumsAll.meta,        
        latestAlbumsAllHasMore: state.latestAlbumsAll.hasMore,  

        latestArtists: state.latestArtists.payload,
        latestArtistsErrors: state.latestArtists.errors,
        latestArtistsLoading: state.latestArtists.loading,

        latestArtistsAll: state.latestArtistsAll.payload,
        latestArtistsAllErrors: state.latestArtistsAll.errors,
        latestArtistsAllLoading: state.latestArtistsAll.loading,
        latestArtistsAllLoadingMore: state.latestArtistsAll.loadingMore,        
        latestArtistsAllMeta: state.latestArtistsAll.meta,        
        latestArtistsAllHasMore: state.latestArtistsAll.hasMore,  

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

        favoriteArtistsLoading: state.favoriteArtists.loading, 
        favouriteArtistFollowLoading:state.favoriteArtists.followLoading,
        RecentlyFavouriteArtist:state.favoriteArtists.recentlyFollowed,     
        favouriteArtistLoadingId:state.favoriteArtists.id
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
                latestSongsService,
                latestSongsAction,
                latestSongsAllService,
                latestSongsAllAction,
                latestAlbumsService,
                latestAlbumsAction,
                latestAlbumsAllService,
                latestAlbumsAllAction,
                latestArtistsService,
                latestArtistsAction,
                latestArtistsAllService,
                latestArtistsAllAction,
                currentPlayAction,
                favoriteButtonAction,
                favoriteService,
                userAllPlaylistsService,
                addToPlaylistService,
                createUserPlaylistAction,
                addToQueueAction,
                advertisementService,
                favoriteArtistsService
            ),
            dispatch
        ),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer);
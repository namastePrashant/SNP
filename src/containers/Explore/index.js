import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Explore from '../../components/Explore';

import * as exploreSongsService from '../../services/exploreSongsService';
import * as exploreSongsAction from '../../actions/exploreSongsAction';

import * as exploreAlbumsService from '../../services/exploreAlbumsService';
import * as exploreAlbumsAction from '../../actions/exploreAlbumsAction';

import * as exploreArtistsService from '../../services/exploreArtistsService';
import * as exploreArtistsAction from '../../actions/exploreArtistsAction';

import * as explorePlaylistsService from '../../services/explorePlaylistsService';
import * as explorePlaylistsAction from '../../actions/explorePlaylistsAction';

import * as currentPlayAction from '../../actions/currentPlayAction';
import * as addToQueueAction from '../../actions/addToQueueAction';
import * as createUserPlaylistAction from '../../actions/createUserPlaylistAction';
import * as addToPlaylistService from '../../services/addToPlaylistService';
import * as userAllPlaylistsService from '../../services/userAllPlaylistsService';


import * as advertisementService from '../../services/advertisementService';
import * as advertisementAction from '../../actions/advertisementAction';

import * as favoriteButtonAction from '../../actions/favoriteButtonAction';
import * as favoriteService from '../../services/favoriteService';
import * as favouriteAlbumService from '../../services/favoriteAlbumsService';

import * as favouriteartistService from '../../services/favoriteArtistsService'

import * as albumsService from '../../services/albumsService';
import * as individualAlbumAction from '../../actions/individualAlbumAction';
export class ExploreContainer extends React.Component {

    /**
     * explore Songs.
     *
     */
    fetchExploreSongs = (page) => {
        this.props.actions.fetchExploreSongs(page);
    };

   

    /**
     * explore Albums.
     *
     */
    fetchExploreAlbums = (page) => {
        this.props.actions.fetchExploreAlbums(page);
    };

    /**
     * explore Artists.
     *
     */
    fetchExploreArtists = (page) => {
        this.props.actions.fetchExploreArtists(page);
    };

    /**
     * explore Playlists.
     *
     */
    fetchExplorePlaylists = (page) => {
        this.props.actions.fetchExplorePlaylists(page);
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

  // fetch individual album

    fetchIndividualAlbum = (id, callBack) => {
    this.props.actions.fetchIndividualAlbum(id, callBack);
};
    /**
     * fetch advertisement by category
     * 
    */
   fetchAdvertisementByLocation = (formData) =>{
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
            <Explore
                fetchExploreSongs={this.fetchExploreSongs}
                fetchExploreAlbums={this.fetchExploreAlbums}
                fetchExploreArtists={this.fetchExploreArtists}
                fetchExplorePlaylists={this.fetchExplorePlaylists}
                setCurrentPlaySong={this.setCurrentPlaySong}
                fetchFavoriteButton={this.fetchFavoriteButton}
                fetchUserAllPlaylists={this.fetchUserAllPlaylists}
                addSongToPlaylist={this.addSongToPlaylist}
                createAndAddToPlaylist={this.createAndAddToPlaylist}
                addSongToCurrentAudioQueue={this.addSongToCurrentAudioQueue}
                setIsPlayerPlaying={this.setIsPlayerPlaying}
                fetchAdvertisementByLocation={this.fetchAdvertisementByLocation}
                setFavouriteArtist={this.setFavouriteArtist}
                fetchIndividualAlbum={this.fetchIndividualAlbum}
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

        advertisements: state.advertisements.payload,
        advertisementErrors: state.advertisements.errors,
        advertisementLoading: state.advertisements.loading,

        exploreSongs: state.exploreSongs.payload,
        exploreSongsErrors: state.exploreSongs.errors,
        exploreSongsLoading: state.exploreSongs.loading,
        exploreSongsMeta: state.exploreSongs.meta,
        exploreSongsHasMore: state.exploreSongs.hasMore,
        exploreSongsLoadingMore: state.exploreSongs.loadingMore,
        

        exploreAlbums: state.exploreAlbums.payload,
        exploreAlbumsErrors: state.exploreAlbums.errors,
        exploreAlbumsLoading: state.exploreAlbums.loading,
        exploreAlbumsMeta: state.exploreAlbums.meta,
        exploreAlbumsHasMore: state.exploreAlbums.hasMore,
        exploreAlbumsLoadingMore: state.exploreAlbums.loadingMore,

        exploreArtists: state.exploreArtists.payload,
        exploreArtistsErrors: state.exploreArtists.errors,
        exploreArtistsLoading: state.exploreArtists.loading,
        exploreArtistsMeta: state.exploreArtists.meta,
        exploreArtistsHasMore: state.exploreArtists.hasMore,
        exploreArtistsLoadingMore: state.exploreArtists.loadingMore,
        
        explorePlaylists: state.explorePlaylists.payload,
        explorePlaylistsErrors: state.explorePlaylists.errors,
        explorePlaylistsLoading: state.explorePlaylists.loading,
        explorePlaylistsMeta: state.explorePlaylists.meta,
        explorePlaylistsHasMore: state.explorePlaylists.hasMore,
        explorePlaylistsLoadingMore: state.explorePlaylists.loadingMore,

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

        recentlyFavouriteAlbum: state.favoriteAlbums.recentlyFav,
        favouriteAlbumLoading: state.favoriteAlbums.favLoading,
        favouriteAlbumLoadingId: state.favoriteAlbums.id,

        favouriteArtistFollowLoading:state.favoriteArtists.followLoading,
        RecentlyFavouriteArtist:state.favoriteArtists.recentlyFollowed,     
        favouriteArtistLoadingId:state.favoriteArtists.id,

        individualAlbum: state.individualAlbum.payload,
        individualAlbumErrors: state.individualAlbum.errors,
        individualAlbumLoading: state.individualAlbum.loading,
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
                exploreSongsService,
                exploreSongsAction,
                exploreAlbumsService,
                exploreAlbumsAction,
                exploreArtistsService,
                exploreArtistsAction,
                explorePlaylistsService,
                explorePlaylistsAction,
                currentPlayAction,
                advertisementAction,
                advertisementService,
                favoriteButtonAction,
                favoriteService,
                userAllPlaylistsService,
                addToPlaylistService,
                createUserPlaylistAction,
                addToQueueAction,
                favouriteAlbumService,
                favouriteartistService,
                albumsService,
                individualAlbumAction,
            ),
            dispatch
        ),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ExploreContainer)
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Genre from '../../components/Genre';

import * as individualAction from '../../actions/individualAction';
import * as genresService from '../../services/genresService';

import * as individualGenreSongsAction from '../../actions/individualGenreSongsAction';
import * as individualGenreAlbumsAction from '../../actions/individualGenreAlbumsAction';
import * as individualGenreArtistsAction from '../../actions/individualGenreArtistsAction';
import * as individualGenrePlaylistsAction from '../../actions/individualGenrePlaylistsAction';

import * as currentPlayAction from '../../actions/currentPlayAction';
import * as addToQueueAction from '../../actions/addToQueueAction';

import * as advertisementService from '../../services/advertisementService';
import * as advertisementAction from '../../actions/advertisementAction';
import * as favoriteButtonAction from '../../actions/favoriteButtonAction';
import * as favoriteService from '../../services/favoriteService';
import * as userAllPlaylistsService from '../../services/userAllPlaylistsService';
import * as addToPlaylistService from '../../services/addToPlaylistService';

import * as createUserPlaylistAction from '../../actions/createUserPlaylistAction';
import * as favouriteArtistService from '../../services/favoriteArtistsService'

import * as albumsService from '../../services/albumsService';
import * as individualAlbumAction from '../../actions/individualAlbumAction';

export class GenreContainer extends React.Component {

      /**
     * Fetch individual genre.
     *
     */
    fetchIndividualGenre = id => {
        this.props.actions.fetchIndividualGenre(id);
    };

    /**
     * Fetch individual genre song.
     *
     */
    fetchIndividualGenreSongs = (id, page) => {
        this.props.actions.fetchIndividualGenreSongs(id, page);
    };

    /**
     * Fetch individual genre albums.
     *
     */
    fetchIndividualGenreAlbums = (id, page) => {
        this.props.actions.fetchIndividualGenreAlbums(id, page);
    };

    /**
     * Fetch individual genre artists.
     *
     */
    fetchIndividualGenreArtists = (id, page) => {
        this.props.actions.fetchIndividualGenreArtists(id, page);
    };

    /**
     * Fetch individual genre playlists.
     *
     */
    fetchIndividualGenrePlaylists = (id, page) => {
        this.props.actions.fetchIndividualGenrePlaylists(id, page);
    };

    /**
     * Set Song.
     *
     */
    setCurrentPlaySong = (songData) => {
        this.props.actions.currentPlaySong(songData);
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

    setIsPlayerPlaying=(isPlayerPlaying)=>{        
        this.props.actions.isPlayerPlaying(isPlayerPlaying)
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

      // fetch individual album

      fetchIndividualAlbum = (id, callBack) => {
        this.props.actions.fetchIndividualAlbum(id, callBack);
    };

    render() {
        return (
            <Genre
                fetchIndividualGenre={this.fetchIndividualGenre}
                fetchIndividualGenreSongs={this.fetchIndividualGenreSongs}
                fetchIndividualGenreAlbums={this.fetchIndividualGenreAlbums}
                fetchIndividualGenreArtists={this.fetchIndividualGenreArtists}
                fetchIndividualGenrePlaylists={this.fetchIndividualGenrePlaylists}
                setCurrentPlaySong={this.setCurrentPlaySong}
                setIsPlayerPlaying={this.setIsPlayerPlaying}
                fetchFavoriteButton={this.fetchFavoriteButton}
                fetchUserAllPlaylists={this.fetchUserAllPlaylists}
                addSongToPlaylist={this.addSongToPlaylist}
                createAndAddToPlaylist={this.createAndAddToPlaylist}
                addSongToCurrentAudioQueue={this.addSongToCurrentAudioQueue}
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

        favoriteButton: state.favoriteButton.payload,
        favoriteButtonErrors: state.favoriteButton.errors,
        favoriteButtonLoading: state.favoriteButton.loading,
        favoriteButtonLoadingId: state.favoriteButton.id,

        individual: state.individual.payload,
        individualErrors: state.individual.errors,
        individualLoading: state.individual.loading,
        
        individualGenreSongs: state.individualGenreSongs.payload,
        individualGenreSongsErrors: state.individualGenreSongs.errors,        
        individualGenreSongsLoading: state.individualGenreSongs.loading,
        individualGenreSongsLoadingMore: state.individualGenreSongs.loadingMore,
        individualGenreSongsMetaInfo: state.individualGenreSongs.meta,
        individualGenreSongsHasMore: state.individualGenreSongs.hasMore,

        individualGenreAlbums: state.individualGenreAlbums.payload,
        individualGenreAlbumsErrors: state.individualGenreAlbums.errors,
        individualGenreAlbumsLoading: state.individualGenreAlbums.loading,
        individualGenreAlbumsLoadingMore: state.individualGenreAlbums.loadingMore,
        individualGenreAlbumsMetaInfo: state.individualGenreAlbums.meta,
        individualGenreAlbumsHasMore: state.individualGenreAlbums.hasMore,

        individualGenreArtists: state.individualGenreArtists.payload,
        individualGenreArtistsErrors: state.individualGenreArtists.errors,
        individualGenreArtistsLoading: state.individualGenreArtists.loading,
        individualGenreArtistsLoadingMore: state.individualGenreArtists.loadingMore,
        individualGenreArtistsMetaInfo: state.individualGenreArtists.meta,
        individualGenreArtistsHasMore: state.individualGenreArtists.hasMore,

        individualGenrePlaylists: state.individualGenrePlaylists.payload,
        individualGenrePlaylistsErrors: state.individualGenrePlaylists.errors,
        individualGenrePlaylistsLoading: state.individualGenrePlaylists.loading,
        individualGenrePlaylistsLoadingMore: state.individualGenrePlaylists.loadingMore,
        individualGenrePlaylistsMetaInfo: state.individualGenrePlaylists.meta,
        individualGenrePlaylistsHasMore: state.individualGenrePlaylists.hasMore,        

        userAllPlaylists:state.userAllPlaylists.payload,
        userAllPlaylistsErrors:state.userAllPlaylists.errors,
        userAllPlaylistsLoading:state.userAllPlaylists.loading,
        
        createdUserPlaylist:state.createUserPlaylist.payload,
        createUserPlaylistErrors:state.createUserPlaylist.errors,
        createUserPlaylistLoading:state.createUserPlaylist.loading,

        favoriteArtistsLoading: state.favoriteArtists.loading, 
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
                individualAction,
                individualGenreSongsAction,
                individualGenreAlbumsAction,
                individualGenreArtistsAction,
                individualGenrePlaylistsAction,
                currentPlayAction,
                genresService,
                advertisementAction,
                advertisementService,
                favoriteButtonAction,
                favoriteService,
                userAllPlaylistsService,
                addToPlaylistService,
                createUserPlaylistAction,
                addToQueueAction,
                advertisementService,
                favouriteArtistService,
                albumsService,
                individualAlbumAction,
            ),
            dispatch
        ),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(GenreContainer)

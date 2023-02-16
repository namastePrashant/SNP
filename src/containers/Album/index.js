import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Album from '../../components/Album';

import * as albumsService from '../../services/albumsService';

import * as individualAlbumAction from '../../actions/individualAlbumAction';
import * as relatedAlbumsByAlbumAction from '../../actions/relatedAlbumsByAlbumAction';

import * as currentPlayAction from '../../actions/currentPlayAction';
import * as addToQueueAction from '../../actions/addToQueueAction';
import * as createUserPlaylistAction from '../../actions/createUserPlaylistAction';
import * as addToPlaylistService from '../../services/addToPlaylistService';
import * as userAllPlaylistsService from '../../services/userAllPlaylistsService';

import * as favoriteButtonAction from '../../actions/favoriteButtonAction';
import * as favoriteService from '../../services/favoriteService';
import * as favouriteAlbumService from '../../services/favoriteAlbumsService';


export class SingleAlbumContainer extends React.Component {

    /**
     * Fetch individual album.
     *
     */
    fetchIndividualAlbum = id => {
        this.props.actions.fetchIndividualAlbum(id);
    };

    /**
     * Fetch related albums.
     *
     */
    fetchRelatedAlbumsByAlbum = id => {
        this.props.actions.fetchRelatedAlbumsByAlbum(id);
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

    setAlbumToFavourite = (formdata, id) => {
        this.props.actions.setFavouriteAlbum(formdata, id)
    }

    render() {
        return (
            <Album
                fetchIndividualAlbum={this.fetchIndividualAlbum}
                fetchRelatedAlbumsByAlbum={this.fetchRelatedAlbumsByAlbum}
                setCurrentPlaySong={this.setCurrentPlaySong}
                setIsPlayerPlaying={this.setIsPlayerPlaying}
                fetchFavoriteButton={this.fetchFavoriteButton}
                fetchUserAllPlaylists={this.fetchUserAllPlaylists}
                addSongToPlaylist={this.addSongToPlaylist}
                createAndAddToPlaylist={this.createAndAddToPlaylist}
                addSongToCurrentAudioQueue={this.addSongToCurrentAudioQueue}
                setAlbumToFavourite={this.setAlbumToFavourite}
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
        isPlayerPlaying:state.currentPlay.isPlayerPlaying,
        currentPlayReferrerId: state.currentPlay.payload.referrerId,
        currentPlayReferrer: state.currentPlay.payload.referrer,        

        individualAlbum: state.individualAlbum.payload,
        individualAlbumErrors: state.individualAlbum.errors,
        individualAlbumLoading: state.individualAlbum.loading,
        
        relatedAlbumsByAlbum: state.relatedAlbumsByAlbum.payload,
        relatedAlbumsByAlbumErrors: state.relatedAlbumsByAlbum.errors,
        relatedAlbumsByAlbumLoading: state.relatedAlbumsByAlbum.loading, 
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

        favouriteAlbumLoading: state.favoriteAlbums.favLoading,
        recentlyFavouriteAlbum: state.favoriteAlbums.recentlyFav,
        favouriteAlbumLoadingId: state.favoriteAlbums.id,
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
                albumsService,
                individualAlbumAction,
                relatedAlbumsByAlbumAction,
                currentPlayAction,
                favoriteButtonAction,
                favoriteService,
                userAllPlaylistsService,
                addToPlaylistService,
                createUserPlaylistAction,
                addToQueueAction,
                favouriteAlbumService,
            ),
            dispatch
        ),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SingleAlbumContainer);
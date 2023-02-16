import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import User from '../../components/User';

import * as userProfileService from '../../services/userProfileService';
import * as userProfileAction from '../../actions/userProfileAction';
import * as userDataAction from '../../actions/userDataAction';
import * as userAllPlaylistsAction from '../../actions/userAllPlaylistsAction';
import * as userAllPlaylistsService from '../../services/userAllPlaylistsService';

import * as currentPlayAction from '../../actions/currentPlayAction';

import * as favoriteButtonAction from '../../actions/favoriteButtonAction';
import * as favoriteService from '../../services/favoriteService';

import * as favoriteSongsAllService from '../../services/favoriteSongsAllService';
import * as favoriteSongsAllAction from '../../actions/favoriteSongsAllAction';


import * as favoriteArtistsAction from '../../actions/favoriteArtistsAction';
import * as favoriteArtistsService from '../../services/favoriteArtistsService';
import * as advertisementService from '../../services/advertisementService';
import * as favouriteArtistSevice from '../../services/favoriteArtistsService'



export class UserContainer extends React.Component {

    /**
    * Fetch user Profile.
    *
    */
    fetchUserProfile = () => {
        this.props.actions.fetchUserProfile();
    };

    /**
    * Fetch user Profile.
    *
    */
    fetchUserData = () => {
        this.props.actions.fetchUserData();
    };

    /* Fetch user all playlist */
    fetchUserAllPlaylists = () => {
        this.props.actions.fetchUserAllPlaylists();
    }

    /**
     * Set Song.
     *
     */
    setCurrentPlaySong = (song) => {
        this.props.actions.currentPlaySong(song);
    }

    /**
    * Set Favorite.
    *
    */
   fetchFavoriteButton = (formData,id) => {
    this.props.actions.fetchFavoriteButton(formData,id);
    }

    /**
    * fetch user favourite artists
    *
    */
    fetchFavoriteArtists = (page) => {
        this.props.actions.fetchFavoriteArtists(page);
    };


    fetchAdvertisementByLocation= (formData) =>{
        this.props.actions.fetchAdvertisementByLocation(formData)
    }


    
    setFavouriteArtist = (formData,id) =>{
        this.props.actions.setFavouriteArtist(formData,id);
    }


    /**
     * Fetch Favorite Songs.
     *
     */
    fetchFavoriteSongsAll = (page) => {
        this.props.actions.fetchFavoriteSongsAll(page);
    };


    render() {
        return (
            <User
                fetchUserProfile={this.fetchUserProfile}
                fetchUserData={this.fetchUserData}
                fetchFavoriteSongsAll={this.fetchFavoriteSongsAll}
                setCurrentPlaySong={this.setCurrentPlaySong}
                fetchFavoriteButton={this.fetchFavoriteButton}
                fetchUserAllPlaylists={this.fetchUserAllPlaylists}
                fetchFavoriteArtists = {this.fetchFavoriteArtists}
                fetchAdvertisementByLocation = {this.fetchAdvertisementByLocation}
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
        userProfile: state.userProfile.payload,
        userProfileErrors: state.userProfile.errors,
        userProfileLoading: state.userProfile.loading,
        userData: state.userData.payload,
        userDataErrors: state.userData.errors,
        userDataLoading: state.userData.loading,
        favoriteButton: state.favoriteButton.payload,
        favoriteButtonErrors: state.favoriteButton.errors,
        favoriteButtonLoading: state.favoriteButton.loading,
        favoriteButtonLoadingId: state.favoriteButton.id,
        userAllPlaylists: state.userAllPlaylists.payload,
        userAllPlaylistsErrors: state.userAllPlaylists.errors,
        userAllPlaylistsLoading: state.userAllPlaylists.loading,

        favoriteArtists: state.favoriteArtists.payload,
        favoriteArtistsErrors: state.favoriteArtists.errors,
        favoriteArtistsLoading: state.favoriteArtists.loading,  

        favouriteArtistFollowLoading:state.favoriteArtists.followLoading,
        RecentlyFavouriteArtist:state.favoriteArtists.recentlyFollowed,     
        favouriteArtistLoadingId:state.favoriteArtists.id,


        favoriteSongsAll: state.favoriteSongsAll.payload,
        favoriteSongsAllErrors: state.favoriteSongsAll.errors,
        favoriteSongsAllLoading: state.favoriteSongsAll.loading,
        favoriteSongsLoadingMore: state.favoriteSongsAll.loadMoreLoading,
        favoriteSongsAllMeta: state.favoriteSongsAll.meta,
        favoriteSongsAllHasMoreData: state.favoriteSongsAll.hasMore,

        totalFavouriteSongs: state.favoriteSongsAll.total_songs,
        totalFavouriteSongsDuration: state.favoriteSongsAll.total_duration,
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
                userProfileAction,
                userProfileService,
                currentPlayAction,
                favoriteButtonAction,
                favoriteService,
                userDataAction,
                userAllPlaylistsAction,
                userAllPlaylistsService,

                favoriteSongsAllService,
                favoriteSongsAllAction,


                favoriteArtistsAction,
                favoriteArtistsService, 
                advertisementService,

                favouriteArtistSevice,

            ),
            dispatch
        ),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
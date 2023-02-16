import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Favorite from '../../components/Favorite';

import * as favoriteSongsAllService from '../../services/favoriteSongsAllService';
import * as favoriteSongsAllAction from '../../actions/favoriteSongsAllAction';

import * as currentPlayAction from '../../actions/currentPlayAction';

import * as favoriteButtonAction from '../../actions/favoriteButtonAction';
import * as favoriteService from '../../services/favoriteService';
import * as  advertisementService from'../../services/advertisementService'

export class FavoriteContainer extends React.Component {

    /**
     * Fetch Favorite Songs.
     *
     */
    fetchFavoriteSongsAll = (page) => {
        this.props.actions.fetchFavoriteSongsAll(page);
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
    fetchFavoriteButton = (formData,id) => {
        
        this.props.actions.fetchFavoriteButton(formData,id);
    }

    
    fetchAdvertisementByLocation= (formData) =>{
        this.props.actions.fetchAdvertisementByLocation(formData)
    }



    render() {
        return (
            <Favorite
                fetchFavoriteSongsAll={this.fetchFavoriteSongsAll}
                setCurrentPlaySong={this.setCurrentPlaySong}
                fetchFavoriteButton={this.fetchFavoriteButton}
                fetchAdvertisementByLocation={this.fetchAdvertisementByLocation}
                {...this.props}
            />
        )
    }
}
const mapStateToProps = (state) => {

    return {
        currentPlayKey:state.currentPlay.songId,
        isPlayerPlaying:state.currentPlay.isPlayerPlaying,        
        favoriteSongsAll: state.favoriteSongsAll.payload,
        favoriteSongsAllErrors: state.favoriteSongsAll.errors,
        favoriteSongsAllLoading: state.favoriteSongsAll.loading,
        favoriteSongsLoadingMore: state.favoriteSongsAll.loadMoreLoading,
        favoriteSongsAllMeta: state.favoriteSongsAll.meta,
        favoriteSongsAllHasMoreData: state.favoriteSongsAll.hasMore,
        favoriteButton: state.favoriteButton.payload,
        favoriteButtonLoadingId: state.favoriteButton.id,
        favoriteButtonErrors: state.favoriteButton.errors,
        favoriteButtonLoading: state.favoriteButton.loading,
        totalFavouriteSongs: state.favoriteSongsAll.total_songs,
        totalFavouriteSongsDuration: state.favoriteSongsAll.total_duration,
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        actions: bindActionCreators(
            Object.assign(
                {},
                favoriteSongsAllService,
                favoriteSongsAllAction,
                currentPlayAction,
                favoriteButtonAction,
                favoriteService,
                advertisementService
            ),
            dispatch
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteContainer);
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as favoriteAlbumsService from '../../services/favoriteAlbumsService';
import * as favoriteAlbumsAction from '../../actions/favoriteAlbumsAction';

import * as currentPlayAction from '../../actions/currentPlayAction';
import * as addToQueueAction from '../../actions/addToQueueAction';


import FollowedAlbums from '../../components/FollowedAlbums';
import * as adsService from '../../services/advertisementService';

import * as albumsService from '../../services/albumsService';
import * as individualAlbumAction from '../../actions/individualAlbumAction';

export class FollowedAlbumsContainer extends React.Component {

    /**
     * Fetch followed albums.
     *
     */
    fetchFavoriteAlbums = (page) => {
        this.props.actions.fetchFavoriteAlbums(page);
    };


    fetchAdvertisementByLocation = (formData) => {
        this.props.actions.fetchAdvertisementByLocation(formData)
    }

    /**
     * Set Song and Analytics
     *
     */
    setCurrentPlaySong = (songData) => {
        this.props.actions.currentPlaySong(songData);
    }

    setIsPlayerPlaying = (isPlayerPlaying) => {
        this.props.actions.isPlayerPlaying(isPlayerPlaying)
    }

    /**
     * Fetch individual album.
     *
     */
    fetchIndividualAlbum = (id, callBack) => {
        this.props.actions.fetchIndividualAlbum(id, callBack);
    };

    addSongToCurrentAudioQueue = (songData) => {
        this.props.actions.addSongToCurrentAudioQueue(songData);
    }

    render() {
        return (
            <FollowedAlbums
                setCurrentPlaySong={this.setCurrentPlaySong}
                setIsPlayerPlaying={this.setIsPlayerPlaying}
                fetchFavoriteAlbums={this.fetchFavoriteAlbums}
                fetchAdvertisementByLocation={this.fetchAdvertisementByLocation}
                fetchIndividualAlbum={this.fetchIndividualAlbum}
                addSongToCurrentAudioQueue={this.addSongToCurrentAudioQueue}
                {...this.props}
            />
        )
    }
}

const mapStateToProps = (state) => {

    return {
        favoriteAlbums: state.favoriteAlbums.payload,
        favoriteAlbumsList:state.favoriteAlbums.album,
        favoriteAlbumsErrors: state.favoriteAlbums.errors,
        favoriteAlbumsLoading: state.favoriteAlbums.loading,
        favoriteAlbumsMeta: state.favoriteAlbums.meta,
        favoriteAlbumsHasMore: state.favoriteAlbums.hasMore,
        favoriteAlbumsLoadingMore: state.favoriteAlbums.loadingMore,

        recentlyFavouriteAlbum: state.favoriteAlbums.recentlyFav,
        favouriteAlbumLoading: state.favoriteAlbums.favLoading,
        favouriteAlbumLoadingId: state.favoriteAlbums.id,

        currentPlayKey:state.currentPlay.songId,
        isPlayerPlaying:state.currentPlay.isPlayerPlaying,
        
        currentPlayReferrerId: state.currentPlay.payload.referrerId,
        currentPlayReferrer: state.currentPlay.payload.referrer,

        individualAlbum: state.individualAlbum.payload,
        individualAlbumErrors: state.individualAlbum.errors,
        individualAlbumLoading: state.individualAlbum.loading,
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        actions: bindActionCreators(
            Object.assign(
                {},
                favoriteAlbumsService,
                favoriteAlbumsAction,
                currentPlayAction,
                adsService,
                albumsService,
                individualAlbumAction,
                addToQueueAction,
            ),
            dispatch
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FollowedAlbumsContainer)
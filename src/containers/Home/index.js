import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Home from '../../components/Home';

import * as featuredService from '../../services/featuredService';
import * as featuredAction from '../../actions/featuredAction';

import * as currentTopHitsAction from '../../actions/currentTopHitsAction';
import * as currentTopHitsService from '../../services/currentTopHitsService';

import * as currentPlayAction from '../../actions/currentPlayAction';
import * as addToQueueAction from '../../actions/addToQueueAction';

import * as freshAction from '../../actions/freshAction';
import * as freshService from '../../services/freshService';

import * as popularSongsAction from '../../actions/popularSongsAction';
import * as popularSongsService from '../../services/popularSongsService';

import * as topSongsAction from '../../actions/topSongsAction';
import * as topSongsService from '../../services/topSongsService';

import * as recentlyPlayedAction from '../../actions/recentlyPlayedAction';
import * as recentlyPlayedService from '../../services/recentlyPlayedService';

import * as recommendedArtistsAction from '../../actions/recommendedArtistsAction';
import * as recommendedArtistsService from '../../services/recommendedArtistsService';

import * as recommendedAlbumsAction from '../../actions/recommendedAlbumsAction';
import * as recommendedAlbumsService from '../../services/recommendedAlbumsService';

import * as playlistsSuggestionAction from '../../actions/playlistsSuggestionAction';
import * as playlistsSuggestionService from '../../services/playlistsSuggestionService';

import * as favoriteButtonAction from '../../actions/favoriteButtonAction';
import * as favoriteService from '../../services/favoriteService';

import * as analyticsAndRecentService from '../../services/analyticsAndRecentService';

import * as advertisementService from '../../services/advertisementService';
import * as advertisementAction from '../../actions/advertisementAction';

import * as userAllPlaylistsService from '../../services/userAllPlaylistsService';
import * as addToPlaylistService from '../../services/addToPlaylistService';

import * as createUserPlaylistAction from '../../actions/createUserPlaylistAction';
import * as favouriteAlbumService from '../../services/favoriteAlbumsService';

import * as favouriteArtistSevice from '../../services/favoriteArtistsService';

import * as albumsService from '../../services/albumsService';
import * as individualAlbumAction from '../../actions/individualAlbumAction';


export class HomeContainer extends React.Component {

    /**
     * Fetch featured.
     *
     */
    fetchFeatured = () => {
        this.props.actions.fetchFeatured();
    };

    /**
     * Fetch advertisements.
     *
     */
    fetchAdvertisements = () => {
        this.props.actions.fetchAdvertisements();
    };

    /**
     * Fetch Current Top Hits.
     *
     */
    fetchCurrentTopHits = () => {
        this.props.actions.fetchCurrentTopHits();
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
     * Fetch Fresh Out In The Market.
     *
     */
    fetchFresh = () => {
        this.props.actions.fetchFresh();
    }

    /**
     * Fetch Popular Songs.
     *
     */
    fetchPopularSongs = () => {
        this.props.actions.fetchPopularSongs();
    }

    /**
     * Fetch Top Songs.
     *
     */
    fetchTopSongs = () => {
        this.props.actions.fetchTopSongs();
    }

    /**
     * Fetch Recently Played.
     *
     */
    fetchRecentlyPlayed = () => {
        this.props.actions.fetchRecentlyPlayed();
    }

    /**
     * Fetch featured Recommended Artists.
     *
     */
    fetchRecommendedArtists = () => {
        this.props.actions.fetchRecommendedArtists();
    }

    /**
     * Fetch featured Recommended Albums.
     *
     */
    fetchRecommendedAlbums = () => {
        this.props.actions.fetchRecommendedAlbums();
    }

    /**
    * Fetch playlistsSuggestion.
    *
    */
    fetchPlaylistsSuggestion = () => {
        this.props.actions.fetchPlaylistsSuggestion();
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

    fetchAdvertisementByLocation = (formData) => {
        this.props.actions.fetchAdvertisementByLocation(formData)
    }


    setFavouriteArtist = (formData, id) => {
        this.props.actions.setFavouriteArtist(formData, id);
    }


    /**
     * Fetch individual album.
     *
     */
    fetchIndividualAlbum = (id, callBack) => {
        this.props.actions.fetchIndividualAlbum(id, callBack);
    };







    render() {
        return (
            <Home
                fetchFeatured={this.fetchFeatured}
                fetchAdvertisements={this.fetchAdvertisements}
                fetchCurrentTopHits={this.fetchCurrentTopHits}
                setCurrentPlaySong={this.setCurrentPlaySong}
                setIsPlayerPlaying={this.setIsPlayerPlaying}
                // setAnalyticsAndRecent={this.setAnalyticsAndRecent}
                fetchFresh={this.fetchFresh}
                fetchPopularSongs={this.fetchPopularSongs}
                fetchTopSongs={this.fetchTopSongs}
                fetchRecentlyPlayed={this.fetchRecentlyPlayed}
                fetchRecommendedArtists={this.fetchRecommendedArtists}
                fetchRecommendedAlbums={this.fetchRecommendedAlbums}
                fetchPlaylistsSuggestion={this.fetchPlaylistsSuggestion}
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

        featured: state.featured.payload.Song,
        featuredErrors: state.featured.errors,
        featuredLoading: state.featured.loading,

        advertisements: state.advertisements.payload,
        advertisementErrors: state.advertisements.errors,
        advertisementLoading: state.advertisements.loading,

        currentTopHits: state.currentTopHits.payload,
        currentTopHitsErrors: state.currentTopHits.errors,
        currentTopHitsLoading: state.currentTopHits.loading,

        fresh: state.fresh.payload,
        freshErrors: state.fresh.errors,
        freshLoading: state.fresh.loading,

        popularSongs: state.popularSongs.payload,
        popularSongsErrors: state.popularSongs.errors,
        popularSongsLoading: state.popularSongs.loading,

        topSongs: state.topSongs.payload,
        topSongsErrors: state.topSongs.errors,
        topSongsLoading: state.topSongs.loading,

        recentlyPlayed: state.recentlyPlayed.payload,
        recentlyPlayedErrors: state.recentlyPlayed.errors,
        recentlyPlayedLoading: state.recentlyPlayed.loading,

        recommendedArtists: state.recommendedArtists.payload,
        recommendedArtistsErrors: state.recommendedArtists.errors,
        recommendedArtistsLoading: state.recommendedArtists.loading,

        recommendedAlbums: state.recommendedAlbums.payload,
        recommendedAlbumsErrors: state.recommendedAlbums.errors,
        recommendedAlbumsLoading: state.recommendedAlbums.loading,

        playlistsSuggestion: state.playlistsSuggestion.payload,
        playlistsSuggestionErrors: state.playlistsSuggestion.errors,
        playlistsSuggestionLoading: state.playlistsSuggestion.loading,

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

        recentlyFavouriteAlbum: state.favoriteAlbums.recentlyFav,
        favouriteAlbumLoading: state.favoriteAlbums.favLoading,
        favouriteAlbumLoadingId: state.favoriteAlbums.id,

        favouriteArtistFollowLoading: state.favoriteArtists.followLoading,
        RecentlyFavouriteArtist: state.favoriteArtists.recentlyFollowed,
        favouriteArtistLoadingId: state.favoriteArtists.id,

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
                featuredAction,
                featuredService,
                currentTopHitsAction,
                currentTopHitsService,
                currentPlayAction,
                freshAction,
                freshService,
                popularSongsAction,
                popularSongsService,
                topSongsAction,
                topSongsService,
                recentlyPlayedAction,
                recentlyPlayedService,
                recommendedArtistsAction,
                recommendedArtistsService,
                recommendedAlbumsAction,
                recommendedAlbumsService,
                playlistsSuggestionAction,
                playlistsSuggestionService,
                favoriteButtonAction,
                favoriteService,
                analyticsAndRecentService,
                advertisementAction,
                advertisementService,
                userAllPlaylistsService,
                addToPlaylistService,
                createUserPlaylistAction,
                addToQueueAction,
                favouriteAlbumService,
                favouriteArtistSevice,
                albumsService,
                individualAlbumAction,
            ),
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
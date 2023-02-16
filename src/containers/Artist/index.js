import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Artist from '../../components/Artist';

import * as artistsService from '../../services/artistsService';

import * as individualArtistAction from '../../actions/individualArtistAction';
import * as popularSongsByArtistAction from '../../actions/popularSongsByArtistAction';
import * as relatedArtistsByArtistAction from '../../actions/relatedArtistsByArtistAction';
import * as artistLatestReleasesAction from '../../actions/artistLatestReleasesAction';
import * as artistLatestReleasedAlbumAction from '../../actions/artistLatestReleasedAlbumAction';

import * as currentPlayAction from '../../actions/currentPlayAction';
import * as addToQueueAction from '../../actions/addToQueueAction';
import * as createUserPlaylistAction from '../../actions/createUserPlaylistAction';
import * as addToPlaylistService from '../../services/addToPlaylistService';
import * as userAllPlaylistsService from '../../services/userAllPlaylistsService';

import * as favoriteButtonAction from '../../actions/favoriteButtonAction';
import * as favoriteService from '../../services/favoriteService';
import * as favouriteArtistService from '../../services/favoriteArtistsService';
import * as favouriteAlbumService from '../../services/favoriteAlbumsService';
import * as advertisementService from '../../services/advertisementService';
import * as albumsService from '../../services/albumsService';
import * as individualAlbumAction from '../../actions/individualAlbumAction';




export class SingleArtistContainer extends React.Component {
    /**
     * Fetch individual artist.
     *
     */
    fetchIndividualArtist = id => {
        this.props.actions.fetchIndividualArtist(id);
    };

    /**
     * fetch artist single 
     */
    fetchArtistSingleSong = id =>{
      this.props.actions.fetchArtistSingleSong(id)
    }

    /**
     * Fetch popular_songs_from_artist
     *
     */
    fetchPopularSongsByArtist = id => {
        this.props.actions.fetchPopularSongsByArtist(id);
    };

    /**
     * Fetch related artist by artist
     *
     */
    fetchRelatedArtistsByArtist = id => {
        this.props.actions.fetchRelatedArtistsByArtist(id);
    };

    /**
     * Fetch related artist by artist
     *
     */
    fetchArtistLatestReleases = id => {
        this.props.actions.fetchArtistLatestReleases(id);
    };


    /**
     * Fetch related artist by artist
     *
     */
    fetchArtistLatestReleasedAlbum = id => {
        this.props.actions.fetchArtistLatestReleasedAlbum(id);
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

    followArtist = (formData) => {
        this.props.actions.setFavouriteArtist(formData);
    }

    unFollowArtist = (formData) => {
        this.props.actions.unsetFavouriteArtist(formData);
    }

    fetchFavoriteArtists = () => {
        this.props.actions.fetchFavoriteArtists()
    }
    setIsPlayerPlaying = (isPlayerPlaying) => {
        this.props.actions.isPlayerPlaying(isPlayerPlaying)
    }

    setAlbumToFavourite = (formdata, id) => {
        this.props.actions.setFavouriteAlbum(formdata, id)
    }


    fetchAdvertisementByLocation = (formData) => {
        this.props.actions.fetchAdvertisementByLocation(formData)
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
            <Artist
                fetchIndividualArtist={this.fetchIndividualArtist}
                fetchPopularSongsByArtist={this.fetchPopularSongsByArtist}
                fetchRelatedArtistsByArtist={this.fetchRelatedArtistsByArtist}
                fetchArtistLatestReleases={this.fetchArtistLatestReleases}
                fetchArtistLatestReleasedAlbum={this.fetchArtistLatestReleasedAlbum}
                setCurrentPlaySong={this.setCurrentPlaySong}
                fetchFavoriteButton={this.fetchFavoriteButton}
                fetchUserAllPlaylists={this.fetchUserAllPlaylists}
                addSongToPlaylist={this.addSongToPlaylist}
                createAndAddToPlaylist={this.createAndAddToPlaylist}
                addSongToCurrentAudioQueue={this.addSongToCurrentAudioQueue}
                followArtist={this.followArtist}
                unFollowArtist={this.unFollowArtist}
                fetchFavouriteArtist={this.fetchFavoriteArtists}
                setIsPlayerPlaying={this.setIsPlayerPlaying}
                setAlbumToFavourite={this.setAlbumToFavourite}
                fetchAdvertisementByLocation={this.fetchAdvertisementByLocation}
                fetchIndividualAlbum={this.fetchIndividualAlbum}
                fetchArtistSingleSong={this.fetchArtistSingleSong}
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
        individualArtist: state.individualArtist.payload,
        individualArtistErrors: state.individualArtist.errors,
        individualArtistLoading: state.individualArtist.loading,
        popularSongsByArtist: state.popularSongsByArtist.payload,
        popularSongsByArtistErrors: state.popularSongsByArtist.errors,
        popularSongsByArtistLoading: state.popularSongsByArtist.loading,
        relatedArtistsByArtist: state.relatedArtistsByArtist.payload,
        relatedArtistsByArtistErrors: state.relatedArtistsByArtist.errors,
        relatedArtistsByArtistLoading: state.relatedArtistsByArtist.loading,
        artistLatestReleases: state.artistLatestReleases.payload,
        artistLatestReleasesErrors: state.artistLatestReleases.errors,
        artistLatestReleasesLoading: state.artistLatestReleases.loading,
        artistLatestReleasedAlbum: state.artistLatestReleasedAlbum.payload,
        artistLatestReleasedAlbumErrors: state.artistLatestReleasedAlbum.errors,
        artistLatestReleasedAlbumLoading: state.artistLatestReleasedAlbum.loading,
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
        userFavouriteArtist: state.favoriteArtists.payload,
        userFavouriteAtristLoading: state.favoriteArtists.loading,
        userFavouriteArtistFollowLoading: state.favoriteArtists.followLoading,
        userRecentlyFollowedArtist: state.favoriteArtists.recentlyFollowed,

        favouriteAlbumLoading: state.favoriteAlbums.favLoading,
        recentlyFavouriteAlbum: state.favoriteAlbums.recentlyFav,
        favouriteAlbumLoadingId: state.favoriteAlbums.id,

        individualAlbum: state.individualAlbum.payload,
        individualAlbumErrors: state.individualAlbum.errors,
        individualAlbumLoading: state.individualAlbum.loading,


        artistSingleSongs:state.individualArtist.singleSongs,
        artistSingleSongLoading:state.individualArtist.singleSongsLoading
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
                artistsService,
                individualArtistAction,
                popularSongsByArtistAction,
                relatedArtistsByArtistAction,
                artistLatestReleasesAction,
                artistLatestReleasedAlbumAction,
                currentPlayAction,
                favoriteButtonAction,
                favoriteService,
                userAllPlaylistsService,
                addToPlaylistService,
                createUserPlaylistAction,
                addToQueueAction,
                favouriteArtistService,
                favouriteAlbumService,
                advertisementService,
                albumsService,
                individualAlbumAction,
            ),
            dispatch
        ),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SingleArtistContainer)
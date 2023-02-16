import React from 'react';
import SearchResults from '../../../components/Search/Sections/see-all'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as SearchServices from '../../../services/searchService';
import * as searchAction from '../../../actions/searchAction';

import * as currentPlayAction from '../../../actions/currentPlayAction';
import * as FavouriteServices from '../../../services/favoriteService';
import * as favouriteAlbumService from '../../../services/favoriteAlbumsService';

import * as userAllPlaylistsService from '../../../services/userAllPlaylistsService';
import * as addToPlaylistService from '../../../services/addToPlaylistService';

import * as createUserPlaylistAction from '../../../actions/createUserPlaylistAction';
import * as addToQueueAction from '../../../actions/addToQueueAction';
import * as favouriteArtistSevice from '../../../services/favoriteArtistsService';

import * as albumsService from '../../../services/albumsService';
import * as individualAlbumAction from '../../../actions/individualAlbumAction';



class SearchByIdentifier extends React.Component {


  // load more search results 
  LoadMoreSearchResults = (fromData, page) => {
    this.props.actions.LoadMoreSearchResults(fromData, page)
  }


  /**
   * Set current player playing.
   *
   */

  setIsPlayerPlaying = (isPlayerPlaying) => {
    this.props.actions.isPlayerPlaying(isPlayerPlaying)
  }

  /**
   * Set Song.
   *
   */
  setCurrentPlaySong = (song, key) => {
    this.props.actions.currentPlaySong(song, key);
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
      <SearchResults
        LoadMoreSearchResults={this.LoadMoreSearchResults}
        setCurrentPlaySong={this.setCurrentPlaySong}
        fetchFavoriteButton={this.fetchFavoriteButton}
        setIsPlayerPlaying={this.setIsPlayerPlaying}
        fetchUserAllPlaylists={this.fetchUserAllPlaylists}
        addSongToPlaylist={this.addSongToPlaylist}
        createAndAddToPlaylist={this.createAndAddToPlaylist}
        addSongToCurrentAudioQueue={this.addSongToCurrentAudioQueue}
        setFavouriteArtist={this.setFavouriteArtist}
        fetchIndividualAlbum={this.fetchIndividualAlbum}
        {...this.props}
      />
    )
  }
}


const mapStateToProps = state => {
  return {

    //search results data from state
    searchArtists: state.searches.artists,
    searchSongs: state.searches.songs,
    searchAlbums: state.searches.albums,
    searchedKey: state.searches.searchedKey,
    loadMore: state.searches.loadMore,
    hasMoreSongs: state.searches.hasMoreSongs,
    hasMoreAlbums: state.searches.hasMoreAlbums,
    hasMoreArtists: state.searches.hasMoreArtists,
    currentPage: state.searches.page_meta,
    //search results data from state
    isPlayerPlaying: state.currentPlay.isPlayerPlaying,

    currentPlayReferrerId: state.currentPlay.payload.referrerId,
    currentPlayReferrer: state.currentPlay.payload.referrer,

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

    favouriteArtistFollowLoading: state.favoriteArtists.followLoading,
    RecentlyFavouriteArtist: state.favoriteArtists.recentlyFollowed,
    favouriteArtistLoadingId: state.favoriteArtists.id,

    recentlyFavouriteAlbum: state.favoriteAlbums.recentlyFav,
    favouriteAlbumLoading: state.favoriteAlbums.favLoading,
    favouriteAlbumLoadingId: state.favoriteAlbums.id,

    individualAlbum: state.individualAlbum.payload,
    individualAlbumErrors: state.individualAlbum.errors,
    individualAlbumLoading: state.individualAlbum.loading,

  }
}


const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Object.assign(
      {},
      SearchServices,
      searchAction,
      currentPlayAction,
      FavouriteServices,
      userAllPlaylistsService,
      addToPlaylistService,
      createUserPlaylistAction,
      addToQueueAction,
      favouriteArtistSevice,
      albumsService,
      individualAlbumAction,
      favouriteAlbumService,
    ), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchByIdentifier)
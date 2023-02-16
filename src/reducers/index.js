import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import LanguageReducer from './languageReducer';

import featuredReducer from './featuredReducer';
import featuredPlaylistReducer from './featuredPlaylistReducer';
import favoriteButtonReducer from './favoriteButtonReducer';
import currentTopHitsReducer from './currentTopHitsReducer';
import currentPlayReducer from './currentPlayReducer';
import freshReducer from './freshReducer';
import popularSongsReducer from './popularSongsReducer';
import topSongsReducer from './topSongsReducer';
import playlistsSuggestionReducer from './playlistsSuggestionReducer';
import recentlyPlayedReducer from './recentlyPlayedReducer';
import recentlyPlayedAllReducer from './recentlyPlayedAllReducer';
import recommendedArtistsReducer from './recommendedArtistsReducer';
import recommendedAlbumsReducer from './recommendedAlbumsReducer';
import genresReducer from './genresReducer';
import individualReducer from './individualReducer';
import moodsReducer from './moodsReducer';
import individualMoodSongsReducer from './individualMoodSongsReducer'
import searchReducer from './searchReducer';
import advertisementReducer from './advertisementReducer';
import notificationReducer from './notificationReducer';
import latestSongsReducer from './latestSongsReducer';
import latestSongsAllReducer from './latestSongsAllReducer';
import latestAlbumsReducer from './latestAlbumsReducer';
import latestAlbumsAllReducer from './latestAlbumsAllReducer';
import latestArtistsReducer from './latestArtistsReducer';
import latestArtistsAllReducer from './latestArtistsAllReducer';
import favoriteArtistsReducer from './favoriteArtistsReducer';
import favoriteAlbumsReducer from './favoriteAlbumsReducer';
import favoritaSongsAllReducer from './favoriteSongsAllReducer'
import favoriteSongsReducer from './favoriteSongsReducer';
import exploreSongsReducer from './exploreSongsReducer';
import exploreAlbumsReducer from './exploreAlbumsReducer';
import exploreArtistsReducer from './exploreArtistsReducer';
import explorePlaylistsReducer from './explorePlaylistsReducer';
import userRecentPlaylistsReducer from './userRecentPlaylistsReducer';
import userAllPlaylistsReducer from './userAllPlaylistsReducer';
import userProfileReducer from './userProfileReducer';
import userProfileUpdateReducer from './userProfileUpdateReducer';
import userPasswordUpdateReducer from './userPasswordUpdateReducer';
import userDataReducer from './userDataReducer';
import individualGenreSongsReducer from './individualGenreSongsReducer';
import individualGenreAlbumsReducer from './individualGenreAlbumsReducer';
import individualGenreArtistsReducer from './individualGenreArtistsReducer';
import individualGenrePlaylistsReducer from './individualGenrePlaylistsReducer';
import individualArtistReducer from './individualArtistReducer';
import popularSongsByArtistReducer from './popularSongsByArtistReducer';
import relatedArtistsByArtistReducer from './relatedArtistsByArtistReducer';
import artistLatestReleasesReducer from './artistLatestReleasesReducer';
import artistLatestReleasedAlbumReducer from './artistLatestReleasedAlbumReducer';
import individualAlbumReducer from './individualAlbumReducer';
import relatedAlbumsByAlbumReducer from './relatedAlbumsByAlbumReducer';
import individualPlaylistReducer from './individualPlaylistReducer';
import similarPlaylistsByPlaylistReducer from './similarPlaylistsByPlaylistReducer';
import relatedArtistsByPlaylistReducer from './relatedArtistsByPlaylistReducer';
import addToPlaylistReducer from './addToPlaylistReducer';
import createUserPlaylistReducer from './createUserPlaylistReducer';
import addToQueueReducer from './addToQueueReducer';

import analyticsReducer from './analyticsReducer';


import authReducer from './authReducer';

import history from '../utils/history';

import ArtistDashboardReducer from './artistDashboardReducer' // artist dashboard reducer
import TagReducer from './artistDashboardReducer/tagsReducer'
import ArtistBankReducer from './artistDashboardReducer/bankingDetails'

const appReducer = combineReducers({
    auth: authReducer,
    router: connectRouter(history),
    
    // artist dashboard reducer
    artistDashboard:ArtistDashboardReducer,
    artistBank:ArtistBankReducer,
    tag:TagReducer,

    // user reducers
    featured: featuredReducer,
    featuredPlaylists:featuredPlaylistReducer,
    individual: individualReducer,
    currentTopHits: currentTopHitsReducer,
    currentPlay: currentPlayReducer,
    fresh: freshReducer,
    playlistsSuggestion: playlistsSuggestionReducer,
    popularSongs: popularSongsReducer,
    topSongs: topSongsReducer,
    recentlyPlayed: recentlyPlayedReducer,
    recommendedArtists: recommendedArtistsReducer,
    recommendedAlbums: recommendedAlbumsReducer,
    genres: genresReducer,
    moods: moodsReducer,
    searches: searchReducer,
    advertisements: advertisementReducer,
    notifications: notificationReducer,
    language:LanguageReducer,
    latestSongs: latestSongsReducer,
    latestSongsAll: latestSongsAllReducer,
    latestAlbums: latestAlbumsReducer,
    latestAlbumsAll: latestAlbumsAllReducer,
    latestArtists: latestArtistsReducer,
    latestArtistsAll: latestArtistsAllReducer,
    recentlyPlayedAll: recentlyPlayedAllReducer,
    favoriteArtists: favoriteArtistsReducer,
    favoriteAlbums: favoriteAlbumsReducer,
    favoriteSongs: favoriteSongsReducer,
    favoriteSongsAll:favoritaSongsAllReducer,
    favoriteButton: favoriteButtonReducer,
    exploreSongs: exploreSongsReducer,
    exploreAlbums: exploreAlbumsReducer,
    exploreArtists: exploreArtistsReducer,
    explorePlaylists: explorePlaylistsReducer,
    userRecentPlaylists: userRecentPlaylistsReducer,
    userAllPlaylists: userAllPlaylistsReducer,
    addToPlaylist:addToPlaylistReducer,
    createUserPlaylist:createUserPlaylistReducer,
    userProfile: userProfileReducer,
    userProfileUpdate: userProfileUpdateReducer,
    userPasswordUpdate: userPasswordUpdateReducer,
    userData: userDataReducer,
    individualMoodSongs:individualMoodSongsReducer,
    individualGenreSongs: individualGenreSongsReducer,
    individualGenreAlbums: individualGenreAlbumsReducer,
    individualGenreArtists: individualGenreArtistsReducer,
    individualGenrePlaylists: individualGenrePlaylistsReducer,
    individualArtist: individualArtistReducer,
    popularSongsByArtist: popularSongsByArtistReducer,
    individualAlbum: individualAlbumReducer,
    relatedAlbumsByAlbum: relatedAlbumsByAlbumReducer,
    relatedArtistsByArtist: relatedArtistsByArtistReducer,
    artistLatestReleases: artistLatestReleasesReducer,
    artistLatestReleasedAlbum: artistLatestReleasedAlbumReducer,
    individualPlaylist: individualPlaylistReducer,
    similarPlaylistsByPlaylist: similarPlaylistsByPlaylistReducer,
    relatedArtistsByPlaylist: relatedArtistsByPlaylistReducer,
    analytics:analyticsReducer,
    addToQueue:addToQueueReducer,
});

const rootReducer = (state, action) => {
    if (action && action.type === 'LOG_OUT_SUCCESS') {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;

import React, {Fragment, useEffect} from 'react'
import {withRouter, Switch, Route} from 'react-router-dom'
import PublicRoute from '../../routes/PublicRoute'
import PrivateRoute from '../../routes/PrivateRoute'


import {

  // artist
  AsyncDashboard,
  AsyncAnalytics,
  AsyncArtistProfile,
  AsyncArtistUploadAlbum,
  AsyncArtistMyAlbum,
  AsyncArtistUploadSong,
  AsyncArtistMySongs,

  AsyncArtistSignUp,
  // user
  AsyncHome,
  AsyncAppLayout,
  AsyncPublicLayout,
  AsyncNotFound,
  AsyncBrowse,
  AsyncAlbums,
  AsyncExplore,
  AsyncRecent,
  AsyncTopSongs,
  AsyncFavorite,
  AsyncArtists,
  AsyncSingleArtist,
  AsyncSingleAlbum,
  AsyncNew,
  AsyncGenre,
  AsyncMood,
  AsyncFollowedArtists,
  AsyncFollowedAlbums,
  AsyncMyPlaylist,
  AsyncPlaylists,
  AsyncPlaylist,
  AsyncUser,
  AsyncSearch,
  AsyncLogin,
  AsyncSignUp,
  AsyncUpgrade,
  // AsyncUserEdit,
  AsyncTermsAndConditions,
  AsyncPrivacyPolicy

} from './AsyncComponent'
import NetworkError from '../../components/Exception/NetworkError';
import ShareSongs from '../Share-song'
import SearchResults from '../Search/all-search-results'
import ArtistSeeAll from '../../components/Artist/Sections/see-all'
import ForgotPassword from "../ForgotPassword";
import {useSelector} from 'react-redux';


const App = () => {


  /**
   *  display props before closing tabs
   * @param {*} e
   */
  const handleUnload = (e) => {
    const message = '\o/'; //eslint-disable-line
    (e || window.event).returnValue = message;
    return message;
  }

  const playing = useSelector(state => state.currentPlay.isPlayerPlaying,)

  useEffect(() => {
    if (playing) {
      window.addEventListener('beforeunload', handleUnload);
    } else {
      window.removeEventListener('beforeunload', handleUnload);
    }
  }, [playing])//eslint-disable-line


  /**
   *  display props before closing tabs
   * @param {*} e
   */


  return (
    <Fragment>
      <Switch>
        <PrivateRoute exact path="/" layout={AsyncAppLayout} component={AsyncHome}/>
        <PrivateRoute exact path="/browse" layout={AsyncAppLayout} component={AsyncBrowse}/>
        <PrivateRoute exact path="/explore/:slug?" layout={AsyncAppLayout} component={AsyncExplore}/>
        <PrivateRoute exact path="/top-songs" layout={AsyncAppLayout} component={AsyncTopSongs}/>
        <PrivateRoute exact path="/recent" layout={AsyncAppLayout} component={AsyncRecent}/>
        <PrivateRoute exact path="/favorite" layout={AsyncAppLayout} component={AsyncFavorite}/>
        <PrivateRoute exact path="/myPlaylist" layout={AsyncAppLayout} component={AsyncMyPlaylist}/>
        <PrivateRoute exact path="/playlists" layout={AsyncAppLayout} component={AsyncPlaylists}/>
        <PrivateRoute exact path="/playlist/:id" layout={AsyncAppLayout} component={AsyncPlaylist}/>
        <PrivateRoute exact path="/artists" layout={AsyncAppLayout} component={AsyncArtists}/>
        <PrivateRoute exact path="/albums" layout={AsyncAppLayout} component={AsyncAlbums}/>
        <PrivateRoute exact path="/artist/:id" layout={AsyncAppLayout} component={AsyncSingleArtist}/>
        <PrivateRoute exact path="/artist/:id/:identifier" layout={AsyncAppLayout} component={ArtistSeeAll}/>
        <PrivateRoute exact path="/album/:id" layout={AsyncAppLayout} component={AsyncSingleAlbum}/>
        <PrivateRoute exact path="/new/:slug?" layout={AsyncAppLayout} component={AsyncNew}/>
        <PrivateRoute exact path="/genre/:id?/:slug?" layout={AsyncAppLayout} component={AsyncGenre}/>
        <PrivateRoute exact path="/mood/:id" layout={AsyncAppLayout} component={AsyncMood}/>
        <PrivateRoute exact path="/followedArtists" layout={AsyncAppLayout} component={AsyncFollowedArtists}/>
        <PrivateRoute exact path="/followedAlbums" layout={AsyncAppLayout} component={AsyncFollowedAlbums}/>
        <PrivateRoute exact path="/user/edit" layout={AsyncAppLayout} component={AsyncArtistProfile}/>
        <PrivateRoute path="/user/:slug?" layout={AsyncAppLayout} component={AsyncUser}/>
        <PrivateRoute exact path="/search" layout={AsyncAppLayout} component={AsyncSearch}/>
        <PrivateRoute exact path="/search/:identifier" layout={AsyncAppLayout} component={SearchResults}/>
        <PrivateRoute exact path="/song/:id" layout={AsyncAppLayout} component={ShareSongs}/>

        {/* // arist dashboard */}
        <PrivateRoute exact path="/dashboard" layout={AsyncAppLayout} component={AsyncDashboard}
                      isArtistRoute={true}/>
        <PrivateRoute exact path="/analytics" layout={AsyncAppLayout} component={AsyncAnalytics}
                      isArtistRoute={true}/>
        <PrivateRoute exact path="/my-profile" layout={AsyncAppLayout} component={AsyncArtistProfile}
                      isArtistRoute={true}/>
        <PrivateRoute exact path="/my-albums" layout={AsyncAppLayout} component={AsyncArtistMyAlbum}
                      isArtistRoute={true}/>
        <PrivateRoute exact path="/create-album" layout={AsyncAppLayout} component={AsyncArtistUploadAlbum}
                      isArtistRoute={true}/>
        <PrivateRoute exact path="/my-songs" layout={AsyncAppLayout} component={AsyncArtistMySongs}
                      isArtistRoute={true}/>
        <PrivateRoute exact path="/upload-song" layout={AsyncAppLayout} component={AsyncArtistUploadSong}
                      isArtistRoute={true}/>
        <PrivateRoute exact path="/edit-song" layout={AsyncAppLayout} component={AsyncArtistUploadSong}
                      isArtistRoute={true}/>
        <PrivateRoute exact path="/edit-album" layout={AsyncAppLayout} component={AsyncArtistUploadAlbum}
                      isArtistRoute={true}/>
        {/** end artist dashboard  section */}


        {/** artist login */}
        <PublicRoute path="/artist-signup" layout={AsyncPublicLayout} component={AsyncArtistSignUp}/>


        <PublicRoute path="/login" layout={AsyncPublicLayout} component={AsyncLogin}/>
        <PublicRoute path="/signup" layout={AsyncPublicLayout} component={AsyncSignUp}/>
        <PublicRoute path="/forgot-password" layout={AsyncPublicLayout} component={ForgotPassword}/>
        <PublicRoute path="/upgrade" layout={AsyncPublicLayout} component={AsyncUpgrade}/>
        <PublicRoute path="/terms-and-condition" layout={AsyncPublicLayout}
                     component={AsyncTermsAndConditions}/>
        <PublicRoute path="/privacy-policy" layout={AsyncPublicLayout} component={AsyncPrivacyPolicy}/>

        <Route path="/401" component={NetworkError}/>
        <Route path="/500" component={NetworkError}/>
        <Route path="/404" component={NetworkError}/>
        <Route component={AsyncNotFound}/>
      </Switch>
    </Fragment>
  );

};

export default withRouter(App);
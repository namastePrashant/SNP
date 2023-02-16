import { lazy } from "react";

export const AsyncAppLayout = lazy(() => import('../../components/Layout/AppLayout'))
export const AsyncPublicLayout = lazy(() => import('../../components/Layout/PublicLayout'))

export const AsyncHome = lazy(() => import('../../containers/Home'))
export const AsyncBrowse = lazy(() => import('../../containers/Browse'))
export const AsyncExplore = lazy(() => import('../../containers/Explore'))
export const AsyncRecent = lazy(() => import('../../containers/Recent'))
export const AsyncTopSongs = lazy(() => import('../../containers/TopSongs'))
export const AsyncFavorite = lazy(() => import('../../containers/Favorite'))
export const AsyncMyPlaylist = lazy(() => import('../../containers/MyPlaylists'))
export const AsyncPlaylists = lazy(() => import('../../containers/Playlists'))
export const AsyncPlaylist = lazy(() => import('../../containers/Playlist'))
export const AsyncArtists = lazy(() => import('../../containers/Artists'))
export const AsyncSingleArtist = lazy(() => import('../../containers/Artist'))
export const AsyncSingleAlbum = lazy(() => import('../../containers/Album'))
export const AsyncAlbums = lazy(() => import('../../containers/Albums'))
export const AsyncNew = lazy(() => import('../../containers/New'))
export const AsyncGenre = lazy(() => import('../../containers/Genre'))
export const AsyncMood = lazy(() => import('../../containers/Mood'))
export const AsyncFollowedArtists = lazy(() => import('../../containers/FollowedArtists'))
export const AsyncFollowedAlbums = lazy(() => import('../../containers/FollowedAlbums'))
export const AsyncUser = lazy(() => import('../../containers/User'))
export const AsyncUserEdit = lazy(() => import('../../containers/User/UserEditContainer'))
export const AsyncSearch = lazy(() => import('../../containers/Search'))
export const AsyncLogin = lazy(() => import('../../containers/Login'))
export const AsyncSignUp = lazy(() => import('../../containers/SignUp'))
export const AsyncUpgrade = lazy(() => import('../../containers/Upgrade'))
export const AsyncNotFound = lazy(() => import('../../containers/Exception/NotFoundContainer'))
export const AsyncTermsAndConditions = lazy(() => import('../../containers/TermsAndConditions'))
export const AsyncPrivacyPolicy = lazy(() => import('../../containers/PrivacyPolicy'))

// artist dashboard
export const AsyncDashboard = lazy(()=>import('../Dashboard'))
export const AsyncAnalytics = lazy(()=>import('../Dashboard/Analytics'))
export const AsyncArtistProfile = lazy(()=>import('../Dashboard/Profile'))
export const AsyncArtistUploadAlbum = lazy(()=>import('../Dashboard/Upload-albums'))
export const AsyncArtistMyAlbum = lazy(()=>import('../Dashboard/My-albums'))
export const AsyncArtistUploadSong = lazy(()=>import('../Dashboard/Upload-Songs'))
export const AsyncArtistMySongs = lazy(()=>import('../Dashboard/MySongs'))


// artist sign up
export const AsyncArtistSignUp = lazy(()=>import('../SignUp/ArtistRegister'))


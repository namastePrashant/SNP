import Home from '../assets/Icons/Home.svg'
import Browse from '../assets/Icons/Browse.svg'
import Explore from '../assets/Icons/Explore.svg'
import Recent from '../assets/Icons/Recent.svg'
import Favorite from '../assets/Icons/Favorite.svg'
import Artists from '../assets/Icons/Artists.svg'
import Albums from '../assets/Icons/Albums.svg'
import New from '../assets/Icons/new.svg'
import Playlist from '../assets/Icons/playlist.svg'

export default [
  // dashboard
  [
    {
      key: 'dashboard',
      menuName: 'Dashboard',
      path: '/dashboard' ,
      icon:null   
    },
    {
      key: 'analytics',
      menuName: 'Analytics',
      path: '/analytics' ,
      icon:null   
    },
    {
      key: 'my-profile',
      menuName: 'My Profile',
      path: '/my-profile' ,
      icon:null   
    },
    {
      key: 'my-albums',
      menuName: 'My Albums',
      path: '/my-albums' ,
      icon:null   
    },
    {
      key: 'my-songs',
      menuName: 'My Songs',
      path: '/my-songs' ,
      icon:null   
    },
  ],
  [
    {
      key: 'home',
      menuName: 'Home',
      path: '/',
      icon: Home,
    },
    {
      key: 'browse',
      menuName: 'Browse',
      path: '/browse',
      icon: Browse,
    },
    {
      key: 'explore',
      menuName: 'Explore',
      path: '/explore',
      icon: Explore,
    },
    {
      key: 'new',
      menuName: 'New Releases',
      path: '/new',
      icon: New,
    }
  ],

  [
    {
      key: 'recent',
      menuName: 'Recently Played',
      path: '/recent',
      icon: Recent,
    },
    {
      key: 'favorite',
      menuName: 'Favorite Songs',
      path: '/favorite',
      icon: Favorite,
    },
    {
      key: 'artists',
      menuName: 'Artists',
      path: '/followedArtists',
      icon: Artists,
    },
    {
      key: 'albums',
      menuName: 'Albums',
      path: '/followedAlbums',
      icon: Albums,
    },
  ],
  [
    {
      key: 'myPlaylist',
      menuName: 'My playlist',
      path: '/myPlaylist',
      icon: Playlist,
    },
  ]
]
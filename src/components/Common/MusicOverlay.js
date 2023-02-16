import React, { useCallback, useEffect, useState } from 'react';

import DummyImage from '../../assets/Images/dummySN.png';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import options from '../../utils/musicSettings';
import { isEmpty } from '../../utils/commonUtils';
import DropdownMenu from '../Common/DropdownMenu';
import { Popconfirm } from 'antd'
import { MoreOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { clearPlayer } from '../../actions/currentPlayAction'
import { useDispatch } from 'react-redux'

const MusicOverlay = (props) => {


    const [showPlayer, setShowplayer] = useState(false)
    const [initalized, setInitialized] = useState(true)

    const [player, setPlayer] = useState(undefined);
    const [isInitialAnalyticsTriggered, setIsInitialAnalyticsTriggered] = useState(false);
    const [currentPlayAudioList, setCurrentPlayAudioList] = useState([]);
    const [playOptions, setPlayOptions] = useState(undefined);

    const [prevAnalyticsTriggerPoint, setPrevAnalyticsTriggerPoint] = useState(undefined);

    const [prevSetVolume, setPrevSetVolume] = useState(undefined);
    const [prevPlayMode, setPrevPlayMode] = useState(undefined);

    const [isAddToQueue, setIsAddToQueue] = useState(false);

    const [currentSongDetails, setCurrentSongDetails] = useState(undefined);

    const [songPlayIndex, setSongPlayIndex] = useState(undefined);


    const initialAnalyticsTriggerTime = 5;
    const analyticsUpdateTriggerInterval = 30;



    const {
        currentPlaySongs,
        currentPlayReferrer,
        isPlaying,
        currentPlayReferrerId,
        setCurrentPlaySongId,
        setIsPlayerPlaying,
        isPlayerPlaying,
        setAnalyticsAndRecent,
        analyticsId,
        analyticsSongId,
        currentPlaySongId,
        updateAnalytics,
        addToQueueSongData,
        addToQueueReferrer,
        addToQueueReferrerId,
        cleanAddSongToQueue,
        isPlaylistSystemGenerated,
        isFromShareSong,
        fetchUserAllPlaylists,
        userAllPlaylists,
        userAllPlaylistsLoading,
        // userAllPlaylistsErrors,
        createdUserPlaylist,
        createUserPlaylistLoading,
        // createUserPlaylistErrors,
        addSongToPlaylist,
        createAndAddToPlaylist,
        fromListSongId,
        artistProfile,
    } = props;

    const audioList1 = [];


    useEffect(() => {
        if (showPlayer && initalized) {

            setTimeout(() => {
                const PlayerContent = document.getElementsByClassName('player-content')
                const PlayerContentChildren = PlayerContent[0].childNodes
                PlayerContentChildren[1].parentNode.insertBefore(PlayerContentChildren[1], PlayerContentChildren[7])
                PlayerContentChildren[1].parentNode.insertBefore(PlayerContentChildren[1], PlayerContentChildren[6])
            }, 500)

            setInitialized(false)

        }
    }, [showPlayer])//eslint-disable-line




    useEffect(() => {
        if (!isEmpty(currentPlaySongs) && Array.isArray(currentPlaySongs)) {
            let audioList = [];
            audioList = currentPlaySongs.map((currentPlaySong, index) => {

                return {
                    name: currentPlaySong?.title,
                    // id: currentPlaySong.id,
                    singer: currentPlaySong?.artists ? currentPlaySong.artists[0]?.profile?.name : "",
                    cover: currentPlaySong?.cover_image ? currentPlaySong.cover_image : DummyImage,
                    musicSrc: () => {
                        return Promise.resolve(
                            currentPlaySong?.url)
                    },
                    songInfo: {
                        id: currentPlaySong.id,
                        referrer: currentPlayReferrer,
                        referrerId: currentPlayReferrerId,
                        playIndexKey: index,
                        artists: currentPlaySong.artists,
                    },
                    lyric: currentPlaySong.lyric ? currentPlaySong.lyric : "",
                }
            }
            )


            setCurrentPlayAudioList(audioList);
            setIsAddToQueue(false);
            setShowplayer(true)

        } else if (!isEmpty(currentPlaySongs) && !Array.isArray(currentPlaySongs)) {
            let audioList = [
                {
                    // id: currentPlaySongs.id,
                    name: currentPlaySongs?.title,
                    singer: currentPlaySongs?.artists ? currentPlaySongs.artists[0]?.profile?.name : "",
                    cover: currentPlaySongs?.cover_image ? currentPlaySongs.cover_image : DummyImage,
                    musicSrc: () => {
                        return Promise.resolve(
                            currentPlaySongs?.url)
                    },
                    songInfo: {
                        id: currentPlaySongs.id,
                        referrer: currentPlayReferrer,
                        referrerId: currentPlayReferrerId, //should provide null in referrer:single
                        artists: currentPlaySongs.artists,
                    },
                    lyric: currentPlaySongs.lyric ? currentPlaySongs.lyric : "",
                },

            ];

            setCurrentPlayAudioList(audioList);
            setIsAddToQueue(false);
            setShowplayer(true)
        }

        cleanAddSongToQueue();
    }, [currentPlaySongs]);//eslint-disable-line

    const getSongIndexFromAudioList = (songId) => {
        let songPlayIndex;
        currentPlayAudioList.forEach((audio) => {
            if (audio.songInfo.id === songId) {
                songPlayIndex = audio.songInfo.playIndexKey;
            }
        })
        return songPlayIndex;
    }



    useEffect(() => {

        if (!isEmpty(currentPlayAudioList) && fromListSongId) {
            let songPlayIndex = getSongIndexFromAudioList(fromListSongId);
            setSongPlayIndex(songPlayIndex);
        } else if (!fromListSongId && currentPlayAudioList.length) {
            // change play index to "0" only when another album  or when another song or playlist or artist
            if (currentPlayReferrerId && currentPlayAudioList[0].songInfo.referrerId !== currentPlayReferrerId) {
                setSongPlayIndex(undefined);
            }
        }

    }, [fromListSongId, currentPlayAudioList])//eslint-disable-line



    const addSongToAudioList = (songData) => {

        let isAlreadyInAudioList = false;


        if (!Array.isArray(songData)) {

            currentPlayAudioList.forEach((song) => {
                if (song.id === songData.id) {
                    isAlreadyInAudioList = true;
                }
            })

            if (!isAlreadyInAudioList) {
                let newSongInfo = {
                    name: songData?.title,
                    singer: songData?.artists ? songData.artists[0]?.profile?.name : "",
                    cover: songData?.cover_image ? songData.cover_image : DummyImage,
                    musicSrc: () => {
                        return Promise.resolve(
                            songData?.url)
                    },
                    songInfo: {
                        id: songData.id,
                        referrer: addToQueueReferrer,
                        artists: songData.artists,
                    },
                    lyric: songData.lyric ? songData.lyric : "",
                }

                let newAudioList = [...currentPlayAudioList, newSongInfo];

                // setAnalyticsAndRecent(newAudioList);
                setCurrentPlayAudioList(newAudioList);
            }
        } else if (Array.isArray(songData)) {

            let newSongsInfo = songData.map((song, index) => {
                return {
                    name: song?.title,
                    singer: song?.artists ? song.artists[0]?.profile?.name : "",
                    cover: song?.cover_image ? song.cover_image : DummyImage,
                    musicSrc: () => {
                        return Promise.resolve(
                            song?.url)
                    },
                    songInfo: {
                        id: song.id,
                        referrer: addToQueueReferrer,
                        referrerId: addToQueueReferrerId,
                        playIndexKey: index,
                        artists: song.artists,
                    },
                    lyric: song.lyric ? song.lyric : "",
                }
            })

            let newAudioList = [...currentPlayAudioList, ...newSongsInfo];

            setCurrentPlayAudioList(newAudioList);
        }



        setIsAddToQueue(true);
    }

    useEffect(() => {
        if (addToQueueSongData) {

            addSongToAudioList(addToQueueSongData);
        } else if (Array.isArray(addToQueueSongData)) {

        }
    }, [addToQueueSongData])//eslint-disable-line



    useEffect(() => {
        if (!isEmpty(currentPlayAudioList)) {

            let playListOptions = {
                ...options,
                clearPriorAudioLists: isAddToQueue ? false : true,
                audioLists: currentPlayAudioList,
            }

            setPlayOptions(playListOptions);

        } else {

            let playListOptions = {
                ...options,
                clearPriorAudioLists: isAddToQueue ? false : true,
                audioLists: audioList1,
            };
            setPlayOptions(playListOptions);
        }

    }, [currentPlayAudioList])//eslint-disable-line




    const getAudioInstance = (instance) => {
        setPlayer(instance);
    }

    const pausePlayer = () => {

        if (player) {
            player.pause();
        }
    }

    const setPlayingSongId = (songId) => {
        setCurrentPlaySongId(songId);
    }

    const playPlayer = () => {

        if (player) {
            player.play();
        }
    }

    const setAnalytics = (songId, currentPlayReferrer, isPlaying, currentPlayReferrerId, songPlayDuration, artists) => {

        let isSameArtist = false;

        console.log("artists", artists);
        console.log(" Object.keys(artistProfile).length",  Object.keys(artistProfile).length)
        if (artistProfile !== undefined && Object.keys(artistProfile).length) {
            artists.forEach((artist) => {
                console.log("artist.id, artistProfile.id", artist.id, artistProfile.id);
                if (artist.id === artistProfile.id) {
                    isSameArtist = true;
                }
            })
        }


        if (!isSameArtist) {

            let analyticsData = currentPlayReferrerId && (currentPlayReferrer === 'album') ? {
                song_id: songId,
                referrer: currentPlayReferrer,
                action: 'played',
                platform: 'web',
                album_id: currentPlayReferrerId,
                durartion: songPlayDuration,
            }
                :
                (currentPlayReferrer === 'artist') ? {
                    song_id: songId,
                    referrer: currentPlayReferrer,
                    action: 'played',
                    platform: 'web',
                    artist_id: currentPlayReferrerId,
                    durartion: songPlayDuration,
                }
                    :
                    (currentPlayReferrer === 'single' || currentPlayReferrer === undefined) ?
                        {
                            song_id: songId,
                            referrer: currentPlayReferrer || 'single',
                            action: 'played',
                            platform: 'web',
                            durartion: songPlayDuration,
                        }
                        :
                        (currentPlayReferrer === 'playlist' && isPlaylistSystemGenerated) ?
                            {
                                song_id: songId,
                                referrer: currentPlayReferrer,
                                action: 'played',
                                platform: 'web',
                                playlist_id: currentPlayReferrerId,
                                durartion: songPlayDuration,
                            } :
                            {
                                song_id: songId,
                                referrer: currentPlayReferrer,
                                action: 'played',
                                platform: 'web',
                                durartion: songPlayDuration,
                            }

            setAnalyticsAndRecent(analyticsData);
        }

    }



    const onAudioPlayTrackChange = (currentPlayId, audioLists, audioInfo) => {
        setIsInitialAnalyticsTriggered(false);
        console.log("currentPlayId, audioLists, audioInfo", currentPlayId, audioLists, audioInfo);
    }


    const onAudioListsChange = (currentPlayId, audioLists, audioInfo) => {

        // if songs list them first initial song id in array as the key song id

        // when track is initially in pause state i.e not played even once ( Case: when user is redirected through shared link, song is pauses since browser restricts autoplay ), 
        // hence, songsDetails is not set and returned from jinke player, so :        
        if (!currentSongDetails && audioLists.length === 1 && audioInfo.currentTime === 0) {
            let { id } = audioLists[0].songInfo;
            let { name } = audioLists[0];
            let songDetails = { id, name };
            setCurrentSongDetails(songDetails);
        }

        setIsInitialAnalyticsTriggered(false);
    }

    const onPlayIndexChange = (playIndex) => {
        setSongPlayIndex(playIndex);
    }

    // on audio progress on any song in every 30 seconds 
    // also provide song id and progress time
    const onAudioProgress = (audioInfo) => {


        if (audioInfo.currentTime >= initialAnalyticsTriggerTime && !isInitialAnalyticsTriggered) {
            let songPlayDuration = audioInfo.currentTime;
            const { id, referrer, referrerId, artists } = audioInfo.songInfo;
            //initial Analytics trigger at >=5secs 
            setAnalytics(id, referrer, isPlaying, referrerId, songPlayDuration, artists);
            setIsInitialAnalyticsTriggered(true);
        }


        if (audioInfo.currentTime >= initialAnalyticsTriggerTime && analyticsSongId === currentPlaySongId && analyticsId) {


            if (Math.floor((audioInfo.currentTime - initialAnalyticsTriggerTime) % analyticsUpdateTriggerInterval) === 0 && (Math.floor(audioInfo.currentTime) !== prevAnalyticsTriggerPoint)) {

                let songPlayDuration = audioInfo.currentTime;

                let analyticsTriggerPoint = Math.floor(audioInfo.currentTime);
                setPrevAnalyticsTriggerPoint(analyticsTriggerPoint);

                updateAnalytics({ analyticsId, songPlayDuration });
            }
        }

    }

    const onAudioEnded = (currentPlayId, audioLists, audioInfo) => {
        let currentTime = audioInfo.currentTime;
        // in case of 500 error no analyticsId received hence dont update if no analyticsId
        if (analyticsId) {
            updateAnalytics(analyticsId, currentTime);
        }
        setIsPlayerPlaying(false);

    }

    const setSongDetails = (audioInfo) => {
        let { name } = audioInfo;
        let { id } = audioInfo.songInfo;
        let songDetails = { id, name };
        setCurrentSongDetails(songDetails);
    }

    // audio play handle
    const onAudioPlay = (audioInfo) => {

        const { id } = audioInfo.songInfo;
        setIsPlayerPlaying(true);
        setPlayingSongId(id);
        setSongDetails(audioInfo);
    }

    // audio pause handle    
    const onAudioPause = (audioInfo) => {
        setIsPlayerPlaying(false);
    }

    // audio pause handle    
    const onAudioLyricChange = (lineNum, currentLyric) => {
        console.log('audio lyric change:', lineNum, currentLyric)
    }


    //with load of play options the song starts to play
    useEffect(() => {
        // if (isPlaying) {
        if (isPlayerPlaying) {
            playPlayer();
            setShowplayer(true)
            // setIsPlayerPlaying(isPlaying);
            // } else if (!isPlaying) {
        } else if (!isPlayerPlaying) {
            pausePlayer();
            // setIsPlayerPlaying(isPlaying);
        }
        // }, [isPlaying, currentPlaySongs])
    }, [isPlayerPlaying, currentPlaySongs])//eslint-disable-line

    const onAudioVolumeChange = (volume) => {
        setPrevSetVolume(volume);
    }

    const onPlayModeChange = (playMode) => {

        setPrevPlayMode(playMode);

    }


    // CLOSE MUSIC PLAYER FUNCTION
    const dispatch = useDispatch()
    const ClearSongs = useCallback(() => {
        dispatch(clearPlayer())
    }, [dispatch])

    const closeMusicPlayer = () => {
        // clearSongs()
        setPlayer(null)
        setShowplayer(false)
        setIsPlayerPlaying(false)
        setInitialized(true)
        ClearSongs()
    }


    const extendedContent =
        <>
            <DropdownMenu
                userAllPlaylistsLoading={userAllPlaylistsLoading}
                userAllPlaylists={userAllPlaylists}
                createAndAddToPlaylist={createAndAddToPlaylist}
                createUserPlaylistLoading={createUserPlaylistLoading}
                addSongToPlaylist={addSongToPlaylist}
                fetchUserAllPlaylists={fetchUserAllPlaylists}
                createdUserPlaylist={createdUserPlaylist}
                songDetails={currentSongDetails}
                isFromPlayer={true}>
                <MoreOutlined className="card__options-more" />
            </DropdownMenu>
            <Popconfirm placement="top" title="Do you really want to close the music player?" onConfirm={closeMusicPlayer} okText="Yes" cancelText="No">
                <CloseCircleOutlined title="Close Music Player" />
            </Popconfirm>
        </>

    return (
        <>
            {
                showPlayer ?
                    !isEmpty(currentPlaySongs) || !isEmpty(currentPlayAudioList) ?
                        <>

                            < ReactJkMusicPlayer
                                {...playOptions}
                                getAudioInstance={getAudioInstance}
                                onAudioPlay={onAudioPlay}
                                onAudioPause={onAudioPause}
                                onAudioProgress={onAudioProgress}
                                onAudioListsChange={onAudioListsChange}
                                onAudioPlayTrackChange={onAudioPlayTrackChange}
                                onAudioEnded={onAudioEnded}
                                onAudioVolumeChange={onAudioVolumeChange}
                                onPlayModeChange={onPlayModeChange}
                                defaultVolume={(prevSetVolume || prevSetVolume === 0) ? prevSetVolume : 1}
                                playMode={prevPlayMode ? prevPlayMode : 'order'}
                                onAudioLyricChange={onAudioLyricChange}
                                autoPlay={isFromShareSong ? false : true}
                                autoPlayInitLoadPlayList={isFromShareSong ? false : true}
                                extendsContent={extendedContent}
                                onPlayIndexChange={onPlayIndexChange}
                                playIndex={songPlayIndex || 0}
                            />
                        </>
                        : ""
                    : ""
            }
        </>
    );
};

export default MusicOverlay;

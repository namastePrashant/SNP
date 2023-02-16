import React, { useEffect, useState } from 'react';

import DummyImage from '../../assets/Images/dummySN.png';
import ReactJkMusicPlayer from 'react-jinke-music-player'
import options from '../../utils/musicSettings';
import { isEmpty } from '../../utils/commonUtils';



const MusicOverlay = (props) => {

    const [player, setPlayer] = useState(undefined);
    const [isAnalyticsTriggered, setIsAnalyticsTriggered] = useState(false);
    const [currentPlayAudioList, setCurrentPlayAudioList] = useState([]);
    const [playOptions, setPlayOptions] = useState(undefined);

    const [prevAnalyticsTriggerPoint, setPrevAnalyticsTriggerPoint] = useState(undefined);
    const [currentSongAudioInfo, setCurrentSongAudioInfo] = useState(undefined);

    const [prevSetVolume, setPrevSetVolume] = useState(undefined);
    const [prevPlayMode, setPrevPlayMode] = useState(undefined);

    const [isAddToQueue, setIsAddToQueue] = useState(false);


    const { currentPlaySongs, currentPlayReferrer, isPlaying, currentPlayReferrerId, setCurrentPlaySongId,
        setIsPlayerPlaying, isPlayerPlaying, setIsBulkPlaying, setAnalyticsAndRecent,
        analyticsId, analyticsSongId, currentPlaySongId, updateAnalytics, addToQueueSongData, cleanAddSongToQueue,
        isPlaylistSystemGenerated
    } = props;

    const audioList1 = [];

    useEffect(() => {
        if (!isEmpty(currentPlaySongs) && Array.isArray(currentPlaySongs)) {
            let audioList = [];
            audioList = currentPlaySongs.map(currentPlaySong => {
                return {
                    name: currentPlaySong?.title,
                    // id: currentPlaySong.id,
                    singer: currentPlaySong?.artists ? currentPlaySong.artists[0]?.profile?.name : "",
                    cover: currentPlaySong?.cover_image ? currentPlaySong.cover_image : DummyImage,
                    musicSrc: currentPlaySong?.url,
                    songInfo:{
                        id:currentPlaySong.id,
                        referrer:currentPlayReferrer,
                    }
                    // lyric: currentPlaySong?.lyric,
                }
            }
            )

            setCurrentPlayAudioList(audioList);
            setIsAddToQueue(false);

        } else if (!isEmpty(currentPlaySongs) && !Array.isArray(currentPlaySongs)) {
            let audioList = [
                {
                    // id: currentPlaySongs.id,
                    name: currentPlaySongs?.title,
                    singer: currentPlaySongs?.artists ? currentPlaySongs.artists[0]?.profile?.name : "",
                    cover: currentPlaySongs?.cover_image ? currentPlaySongs.cover_image : DummyImage,
                    musicSrc: currentPlaySongs?.url,
                    songInfo:{
                        id:currentPlaySongs.id,
                        referrer:currentPlayReferrer,
                    }
                    // lyric: currentPlaySongs?.lyric,
                },
            ];

            setCurrentPlayAudioList(audioList);
            setIsAddToQueue(false);
        }

        cleanAddSongToQueue();
    }, [currentPlaySongs]);

    const addSongToAudioList = (songData) => {

        let isAlreadyInAudioList = false;

        currentPlayAudioList.forEach((song) => {
            if (song.id === songData.id) {
                isAlreadyInAudioList = true;
            }
        })

        if (!isAlreadyInAudioList) {
            let newSongInfo = {
                id: songData.id,
                name: songData?.title,
                singer: songData?.artists ? songData.artists[0]?.profile?.name : "",
                cover: songData?.cover_image ? songData.cover_image : DummyImage,
                musicSrc: songData?.url,
                // lyric: songData?.lyric, 
            }

            let newAudioList = [...currentPlayAudioList, newSongInfo];

            console.log('newAudioList', newAudioList);

            // setAnalyticsAndRecent(newAudioList);
            setCurrentPlayAudioList(newAudioList);
        }


        setIsAddToQueue(true);
    }

    useEffect(() => {
        if (addToQueueSongData) {
            addSongToAudioList(addToQueueSongData);
        }
    }, [addToQueueSongData])



    useEffect(() => {
        console.log('currentPlayAudioList', currentPlayAudioList);
        if (!isEmpty(currentPlayAudioList)) {

            let playListOptions = {
                ...options,
                clearPriorAudioLists: isAddToQueue ? false : true,
                audioLists: currentPlayAudioList,
            }

            console.log('currentPlayAudioList playListOptions', playListOptions);
            setPlayOptions(playListOptions);

        } else {

            let playListOptions = {
                ...options,
                clearPriorAudioLists: isAddToQueue ? false : true,
                audioLists: audioList1,
            };
            console.log('currentPlayAudioList playListOptions', playListOptions);
            setPlayOptions(playListOptions);
        }

        
    }, [currentPlayAudioList])



    const getAudioInstance = (instance) => {
        setPlayer(instance);
    }
    const pause = () => {
        if (player) {
            player.pause();
        }
    }

    const setPlayingSongId = (audioInfo) => {

        console.log('setPlayingSongID audioInfo', audioInfo );
        console.log('setPlayingSongID currentPlayReferrer', currentPlayReferrer, currentPlayAudioList );

        if (!isEmpty(currentPlayAudioList) && (currentPlayReferrer === 'single' || (currentPlayReferrer !== 'single' && currentPlayAudioList.length===1 && addToQueueSongData))) {
            let { id } = currentPlayAudioList[0];
            setCurrentPlaySongId(id);
        } else if ( !isEmpty(currentPlayAudioList) && (currentPlayReferrer !== 'single' || currentPlayAudioList.length>1)) {

            if (!audioInfo) {
                let id = currentPlayAudioList[0].id;
                setCurrentPlaySongId(id);
            } else {
                let { name } = audioInfo;
                console.log('audioInfom, name, currentPlayAudioList', audioInfo, name, currentPlayAudioList)
                let currentSong = currentPlayAudioList.filter((song) => {
                    console.log('song, name', song, name);
                    // return song.title === name;
                    return song.name === name;
                })

                let { id } = currentSong[0];
                setCurrentPlaySongId(id);
            }
        }
    }

    const play = () => {
        if (player) {
            player.play();
        }
    }

    const setAnalytics = (songId, currentPlayReferrer, isPlaying, currentPlayReferrerId,) => {
        

        let analyticsData = currentPlayReferrerId && (currentPlayReferrer === 'album') ? {
            song_id: songId,
            referrer: currentPlayReferrer,
            action: 'played',
            platform: 'web',
            album_id: currentPlayReferrerId,
        }
            :
            (currentPlayReferrer === 'artist') ? {
                song_id: songId,
                referrer: currentPlayReferrer,
                action: 'played',
                platform: 'web',
                artist_id: currentPlayReferrerId
            }
                :
                (currentPlayReferrer === 'single' || currentPlayReferrer === undefined) ?
                    {
                        song_id: songId,
                        referrer: currentPlayReferrer || 'single',
                        action: 'played',
                        platform: 'web',
                    }
                    :
                    (currentPlayReferrer === 'playlist' && isPlaylistSystemGenerated) ?
                        {
                            song_id: songId,
                            referrer: currentPlayReferrer,
                            action: 'played',
                            platform: 'web',
                            playlist_id: currentPlayReferrerId,
                        } :
                        {
                            song_id: songId,
                            referrer: currentPlayReferrer,
                            action: 'played',
                            platform: 'web',
                        }
        
        setAnalyticsAndRecent(analyticsData);
    }



    const onAudioPlayTrackChange = (currentPlayId, audioLists, audioInfo) => {
        // AnalyticsTriggered set to FALSE since analytics not triggered for changed track
        // setIsAnalyticsTriggered(false);
        //when track changes then the name and id of audio info is checked 
    }

    // when audio lists changes the error occurs, id is set to its own
    // required to know the error in id on changes of audio lists
    const onAudioListsChange = (currentPlayId, audioLists, audioInfo) => {
        // AnalyticsTriggered set to FALSE since analytics not triggered for changed tracks first song 
        // setIsAnalyticsTriggered(false);        
        // if songs list them first initial song id in array as the key song id
    }

    // audio play progress handle
    // eslint-disable-next-line no-unused-vars

    // on audio progress on any song in every 30 seconds 
    // also provide song id and progress time
    const onAudioProgress = (audioInfo) => {


        let analyticsTriggerTime = 30;

        if (audioInfo.currentTime >= analyticsTriggerTime && analyticsSongId === currentPlaySongId) {

            if (Math.floor(audioInfo.currentTime % analyticsTriggerTime) === 0 && (Math.floor(audioInfo.currentTime) !== prevAnalyticsTriggerPoint)) {
                let songPlayDuration = audioInfo.currentTime;

                let analyticsTriggerPoint = Math.floor(audioInfo.currentTime);
                setPrevAnalyticsTriggerPoint(analyticsTriggerPoint);

                updateAnalytics({ analyticsId, songPlayDuration });
            }
        }

    }

    const onAudioEnded = (currentPlayId, audioLists, audioInfo) => {
        let currentTime = audioInfo.currentTime;
        updateAnalytics(analyticsId, currentTime);
    }

    // audio play handle
    const onAudioPlay = (audioInfo) => {
        console.log('audioInfo', audioInfo);
        setIsPlayerPlaying(true);
        // trigger set analytics
        if (currentPlayReferrer !== 'single' || Array.isArray(currentPlayAudioList)) {
            let id;
            let track = currentPlayAudioList.filter((track) => {
                return track.name === audioInfo.name;
            })
            id = track[0].id;

            setAnalytics(id, currentPlayReferrer, isPlaying, currentPlayReferrerId);
            setPlayingSongId(audioInfo);
        } else if (currentPlayReferrer === 'single' && !Array.isArray(currentPlayAudioList)) {
            let { id } = currentPlaySongs;
            // setAnalytics(id, currentPlayReferrer, isPlaying, currentPlayReferrerId);
            setAnalytics(id, currentPlayReferrer, isPlaying,);
            setPlayingSongId(audioInfo);
        }

        console.log('audioInfo playing', audioInfo );
    }

    // audio pause handle    
    const onAudioPause = (audioInfo) => {
        setIsPlayerPlaying(false);
    }

    // audio pause handle    
    const onAudioLyricChange = (props) => {
        console.log('props.currentPlaySongs.lyric :>> ', props.currentPlaySongs);
    }

    //with load of playoptions the song starts to play
    useEffect(() => {
        if (isPlaying) {
            play();
            setPlayingSongId();

            setIsPlayerPlaying(isPlaying);
        } else if (!isPlaying) {
            pause();
            setPlayingSongId();
            setIsPlayerPlaying(isPlaying);
        }
    }, [isPlaying, currentPlaySongs])

    const onAudioVolumeChange = (volume) => {
        setPrevSetVolume(volume);
    }

    const onPlayModeChange = (playMode) => {

        setPrevPlayMode(playMode);

    }



    return (
        <>
            {console.log('playOptions', playOptions)}
            {console.log('playOptions currentPlaySongs', currentPlaySongs)}
            {

                !isEmpty(currentPlaySongs) || !isEmpty(currentPlayAudioList) ?
                    <>                    
                    {console.log('playOptions', playOptions)}
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

                        />                        
                    </>
                    : ""
            }
        </>
    );
};

export default MusicOverlay;
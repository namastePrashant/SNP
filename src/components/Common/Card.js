import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import FavoriteBtn from "../Common/Favorite";
import { isEmpty } from "../../utils/commonUtils";

import DummyImage from '../../assets/Images/dummySN.png';
import { secondsToMinutes } from '../../utils/commonUtils';
import DropdownMenu from '../Common/DropdownMenu';
import {IoPlay,IoPauseCircle} from 'react-icons/io5';
import {IoMdMore} from 'react-icons/io';
import LoaderImg from '../../assets/Images/loaderWhite.png'



const Card = (props, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isShareVisible, setIsShareVisible] = useState(false);

    const {
        songDetails, currentPlayKey, isPlayerPlaying, setIsPlayerPlaying, setSongToPlay,
        fetchFavoriteButton, favoriteButton, favoriteButtonLoading, favoriteButtonLoadingId,
        fetchUserAllPlaylists, userAllPlaylists, userAllPlaylistsLoading, 
        // userAllPlaylistsErrors,
        addSongToPlaylist, createAndAddToPlaylist,
        createdUserPlaylist,
        createUserPlaylistLoading,
        // createUserPlaylistErrors,
        addSongToCurrentAudioQueue,
    } = props;


    const [songData, setSongData] = useState(undefined);
    const [favoriteChangedSong, setFavoriteChangedSong] = useState(undefined);
    const [songInfo, setSongInfo] = useState(undefined);
    const [id, setId] = useState(undefined);

    const toggleShareModal = () => {
        setIsShareVisible(!isShareVisible)
    }

    useEffect(() => {
        if (!isEmpty(songDetails) && songData === undefined) {
            setSongData(songDetails);
        }
    }, [songDetails]);//eslint-disable-line


    useEffect(() => {
        if (!isEmpty(favoriteButton)) {
            let changedSong = favoriteButton;
            setFavoriteChangedSong(changedSong);
        }
    }, [favoriteButton])//eslint-disable-line

    let artistNames = !isEmpty(songDetails?.artists) ? songDetails.artists.map((artist) => {
        return artist.profile.name
    }) : null;

    const setData = (song) => {

        if (favoriteChangedSong) {

            if (song.id === favoriteChangedSong.id) {
                song.favourited = favoriteChangedSong.favourited;
            }
        }

        setSongData({ ...song });
    }

    useEffect(() => {
        if (songData) {
            setData(songData);
        } else if (songDetails) {
            setData(songDetails);
        }
    }, [songDetails, favoriteChangedSong])//eslint-disable-line


    useEffect(() => {

        if (songData) {

            let songInfo = {
                id: songData.id,
                name: songData.title,
                cover: songData.cover_image,
                artist: artistNames ? artistNames[0] : null,
                duration: songData.duration,
                favorite: songData.favourited,
            }

            setSongInfo(songInfo);

            let id = songData && !isEmpty(songData.artists) ?
                songData.artists[0].id
                :
                undefined;
            setId(id);
        }
    }, [songData])//eslint-disable-line

    useEffect(() => {
        if (currentPlayKey !== songDetails.id || !isPlayerPlaying) {
            setIsPlaying(false);
        } else {
            setIsPlaying(isPlayerPlaying);
        }
    }, [currentPlayKey, isPlayerPlaying])//eslint-disable-line




    const setPlayEvents = () => {
        // instead of loading it at an instant lets show the load button
        // setIsPlaying(!isPlaying);
        setIsPlayerPlaying(!isPlaying);
        let songData = {
            songData: songDetails,
            referrer: 'single',
            // isPlaying: !isPlaying,
        }
        setSongToPlay(songData);
    }

    return (
        <>
            {
                songInfo && <div className="card__wrapper" ref={ref} >
                    <div className="card__image-wrapper">
                        <img
                            className="card__image card__image--link"
                            src={songInfo?.cover || DummyImage}
                            alt="artist"
                            onClick={setPlayEvents}
                        />
                        <div className="card__options">
                            
                                {
                                    favoriteButtonLoading && (favoriteButtonLoadingId === songInfo.id) ? 
                                    <img src={LoaderImg} style={{width:"25px",height:"25px"}} alt="loader"/>
                                        :
                                        <FavoriteBtn
                                            favorite={songInfo.favorite}
                                            id={songInfo.id}
                                            index={songInfo.id}
                                            fetchFavorite={fetchFavoriteButton}
                                            className={"card__options-favorite"}
                                        />
                                }                         
                           
                                {
                                    isPlaying ?
                                        <IoPauseCircle
                                            className="card__options-pauseBtn"
                                            onClick={setPlayEvents}
                                        />
                                        :
                                        <IoPlay
                                            className="card__options-playBtn"
                                            onClick={setPlayEvents}
                                        />
                                }
                          
                          
                                <DropdownMenu
                                    addSongToCurrentAudioQueue={addSongToCurrentAudioQueue}
                                    userAllPlaylistsLoading={userAllPlaylistsLoading}
                                    userAllPlaylists={userAllPlaylists}
                                    createAndAddToPlaylist={createAndAddToPlaylist}
                                    songDetails={songDetails}
                                    createUserPlaylistLoading={createUserPlaylistLoading}
                                    addSongToPlaylist={addSongToPlaylist}
                                    fetchUserAllPlaylists={fetchUserAllPlaylists}
                                    createdUserPlaylist={createdUserPlaylist}
                                    song={songInfo}
                                    toggleShareModal={toggleShareModal}
                                >
                                    <IoMdMore
                                        className="card__options-more"
                                    />
                                </DropdownMenu>
                            
                        </div>
                    </div>
                    <div className='section-card-info'>
                        <div className='section-song'
                            title={songInfo.name || "N/A"}
                            onClick={setPlayEvents}
                        >
                            {
                                songInfo.name && songInfo.name.length > 20 ?
                                    songInfo.name.substring(0, 18) + '...'
                                    :
                                    songInfo.name
                            }
                        </div>
                        <div className='section-artist'>
                            <Link
                                to={`/artist/${id}`}
                            >
                                <span
                                    title={songInfo.artist || "N/A"}
                                >
                                    {
                                        songInfo.artist ?
                                            (
                                                songInfo.artist.length > 20 ?
                                                    songInfo.artist.substring(0, 18) + '...'
                                                    :
                                                    songInfo.artist
                                            )
                                            :
                                            "N/A"
                                    }
                                </span>
                            </Link>
                        </div>
                        <div className='section-time'>
                            {songInfo.duration ? secondsToMinutes(songInfo.duration) : '0:00'}
                        </div>
                    </div>
                </div>
            }   

           

        </>
    );
};

const forwardedCard = React.forwardRef(Card);

export default forwardedCard;

import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import { notification } from 'antd';

import DummyImage from '../../assets/Images/dummySN.png';

import { FrownOutlined } from '@ant-design/icons';

import { fetch } from '../../utils/httpUtil';

import FavouriteAlbumButton from '../Common/favouriteAlbumButton';
import DropdownMenu from '../Common/DropdownMenu';

import ShareButton from './ShareButton';
import {IoPlay,IoPauseCircle} from 'react-icons/io5';
import {IoMdMore} from 'react-icons/io';
// import {FiPauseCircle} from "react-icons/fi";
// import {FaPlay,FaPauseCircle} from "react-icons/fa";


const AlbumCard = (props, ref) => {
    const referrer = 'album';
    const [isPlaying, setIsPlaying] = useState(false);
    // const [isSinglePlaying, setIsSinglePlaying] = useState(false);
    // const [isSongsEmpty, setIsSongsEmpty] = useState(false);
    // const [isBulkPlaying, setIsBulkPlaying] = useState(false);

    const [songDetails, setSongDetails] = useState(undefined);
    const [isShareVisible, setIsShareVisible] = useState(false);

    const {
        albumDetails,
        // currentPlayKey,
        isPlayerPlaying,
        setIsPlayerPlaying,
        setBulkSongsToPlay,
        currentPlayReferrerId,
        currentPlayReferrer,
        // setAlbumToFavourite,
        // recentlyFavouriteAlbum,
        // favoriteAlbums,
        fetchIndividualAlbum,
        individualAlbum,
        individualAlbumLoading,
        individualAlbumErrors,
        addSongToCurrentAudioQueue,
        fetchUserAllPlaylists,
        userAllPlaylists,
        userAllPlaylistsLoading,
        // userAllPlaylistsErrors,
        addSongToPlaylist,
        createAndAddToPlaylist,
        createdUserPlaylist,
        createUserPlaylistLoading,
        // createUserPlaylistErrors,
        artistInfo,
    } = props;


    const toggleShareModal = () => {
        setIsShareVisible(!isShareVisible)
    }

    let artistNames = albumDetails.artists ? albumDetails.artists.map((artist) => {
        return artist.profile.name
    }) :"";

    let albumInfo = {
        name: albumDetails.title,
        cover: (albumDetails.cover_image.url) ? albumDetails.cover_image.url : albumDetails.cover_image.url === "" ? DummyImage : albumDetails.cover_image ? albumDetails.cover_image : DummyImage,
        artist: artistNames[0],
    }


    let id = (albumDetails.artists && albumDetails.artists.length !== 0) ?
        albumDetails.artists[0].id
        : artistInfo ?
            artistInfo.id
            : null

    let albumId = albumDetails.id;

    const _onClick = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        if (currentPlayReferrer === referrer && currentPlayReferrerId === albumDetails.id) {
            
            setIsPlaying(isPlayerPlaying);
        } else {
            setIsPlaying(false);
        }
    }, [isPlayerPlaying, currentPlayReferrerId]);//eslint-disable-line


    const playPauseAlbumSongs = (songs) => {
        
        // setIsPlaying(!isPlaying);
        setIsPlayerPlaying(!isPlaying);

        let songData = {
            songData: songDetails ? songDetails : songs,
            referrer: referrer,
            // isPlaying: !isPlaying,
            referrerId: albumDetails.id
        }
        setBulkSongsToPlay(songData);
        
    }


    const fetchIndividualAlbumSongs = async (identifier, isFromOptions) => {
        try {
            const response = await fetch(`api/v1/albums/${identifier}`);

            if (response.data.success === true) {
                if (response.data.data.album.songs.length === 0) {
                    noSongNotification();
                } else {
                    let songDetails = response.data.data.album.songs;
                    setSongDetails(songDetails);

                    // if add to queue active or some param send from 

                    if (!isFromOptions) {
                        playPauseAlbumSongs(songDetails);
                    }
                }

            } else {
                // TODO
            }
        } catch (error) {
            console.log(error);
        }
    };

    // const fetchAlbumSongs = (albumId) => {
    //     let isFromOptions = true;
    //     if (!songDetails) {
    //         fetchIndividualAlbumSongs(albumId, isFromOptions);
    //     }
    // }

    const setPlayEvents = () => {
        

        if (!songDetails) {
        

            fetchIndividualAlbumSongs(albumDetails.id);
        } else {
            playPauseAlbumSongs();
        }

    }

    const noSongNotification = () => {
        notification.info({
            message: `We are extremely sorry!!!`,
            description: `No songs available in  ${albumDetails.title} album`,
            icon: <FrownOutlined style={{ color: '#8c61fe' }} />,
            bottom: 70,
            duration: 3,
            placement: 'bottomRight',
        });
    };


    const showPlayOverlay = !props.selectedAlbum ?
        <div className="card__options">
            
                <FavouriteAlbumButton
                    albumDetails={albumDetails}
                    {...props}
                />         
                
                {
                    isPlaying ?
                        <IoPauseCircle
                            className="icon-playpause"
                            onClick={setPlayEvents}
                        />
                        :
                        <IoPlay
                            className="icon-playpause"
                            onClick={setPlayEvents}
                        />
                }                
                    <DropdownMenu
                        addSongToCurrentAudioQueue={addSongToCurrentAudioQueue}
                        userAllPlaylistsLoading={userAllPlaylistsLoading}
                        userAllPlaylists={userAllPlaylists}
                        createAndAddToPlaylist={createAndAddToPlaylist}
                        songDetails={songDetails}
                        albumDetails={albumDetails}
                        createUserPlaylistLoading={createUserPlaylistLoading}
                        addSongToPlaylist={addSongToPlaylist}
                        fetchUserAllPlaylists={fetchUserAllPlaylists}
                        createdUserPlaylist={createdUserPlaylist}
                        fetchIndividualAlbum={fetchIndividualAlbum}
                        individualAlbum={individualAlbum}
                        individualAlbumLoading={individualAlbumLoading}
                        individualAlbumErrors={individualAlbumErrors}
                        toggleShareModal={toggleShareModal}
                        isFromAlbum={true}
                    >
                        <IoMdMore
                            className="card__options-more"
                        />
                    </DropdownMenu>
               
           
        </div>
        : null


    return (
        <>
            <div className="card__wrapper card--album">
                <div className="card__image-wrapper" ref={ref}>
                    {/* fetch if artist page available and  dont sow over lay on artist page 
                */}
                    {/* <Link
                    to={`/album/${albumId}`}
                    onClick={
                        props.selectedAlbum ? (
                            (e) => {
                                _onClick(e);
                                props.fetchSelectedAlbum(albumId);
                            }
                        )
                            :
                            null
                    }
                > */}


                    <img
                        src={albumInfo.cover}
                        alt={albumInfo.name }
                        className="card__image card__image--link"
                        onClick={
                            props.selectedAlbum ? (
                                (e) => {
                                    _onClick(e);
                                    props.fetchSelectedAlbum(albumId);
                                }
                            )
                                :
                                null
                        }
                    />

                    {
                        showPlayOverlay
                    }

                    {/* </Link> */}
                </div>
                <div className='album-info'>
                    <div
                        className='album-info__title '
                        title={albumInfo.name}
                    >
                        <Link
                            to={`/album/${albumId}`}
                        >
                            {
                                albumInfo.name && albumInfo.name.length > 20 ?
                                    albumInfo.name.substring(0, 20) + '...'
                                    :
                                    albumInfo.name
                            }
                        </Link>
                    </div>
                    <div className='album-info__artist'>
                        {id ? (<Link
                            to={`/artist/${id}`}
                        >

                            <span
                                title={albumInfo.artist || "N/A"}
                            >
                                {
                                    albumInfo.artist && albumInfo.artist.length > 20 ?
                                        albumInfo.artist.substring(0, 18) + '...'
                                        :
                                        albumInfo.artist
                                        ||
                                        "N/A"
                                }
                            </span>
                        </Link>) : (<span
                            title={albumInfo.artist || "N/A"}
                        >
                            {
                                albumInfo.artist && albumInfo.artist.length > 20 ?
                                    albumInfo.artist.substring(0, 18) + '...'
                                    :
                                    albumInfo.artist
                                    ||
                                    ""
                            }
                        </span>)}
                    </div>
                </div>
            </div>

            <ShareButton
                url={`/album/${albumDetails?.id}`}
                title={albumDetails?.profile?.name}
                visible={isShareVisible}
                closeModal={toggleShareModal}
                media={albumDetails?.profile?.profile_picture || DummyImage}
            />

        </>
    );
};

const forwardedAlbumCard = React.forwardRef(AlbumCard);

export default forwardedAlbumCard;

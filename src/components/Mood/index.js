import React, { useState, useEffect } from 'react';
import { Row, Col, Typography, Button } from 'antd';
import TableList from '../Common/Table';
import BulkPlay from '../Common/song/bulkSong'
import Dot from '../../assets/Icons/Dot.png'
// import Free from '../../assets/Images/spotify-free-trial.png'
import { useParams } from 'react-router-dom';
import CustomSpin from '../Common/CustomSpin';
import { isEmpty, secondsToMinutes, getTotalTracksTime } from "../../utils/commonUtils";
import moment from 'moment';
import Advertisement from '../Advertisments';
import ScrollPagination from '../Common/ScrollPagination'
import TableLoading from '../Common/Loading/TableLoading';

const { Title } = Typography;

const layout = {
    full: {
        xxl: { span: 24 },
        xl: { span: 24 },
        lg: { span: 24 },
        md: { span: 24 },
        sm: { span: 24 },
        xs: { span: 24 },
    },
};

const Mood = props => {

    const referrer = "single";
    const [isPlaying, setIsPlaying] = useState(false); // eslint-disable-line
    const [isSinglePlaying, setIsSinglePlaying] = useState(false);// eslint-disable-line
    const [dataSource, setDataSource] = useState(undefined);
    const [tracksTotalTime, setTracksTotalTime] = useState(undefined);
    // const [favoriteChangedSongs, setFavoriteChangedSongs] = useState([]);
    // const [favoriteChangedSong, setFavoriteChangedSong] = useState(undefined);
    // const [moodSongs, setMoodSongs] = useState(undefined);

    const { id } = useParams();
    const {
        setCurrentPlaySong,
        // isPlayerPlaying,
        fetchFavoriteButton,
        // favoriteButton,
        fetchAdvertisementByLocation,
        fetchIndividualMoodSongs,
        individualMoodSongs,
        individualMoodSongsList,
        individualMoodSongsLoading,
        individualMoodSongsLoadingMore,
        individualMoodSongsMetaInfo,
        individualMoodSongsHasMore
    } = props

    const { current_page } = individualMoodSongsMetaInfo || {};

    const fetchAds = () => {
        const location = 'explore-footer'
        const formData = {
            location: location,
            platform: 'web'
        }
        fetchAdvertisementByLocation(formData)
    }


    useEffect(() => {
        fetchIndividualMoodSongs(id);
        fetchAds();
    }, [])// eslint-disable-line



    const setSongToPlay = (songDetails) => {
        let songData = {
            songData: songDetails,
            referrer: referrer,
            isPlaying: false,
        };
        setCurrentPlaySong(songData);
        setIsPlaying(false);
        setIsSinglePlaying(true);
    };

    // not required since favorite button is handled by favorite button component
    // useEffect(() => {
    //     if (!isEmpty(favoriteButton)) {
    //         let changedSong = favoriteButton;
    //         setFavoriteChangedSong(changedSong);
    //         let changedSongs = [...favoriteChangedSongs, changedSong];
    //         setFavoriteChangedSongs(changedSongs);
    //     }
    // }, [favoriteButton])

    const setTableData = (songsData) => {

        let dataSource = songsData.map((song) => {

            let allData = song;

            return {
                title: { name: song.title, listens: song?.total_play_count ? song?.total_play_count : "0", setSongToPlay, allData },
                artist: song.artists,
                album: !isEmpty(song.album) ? song.album.title : "N/A",
                dateAdded: moment(song.created_at).format('YYYY-MM-DD'),
                heartTime: { time: secondsToMinutes(song.duration), loved: song.favourited, id: song.id, fetchFavorite: fetchFavoriteButton }
            }
        })
        setDataSource(dataSource);

        let time = individualMoodSongs.songs_duration;

        let totalFormattedTime = time ? getTotalTracksTime(time) : "N/A";
        setTracksTotalTime(totalFormattedTime);
    }



    useEffect(() => {
        if (!isEmpty(individualMoodSongsList)) {
            setTableData(individualMoodSongsList);
        }
    }, [individualMoodSongsList])// eslint-disable-line


    return (
        <Row className='row-main artist'>
            <Col {...layout.full} className='page-header page-header--mood overlay'>
                <div className='explore-main'>
                    <div className='artist-info'>
                        <Title>{individualMoodSongsLoading ? <CustomSpin /> : individualMoodSongs.name} </Title>
                        <div className='favorite-info'>
                            <span>
                                {individualMoodSongsLoading ? <CustomSpin /> : !isEmpty(individualMoodSongs.songs) ? (individualMoodSongs.songs.data.length + " Tracks") : "0 Tracks"}
                            </span> <span>
                                <img src={Dot} alt="Dot" /></span>
                            <span>
                                {
                                    individualMoodSongsLoading ? <CustomSpin /> : !isEmpty(individualMoodSongs.songs) && tracksTotalTime ? tracksTotalTime : "0hrs 0mins"
                                }
                            </span>
                        </div>
                        <div className='links'>
                            <Button
                                shape="round"
                                size="large"
                                className="btn-gradient"

                            >
                                {/* <BulkPlay songs={individualMoodSongs.songs?.data.length ? individualMoodSongs.songs?.data : []} /> */}
                                <BulkPlay songs={individualMoodSongsList.length ? individualMoodSongsList : [] } isBulkPlayClicked={true} />

                            </Button>
                        </div>
                    </div>

                    <Row className='extra-bottom-pad'>
                        <Col {...layout.full}>
                            {
                                individualMoodSongsLoading ?
                                    <div className="display-flex justify-content-center"><CustomSpin /></div>
                                    :
                                    (
                                        !isEmpty(individualMoodSongsList) ?
                                            <TableList dataSource={dataSource} {...props} />
                                            :
                                            <TableLoading />
                                    )

                            }

                            <ScrollPagination
                                current_page={current_page}
                                pagination={fetchIndividualMoodSongs}
                                HasMore={individualMoodSongsHasMore}
                                loadingMore={individualMoodSongsLoadingMore}
                                data={individualMoodSongs}
                                id={id}
                            />



                            <Advertisement name="explore-footer" />
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
};

export default Mood;
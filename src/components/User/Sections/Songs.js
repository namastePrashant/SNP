import React, { useState, useEffect } from 'react';
import { Button, Row } from 'antd';

import TableList from '../../Common/Table';
import TableLoading from '../../Common/Loading/TableLoading';

import Dot from "../../../assets/Icons/Dot.png";


import ShowResult from '../../Common/Result';
import { isEmpty, secondsToMinutes } from '../../../utils/commonUtils';
import moment from 'moment';
import BulkPlay from '../../Common/song/bulkSong';
import ScrollPagination from '../../Common/ScrollPagination';
import {getTotalTracksTime} from '../../../utils/commonUtils';
import CustomSpin from '../../Common/CustomSpin';



const Songs = props => {

    const [dataSource, setDataSource] = useState(undefined);
    const [tracksTotalTime, setTracksTotalTime] = useState(undefined);

    const { favoriteSongsAll,
        fetchFavoriteSongsAll,
        favoriteSongsAllLoading,
        favoriteSongsLoadingMore,
        favoriteSongsAllHasMoreData,
        favoriteSongsAllMeta,
        totalFavouriteSongsDuration,
        totalFavouriteSongs,
        setCurrentPlaySong,
        fetchFavoriteButton
     } = props;

     const { current_page } = favoriteSongsAllMeta || {};

    


     useEffect(() => {
        fetchFavoriteSongsAll();
      }, []);//eslint-disable-line

     useEffect(()=>{
        let totalFormattedTime= getTotalTracksTime(totalFavouriteSongsDuration)            
        setTracksTotalTime(totalFormattedTime);
      },[totalFavouriteSongsDuration])//eslint-disable-line


      const setSongToPlay = (songDetails) => {
        let songData = {
          songData: songDetails,
        //   referrer: referrer,
          isPlaying: true,
        };
        setCurrentPlaySong(songData);
        // setIsPlaying(false);
        // setIsSinglePlaying(true);
      };

    useEffect(() => {
        if (favoriteSongsAll.length) {
            let dataSource = favoriteSongsAll.map((song) => {

                // let artists = song.artists.map((artist) => {
                //     return artist?.profile?.name
                // })
                let allData = song;

                return {
                    title: {
                        name: song.title,
                        listens: song.total_play_count,
                        setSongToPlay,
                        allData,
                      },
                      artists: song.artists,
                      album: !isEmpty(song.album)? song.album.title : "N/A",
                      dateAdded: moment(song.created_at).format('YYYY-MM-DD'),
                      heartTime: {
                        time: secondsToMinutes(song.duration),
                        loved: song.favourited,
                        id: song.id,
                        fetchFavorite: fetchFavoriteButton,
                    },
                }
            })

            setDataSource(dataSource);
        }
    }, [favoriteSongsAll])//eslint-disable-line
    return (
        <div className='section'>
            <Row className="mb-1">
                <Button
                    shape="round"
                    size="large"
                    className="btn-gradient height-auto font-24 "
                    disabled={favoriteSongsAllLoading? true:false}
                >
                    <BulkPlay songs={favoriteSongsAll.length?favoriteSongsAll:[]}/>
                </Button>

                <div className="favorite-info user-fav">
                <span className="total-time">
                {favoriteSongsAllLoading ? <CustomSpin/>:totalFavouriteSongs } Tracks
              </span>{" "}
              <span className="divider--dot">
                <img src={Dot} alt="Dot" />
              </span>{" "}
              <span className="time">
                {tracksTotalTime ? tracksTotalTime : <CustomSpin /> }
              </span>
                </div>

             
            </Row>
            {
                favoriteSongsAllLoading ? <TableLoading />
                    :
                    (favoriteSongsAll.length)?
                         <>
                        <TableList dataSource={dataSource} {...props}/>
                        <ScrollPagination 
                        current_page={current_page} 
                        pagination={fetchFavoriteSongsAll} 
                        HasMore={favoriteSongsAllHasMoreData} 
                        loadingMore={favoriteSongsLoadingMore} 
                        data={favoriteSongsAll}/>
                        </>
                        :
                        <ShowResult msg="No favorite song found." />
            }

        </div>
    );
};

export default Songs;
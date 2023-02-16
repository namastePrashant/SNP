import React, { useState, useEffect } from 'react';
import { Typography, Button } from 'antd';

import TableList from '../../Common/Table';
import CustomSpin from '../../Common/CustomSpin'
import ShowResult from '../../Common/Result';
import { isEmpty, secondsToMinutes } from '../../../utils/commonUtils';
import moment from 'moment'


const { Title } = Typography;

const LikedSongs = props => {

    const [dataSource, setDataSource] = useState(undefined);
    const { userData, setCurrentPlaySong, fetchFavoriteButton, userDataLoading, setActiveKey } = props;

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
        if (!isEmpty(userData)) {
            let dataSource = userData.favoritedsong.map((song) => {

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
                      album: song.album?.title? song.album.title : "N/A",
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
    }, [userData.favoritedsong])//eslint-disable-line
    return (
        <>
        {isEmpty(userData.favoritedsong)?null:(<div className='section'>
            <div className='section-header' style={{marginBottom:'20px'}}>
                <Title level={4} >Liked Songs</Title>
                <span className='section-link'><Button type="text" onClick={()=>{setActiveKey("liked-songs")}}>See All</Button></span>
            </div>
            {
                userDataLoading ? <CustomSpin />
                    :
                    !isEmpty(userData.favoritedsong) ?
                        <TableList dataSource={dataSource} {...props} />
                        :
                        <ShowResult msg="No favorite song found." />
            }

        </div>)}
        
        </>
    );
};

export default LikedSongs;
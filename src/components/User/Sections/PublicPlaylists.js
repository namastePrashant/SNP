import React from 'react';
import { Typography, Button, Row, Col } from 'antd';

import PlaylistCard from '../../Common/PlaylistCard';
import SongCards from '../../Common/Loading/SongCards';
import ShowResult from '../../Common/Result';

import {isEmpty} from '../../../utils/commonUtils';

const { Title } = Typography;

const PublicPlaylists = props => {

    const { userData, userDataLoading } = props

    return (
        <div className='section'>
            <div className='section-header'>
                <Title level={4}>My Playlists</Title>
                <span className='section-link'><Button type="text">See All</Button></span>
            </div>

            <Row className='section-body no-slick-cards grid-view'>
                {
                    userDataLoading ?
                        <SongCards />
                        :
                        !isEmpty(userData.favoritedplaylist) ?
                            (
                                userData.favoritedplaylist.map((playlist, index) => {
                                    
                                    return (
                                        <div key={playlist.id}>
                                            <PlaylistCard
                                                playlistDetails={playlist}
                                            />
                                        </div>
                                    )
                                }
                                )
                            )
                            : <ShowResult msg="Playlist Empty!" />
                }
            </Row>
        </div>
    );
};

export default PublicPlaylists;

import React, { useEffect } from 'react';
import { Row, Col } from 'antd';

import { Link } from 'react-router-dom';

import ShowResult from '../../Common/Result'
import SongCards from '../../Common/Loading/SongCards';

import PlaylistCard from '../../Common/PlaylistCard';

import {isEmpty} from '../../../utils/commonUtils';



const Artists = props => {

    const { userData, userDataLoading } = props;

    return (
        <div className='section artists'>
            <Row className='section-body grid-view'>
                {
                    userDataLoading ? <SongCards /> : !isEmpty(userData.favoritedplaylist) ?
                        userData.favoritedplaylist.map((playlist, index) => (
                            <Col key={playlist.id}>
                                <PlaylistCard playlistDetails={playlist} />
                            </Col>
                        ))
                        :
                        <ShowResult msg="You have no favorite playlist yet!" home={true} />
                }
            </Row>
        </div>
    );
};

export default Artists;
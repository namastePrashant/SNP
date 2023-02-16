import React from 'react';
import { Typography, Button, Row, Col } from 'antd';

import PlaylistCard from '../../Common/PlaylistCard';
import CustomSpin from '../../Common/CustomSpin';
import { isEmpty } from '../../../utils/commonUtils';
import ShowResult from '../../Common/Result';

const { Title } = Typography;

const FollowingPlaylists = props => {

    const { userData, userDataLoading,setActiveKey } = props;

    return (
        <>
        {isEmpty(userData.favoritedplaylist) ? null:(<div className='section'>
        <div className='section-header'>
            <Title level={4}>Followed Playlists</Title>
            <span className='section-link'><Button type="text" onClick={()=>{setActiveKey("followed-playlists")}}>See All</Button></span>
        </div>

        <Row className='section-body no-slick-cards  grid-view'>
            {userDataLoading ? <CustomSpin /> : isEmpty(userData.favoritedplaylist) ? <ShowResult msg='You have no favorite playlist yet!' /> : userData.favoritedplaylist.map((playlist, index) => (
                <Col key={playlist.id}>
                    <PlaylistCard playlistDetails={playlist} />
                </Col>
            ))}
        </Row>
    </div>)}
       </> 
    );
};

export default FollowingPlaylists;
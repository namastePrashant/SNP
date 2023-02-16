import React, { useEffect } from 'react';
import { Row, Col, Typography, Button } from 'antd';


import ShowResult from '../../Common/Result'
import SongCards from '../../Common/Loading/SongCards';

import ArtistCard from '../../Common/ArtistCard';
import {isEmpty} from '../../../utils/commonUtils';


const { Title } = Typography;

const FollowedArtists = (props) => {

    const { favoriteArtists, favoriteArtistsLoading, fetchFavoriteArtists, setActiveKey } = props

    useEffect(() => {

        if (favoriteArtists.length === 0) {
            console.log(favoriteArtists)
            fetchFavoriteArtists();
        }
    }, [])//eslint-disable-line

    return (
        <>
        {isEmpty(favoriteArtists)?null:(<div className='section artists'>
            <div className='section-header'>
                <Title level={4}>Followed Artists</Title>
                <span className='section-link'><Button type="text" onClick={()=>{setActiveKey("followed-artists")}}>See All</Button></span>
            </div>
            <Row className='section-body followedAlbums padding-left-right-05'>
                {
                    favoriteArtistsLoading ? <SongCards /> : favoriteArtists.length?
                        favoriteArtists.map((artist) => (
                            <Col key={artist.id} className='artist-circle section-item'>
                                <ArtistCard artistDetails={artist} {...props}/>
                            </Col>
                        ))
                        :
                        <ShowResult msg="You have no favorite artist yet!" />
                }
            </Row>
        </div>)}
        
        </>
    );
};

export default FollowedArtists;
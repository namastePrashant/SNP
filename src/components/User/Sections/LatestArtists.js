import React from 'react';
import { Typography, Button } from 'antd';
import Slider from "react-slick";

import artists from '../../../mock/artists'
import settings from '../../../utils/carouselSettings'

import ArtistCard from '../../Common/ArtistCard';

const { Title } = Typography;

const LatestArtists = () => {
    return (
        <div className='section'>
            <div className='section-header'>
                <Title level={4}>Newcommers</Title>
                <span className='section-link'><Button type="text">See All</Button></span>
            </div>

            <div className='section-body custom-slick'>
                <Slider {...settings}>
                    {artists.map((artist, index) => (
                       <ArtistCard artistDetails={artist}/>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default LatestArtists;
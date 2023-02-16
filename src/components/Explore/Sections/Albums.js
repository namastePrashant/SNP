import React from 'react';
import { Typography, Button } from 'antd';
import Slider from "react-slick";

import section from '../../../mock/section'
import ArtistCard from '../../Common/ArtistCard';
import settings from '../../../utils/multiRowCarousel'

const { Title } = Typography;

const Albums = () => {
    return (
        <div className='section'>
            <div className='section-header'>
                <Title level={4}>Albums</Title>
                <span className='section-link'><Button type="text">See All</Button></span>
            </div>

            <div className='section-body custom-slick'>
                <Slider {...settings}>
                    {section.map((song, index) => (
                        <div key={index}>
                            <ArtistCard song={song} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Albums;
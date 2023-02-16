import React from 'react';
import { Typography, Button } from 'antd';
import Slider from "react-slick";

import section from '../../../mock/section'
import MultiImageCard from '../../Common/MultiImageCard';
import {CarsouelSettings} from '../../../utils/carouselSettings'

const { Title } = Typography;
const settings = CarsouelSettings(2,5)

const RockPlaylists = () => {
    return (
        <div className='section'>
            <div className='section-header'>
                <Title level={4}>Classic Playlists</Title>
                <span className='section-link'><Button type="text">See All</Button></span>
            </div>

            <div className='section-body custom-slick slider__card'>
                <Slider {...settings}>
                    {section.map((song, index) => (
                        <div key={index}>
                            <MultiImageCard song={song} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default RockPlaylists;
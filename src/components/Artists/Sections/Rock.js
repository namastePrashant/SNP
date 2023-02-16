import React from 'react';
import { Typography, Button } from 'antd';
import Slider from "react-slick";

import section from '../../../mock/section'
import Card from '../../Common/Card';
import settings from '../../../utils/multiRowCarousel'

const { Title } = Typography;

const Rock = () => {
    return (
        <div className='section'>
            <div className='section-header'>
                <Title level={4}>Rock</Title>
                <span className='section-link'><Button type="text">See All</Button></span>
            </div>

            <div className='section-body custom-slick'>
                <Slider {...settings}>
                    {section.map((song, index) => (
                        <div key={index}>
                            <Card song={song} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Rock;
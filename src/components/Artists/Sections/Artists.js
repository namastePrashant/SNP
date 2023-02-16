import React from 'react';
import { Typography, Button } from 'antd';
import Slider from "react-slick";

import artists from '../../../mock/artists'
import {CarsouelSettings} from '../../../utils/carouselSettings'

const { Title } = Typography;

const Artists = (props) => {

    const settings = CarsouelSettings(1,5)


    return (
        <div className='section'>
            <div className='section-header'>
                <Title level={4}>A</Title>
                <span className='section-link'><Button type="text">See All</Button></span>
            </div>

            <div className='section-body custom-slick'>
                <Slider {...settings}>
                    {
                        artists.map((song, index) => (
                            <div key={index} className='artist-circle section-item'>
                                <img src={song.cover} alt={song.artist} className='section-img' />
                                <div className='artist-card-info'>
                                    <div className='section-song'>
                                        {song.name}
                                    </div>
                                    <div className='section-artist'>
                                        {song.artist}
                                    </div>

                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Artists;
import React from 'react';
import { Typography } from 'antd';
import section from '../../../mock/section'
import PlaylistCard from '../../Common/PlaylistCard';
import Slider from 'react-slick';

import settings from '../../../utils/carouselSettings'

const { Title } = Typography;

const SimilarPlaylist = () => {
    return (
        <div className='section'>
            <div className='section-header'>
                <Title level={4}>Similar Playlists</Title>
            </div>

            <div className='section-body custom-slick'>
                <Slider {...settings}>
                    {
                        section.map((song, index) => {
                            return(
                                <div key={index}>
                                    <PlaylistCard 
                                        playlist={song}                                         
                                    />
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    );
};

export default SimilarPlaylist;
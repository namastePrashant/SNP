import React from 'react';
import { Typography, Button } from 'antd';

import section from '../../../mock/section'
import ArtistCard from '../../Common/ArtistCard';

const LatestAlbums = () => {
    return (
        <div className='section'>

            <div className='section-body'>
                {section.map((song, index) => (
                    <div key={index}>
                        <ArtistCard song={song} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestAlbums;
import React from 'react';
import { Skeleton } from 'antd';

const ImageCards = () => {
    return (
        <div className='song-card-loading'>
            <div className='card-loading'>
                <Skeleton.Image></Skeleton.Image>

            </div>
            <div className='card-loading'>
                <Skeleton.Image></Skeleton.Image>

            </div><div className='card-loading'>
                <Skeleton.Image></Skeleton.Image>

            </div><div className='card-loading'>
                <Skeleton.Image></Skeleton.Image>

            </div><div className='card-loading'>
                <Skeleton.Image></Skeleton.Image>

            </div>

        </div>
    );
};

export default ImageCards;
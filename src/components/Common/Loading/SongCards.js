import React from 'react';
import { Skeleton } from 'antd';

const SongCards = () => {
    return (
        <div className='song-card-loading'>
            <div className='card-loading'>
                <Skeleton.Image></Skeleton.Image>
                <Skeleton active rows={2} paragraph={false}></Skeleton>
            </div>
            <div className='card-loading'>
                <Skeleton.Image></Skeleton.Image>
                <Skeleton active rows={2} paragraph={false}></Skeleton>
            </div><div className='card-loading'>
                <Skeleton.Image></Skeleton.Image>
                <Skeleton active rows={2} paragraph={false}></Skeleton>
            </div><div className='card-loading'>
                <Skeleton.Image></Skeleton.Image>
                <Skeleton active rows={2} paragraph={false}></Skeleton>
            </div><div className='card-loading'>
                <Skeleton.Image></Skeleton.Image>
                <Skeleton active rows={2} paragraph={false}></Skeleton>
            </div>

        </div>
    );
};

export default SongCards;
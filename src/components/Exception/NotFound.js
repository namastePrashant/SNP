import React from 'react';
import { Empty, Button } from 'antd';

import  NotFoundImg from '../../assets/Images/NotFound.jpg'

const NotFound = () => {
    return (
        <div className='not-found'>
            <Empty
                image={NotFoundImg}
                imageStyle={{
                    height: 300,
                }}
                description={
                    <span>
                        Sorry! The page your are looking for is not available.
                    </span>
                }
            >
                <Button shape='round' href='/'>Go Home</Button>
            </Empty>
        </div>
    );
};

export default NotFound;
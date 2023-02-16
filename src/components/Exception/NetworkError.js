import React from 'react';
import { Empty, Button } from 'antd';

import NotFoundImg from '../../assets/Images/NotFound.jpg'

const NetworkError = () => {
    return (
        <div className='not-found'>
            <Empty
                image={NotFoundImg}
                imageStyle={{
                    height: 300,
                }}
                description={
                    <span>
                        Sorry! There seems to be a network issue. Please try logging in again.
                    </span>
                }
            >
                <Button shape='round' href='/login'>Login</Button>
            </Empty>
        </div>
    );
};

export default NetworkError;
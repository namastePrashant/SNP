import React from 'react';
import { Result, Button } from 'antd'

const ShowResult = ({ msg, home }) => {
    return (
        <Result
            title={msg}
            extra={
                home ?
                    <Button href='/'>
                        Go Home
            </Button> : ''
            }
        />
    );
};

export default ShowResult;
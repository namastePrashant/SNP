import React from 'react';
import { Button } from 'antd'
import loaderWhite from '../../assets/Images/loaderWhite.png'

const SpinButton = ({ loading, text }) => {
    return (
        <Button shape="round" size='large' className={text === 'LOGIN' || 'Sign Up' ? 'btn-login' : 'btn-gradient'} htmlType="submit" disabled={loading}>
            {loading ? <img src={loaderWhite} style={{width:"20px",height:"20px",marginRight:"10px"}} alt="loader"/> : ''}
            {text}
        </Button>

    );
};

export default SpinButton;
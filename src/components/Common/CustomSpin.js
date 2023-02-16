import React from 'react';
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons';

const CustomSpin = ({ size, customStyle }) => {
    let defaultStyle = { fontSize: '2rem', color: '#8C61FE' };
    let spinnerStyle = customStyle ? { ...defaultStyle, ...customStyle } : defaultStyle;

    const antIcon = <LoadingOutlined style={spinnerStyle} spin />

    return (
        <Spin indicator={antIcon} size={size} />
    );
};

export default CustomSpin;
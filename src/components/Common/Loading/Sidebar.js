import { Skeleton } from 'antd';
import React from 'react';

const Sidebar = ({className}) => {
    return (
        <div className={className?className:''}>
            <Skeleton avatar active paragraph={false} />
            <Skeleton avatar active paragraph={false} />
            <Skeleton avatar active paragraph={false} />
            <Skeleton avatar active paragraph={false} />
            <Skeleton avatar active paragraph={false} />
            <Skeleton avatar active paragraph={false} />
        </div>
    );
};

export default Sidebar;
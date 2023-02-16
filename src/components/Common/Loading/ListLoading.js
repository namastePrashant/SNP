import { Skeleton } from 'antd';
import React from 'react';

const ListLoading = ({className, hasIcon, totalItemsCount}) => {
    // totalItems in case there are more items 
    return (
        <div className={className?className:''}>
            <Skeleton active avatar={hasIcon?true:false} paragraph={false} />
            <Skeleton active avatar={hasIcon?true:false} paragraph={false} />
            <Skeleton active avatar={hasIcon?true:false} paragraph={false} />
            <Skeleton active avatar={hasIcon?true:false} paragraph={false} />            
        </div>
    );
};

export default ListLoading;
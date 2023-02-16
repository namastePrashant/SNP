import React from 'react';
import { Table } from 'antd';


const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Artist',
        dataIndex: 'artist',
        key: 'artist',
    },
    {
        title: 'Album',
        dataIndex: 'album',
        key: 'album',
    },
    {
        title: 'Date Added',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: '',
        key: 'heartTime',
        dataIndex: 'heartTime',
    },
]



const index = () => {
    return (
        <div className='favorite-table'>
            <Table columns={columns} bordered={false} />
        </div>
    );
};

export default index;
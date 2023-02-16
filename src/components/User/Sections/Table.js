import React from 'react';
import { Button, Table } from 'antd';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';


const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: text => (
            <div className='table-title'>
                <div className>{text.name}</div>
                <div>{text.listens} listens</div>
            </div>
        )
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
        key: 'date'
    },
    {
        title: '',
        key: 'heartTime',
        dataIndex: 'heartTime',
        render: (text, record) => (
            <div>
            {text.time}
            <Button 
                    type="primary" 
                    shape="circle" 
                    size="large" 
                    className="btn__heart"
                    icon={text.loved ? 
                            < HeartFilled  className="btn__heart__filled" />
                            :
                            < HeartOutlined  className="btn__heart__outlined"/>
                        } 
            />
        </div>
        ),
    },
]

const dataSource = [
    {
        title: { name: 'Secrets', listens: '25,000' },
        artist: 'The Weeknd',
        album: 'Starboy',
        date: '12-6-2020',
        heartTime: {time:'3:50',loved:true}
    }, {
        title: { name: 'Secrets', listens: '25,000' },
        artist: 'The Weeknd',
        album: 'Starboy',
        date: '12-6-2020',
        heartTime: {time:'3:50',loved:true}
    }, {
        title: { name: 'Secrets', listens: '25,000' },
        artist: 'The Weeknd',
        album: 'Starboy',
        date: '12-6-2020',
        heartTime: {time:'3:50',loved:true}
    }, {
        title: { name: 'Secrets', listens: '25,000' },
        artist: 'The Weeknd',
        album: 'Starboy',
        date: '12-6-2020',
        heartTime: {time:'3:50',loved:true}
    }, {
        title: { name: 'Secrets', listens: '25,000' },
        artist: 'The Weeknd',
        album: 'Starboy',
        date: '12-6-2020',
        heartTime: {time:'3:50',loved:true}
    }, {
        title: { name: 'Secrets', listens: '25,000' },
        artist: 'The Weeknd',
        album: 'Starboy',
        date: '12-6-2020',
        heartTime: {time:'3:50',loved:true}
    },
]

const index = () => {
    return (
        <div className='favorite-table'>
            <Table columns={columns} bordered={false} dataSource={dataSource} pagination={true} />
        </div>
    );
};

export default index;
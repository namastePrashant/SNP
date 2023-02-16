import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

import TableLoading from './Loading/TableLoading';
import FavoriteBtn from './favouriteSongsButton';





const index = (props) => {


    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: text => (
                <div>
                    <div className='table-title' title={text.name}
                        onClick={
                            text.setSongToPlay ?
                                (
                                    () => {
                                        text.setSongToPlay(text.allData, 'single',)
                                    }
                                )
                                :
                                (
                                    () => {
                                        return false
                                    }
                                )
                        }
                    >
                        {
                            text.name
                        }
                        
                    </div>
                    <div className="title-listens">{text.listens} listens</div>
                </div>
            )
        },
        {
            title: 'Artist',
            dataIndex: 'artists',
            key: 'artist',
            render: text => (
                <div >
                    {
                        text && text.length !== 0 ?
                            text.slice(0, 2).map((artist, index) => {
                                return <Link key={artist.id}
                                    to={`/artist/${artist?.id}`}
                                    className="table__link-item"
                                >
                                    {
                                        artist?.profile?.name + ", "
                                    }
                                </Link>

                            })
                            :
                            "N/A"
                    }
                </div>
            )

        },
        {
            title: 'Album',
            dataIndex: 'album',
            key: 'album',
        },
        {
            title: 'Date added',
            dataIndex: 'dateAdded',
            key: 'date'
        },
        {
            title: '',
            key: 'heartTime',
            dataIndex: 'heartTime',
            render: (text, record) => (
                <div className="table--favorite">
                    {text.time}
                    <FavoriteBtn song={text} {...props} />
                </div>
            ),
        },
    ]


    return (
        <div className='favorite-table'>
            {
                props.dataSource ?
                    <Table columns={columns} bordered={false} dataSource={props.dataSource} pagination={false} />
                    :
                    <TableLoading />
            }
        </div>
    );
};

export default index;
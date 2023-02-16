import React from 'react';
import { Skeleton } from 'antd';

const SingleImageCard = ({ height, width }) => {

    let defaultStyle = { width: 180, height: 200 };
    let customStyle = height && width ?
        {
            width,
            height,
        }
        :
        height && !width ?
            {
                height,
                width: 'auto',
            }
            :
            width && !height ?
                {
                    height: 'auto',
                    width,
                }
                :
                defaultStyle


    return (
        <div className='song-card-loading'>
            <div className='card-loading'>
                <Skeleton.Avatar
                    // style={{width:180, height:200}} 
                    style={customStyle}
                    shape="square" active
                />


            </div>
        </div>
    );
};

export default SingleImageCard;
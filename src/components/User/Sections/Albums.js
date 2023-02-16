import React from 'react';
import { Row, Col } from 'antd';

import section from '../../../mock/section'
//import AlbumCard from '../../Common/AlbumCard';

const Albums = () => {
    return (
        <div className='section'>
            <Row className='section-body no-slick-cards'>
                {section.map((album, index) => (
                    <Col key={album.id}>                        
                        {/* <AlbumCard albumDetails={album}/> */}
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Albums;
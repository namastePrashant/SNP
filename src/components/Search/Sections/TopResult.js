import React from 'react';
import { Row, Col } from 'antd';

import section from '../../../mock/section'
import ArtistCard from '../../Common/ArtistCard';

const TopResult = () => {
    return (
        <div className='section section--no-margin'>
            <Row className='section-body no-slick-cards'>
                {section.map((song, index) => (
                    <Col key={index}>
                        <ArtistCard song={song} className='recent-card' />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default TopResult;
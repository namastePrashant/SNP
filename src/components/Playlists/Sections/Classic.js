import React from 'react';
import { Row, Col } from 'antd';

import section from '../../../mock/section'
import MultiImageCard from '../../Common/MultiImageCard';

const Songs = () => {
    return (
        <div className='section'>
            <Row className='section-body no-slick-cards'>
                {section.map((song, index) => (
                    <Col key={index}>
                        <MultiImageCard song={song} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Songs;
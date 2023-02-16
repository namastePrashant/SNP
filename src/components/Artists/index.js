import React from 'react';
import { Row, Col, Typography } from 'antd';

import Premium from '../../assets/Images/Premium.png'

import Artist from './Sections/Artists';

const { Title } = Typography;

const layout = {
    full: {
        xxl: { span: 24 },
        xl: { span: 24 },
        lg: { span: 24 },
        md: { span: 24 },
        sm: { span: 24 },
        xs: { span: 24 },
    },
};

const Artists = (props) => {

    return (
        <Row className='row-main'>
            <Col {...layout.full} className='page-header overlay'>
                <div className='explore-main'>
                    <Title>Artists</Title>

                    <Row className='extra-bottom-pad'>
                        <Col {...layout.full}>
                            <Artist {...props}/>
                        </Col>
                        <div className="ad-banner3">
                            <img src={Premium} alt="Featured" />
                        </div>
                        <Col {...layout.full}>
                            {/* <Artist /> */}
                        </Col>
                        <Col {...layout.full}>
                            {/* <Artist /> */}
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    );
};

export default Artists;
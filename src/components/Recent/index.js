import React,{useEffect} from 'react';
import { Row, Col, Typography } from 'antd';

import Advertisement from '../Advertisments'

import Recents from './Sections/Recents';

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

const Recent = (props) => {

    const {fetchAdvertisementByLocation} = props;

    const advertisementFetch = ()=>{
        let locations = "banner"
        let formData={
            location:locations,
            platform:'web'
        };
        fetchAdvertisementByLocation(formData)
    }

    useEffect(()=>{
        advertisementFetch();
    },[]);//eslint-disable-line

    return (
        <Row className='row-main'>
            <Col {...layout.full} className='page-header overlay'>
                <div className='explore-main'>
                    <Title className="header-large">Recently Played</Title>

                    <Row className='extra-bottom-pad'>
                        <Col {...layout.full}>
                            <Recents {...props} />
                        </Col>
                        <Col {...layout.full}>
                            <Advertisement name='banner' />
                        </Col>
                    </Row>

                </div>
            </Col>
        </Row>
    );
};

export default Recent;
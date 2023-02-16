import React,{useEffect} from 'react';
import { Row, Col, Typography } from 'antd';

import Advertisement from '../Advertisments'

import TopSongs from './Sections/TopSongs';

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

const TopSongsComponent = (props) => {

    const {fetchAdvertisementByLocation, pageTitle} = props;

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
                    <Title>{pageTitle}</Title>

                    <Row className='extra-bottom-pad'>
                        <Col {...layout.full}>
                            <TopSongs {...props} />
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

export default TopSongsComponent;
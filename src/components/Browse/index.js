import React,{useEffect} from 'react';
import { Row, Col, Typography } from 'antd';
import Genre from './Sections/Genre';
import Mood from './Sections/Mood';

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

const Browse = (props) => {

    const {fetchAdvertisementByLocation} = props;

    const advertisementFetch = ()=>{
        let locations = "banner,homepage"
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
                    <Title className="header-large">Browse</Title>
                    <div className='browse-plasection'>
                        <Genre {...props} />
                        <Mood {...props} />
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Browse;
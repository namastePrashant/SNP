import React,{useEffect} from 'react';
import { Row, Col, Typography } from 'antd';


import Artists from './Sections/FollowedArtists';
import Advertisements from '../Advertisments';

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



const FollowedArtists = (props) => {

    const {fetchAdvertisementByLocation} = props;

    const fetchAds = ()=>{
        const location = 'explore-footer'
        const formData = {
        location:location,
        platform:'web'
        }
         fetchAdvertisementByLocation(formData)
    }

useEffect(()=>{
    fetchAds();
},[])//eslint-disable-line
    return (
        <Row className='row-main'>
            <Col {...layout.full} className='page-header overlay page-header--followedArtists'>
                <div className='explore-main'>
                    <Title>Followed Artists</Title>

                    <Row className='extra-bottom-pad'>
                        <Col {...layout.full}>
                            <Artists {...props} />
                        </Col>
                        <Col {...layout.full}>
                            <Advertisements name='explore-footer'/>
                        </Col>
                        {/* <Col {...layout.full}> */}
                            {/* <Artists /> */}
                        {/* </Col> */}
                    </Row>
                </div>
            </Col>
        </Row>
    );
};

export default FollowedArtists;
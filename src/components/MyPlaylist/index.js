import React, {useEffect} from 'react';
import {Button, Col, Row, Typography} from 'antd';
import {CaretRightFilled} from '@ant-design/icons';

import Dot from '../../assets/Icons/Dot.png'
import RecentlyAdded from './Sections/RecentlyAdded';
import All from './Sections/All';
import Advertisements from '../Advertisments'

const {Title} = Typography;

const layout = {
  full: {
    xxl: {span: 24},
    xl: {span: 24},
    lg: {span: 24},
    md: {span: 24},
    sm: {span: 24},
    xs: {span: 24},
  },
};

const MyPlaylist = (props) => {
  const {fetchAdvertisementByLocation} = props


  const advertisementFetch = () => {
    let locations = "explore-footer"
    let formData = {
      location: locations,
      platform: 'web'
    };
    fetchAdvertisementByLocation(formData)
  }

  useEffect(() => {
    advertisementFetch();
  }, []);//eslint-disable-line


  return (
    <Row className='row-main artist'>
      <Col {...layout.full} className='page-header overlay'>
        <div className='explore-main'>
          <div className='artist-info'>
            <Title level={1}>My Playlist</Title>
            <div className='favorite-info'>
              <span>105 Tracks</span> <span><img src={Dot} alt="Dot"/></span> <span>4hrs 57 mins</span>
            </div>
            <div className='links'>
              <Button shape="round" size='large' className='btn-gradient'>
                <CaretRightFilled/> Play
              </Button>
            </div>
          </div>

          <Row className='extra-bottom-pad'>
            <Col {...layout.full}>
              <RecentlyAdded {...props} />
              <All {...props} />
              <Advertisements name='explore-footer'/>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default MyPlaylist;
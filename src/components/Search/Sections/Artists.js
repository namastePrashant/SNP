import React from 'react';
import { Row,Col, Typography, Button } from 'antd';
import { Link } from 'react-router-dom';

import ArtistCard from '../../Common/ArtistCard';
import ShowResult from '../../Common/Result'; 


const { Title } = Typography;

const Artists = (props) => {
  const { data } = props 
    return (
        <div className='section'>

          <div className='section-header'>
            <Title level={4}>Artists</Title>
            <span className='section-link'>
              <Button type="text">
              {
                data.length?
                <Link to="/search/artist">See All</Link>:""
              }
              </Button>
            </span>
          </div>

          <Row className='section-body followedAlbums'>
            {
              !data.length? (<ShowResult  msg='No search result for artist' home={true}/>):
              data.map((artist) => (
                  <Col key={artist.id} className='artist-circle section-item'>
                      <ArtistCard artistDetails={artist} {...props}/>
                  </Col>
              ))
            }
            
          </Row>
      </div>
    );
};

export default Artists;
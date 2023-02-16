import React  from 'react';
import { Row, Col } from 'antd';

// import { Link } from 'react-router-dom';

import ShowResult from '../../Common/Result'
import SongCards from '../../Common/Loading/SongCards';

import ArtistCard from '../../Common/ArtistCard';

// import { isEmpty } from '../../../utils/commonUtils';



const Artists = props => {

    const { favoriteArtists, favoriteArtistsLoading } = props

    return (
        <div className=' artists'>
            <Row className='section-body followedAlbums '>
                {
                    favoriteArtistsLoading ? <SongCards /> : favoriteArtists.length ?
                    favoriteArtists.map((artist, index) => (
                            <Col key={artist.id} className='artist-circle section-item'>
                                <ArtistCard artistDetails={artist} {...props}/>
                            </Col>
                        ))
                        :
                        <ShowResult msg="You have no favorite artist yet!" home={true} />
                }
            </Row>
        </div>
    );
};

export default Artists;
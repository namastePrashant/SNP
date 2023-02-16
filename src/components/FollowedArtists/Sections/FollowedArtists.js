import React, { useEffect } from 'react';
import { Row, Col } from 'antd';
import ScrollPagination from '../../Common/ScrollPagination';

import ShowResult from '../../Common/Result'
import SongCards from '../../Common/Loading/SongCards';

import ArtistCard from '../../Common/ArtistCard';

import { isEmpty } from '../../../utils/commonUtils';


const FollowedArtists = (props) => {

    const {
        fetchFavoriteArtists,
        favoriteArtists,
        favoriteArtistsList,
        favoriteArtistsLoading,
        favoriteArtistsMeta,
        favoriteArtistsHasMore,
        favoriteArtistsLoadingMore,
    } = props

    let { current_page } = favoriteArtistsMeta || {};

    useEffect(() => {        
        
            fetchFavoriteArtists();
        
    }, [])// eslint-disable-line

    const artistRowStyle = favoriteArtists.length > 2 ? 'section-body followedAlbums' : 'section-body followedAlbums'

    return (
        <div className='section artists'>
            <Row className={artistRowStyle}>
                {
                    favoriteArtistsLoading ?
                        <SongCards />
                        :
                        !isEmpty(favoriteArtists) ?
                            favoriteArtistsList.map((artist, index) => (
                                <Col key={artist.id} className='artist-circle section-item'>
                                    <ArtistCard artistDetails={artist} {...props} />
                                </Col>
                            ))
                            :
                            <ShowResult msg="You have no favorite artist yet!" home={true} />
                }
            </Row>
            {
              !favoriteArtistsLoading ?
                <ScrollPagination
                  current_page={current_page}
                  pagination={fetchFavoriteArtists}
                  HasMore={favoriteArtistsHasMore}
                  loadingMore={favoriteArtistsLoadingMore}
                  data={favoriteArtists} />
                :
                null

            }
        </div>
    );
};

export default FollowedArtists;
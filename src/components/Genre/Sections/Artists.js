import React, { useEffect } from "react";
import { Row, Col} from "antd";
import { useParams } from "react-router-dom";
import ScrollPagination from '../../Common/ScrollPagination'
import SongCards from "../../Common/Loading/SongCards";
import ShowResult from "../../Common/Result";
import ArtistCard from "../../Common/ArtistCard";

import { isEmpty } from "../../../utils/commonUtils";

const Artists = (props) => {
  const {
    individualGenreArtists,
    fetchIndividualGenreArtists,
    individualGenreArtistsLoading,
    individualGenreArtistsLoadingMore,
    individualGenreArtistsMetaInfo,
    individualGenreArtistsHasMore,
  } = props;
  const { id } = useParams();

  useEffect(() => {
    fetchIndividualGenreArtists(id);
  }, []);// eslint-disable-line

  const {current_page}= individualGenreArtistsMetaInfo || {};
  

  return (
    <div className="section">
      <Row className="section-body grid-view">
        {individualGenreArtistsLoading ? (
          <SongCards />
        ) : !isEmpty(individualGenreArtists) ? (
          individualGenreArtists.map((artist, index) => {
            return (
              <Col key={artist.id} className="artist-circle section-item">
                <ArtistCard 
                  artistDetails={artist} 
                  
                  {...props}
                />
              </Col>
            );
          })
        ) : (
          <ShowResult msg="Artists Not Found!" home={true} />
        )}
      </Row>
      <ScrollPagination 
        current_page={current_page} 
        pagination={fetchIndividualGenreArtists} 
        HasMore={individualGenreArtistsHasMore} 
        loadingMore={individualGenreArtistsLoadingMore} 
        data={individualGenreArtists}
        id={id}/>
    
    </div>
  );
};

export default Artists;

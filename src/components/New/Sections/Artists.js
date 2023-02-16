import React, { useEffect } from "react";
import { Row, Col } from "antd";

import SongCards from "../../Common/Loading/SongCards";
import ArtistCard from "../../Common/ArtistCard";
import ScrollPagination from '../../Common/ScrollPagination';

import ShowResult from "../../Common/Result";
import { isEmpty } from "../../../utils/commonUtils";

const Artists = (props) => {
  const {
    latestArtistsAll,
    fetchLatestArtistsAll,
    latestArtistsAllLoading,
    latestArtistsAllLoadingMore,
    latestArtistsAllMeta,
    latestArtistsAllHasMore,
  } = props;

  const { current_page } = latestArtistsAllMeta || {};


  useEffect(() => {
    if (latestArtistsAll.length === 0) {
      fetchLatestArtistsAll();
    }
  }, []);// eslint-disable-line

 

  return (
    <div className="section artists">
      <Row className="section-body no-slick-cards">
        {latestArtistsAllLoading ? (
          <SongCards />
        ) : !isEmpty(latestArtistsAll) ? (
          latestArtistsAll.map((artist, index) => (
            <Col key={artist.id} className="artist-circle section-item">
              <ArtistCard
                artistDetails={artist}
                {...props}
              />
            </Col>
          ))
        ) : (
              <ShowResult msg="Artist Not Found!" home={true} />
            )}
      </Row>

      <ScrollPagination 
        current_page={current_page} 
        pagination={fetchLatestArtistsAll} 
        HasMore={latestArtistsAllHasMore} 
        loadingMore={latestArtistsAllLoadingMore} 
        data={latestArtistsAll}/>

    </div>
  );
};

export default Artists;

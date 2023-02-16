import React, { useEffect } from "react";
import { Typography, Button, Col } from "antd";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import {CarsouelSettings} from "../../../utils/carouselSettings";

import SongCards from "../../Common/Loading/SongCards";
import ShowResult from "../../Common/Result";
import { isEmpty } from "../../../utils/commonUtils";
import ArtistCard from "../../Common/ArtistCard";
import ScrollPagination from '../../Common/ScrollPagination'

const { Title } = Typography;

const ExploreArtists = (props) => {
  const {
    exploreArtists,
    exploreArtistsLoading,
    fetchExploreArtists,
    exploreArtistsMeta,
    exploreArtistsHasMore,
    exploreArtistsLoadingMore,
  } = props;

  const { current_page } = exploreArtistsMeta || {};

  useEffect(() => {
    if (exploreArtists.length === 0) {
      fetchExploreArtists();
    }
  }, []); // eslint-disable-line

  const settings = CarsouelSettings(1,5)
  
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

  return (
    <>
      {exploreArtistsLoading ? (
        <SongCards />
      ) : Array.isArray(exploreArtists) && exploreArtists.length !== 0 ? (
        exploreArtists.map((artistsByGenre, index) => {
          return (

            <Col {...layout.full} key={artistsByGenre.id} >
              {!isEmpty(artistsByGenre.artists.data) ? (
                <>
                  <div className="section">
                    <div className="section-header">
                      <Title level={4}> {artistsByGenre.title} </Title>
                      <span className="section-link">
                        <Link to={`/genre/${artistsByGenre.id}/artists`}>
                          <Button type="text">See All</Button>
                        </Link>
                      </span>
                    </div>

                    <div className="section-body custom-slick">
                      {!isEmpty(artistsByGenre.artists.data) ? (
                        <Slider {...settings}>
                          {artistsByGenre.artists.data.map(
                            (artist, index) => {
                              return <ArtistCard key={artist.id} artistDetails={artist} {...props} />;
                            }
                          )}
                        </Slider>
                      ) : (
                          <ShowResult msg="Songs Not Found!" home={true} />
                        )}
                    </div>
                  </div>
                </>
              ) : (
                  ""
                )}
            </Col>

          );
        })
      ) : (
            <ShowResult msg="Artists by Genre Not Found!" home={true} />
          )}
          <ScrollPagination 
            current_page={current_page} 
            pagination={fetchExploreArtists} 
            HasMore={exploreArtistsHasMore} 
            loadingMore={exploreArtistsLoadingMore} 
            data={exploreArtists}/>
    </>
  );
};

export default ExploreArtists;

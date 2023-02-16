import React, { useEffect } from "react";
import { Typography, Button } from "antd";
import Slider from "react-slick";
import { Link } from "react-router-dom";

import ArtistCard from "../../Common/ArtistCard";

import {CarsouelSettings} from "../../../utils/carouselSettings";

import SongCards from "../../Common/Loading/SongCards";
import ShowResult from "../../Common/Result";

import { isEmpty } from "../../../utils/commonUtils";

const { Title } = Typography;

const Recommended = (props) => {
  const {
    fetchRecommendedArtists,
    recommendedArtists,
    recommendedArtistsLoading,
  } = props;

  useEffect(() => {
    if (recommendedArtists.length === 0) {
      fetchRecommendedArtists();
    }
  }, []);//eslint-disable-line

  const settings = CarsouelSettings(1,5);

  return (
    <div className="section artists">
      <div className="section-header">
        <Title level={4}>Recommended Artists</Title>
        <span className="section-link">
          <Link to="/explore/artists">
            <Button type="text">See All</Button>
          </Link>
          </span>
      </div>

      <div className="section-body custom-slick">
        {recommendedArtistsLoading ? (
          <SongCards />
        ) : !isEmpty(recommendedArtists) ? (
          <Slider {...settings}>
            {recommendedArtists.map((artist) => (
              <ArtistCard key={artist.id} artistDetails={artist} {...props} />
            ))}
          </Slider>
        ) : (
          <ShowResult msg="Recommended Artists Not Found!" />
        )}
      </div>
    </div>
  );
};

export default Recommended;

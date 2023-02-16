import React, { useEffect } from "react";
import { Typography, Button } from "antd";
import Slider from "react-slick";

// import { Link } from "react-router-dom";
import {CarsouelSettings} from "../../../utils/carouselSettings";

// import DummyImage from "../../../assets/Images/Impala.png";
import SongCards from "../../Common/Loading/SongCards";
import ShowResult from "../../Common/Result";

import ArtistCard from "../../Common/ArtistCard";
import { isEmpty } from "../../../utils/commonUtils";

const { Title } = Typography;

const LatestArtists = (props) => {
  const { latestArtists, fetchLatestArtists, latestArtistsLoading, setActiveKey } = props;

  useEffect(() => {
    if (latestArtists.length === 0) {
      fetchLatestArtists();
    }
  }, []);//eslint-disable-line

  const settings = CarsouelSettings(2,5)


  return (
    <div className="section artists">
      <div className="section-header">
        <Title level={4}>Newcommers</Title>
        <span className="section-link">
          <Button type="text" onClick={()=>setActiveKey("4")}>See All</Button>
        </span>
      </div>

      <div className="section-body custom-slick">
        {latestArtistsLoading ? (
          <SongCards />
        ) : !isEmpty(latestArtists) ? (
          <Slider {...settings}>
            {latestArtists.map((artist, index) => (
              <ArtistCard 
                key={artist.id}
                artistDetails={artist} 
              />
            ))}
          </Slider>
        ) : (
          <ShowResult msg="Artist Not Found!" home={true} />
        )}
      </div>
    </div>
  );
};

export default LatestArtists;

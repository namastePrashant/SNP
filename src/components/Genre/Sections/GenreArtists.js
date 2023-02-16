import React from "react";
import { Typography, Button } from "antd";
import Slider from "react-slick";

import {CarsouelSettings} from "../../../utils/carouselSettings";
import ShowResult from "../../Common/Result";
import SongCards from "../../Common/Loading/SongCards";

import ArtistCard from "../../Common/ArtistCard";

import { isEmpty } from "../../../utils/commonUtils";

const { Title } = Typography;

const GenreArtists = (props) => {
  const { artists, loading, 
    // genre
    // , setCurrentPlaySong
    setActiveKey } = props

  const settings = CarsouelSettings(1,5)
  return (
    <div className="section">
      <div className="section-header">
        <Title level={4}>Artists</Title>
        <span className="section-link">
          <Button type="text" onClick={()=>setActiveKey("3")}>See All</Button>
        </span>
      </div>

      <div className="section-body custom-slick">
        {loading ? (
          <SongCards />
        ) : !isEmpty(artists) ? (
          <Slider {...settings}>
            {artists.map((artist, index) => {
              return <ArtistCard
                key={artist.id}
                artistDetails={artist}
                {...props}
              />;
            })}
          </Slider>
        ) : (
              <ShowResult msg="Artists Not Found!" home={true} />
            )}
      </div>
    </div>
  );
};

export default GenreArtists;

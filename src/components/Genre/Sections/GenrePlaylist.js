import React from "react";
import { Typography, Button } from "antd";
import Slider from "react-slick";

import PlaylistCard from "../../Common/PlaylistCard";
import {CarsouelSettings} from "../../../utils/carouselSettings";
import SongCards from "../../Common/Loading/SongCards";
import ShowResult from "../../Common/Result";
import { isEmpty } from "../../../utils/commonUtils";

const { Title } = Typography;

const Playlist = ({ playlists, loading, genre, setActiveKey }) => {

  const settings = CarsouelSettings(1,5)

  return (
    <div className="section">
      <div className="section-header">
        <Title level={4}>Similar Playlists</Title>
        <span className="section-link">
          <Button type="text" onClick={()=>{setActiveKey("5")}}>See All</Button>
        </span>
      </div>

      <div className="section-body custom-slick">
        {loading ? (
          <SongCards />
        ) : !isEmpty(playlists) ? (
          <Slider {...settings}>
            {playlists.map((playlist, index) => {
              return (
                <div key={playlist.id}>
                  <PlaylistCard playlistDetails={playlist} />
                </div>
              );
            })}
          </Slider>
        ) : (
          <ShowResult msg="Playlists Not Found!" home={true} />
        )}
      </div>
    </div>
  );
};

export default Playlist;

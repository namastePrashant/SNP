import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "antd";
import ShowResult from "../../Common/Result";
import PlaylistCard from "../../Common/PlaylistCard";
import SongCards from "../../Common/Loading/SongCards";

import Slider from "react-slick";

import {CarsouelSettings} from "../../../utils/carouselSettings";
// import DummyImage from "../../../assets/Images/Impala.png";

import { isEmpty } from "../../../utils/commonUtils";

const { Title } = Typography;

const SimilarPlaylist = (props) => {
  const {
    fetchSimilarPlaylistsByPlaylist,
    similarPlaylistsByPlaylist,
    similarPlaylistsByPlaylistLoading,
  } = props;
  const { id } = useParams();

  useEffect(() => {
    fetchSimilarPlaylistsByPlaylist(id);
  }, [id]); //eslint-disable-line

  const settings = CarsouelSettings(2,5)


  return (
    <div className="section">
      <div className="section-header">
        <Title level={4}>Similar Playlists</Title>
      </div>

      <div className="section-body custom-slick">
        {similarPlaylistsByPlaylistLoading ? (
          <SongCards />
        ) : !isEmpty(similarPlaylistsByPlaylist) ? (
          <Slider {...settings}>
            {similarPlaylistsByPlaylist.map((playlist, index) => {
              return (
                <div key={playlist.id}>
                  <PlaylistCard playlistDetails={playlist} />
                </div>
              );
            })}
          </Slider>
        ) : (
          <ShowResult msg="Playlist Not Found!" home={true} />
        )}
      </div>
    </div>
  );
};

export default SimilarPlaylist;

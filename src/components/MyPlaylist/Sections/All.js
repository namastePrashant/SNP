import React, { useEffect } from "react";
import { Typography } from "antd";
import Slider from "react-slick";

import PlaylistCard from "../../Common/PlaylistCard";

import {CarsouelSettings} from "../../../utils/carouselSettings";

import SongCards from "../../Common/Loading/SongCards";

// import DummyImage from "../../../assets/Images/sigrid.png";
import ShowResult from "../../Common/Result";
import { isEmpty } from "../../../utils/commonUtils";

const { Title } = Typography;

const All = (props) => {
  const {
    userAllPlaylists,
    fetchUserAllPlaylists,
    userAllPlaylistsLoading,
  } = props;

  useEffect(() => {
    if (userAllPlaylists.length === 0) {
      fetchUserAllPlaylists();
    }
  }, []);//eslint-disable-line
  const settings = CarsouelSettings(1,5);

  return (
    <div className="section">
      <div className="section-header">
        <Title level={4}>All Playlists</Title>
      </div>

      <div className="section-body custom-slick">
        {userAllPlaylistsLoading ? (
          <SongCards />
        ) : !isEmpty(userAllPlaylists) ? (
          <Slider {...settings}>
            {userAllPlaylists.map((playlist, index) => {
              return (
                <div key={playlist.id}>
                  <PlaylistCard playlistDetails={playlist} />
                </div>
              );
            })}
          </Slider>
        ) : (
          <ShowResult msg="Playlist Empty!" home={true} />
        )}
      </div>
    </div>
  );
};

export default All;

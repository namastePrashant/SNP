import React, { useEffect } from "react";
import { Typography } from "antd";
import Slider from "react-slick";

import PlaylistCard from "../../Common/PlaylistCard";

import {CarsouelSettings} from "../../../utils/carouselSettings";

import SongCards from "../../Common/Loading/SongCards";

import ShowResult from "../../Common/Result";
import { isEmpty } from "../../../utils/commonUtils";

const { Title } = Typography;

const RecentlyAdded = (props) => {
  const {
    userRecentPlaylists,
    fetchUserRecentPlaylists,
    userRecentPlaylistsLoading,
  } = props;

  useEffect(() => {
    if (userRecentPlaylists.length === 0) {
      fetchUserRecentPlaylists();
    }
  }, []);//eslint-disable-line

  const settings = CarsouelSettings(1,5)

  return (
    <div className="section">
      <div className="section-header">
        <Title level={4}>Recently Added</Title>
      </div>

      <div className="section-body custom-slick">
        {userRecentPlaylistsLoading ? (
          <SongCards />
        ) : !isEmpty(userRecentPlaylists) ? (
          <Slider {...settings}>
            {userRecentPlaylists.map((playlist, index) => {
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

export default RecentlyAdded;

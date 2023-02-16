import React, { useEffect } from "react";
import { Typography, Button } from "antd";
import Slider from "react-slick";

import PlaylistCard from "../../Common/PlaylistCard";

import {CarsouelSettings} from "../../../utils/carouselSettings";

import SongCards from "../../Common/Loading/SongCards";

// import DummyImage from "../../../assets/Images/Impala.png";
import ShowResult from "../../Common/Result";

import { isEmpty } from "../../../utils/commonUtils";

const { Title } = Typography;

const Personalized = (props) => {
  const {
    fetchPlaylistsSuggestion,
    playlistsSuggestion,
    playlistsSuggestionLoading,
  } = props;

  useEffect(() => {
    if (playlistsSuggestion.length === 0) {
      fetchPlaylistsSuggestion();
    }
  }, []); //eslint-disable-line

  const settings = CarsouelSettings(1,5)

  return (
    <div className="section">
      {playlistsSuggestion.playlistListened ? (
        <div>
          <div className="section-header">
            <Title level={4}>
              Because you listened to{" "}
              {playlistsSuggestion.playlistListened.details.title}
            </Title>
            <span className="section-link">
              <Button type="text">See All</Button>
            </span>
          </div>
          <div className="section-body custom-slick">
            {playlistsSuggestionLoading ? (
              <SongCards />
            ) : !isEmpty(playlistsSuggestion.playlist_suggestion) ? (
              <Slider {...settings}>
                {playlistsSuggestion.playlist_suggestion.map(
                  (playlist, index) => {
                    return (
                      <PlaylistCard
                        key={playlist.id}
                        playlistDetails={playlist}
                      />
                    );
                  }
                )}
              </Slider>
            ) : (
              <ShowResult msg="Personalized Items Not Found!" />
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Personalized;

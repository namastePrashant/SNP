import React, { useEffect } from "react";
import { Typography, Button } from "antd";
import Slider from "react-slick";

import AlbumCard from "../../Common/AlbumCard";
import {CarsouelSettings} from "../../../utils/carouselSettings";

import SongCards from "../../Common/Loading/SongCards";
import ShowResult from "../../Common/Result";
import { isEmpty } from "../../../utils/commonUtils";

const { Title } = Typography;

const LatestAlbums = (props) => {
  const { latestAlbums, fetchLatestAlbums, latestAlbumsLoading,
    setCurrentPlaySong, isPlayerPlaying, setIsPlayerPlaying,
    currentPlayReferrerId, currentPlayReferrer, currentPlayKey, setActiveKey
  } = props;

  useEffect(() => {
    if (latestAlbums.length === 0) {
      fetchLatestAlbums();
    }
  }, []);//eslint-disable-line

  const setBulkSongsToPlay = (songData) => {
    setCurrentPlaySong(songData);
  }

  const settings = CarsouelSettings(2,5)

  return (
    <div className="section">
      <div className="section-header">
        <Title level={4}>Latest Albums</Title>
        <span className="section-link">
          <Button type="text" onClick={()=>setActiveKey("3")}>See All</Button>
        </span>
      </div>

      <div className="section-body custom-slick">
        {latestAlbumsLoading ? (
          <SongCards />
        ) : !isEmpty(latestAlbums) ? (
          <Slider {...settings}>
            {latestAlbums.map((album, index) => {
              return (
                <div key={album.id}>
                  <AlbumCard
                    albumDetails={album}
                    setBulkSongsToPlay={setBulkSongsToPlay}
                    currentPlayKey={currentPlayKey}
                    currentPlayReferrerId={currentPlayReferrerId}
                    currentPlayReferrer={currentPlayReferrer}
                    isPlayerPlaying={isPlayerPlaying}
                    setIsPlayerPlaying={setIsPlayerPlaying}
                  />
                </div>
              );
            })}
          </Slider>
        ) : (
              <ShowResult msg="Albums Not Found!" home={true} />
            )}
      </div>
    </div>
  );
};

export default LatestAlbums;

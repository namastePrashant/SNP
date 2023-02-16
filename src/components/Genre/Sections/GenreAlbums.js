import React from "react";
import { Typography, Button } from "antd";
import Slider from "react-slick";

import AlbumCard from "../../Common/AlbumCard";
import {CarsouelSettings} from "../../../utils/carouselSettings";
import ShowResult from "../../Common/Result";
import SongCards from "../../Common/Loading/SongCards";

import { isEmpty } from "../../../utils/commonUtils";

const { Title } = Typography;

const GenreAlbums = ({
  albums, loading, genre,
  setCurrentPlaySong, isPlayerPlaying, setIsPlayerPlaying,
  currentPlayReferrerId, currentPlayReferrer, currentPlayKey, fetchFavoriteButton,
  favoriteButton,
  favoriteButtonLoading,
  favoriteButtonLoadingId,
  setActiveKey,
  addSongToCurrentAudioQueue,...props
}) => {


  const setBulkSongsToPlay = (songData) => {
    setCurrentPlaySong(songData);
  }

  const settings = CarsouelSettings(2,5)


  return (
    <div className="section">
      <div className="section-header">
        <Title level={4}>Albums</Title>
        <span className="section-link">
          <Button type="text" onClick={()=>{setActiveKey("4")}}>See All</Button>
        </span>
      </div>

      <div className="section-body custom-slick">
        {loading ? (
          <SongCards />
        ) : !isEmpty(albums) ? (
          <Slider {...settings}>
            {albums.map((album, index) => {
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
                    fetchFavoriteButton={fetchFavoriteButton}
                    favoriteButton={favoriteButton}
                    favoriteButtonLoading={favoriteButtonLoading}
                    favoriteButtonLoadingId={favoriteButtonLoadingId}
                    addSongToCurrentAudioQueue={addSongToCurrentAudioQueue}
                    {...props}
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

export default GenreAlbums;

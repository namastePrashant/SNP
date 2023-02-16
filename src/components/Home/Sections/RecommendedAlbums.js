import React, { useEffect } from "react";
import { Typography } from "antd";
import Slider from "react-slick";

import AlbumCard from "../../Common/AlbumCard";

import {CarsouelSettings} from "../../../utils/carouselSettings";
import SongCards from "../../Common/Loading/SongCards";
import ShowResult from "../../Common/Result";


import { isEmpty } from "../../../utils/commonUtils";

const { Title } = Typography;

const RecommendedAlbums = (props) => {

  const {
    recommendedAlbums, 
    fetchRecommendedAlbums, 
    recommendedAlbumsLoading,
    setCurrentPlaySong, 
    isPlayerPlaying, 
    setIsPlayerPlaying, 
    currentPlayReferrerId, 
    currentPlayReferrer, 
    currentPlayKey,
    addSongToCurrentAudioQueue,
    } = props;

  useEffect(() => {
    if (recommendedAlbums.length === 0) {
      fetchRecommendedAlbums();
    }
  }, []);//eslint-disable-line

  const setBulkSongsToPlay = (songData)=>{      
      setCurrentPlaySong(songData);     
  }

  const setAlbumToFavourite = (formdata,id)=>{
    props.actions.setFavouriteAlbum(formdata,id)
  }

  const settings = CarsouelSettings(2,5)

  return (
    <div className="section">
      <div className="section-header">
        <Title level={4}>Recommended Albums for you</Title>
      
      </div>

      <div className="section-body custom-slick">
        {recommendedAlbumsLoading ? (
          <SongCards />
        ) : !isEmpty(recommendedAlbums) ? (
          <Slider {...settings}>
            {recommendedAlbums.map((album) => {              
              return (                
                <AlbumCard
                  albumDetails={album}
                  key={album.id}            
                  setIsPlayerPlaying={setIsPlayerPlaying}     
                  setBulkSongsToPlay={setBulkSongsToPlay}                                    
                  currentPlayKey={currentPlayKey}
                  currentPlayReferrerId={currentPlayReferrerId}
                  currentPlayReferrer={currentPlayReferrer}
                  isPlayerPlaying={isPlayerPlaying}
                  setAlbumToFavourite={setAlbumToFavourite}
                  addSongToCurrentAudioQueue={addSongToCurrentAudioQueue}
                  {...props}
                />
              );
            })}
          </Slider>
        ) : (
          <ShowResult msg="Recommended Albums Not Found!" home={true}/>
        )}
      </div>
    </div>
  );
};

export default RecommendedAlbums;
